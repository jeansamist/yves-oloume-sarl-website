import type { Locale } from "@/i18n/config"

export const solutionSlugs = [
  "maison-prefabriquee-cameroun",
  "bureau-modulaire-douala",
  "base-vie-chantier-cameroun",
  "entrepot-prefabrique-cameroun",
  "kiosques-toilettes-mobiles",
] as const

export type SolutionSlug = (typeof solutionSlugs)[number]

export const routes = {
  home: "/",
  about: "/a-propos",
  solutions: "/solutions-prefabriquees",
  btp: "/construction-renovation-douala",
  projects: "/realisations",
  quote: "/devis",
  contact: "/contact",
  legal: "/mentions-legales",
} as const

/** Every indexable path (without locale prefix), used by the sitemap. */
export const allPaths: string[] = [...Object.values(routes), ...solutionSlugs.map((slug) => `/${slug}`)]

/** Prefix an internal path with the locale: ("en", "/devis") -> "/en/devis". */
export function localizePath(locale: Locale, path: string) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

/** Internal route rendered (via a proxy rewrite) for unknown URLs. Never linked or indexed. */
export const notFoundPath = "/page-introuvable"
