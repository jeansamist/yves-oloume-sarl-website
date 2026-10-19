import type { Metadata } from "next"
import LinkButton from "@/components/ui/LinkButton"
import type { LocaleParams } from "@/i18n/config"
import { notFoundMessages } from "@/i18n/not-found-messages"
import { resolveLocale } from "@/i18n/resolve-locale"
import { localizePath } from "@/lib/routes"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  return {
    title: notFoundMessages[locale].metaTitle,
    robots: { index: false, follow: true },
    alternates: { languages: {} },
  }
}

/** Localized 404 page. The proxy rewrites unknown URLs here with a 404 status. */
export default async function NotFoundPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const t = notFoundMessages[locale]
  return (
    <section className="not-found">
      <span className="eyebrow">{t.eyebrow}</span>
      <h1>{t.title}</h1>
      <LinkButton href={localizePath(locale, "/")}>{t.button}</LinkButton>
    </section>
  )
}
