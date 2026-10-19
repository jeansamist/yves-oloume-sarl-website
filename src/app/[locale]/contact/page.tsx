import type { Metadata } from "next"
import CtaBand from "@/components/layout/CtaBand"
import ContactCards from "@/components/sections/contact/ContactCards"
import ContactForm from "@/components/sections/contact/ContactForm"
import MapCard from "@/components/sections/contact/MapCard"
import FaqSection from "@/components/sections/shared/FaqSection"
import PageHero from "@/components/sections/shared/PageHero"
import type { LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { routes } from "@/lib/routes"
import { buildMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const t = getDictionary(locale).contact
  return buildMetadata({ locale, path: routes.contact, title: t.metaTitle, description: t.metaDescription })
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.contact

  return (
    <>
      <PageHero
        locale={locale}
        homeLabel={dict.common.home}
        title={t.title}
        intro={t.intro}
        breadcrumb={t.breadcrumb}
        path={routes.contact}
      />
      <ContactCards t={t} />
      <section className="section muted">
        <div className="container contact-layout">
          <ContactForm t={t.form} />
          <MapCard t={t.map} />
        </div>
      </section>
      <FaqSection label={dict.faq.label} title={dict.faq.title} items={dict.faq.items} />
      <CtaBand locale={locale} t={dict.cta} />
    </>
  )
}
