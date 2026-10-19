import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import PageHero from "@/components/sections/shared/PageHero"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).legal
  return buildMetadata({ locale, path: routes.legal, title: t.metaTitle, description: t.metaDescription, image: images.steel })
}

export default async function LegalPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.legal

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        breadcrumb={t.breadcrumb}
        path={routes.legal}
        image={images.steel}
      />
      <section className="section">
        <div className="container legal">
          <h2>{t.publisherTitle}</h2>
          <p>{t.publisherText}</p>
        </div>
      </section>
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
