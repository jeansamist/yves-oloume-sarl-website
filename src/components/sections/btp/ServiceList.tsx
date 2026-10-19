import type { Dictionary } from "@/i18n/get-dictionary"
import { Stagger, StaggerItem } from "../../motion/Stagger"
import Icon from "../../ui/Icon"
import SectionTitle from "../../ui/SectionTitle"

export default function ServiceList({ t }: { t: Dictionary["btp"]["services"] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle number="01" label={t.label} title={t.title} />
        <Stagger className="service-list">
          {t.items.map((item, i) => (
            <StaggerItem as="article" key={item.title}>
              <span>0{i + 1}</span>
              <Icon name={item.icon} size={30} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
