import type { MDXComponents } from "mdx/types";
import ImageCaption from "@/components/ImageCaption/ImageCaption";
import Video from "@/components/Video/Video"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ImageCaption,
    Video,
    ...components,
  };
}
