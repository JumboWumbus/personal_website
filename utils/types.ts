export type PostMetadata = {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  tags: string[];
  url: string;
  section: string;
  minutes: number;
};

// ─── Webmention (JF2 format from webmention.io) ──────────────────────────────

export type WebmentionAuthor = {
  type: "card";
  name: string;
  url: string;
  photo?: string;
};

export type WebmentionProperty =
  | "in-reply-to"
  | "like-of"
  | "repost-of"
  | "bookmark-of"
  | "mention-of"
  | "rsvp";

export type Webmention = {
  "wm-id": number;
  "wm-property": WebmentionProperty;
  "wm-received": string;
  "wm-private": boolean;
  "wm-source": string;
  "wm-target": string;
  type: "entry";
  url: string;
  author: WebmentionAuthor;
  published?: string;
  content?: {
    text?: string;
    html?: string;
  };
  // present when wm-property matches
  "in-reply-to"?: string;
  "like-of"?: string;
  "repost-of"?: string;
  "bookmark-of"?: string;
  "mention-of"?: string;
};

export type WebmentionFeed = {
  type: "feed";
  name: string;
  children: Webmention[];
};
