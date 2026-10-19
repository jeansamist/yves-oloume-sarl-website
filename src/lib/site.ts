import type { StaticImageData } from "next/image"
import engineer from "@/assets/images/engineer.jpg"
import hero from "@/assets/images/hero.jpg"
import interior from "@/assets/images/interior.jpg"
import modules from "@/assets/images/modules.jpg"
import site from "@/assets/images/site.jpg"
import steel from "@/assets/images/steel.jpg"
import team from "@/assets/images/team.jpg"
import warehouse from "@/assets/images/warehouse.jpg"
import worker from "@/assets/images/worker.jpg"
// Photos of Yves OLOUME SARL projects
import containerInterior from "@/assets/images/container-interior.jpg"
import containerOffice from "@/assets/images/container-office.jpg"
import craneInstallation from "@/assets/images/crane-installation.jpg"
import modularComplex from "@/assets/images/modular-complex.jpg"
import moduleAssembly from "@/assets/images/module-assembly.jpg"
import modularUnits from "@/assets/images/modular-units.jpg"
import modularWalkway from "@/assets/images/modular-walkway.jpg"
import officeBuilding from "@/assets/images/office-building.jpg"
import officeCorridor from "@/assets/images/office-corridor.jpg"
import officeOpenSpace from "@/assets/images/office-open-space.jpg"
import ogImage from "@/assets/images/og-image.jpg"
import officeWing from "@/assets/images/office-wing.jpg"
import prefabBuilding from "@/assets/images/prefab-building.jpg"
import technicians from "@/assets/images/technicians.jpg"
import toilets from "@/assets/images/toilets.jpg"

/**
 * Absolute origin used for canonical URLs, hreflang, sitemap, Open Graph images and JSON-LD.
 * 1. NEXT_PUBLIC_SITE_URL when set (the real domain once it points to this site)
 * 2. On Vercel: the production domain for production builds, the deployment URL for previews
 * 3. Local development
 */
function resolveSiteUrl() {
  const env = process.env
  if (env.NEXT_PUBLIC_SITE_URL) return env.NEXT_PUBLIC_SITE_URL
  if (env.VERCEL_ENV === "production" && env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  return `http://localhost:${env.PORT || 3000}`
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "")

export const company = {
  name: "Yves OLOUME SARL",
  shortName: "Yves OLOUME",
  foundingYear: 2010,
  phone: "+237676313333",
  phoneDisplay: "+237 676 31 33 33",
  email: "info@yves-oloume.com",
  whatsapp: "https://wa.me/237676313333",
  street: "114 Rue Joffre",
  district: "Akwa",
  city: "Douala",
  country: "CM",
  postalBox: "BP 18629 Douala",
  mapsUrl: "https://maps.google.com/?q=114+Rue+Joffre,Akwa,Douala",
  geo: { latitude: 4.0511, longitude: 9.6942 },
}

export const images = {
  hero,
  modules,
  worker,
  team,
  site,
  warehouse,
  steel,
  interior,
  engineer,
  toilets,
  technicians,
  officeBuilding,
  officeWing,
  officeCorridor,
  containerOffice,
  prefabBuilding,
  containerInterior,
  modularComplex,
  modularUnits,
  modularWalkway,
  craneInstallation,
  moduleAssembly,
  officeOpenSpace,
  /** 1200×630 social sharing image (Open Graph / Twitter), used on every page. */
  ogImage,
} satisfies Record<string, StaticImageData>

export type ImageKey = keyof typeof images
