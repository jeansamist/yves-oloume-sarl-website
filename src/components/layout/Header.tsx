"use client"

import Link from "next/link"
import { useEffect, useState, type ReactNode } from "react"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import Brand from "../ui/Brand"
import Icon from "../ui/Icon"
import LanguageSwitcher from "./LanguageSwitcher"
import MobileMenu from "./MobileMenu"

type HeaderProps = {
  locale: Locale
  t: Dictionary["header"]
  common: Dictionary["common"]
  /** Server-rendered solutions dropdown. */
  megaMenu: ReactNode
}

export default function Header({ locale, t, common, megaMenu }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  const href = (path: string) => localizePath(locale, path)

  return (
    <>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="container nav">
          <Brand href={href(routes.home)} ariaLabel={t.brandAria} tagline={t.brandTagline} />
          <nav className="desktop-nav" aria-label={t.mainNav}>
            <Link href={href(routes.home)}>{t.nav.home}</Link>
            <Link href={href(routes.about)}>{t.nav.about}</Link>
            {megaMenu}
            <Link href={href(routes.btp)}>{t.nav.btp}</Link>
            <Link href={href(routes.projects)}>{t.nav.projects}</Link>
            <Link href={href(routes.contact)}>{t.nav.contact}</Link>
          </nav>
          <div className="nav-actions">
            <LanguageSwitcher locale={locale} label={common.language} names={common.languages} />
            <Link className="header-cta" href={href(routes.quote)}>
              {t.quoteCta} <Icon name="arrow" size={17} />
            </Link>
            <button className="menu-button" onClick={() => setOpen(true)} aria-label={t.openMenu} aria-expanded={open}>
              <Icon name="menu" size={25} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu locale={locale} open={open} onClose={() => setOpen(false)} t={t} common={common} />
    </>
  )
}
