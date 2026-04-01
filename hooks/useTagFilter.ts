import { useMemo, useState } from "react"

export function useTagFilter<T extends { tags: string[] }>(items: T[]) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredItems = useMemo(() => {
    if (!selectedTags.length) return items

    return items.filter((item) =>
      selectedTags.every((tag) => item.tags.includes(tag))
    )
  }, [items, selectedTags])

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {}

    filteredItems.forEach((item) => {
      item.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1
      })
    })

    return counts
  }, [filteredItems])

  const visibleTags = useMemo(() => {
    const fromFiltered = Object.keys(tagCounts)
    const union = new Set([...fromFiltered, ...selectedTags])

    return Array.from(union).sort((a, b) => {
      const aSelected = selectedTags.includes(a)
      const bSelected = selectedTags.includes(b)

      if (aSelected && !bSelected) return -1
      if (!aSelected && bSelected) return 1

      const countDiff = (tagCounts[b] ?? 0) - (tagCounts[a] ?? 0)
      if (countDiff !== 0) return countDiff

      return a.localeCompare(b)
    })
  }, [tagCounts, selectedTags])

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }

  return {
    selectedTags,
    filteredItems,
    tagCounts,
    visibleTags,
    toggleTag,
  }
}
