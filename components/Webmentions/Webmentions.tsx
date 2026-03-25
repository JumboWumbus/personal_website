"use client";

import useSWR from "swr";
import Image from "next/image";
import type { Webmention, WebmentionFeed } from "@/utils/types";

// ─── Fetcher ─────────────────────────────────────────────────────────────────

const fetcher = (url: string): Promise<WebmentionFeed> =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch webmentions");
    return res.json();
  });

// ─── Helpers ─────────────────────────────────────────────────────────────────

const groupWebmentions = (mentions: Webmention[]) => ({
  likes: mentions.filter((m) => m["wm-property"] === "like-of"),
  reposts: mentions.filter((m) => m["wm-property"] === "repost-of"),
  replies: mentions.filter(
    (m) =>
      m["wm-property"] === "in-reply-to" ||
      m["wm-property"] === "mention-of"
  ),
});

const formatDate = (iso?: string): string => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function AuthorAvatar({ author }: { author: Webmention["author"] }) {
  if (author.photo) {
    return (
      <Image
        src={author.photo}
        alt={author.name}
        width={32}
        height={32}
        className="rounded-full object-cover"
        unoptimized // avatars are external URLs
      />
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
      {author.name.charAt(0).toUpperCase()}
    </div>
  );
}

function LikeAvatars({ likes }: { likes: Webmention[] }) {
  if (!likes.length) return null;
  return (
    <section aria-label="Likes">
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">
        ❤️ {likes.length} {likes.length === 1 ? "Like" : "Likes"}
      </h3>
      <div className="flex flex-wrap gap-1">
        {likes.map((mention) => (
          <a
            key={mention["wm-id"]}
            href={mention.author.url}
            title={mention.author.name}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-75"
          >
            <AuthorAvatar author={mention.author} />
          </a>
        ))}
      </div>
    </section>
  );
}

function RepostAvatars({ reposts }: { reposts: Webmention[] }) {
  if (!reposts.length) return null;
  return (
    <section aria-label="Reposts">
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">
        🔁 {reposts.length} {reposts.length === 1 ? "Repost" : "Reposts"}
      </h3>
      <div className="flex flex-wrap gap-1">
        {reposts.map((mention) => (
          <a
            key={mention["wm-id"]}
            href={mention.author.url}
            title={mention.author.name}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-75"
          >
            <AuthorAvatar author={mention.author} />
          </a>
        ))}
      </div>
    </section>
  );
}

function ReplyCard({ mention }: { mention: Webmention }) {
  return (
    <article className="flex gap-3 py-3 border-b border-border last:border-0">
      <a
        href={mention.author.url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <AuthorAvatar author={mention.author} />
      </a>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <a
            href={mention.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground hover:underline"
          >
            {mention.author.name}
          </a>
          {mention.published && (
            <time
              dateTime={mention.published}
              className="text-xs text-muted-foreground"
            >
              {formatDate(mention.published)}
            </time>
          )}
        </div>
        {mention.content?.text && (
          <p className="text-sm text-foreground mt-1 break-words">
            {mention.content.text}
          </p>
        )}
        <a
          href={mention.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:underline mt-1 inline-block"
        >
          View source →
        </a>
      </div>
    </article>
  );
}

function RepliesSection({ replies }: { replies: Webmention[] }) {
  if (!replies.length) return null;
  return (
    <section aria-label="Replies and mentions">
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">
        💬 {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
      </h3>
      <div>
        {replies.map((mention) => (
          <ReplyCard key={mention["wm-id"]} mention={mention} />
        ))}
      </div>
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

type WebmentionsProps = {
  postUrl: string;
};

export default function Webmentions({ postUrl }: WebmentionsProps) {
  const apiUrl = `/api/webmentions?target=${encodeURIComponent(postUrl)}`;

  const { data, error, isLoading } = useSWR<WebmentionFeed>(apiUrl, fetcher, {
    dedupingInterval: 60_000,
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">Loading webmentions…</p>
      </div>
    );
  }

  if (error || !data) return null;

  const { likes, reposts, replies } = groupWebmentions(data.children ?? []);
  const hasAny = likes.length > 0 || reposts.length > 0 || replies.length > 0;

  if (!hasAny) return null;

  return (
    <aside className="mt-12 pt-8 border-t border-border space-y-6" aria-label="Webmentions">
      <h2 className="text-base font-semibold text-foreground">Webmentions</h2>
      <LikeAvatars likes={likes} />
      <RepostAvatars reposts={reposts} />
      <RepliesSection replies={replies} />
    </aside>
  );
}
