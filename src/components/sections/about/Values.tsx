import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import FeatureGrid from "../shared/FeatureGrid"

export default function Values({ t }: { t: Dictionary["about"]["values"] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle number="02" label={t.label} title={t.title} />
        <FeatureGrid items={t.items} iconSize={20} />
      </div>
    </section>
  )
}
