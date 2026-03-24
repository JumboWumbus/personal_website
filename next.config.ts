import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import remarkSmartypants from "remark-smartypants"

import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeExternalLinks from "rehype-external-links"
import rehypePrettyCode from "rehype-pretty-code"

const nextConfig: NextConfig = {
  // sassOptions: {
  //   silenceDeprecations: ["legacy-js-api"],
  // },
  transpilePackages: ["next-mdx-remote"],
  /* config options here */
  // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  pageExtensions: ["tsx", "mdx", "md"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkBreaks,
      remarkSmartypants
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      rehypeExternalLinks,
      rehypePrettyCode
    ]
  }
})

export default withMDX(nextConfig);
