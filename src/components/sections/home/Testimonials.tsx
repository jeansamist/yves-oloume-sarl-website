import type { Dictionary } from "@/i18n/get-dictionary"
import Reveal from "../../motion/Reveal"
import SectionTitle from "../../ui/SectionTitle"

export default function Testimonials({ t }: { t: Dictionary["home"]["testimonials"] }) {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionTitle number="07" label={t.label} title={t.title} />
        <Reveal as="figure" className="quote-card" direction="right">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <strong>{t.author}</strong>
            <span>{t.role}</span>
          </figcaption>
          <small>{t.note}</small>
        </Reveal>
      </div>
    </section>
  )
}
