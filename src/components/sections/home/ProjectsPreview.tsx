import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import LinkButton from "../../ui/LinkButton"
import SectionTitle from "../../ui/SectionTitle"
import ProjectGrid from "../shared/ProjectGrid"

export default function ProjectsPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.projects
  return (
    <section className="section projects">
      <div className="container">
        <div className="heading-row">
          <SectionTitle number="05" label={t.label} title={t.title} />
          <LinkButton href={localizePath(locale, routes.projects)} outline>
            {t.button}
          </LinkButton>
        </div>
        <ProjectGrid projects={dict.projects.items.slice(0, 6)} labels={dict.projects.filters} inWord={dict.projects.in} />
      </div>
    </section>
  )
}
