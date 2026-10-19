import Image from "next/image"
import type { Dictionary } from "@/i18n/get-dictionary"
import { images } from "@/lib/site"
import Icon from "../../ui/Icon"

type ProjectGridProps = {
  projects: Dictionary["projects"]["items"]
  labels: Dictionary["projects"]["filters"]
  inWord: string
}

export default function ProjectGrid({ projects, labels, inWord }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article className={`project-card project-${index + 1}`} key={project.title}>
          <Image
            src={images[project.image]}
            alt={project.city ? `${project.title} ${inWord} ${project.city}` : project.title}
            placeholder="blur"
            sizes="(max-width: 760px) 100vw, 60vw"
          />
          <div>
            <span>
              {labels[project.category]}
              {project.city && ` · ${project.city}`}
            </span>
            <h3>{project.title}</h3>
            <Icon name="arrow" />
          </div>
        </article>
      ))}
    </div>
  )
}
