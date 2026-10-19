"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales, type Locale } from "@/i18n/config"

type LanguageSwitcherProps = {
  locale: Locale
  label: string
  names: Record<Locale, string>
  onNavigate?: () => void
}

/** Links to the current page in every supported language. */
export default function LanguageSwitcher({ locale, label, names, onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`
  const rest = pathname.replace(/^\/[^/]+/, "")

  return (
    <nav className="lang-switch" aria-label={label}>
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          lang={l}
          title={names[l]}
          aria-current={l === locale ? "true" : undefined}
          onClick={onNavigate}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  )
}
