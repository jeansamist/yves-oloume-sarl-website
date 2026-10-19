export default function Stats({ items }: { items: [string, string][] }) {
  return (
    <section className="stats">
      <dl className="container stats-grid">
        {items.map(([num, label]) => (
          <div className="stat" key={label}>
            <dt>{num}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
