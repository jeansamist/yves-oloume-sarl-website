import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { localizePath, routes, type SolutionSlug } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"
import { serviceSchema } from "@/lib/structured-data"
import CtaBand from "../../layout/CtaBand"
import JsonLd from "../../ui/JsonLd"
import FaqSection from "../shared/FaqSection"
import PageHero from "../shared/PageHero"
import DetailCta from "./DetailCta"
import SolutionExtras from "./SolutionExtras"
import SolutionOverview from "./SolutionOverview"

/** Shared metadata builder for every solution detail route. */
export function solutionMetadata(locale: Locale, slug: SolutionSlug) {
  const data = getDictionary(locale).solutionPages[slug]
  return buildMetadata({
    locale,
    path: `/${slug}`,
    title: data.metaTitle,
    description: data.metaDescription,
  })
}

export default function SolutionDetailPage({ locale, slug }: { locale: Locale; slug: SolutionSlug }) {
  const dict = getDictionary(locale)
  const data = dict.solutionPages[slug]
  const t = dict.solutionDetail
  const path = `/${slug}`

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={data.title}
        intro={data.intro}
        breadcrumb={data.breadcrumb}
        path={path}
        image={images[data.image]}
      />
      <SolutionOverview data={data} t={t} />
      {data.extras && <SolutionExtras title={data.extrasTitle} items={data.extras} t={t} />}
      {data.faqs && <FaqSection label={dict.faq.label} title={dict.faq.title} items={data.faqs} />}
      <DetailCta title={t.ctaTitle} button={data.button} href={localizePath(locale, routes.quote)} />
      <CtaBand locale={locale} t={dict.cta} />
      <JsonLd
        data={serviceSchema({
          name: data.breadcrumb,
          description: data.metaDescription,
          path: localizePath(locale, path),
          image: images[data.image],
        })}
      />
    </>
  )
}
