import LinkButton from "../../ui/LinkButton"

export default function DetailCta({ title, button, href }: { title: string; button: string; href: string }) {
  return (
    <section className="detail-cta">
      <div className="container">
        <h2>{title}</h2>
        <LinkButton href={href}>{button}</LinkButton>
      </div>
    </section>
  )
}
