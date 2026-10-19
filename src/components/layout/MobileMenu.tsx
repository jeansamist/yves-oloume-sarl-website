"use client"

import Link from "next/link"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import Brand from "../ui/Brand"
import Icon from "../ui/Icon"
import LanguageSwitcher from "./LanguageSwitcher"

type MobileMenuProps = {
  locale: Locale
  open: boolean
  onClose: () => void
  t: Dictionary["header"]
  common: Dictionary["common"]
}

export default function MobileMenu({ locale, open, onClose, t, common }: MobileMenuProps) {
  const links: [string, string][] = [
    [t.mobileNav.home, routes.home],
    [t.mobileNav.about, routes.about],
    [t.mobileNav.solutions, routes.solutions],
    [t.mobileNav.btp, routes.btp],
    [t.mobileNav.projects, routes.projects],
    [t.mobileNav.contact, routes.contact],
  ]

  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} inert={!open}>
      <div className="mobile-menu-head">
        <Brand href={localizePath(locale, "/")} ariaLabel={t.brandAria} tagline={t.brandTagline} light onClick={onClose} />
        <button onClick={onClose} aria-label={t.closeMenu}>
          <Icon name="x" size={28} />
        </button>
      </div>
      <nav aria-label={t.mainNav}>
        {links.map(([label, path], i) => (
          <Link href={localizePath(locale, path)} key={path} onClick={onClose}>
            <span>0{i + 1}</span>
            {label}
            <Icon name="arrow" />
          </Link>
        ))}
      </nav>
      <LanguageSwitcher locale={locale} label={common.language} names={common.languages} onNavigate={onClose} />
      <Link className="button" href={localizePath(locale, routes.quote)} onClick={onClose}>
        {t.quoteCta}
        <Icon name="arrow" size={18} />
      </Link>
    </div>
  )
}
