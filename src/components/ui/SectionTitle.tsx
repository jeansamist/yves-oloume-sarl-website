import Reveal from "../motion/Reveal"

type SectionTitleProps = {
  number: string
  label: string
  title: string
  intro?: string
  center?: boolean
}

export default function SectionTitle({ number, label, title, intro, center = false }: SectionTitleProps) {
  return (
    <Reveal className={`section-heading ${center ? "center" : ""}`}>
      <span className="eyebrow">
        {number} — {label}
      </span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  )
}
