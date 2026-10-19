import type { Dictionary } from "@/i18n/get-dictionary"
import SectionTitle from "../../ui/SectionTitle"
import ProcessSteps from "../shared/ProcessSteps"

export default function BtpProcess({ t }: { t: Dictionary["btp"]["process"] }) {
  return (
    <section className="section process">
      <div className="container">
        <SectionTitle number="03" label={t.label} title={t.title} />
        <ProcessSteps steps={t.steps.map((title) => ({ title }))} />
      </div>
    </section>
  )
}
