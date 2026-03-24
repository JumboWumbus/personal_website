"use client"

import * as React from "react"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

interface TagFilterProps {
  tagCounts: Record<string, number>
  selectedTags: string[]
  onChange: (tags: string[]) => void
}

export function TagCombobox({
  tagCounts,
  selectedTags,
  onChange,
}: TagFilterProps) {
  const anchor = useComboboxAnchor()

  const items = Object.keys(tagCounts).sort()

  return (
    <Combobox
      multiple
      autoHighlight
      items={items}
      value={selectedTags}
      onValueChange={onChange}
    >
      <ComboboxChips ref={anchor} className="w-full">
        <ComboboxValue>
          {(values) => (
            <>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Filter tags..." />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>

      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No tags found.</ComboboxEmpty>

        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              <div className="flex w-full justify-between">
                <span>{item}</span>
                <span className="text-muted-foreground text-xs">
                  {tagCounts[item]}
                </span>
              </div>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
