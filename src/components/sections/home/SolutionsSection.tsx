import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import SolutionsGrid from "../shared/SolutionsGrid"

// Real Yves OLOUME photos for the home page cards.
const homeImages = {
  "maison-prefabriquee-cameroun": "prefabBuilding",
  "bureau-modulaire-douala": "officeBuilding",
  "kiosques-toilettes-mobiles": "toilets",
} as const

export default function SolutionsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.solutions
  return (
    <section className="section grid-bg">
      <div className="container">
        <SectionTitle number="01" label={t.label} title={t.title} intro={t.intro} />
        <SolutionsGrid locale={locale} items={dict.solutions} learnMore={dict.common.learnMore} imageOverrides={homeImages} />
      </div>
    </section>
  )
}
