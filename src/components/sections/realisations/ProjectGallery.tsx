"use client"

import { useState } from "react"
import type { ProjectCategory } from "@/i18n/dictionaries/fr"
import type { Dictionary } from "@/i18n/get-dictionary"
import ProjectGrid from "../shared/ProjectGrid"

type Filter = "all" | ProjectCategory

type ProjectGalleryProps = {
  projects: Dictionary["projects"]
  filterLabel: string
  emptyLabel: string
}

export default function ProjectGallery({ projects, filterLabel, emptyLabel }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<Filter>("all")
  const filters = Object.keys(projects.filters) as Filter[]
  const filtered = filter === "all" ? projects.items : projects.items.filter((p) => p.category === filter)

  return (
    <>
      <div className="filters" role="group" aria-label={filterLabel}>
        {filters.map((key) => (
          <button className={filter === key ? "active" : ""} aria-pressed={filter === key} onClick={() => setFilter(key)} key={key}>
            {projects.filters[key]}
          </button>
        ))}
      </div>
      {filtered.length > 0 ? (
        <ProjectGrid projects={filtered} labels={projects.filters} inWord={projects.in} />
      ) : (
        <p>{emptyLabel}</p>
      )}
    </>
  )
}
