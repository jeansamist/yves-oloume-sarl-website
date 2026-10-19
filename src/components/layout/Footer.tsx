import Link from "next/link"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import { company } from "@/lib/site"
import Brand from "../ui/Brand"

type FooterProps = {
  locale: Locale
  dict: Dictionary
}

export default function Footer({ locale, dict }: FooterProps) {
  const t = dict.footer
  const href = (path: string) => localizePath(locale, path)

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand href={href(routes.home)} ariaLabel={dict.header.brandAria} tagline={dict.header.brandTagline} light />
          <p>{t.about}</p>
        </div>
        <div>
          <h3>{t.solutionsTitle}</h3>
          {dict.solutions.map((item) => (
            <Link href={href(`/${item.slug}`)} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t.linksTitle}</h3>
          <Link href={href(routes.about)}>{t.links.about}</Link>
          <Link href={href(routes.projects)}>{t.links.projects}</Link>
          <Link href={href(routes.quote)}>{t.links.quote}</Link>
          <Link href={href(routes.contact)}>{t.links.contact}</Link>
          <Link href={href(routes.legal)}>{t.links.legal}</Link>
        </div>
        <div>
          <h3>{t.findUs}</h3>
          <address>
            <p>
              {t.address}
              <br />
              {company.postalBox}
            </p>
            <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
          <p>
            {t.hoursWeek}
            <br />
            {t.hoursSaturday}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {company.name} — {t.rights}
        </span>
        <span>{t.motto}</span>
      </div>
    </footer>
  )
}
