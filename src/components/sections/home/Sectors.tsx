import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import NumberedList from "../shared/NumberedList"

export default function Sectors({ t }: { t: Dictionary["home"]["sectors"] }) {
  return (
    <section className="sectors">
      <div className="container">
        <SectionTitle number="06" label={t.label} title={t.title} center />
        <NumberedList items={t.items} className="sector-list" />
      </div>
    </section>
  )
}
