"use client"
import BlogList from "@/components/BlogList/BlogList";
import metadata from "@/data/metadata.json"
import { useMemo } from "react";

export default function BlogPage() {

  const blogPosts = useMemo(
    () => metadata.filter((p) => p.section === "blog" || "project"),
    []
  )


  return (
    <div className="h-feed">
      <BlogList
        title="Blog"
        tagFiltering
        description="Welcome to the blog section"
        postList={blogPosts}
      />
    </div>
  );
}
