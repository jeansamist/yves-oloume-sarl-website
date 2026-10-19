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

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.yves-oloume.com").replace(/\/$/, "")

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
} satisfies Record<string, StaticImageData>

export type ImageKey = keyof typeof images
