import type { Metadata } from "next"
import QuoteAside from "@/components/sections/quote/QuoteAside"
import QuoteForm from "@/components/sections/quote/QuoteForm"
import PageHero from "@/components/sections/shared/PageHero"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).quote
  return buildMetadata({ locale, path: routes.quote, title: t.metaTitle, description: t.metaDescription, image: images.engineer })
}

export default async function QuotePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.quote

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        intro={t.intro}
        breadcrumb={t.breadcrumb}
        path={routes.quote}
        image={images.engineer}
      />
      <section className="section quote-section">
        <div className="container quote-layout">
          <QuoteForm t={t.form} />
          <QuoteAside t={t.aside} />
        </div>
      </section>
    </>
  )
}
