import type { Faq } from "@/i18n/dictionaries/fr"
import { faqSchema } from "@/lib/structured-data"
import JsonLd from "../../ui/JsonLd"
import SectionTitle from "../../ui/SectionTitle"
import Reveal from "../../motion/Reveal"
import FaqAccordion from "./FaqAccordion"

type FaqSectionProps = {
  label: string
  title: string
  items: Faq
  number?: string
}

/** FAQ accordion with FAQPage structured data. Answers stay in the HTML for crawlers. */
export default function FaqSection({ label, title, items, number = "04" }: FaqSectionProps) {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionTitle number={number} label={label} title={title} />
        <Reveal direction="right">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
      <JsonLd data={faqSchema(items)} />
    </section>
  )
}
