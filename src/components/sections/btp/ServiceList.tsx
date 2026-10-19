import type { Dictionary } from "@/i18n/get-dictionary"
import Icon from "../../ui/Icon"
import SectionTitle from "../../ui/SectionTitle"

export default function ServiceList({ t }: { t: Dictionary["btp"]["services"] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle number="01" label={t.label} title={t.title} />
        <div className="service-list">
          {t.items.map((item, i) => (
            <article key={item.title}>
              <span>0{i + 1}</span>
              <Icon name={item.icon} size={30} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
