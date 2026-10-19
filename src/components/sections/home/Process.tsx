import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import ProcessSteps from "../shared/ProcessSteps"

export default function Process({ t }: { t: Dictionary["home"]["process"] }) {
  return (
    <section className="section process grid-bg">
      <div className="container">
        <SectionTitle number="04" label={t.label} title={t.title} center />
        <ProcessSteps steps={t.steps.map(([title, text]) => ({ title, text }))} />
      </div>
    </section>
  )
}
