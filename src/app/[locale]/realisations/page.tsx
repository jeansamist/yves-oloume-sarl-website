import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import ProjectGallery from "@/components/sections/realisations/ProjectGallery"
import PageHero from "@/components/sections/shared/PageHero"
import LinkButton from "@/components/ui/LinkButton"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { localizePath, routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).realisations
  return buildMetadata({ locale, path: routes.projects, title: t.metaTitle, description: t.metaDescription })
}

export default async function ProjectsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.realisations

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        intro={t.intro}
        breadcrumb={t.breadcrumb}
        path={routes.projects}
        image={images.steel}
      />
      <section className="section">
        <div className="container">
          <ProjectGallery projects={dict.projects} filterLabel={t.filterLabel} emptyLabel={t.empty} />
          <div className="center-action">
            <LinkButton href={localizePath(locale, routes.quote)}>{t.button}</LinkButton>
          </div>
        </div>
      </section>
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
