import { BadgeCounter } from "@/components/ui/badge"

type TagFilterProps = {
  tags: string[]
  selectedTags: string[]
  tagCounts: Record<string, number>
  onToggle: (tag: string) => void
}

export default function TagFilter({
  tags,
  selectedTags,
  tagCounts,
  onToggle,
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag)

        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className="cursor-pointer"
          >
            <BadgeCounter
              variant={isSelected ? "default" : "secondary"}
              counter={tagCounts[tag] ?? 0}
            >
              {tag}
            </BadgeCounter>
          </button>
        )
      })}
    </div>
  )
}
