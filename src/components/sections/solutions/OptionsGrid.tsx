import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import NumberedList from "../shared/NumberedList"

export default function OptionsGrid({ t }: { t: Dictionary["solutionsHub"]["options"] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle number="03" label={t.label} title={t.title} />
        <NumberedList items={t.items} className="option-grid" />
      </div>
    </section>
  )
}
