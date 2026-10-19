import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import Domains from "@/components/sections/about/Domains"
import MissionVision from "@/components/sections/about/MissionVision"
import Story from "@/components/sections/about/Story"
import Values from "@/components/sections/about/Values"
import PageHero from "@/components/sections/shared/PageHero"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).about
  return buildMetadata({ locale, path: routes.about, title: t.metaTitle, description: t.metaDescription })
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.about

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        breadcrumb={t.breadcrumb}
        path={routes.about}
        image={images.site}
      />
      <Story t={t.story} />
      <MissionVision mission={t.mission} vision={t.vision} />
      <Values t={t.values} />
      <Domains t={t.domains} />
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
