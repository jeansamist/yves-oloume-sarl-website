import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import type { ImageKey } from "@/lib/site"
import LinkButton from "../../ui/LinkButton"
import SectionTitle from "../../ui/SectionTitle"
import ProjectGrid from "../shared/ProjectGrid"

// Order matters: slots 1 and 4 are wide, 2 and 3 narrow, 5 and 6 half-width.
const previewImages: ImageKey[] = ["site", "officeCorridor", "containerInterior", "warehouse", "modules", "worker"]

export default function ProjectsPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.projects
  const projects = previewImages.flatMap((key) => dict.projects.items.filter((p) => p.image === key))
  return (
    <section className="section projects">
      <div className="container">
        <div className="heading-row">
          <SectionTitle number="05" label={t.label} title={t.title} />
          <LinkButton href={localizePath(locale, routes.projects)} outline>
            {t.button}
          </LinkButton>
        </div>
        <ProjectGrid projects={projects} labels={dict.projects.filters} inWord={dict.projects.in} />
      </div>
    </section>
  )
}
