import type { Dictionary } from "@/i18n/get-dictionary"
import { images } from "@/lib/site"
import CornerImage from "../../ui/CornerImage"
import SectionTitle from "../../ui/SectionTitle"

export default function Story({ t }: { t: Dictionary["about"]["story"] }) {
  return (
    <section className="section">
      <div className="container split">
        <CornerImage src={images.team} alt={t.imageAlt} />
        <div>
          <SectionTitle number="01" label={t.label} title={t.title} />
          <p className="lead">{t.lead}</p>
          <p>{t.text}</p>
        </div>
      </div>
    </section>
  )
}
