"use client"
import BlogList from "@/components/BlogList/BlogList";
import metadata from "@/data/metadata.json"
import { useMemo, useState } from "react";
import { TagCombobox } from "@/components/TagCombobox/TagComboBox";

export default function BlogPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const blogPosts = useMemo(
    () => metadata.filter((p) => p.section === "blog"),
    []
  )
  const filteredPosts = useMemo(() => {
    if (!selectedTags.length) return blogPosts

    return blogPosts.filter((post) =>
      selectedTags.every((tag) => post.tags.includes(tag))
    )
  }, [blogPosts, selectedTags])

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {}

    filteredPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1
      })
    })
    return counts
  }, [filteredPosts])
  return (
    <>
      <aside>
        <TagCombobox
          tagCounts={tagCounts}
          selectedTags={selectedTags}
          onChange={setSelectedTags}
        />
      </aside>
      <BlogList
        title="Blog"
        description="Welcome to the blog section"
        postList={filteredPosts}
      />
    </>
  );
}
