import type { Dictionary } from "@/i18n/get-dictionary"

type MissionVisionProps = {
  mission: Dictionary["about"]["mission"]
  vision: Dictionary["about"]["vision"]
}

export default function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <section className="section muted">
      <div className="container two-cards">
        <article>
          <span className="eyebrow">{mission.label}</span>
          <h2>{mission.title}</h2>
          <p>{mission.text}</p>
        </article>
        <article className="red-card">
          <span className="eyebrow light">{vision.label}</span>
          <h2>{vision.title}</h2>
          <p>{vision.text}</p>
        </article>
      </div>
    </section>
  )
}
