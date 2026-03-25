import allMetadata from "@/data/metadata.json"
import type { Metadata } from "next"
import Webmentions from "@/components/Webmentions/Webmentions"

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata: frontmatter } = await import(
    `@/markdown/blog/${slug}.mdx`
  );

  const postUrl = `https://bensden.xyz/blog/post/${slug}`;
  const publishedIso = frontmatter?.date
    ? new Date(frontmatter.date).toISOString()
    : undefined;

  return (
    <article className="h-entry">
      {/* Machine-readable metadata — hidden from view */}
      <a className="u-url hidden" href={postUrl} />
      {publishedIso && (
        <time className="dt-published hidden" dateTime={publishedIso} />
      )}

      <div
        id="blog-post"
        className="e-content prose prose-animated prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white"
      >
        <Post />
      </div>

      <Webmentions postUrl={postUrl} />
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allMetadata.find((p) => p.slug === slug);

  return {
    title: post?.title,
    description: post?.summary,
  };
}

export async function generateStaticParams() {
  return allMetadata
    .filter((post) => post.section === "blog")
    .map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
