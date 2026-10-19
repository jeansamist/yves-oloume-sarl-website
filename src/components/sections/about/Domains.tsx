import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import NumberedList from "../shared/NumberedList"

export default function Domains({ t }: { t: Dictionary["about"]["domains"] }) {
  return (
    <section className="section domains">
      <div className="container">
        <SectionTitle number="03" label={t.label} title={t.title} />
        <NumberedList items={t.items} className="domains-list" pad />
      </div>
    </section>
  )
}
