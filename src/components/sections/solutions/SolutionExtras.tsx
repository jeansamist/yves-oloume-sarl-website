import type { Dictionary } from "@/i18n/get-dictionary"
import Icon from "../../ui/Icon"
import SectionTitle from "../../ui/SectionTitle"

type SolutionExtrasProps = {
  title?: string
  items: string[]
  t: Dictionary["solutionDetail"]
}

export default function SolutionExtras({ title, items, t }: SolutionExtrasProps) {
  return (
    <section className="section muted">
      <div className="container">
        <SectionTitle number="02" label={title || t.extrasLabel} title={`${title} ${t.extrasSuffix}`} />
        <div className="model-grid">
          {items.map((item, i) => (
            <article key={item}>
              <span>0{i + 1}</span>
              <Icon name="home" size={32} />
              <h3>{item}</h3>
              <p>{t.extrasPrice}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
