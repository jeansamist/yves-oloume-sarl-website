import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import Benefits from "@/components/sections/home/Benefits"
import HomeHero from "@/components/sections/home/HomeHero"
import Partner from "@/components/sections/home/Partner"
import Process from "@/components/sections/home/Process"
import ProjectsPreview from "@/components/sections/home/ProjectsPreview"
import Sectors from "@/components/sections/home/Sectors"
import SolutionsSection from "@/components/sections/home/SolutionsSection"
import Stats from "@/components/sections/home/Stats"
import Testimonials from "@/components/sections/home/Testimonials"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).home
  return buildMetadata({ locale, path: routes.home, title: t.metaTitle, description: t.metaDescription })
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.home

  return (
    <>
      <HomeHero locale={locale} t={t.hero} />
      <Stats items={t.stats} />
      <SolutionsSection locale={locale} dict={dict} />
      <Benefits t={t.benefits} />
      <Partner locale={locale} t={t.partner} />
      <Process t={t.process} />
      <ProjectsPreview locale={locale} dict={dict} />
      <Sectors t={t.sectors} />
      <Testimonials t={t.testimonials} />
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
