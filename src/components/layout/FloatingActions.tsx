import Link from "next/link"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import { company } from "@/lib/site"
import Icon from "../ui/Icon"

export default function FloatingActions({ locale, t }: { locale: Locale; t: Dictionary["floating"] }) {
  return (
    <>
      <a className="whatsapp" href={company.whatsapp} target="_blank" rel="noopener" aria-label={t.whatsappAria}>
        <span>WA</span>
        <b>{t.whatsappLabel}</b>
      </a>
      <div className="mobile-actions">
        <a href={`tel:${company.phone}`}>
          <Icon name="phone" />
          {t.call}
        </a>
        <a href={company.whatsapp} target="_blank" rel="noopener">
          <span>WA</span>
          {t.whatsapp}
        </a>
        <Link href={localizePath(locale, routes.quote)}>
          <Icon name="mail" />
          {t.quote}
        </Link>
      </div>
    </>
  )
}
