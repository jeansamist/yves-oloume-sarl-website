import type { IconItem } from "@/i18n/dictionaries/fr"
import { Stagger, StaggerItem } from "../../motion/Stagger"
import Icon from "../../ui/Icon"

export default function FeatureGrid({ items, iconSize = 27 }: { items: IconItem[]; iconSize?: number }) {
  return (
    <Stagger className="benefit-grid">
      {items.map((item, i) => (
        <StaggerItem as="article" className="benefit" key={item.title}>
          <span className="benefit-number">0{i + 1}</span>
          <span className="icon-box">
            <Icon name={item.icon} size={iconSize} />
          </span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
