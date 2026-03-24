import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import matter from "gray-matter";
import type { Root, Heading } from "mdast";
import { visit } from "unist-util-visit";
import remarkFrontmatter from "remark-frontmatter";
import { unified } from "unified"
import remarkParse from "remark-parse"

type Metadata = {
  title: string;
  publishedAt?: string;
  summary: string;
  tags?: string[];
  slug?: string;
  image?: string;
  headings?: HeadingMeta[];
};
export type HeadingMeta = { text: string; id: string; level: number };

const CONTENT_DIRS = ["blog", "projects", "tiny-tips"];
const BASE_DIR = path.join(process.cwd(), "markdown/");
const METADATA_FILE = path.join(process.cwd(), "data", "metadata.json");

// Parse the frontmatter using `gray-matter`
function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      title: data.title ?? "",
      publishedAt: data.publishedAt || new Date().toISOString(),
      summary: data.summary ?? "",
      tags: Array.isArray(data.tags)
        ? data.tags
        : (data.tags ?? "").split(",").map((tag: string) => tag.trim()),
      slug: data.slug,
      image: data.image,
    },
    content,
  };
}

export function extractHeadings(content: string): HeadingMeta[] {
  const headings: HeadingMeta[] = [];

  const tree = unified().use(remarkParse).use(remarkFrontmatter).parse(content) as Root;

  visit(tree, "heading", (node: Heading) => {
    const text = node.children
      .filter((child: any) => child.type === "text")
      .map((child: any) => (child as any).value)
      .join("");

    if (!text) return;

    const id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");

    headings.push({ text, id, level: node.depth });
  });

  return headings;
}
// Get all MDX files from a directory
function getMDXFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

// Read an MDX file and extract metadata + content
function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  return parseFrontmatter(fs.readFileSync(filePath, "utf-8"));
}

// Generate metadata.json from all MDX files
export function generateMetadataJson() {
  const metadataList = CONTENT_DIRS.flatMap((section) => {
    const dirPath = path.join(BASE_DIR, section);
    return getMDXFiles(dirPath).map((filePath) => {
      const { metadata, content } = readMDXFile(filePath);
      const slug = path.basename(filePath, ".mdx");
      const headings = extractHeadings(content);
      return {
        ...metadata,
        slug,
        url: `/${section}/post/${slug}`,
        section,
        tags: metadata.tags ?? [],
        minutes: Math.round(readingTime(content).minutes / 5) * 5,
        headings,
      };
    });
  });
  fs.mkdirSync(path.dirname(METADATA_FILE), { recursive: true });
  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadataList, null, 2));
  console.log("Metadata JSON file generated successfully!");
}
