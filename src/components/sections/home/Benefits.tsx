import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import FeatureGrid from "../shared/FeatureGrid"

export default function Benefits({ t }: { t: Dictionary["home"]["benefits"] }) {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionTitle number="02" label={t.label} title={t.title} />
        <FeatureGrid items={t.items} />
      </div>
    </section>
  )
}
