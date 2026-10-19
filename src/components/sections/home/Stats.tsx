import { Stagger, StaggerItem } from "../../motion/Stagger"

export default function Stats({ items }: { items: [string, string][] }) {
  return (
    <section className="stats">
      <Stagger as="dl" className="container stats-grid">
        {items.map(([num, label]) => (
          <StaggerItem className="stat" key={label}>
            <dt>{num}</dt>
            <dd>{label}</dd>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
