
import allMetadata from "@/data/metadata.json"
import Link from "next/link"
import { BsClock, BsCalendar4Week } from "react-icons/bs"
import { Badge } from "@/components/ui/badge"
import Webmentions from "@/components/Webmentions/Webmentions"
import GiscusComments from "@/components/Giscus/Comments"

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/markdown/projects/${slug}.mdx`);

  const post = allMetadata.find((p) => p.slug === slug)!;
  const postUrl = `https://bensden.xyz${post.url}`;
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="h-entry">
      {/* Machine-readable microformat metadata — hidden from view */}
      <a className="u-url hidden" href={postUrl} />
      <time className="dt-published hidden" dateTime={post.publishedAt} />

      {/* Post header */}
      <header className="prose mb-12">
        <h1 className="p-name text-4xl md:text-5xl font-extrabold text-foreground mb-3">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">{post.summary}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <BsCalendar4Week />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <BsClock />
            <span>{post.minutes} min read</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog/tags/${tag}`}>
              <Badge variant="secondary">{tag}</Badge>
            </Link>
          ))}
        </div>
      </header>
      {/* Post body */}
      <div
        id="blog-post"
        className="e-content prose prose-animated prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white"
      >
        <Post />
      </div>

      <Webmentions postUrl={postUrl} />
      <GiscusComments />
    </article>
  );
}


export async function generateStaticParams() {
  return allMetadata
    .filter((post) => post.section === "projects")
    .map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
