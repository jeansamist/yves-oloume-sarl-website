import type { Metadata } from "next"
import { defaultLocale, locales, ogLocales, type Locale } from "@/i18n/config"
import { localizePath } from "./routes"
import { company, images, siteUrl } from "./site"

type PageSeo = {
  locale: Locale
  path: string
  title: string
  description: string
  noIndex?: boolean
}

/** hreflang alternates for a path, including x-default (French). */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, localizePath(l, path)])),
    "x-default": localizePath(defaultLocale, path),
  }
}

export function buildMetadata({ locale, path, title, description, noIndex }: PageSeo): Metadata {
  const image = images.ogImage
  const url = localizePath(locale, path)
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: company.name,
      title,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      images: [{ url: image.src, width: image.width, height: image.height, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  }
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`
}
