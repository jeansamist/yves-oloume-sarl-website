import type { StaticImageData } from "next/image"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { localizePath } from "@/lib/routes"
import { images } from "@/lib/site"
import { breadcrumbSchema } from "@/lib/structured-data"
import BackgroundImage from "../../ui/BackgroundImage"
import Icon from "../../ui/Icon"
import JsonLd from "../../ui/JsonLd"

type PageHeroProps = {
  locale: Locale
  homeLabel: string
  title: string
  breadcrumb: string
  /** Path of the current page (without locale), used for breadcrumb structured data. */
  path: string
  intro?: string
  image?: StaticImageData
}

export default function PageHero({ locale, homeLabel, title, breadcrumb, path, intro, image = images.hero }: PageHeroProps) {
  const homeHref = localizePath(locale, "/")
  return (
    <section className="page-hero">
      <BackgroundImage src={image} overlay="linear-gradient(90deg,rgba(57,3,6,.92),rgba(110,11,16,.48))" priority />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={homeHref}>{homeLabel}</Link>
          <Icon name="chevron" size={15} />
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
      <JsonLd
        data={breadcrumbSchema([
          { name: homeLabel, path: homeHref },
          { name: breadcrumb, path: localizePath(locale, path) },
        ])}
      />
    </section>
  )
}
