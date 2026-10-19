import Image from "next/image"
import Link from "next/link"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { localizePath, routes } from "@/lib/routes"
import { images } from "@/lib/site"
import Icon from "../ui/Icon"

type MegaMenuProps = {
  locale: Locale
  t: Dictionary["header"]
  solutions: Dictionary["solutions"]
}

export default function MegaMenu({ locale, t, solutions }: MegaMenuProps) {
  return (
    <div className="nav-dropdown">
      <Link href={localizePath(locale, routes.solutions)}>
        {t.nav.solutions} <span aria-hidden="true">⌄</span>
      </Link>
      <div className="mega-menu">
        <div className="mega-intro">
          <span className="eyebrow">{t.megaEyebrow}</span>
          <strong>{t.megaTitle}</strong>
          <Link href={localizePath(locale, routes.solutions)}>
            {t.megaAll} <Icon name="arrow" size={16} />
          </Link>
        </div>
        {solutions.slice(0, 5).map((item) => (
          <Link className="mega-card" href={localizePath(locale, `/${item.slug}`)} key={item.slug}>
            <Image src={images[item.image]} alt="" placeholder="blur" sizes="200px" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
