import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import PageHero from "@/components/sections/shared/PageHero"
import SolutionsGrid from "@/components/sections/shared/SolutionsGrid"
import Comparison from "@/components/sections/solutions/Comparison"
import OptionsGrid from "@/components/sections/solutions/OptionsGrid"
import SectionTitle from "@/components/ui/SectionTitle"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).solutionsHub
  return buildMetadata({ locale, path: routes.solutions, title: t.metaTitle, description: t.metaDescription, image: images.modules })
}

export default async function SolutionsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.solutionsHub

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        intro={t.intro}
        breadcrumb={t.breadcrumb}
        path={routes.solutions}
        image={images.modules}
      />
      <section className="section">
        <div className="container">
          <SectionTitle number="01" label={t.list.label} title={t.list.title} />
          <SolutionsGrid locale={locale} items={dict.solutions.slice(0, 5)} learnMore={dict.common.learnMore} />
        </div>
      </section>
      <Comparison locale={locale} t={t.comparison} />
      <OptionsGrid t={t.options} />
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
