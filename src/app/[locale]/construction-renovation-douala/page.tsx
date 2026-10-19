import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import BtpProcess from "@/components/sections/btp/BtpProcess"
import BuildChoice from "@/components/sections/btp/BuildChoice"
import ServiceList from "@/components/sections/btp/ServiceList"
import PageHero from "@/components/sections/shared/PageHero"
import JsonLd from "@/components/ui/JsonLd"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { localizePath, routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"
import { images } from "@/lib/site"
import { serviceSchema } from "@/lib/structured-data"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).btp
  return buildMetadata({ locale, path: routes.btp, title: t.metaTitle, description: t.metaDescription })
}

export default async function BtpPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.btp

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        intro={t.intro}
        breadcrumb={t.breadcrumb}
        path={routes.btp}
        image={images.team}
      />
      <ServiceList t={t.services} />
      <BuildChoice locale={locale} t={t.choice} />
      <BtpProcess t={t.process} />
      <CtaBand locale={locale} t={dict.cta} />
      <JsonLd
        data={serviceSchema({
          name: t.breadcrumb,
          description: t.metaDescription,
          path: localizePath(locale, routes.btp),
          image: images.team,
        })}
      />
    </>
  )
}
