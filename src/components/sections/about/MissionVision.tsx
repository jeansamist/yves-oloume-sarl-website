import Reveal from "../../motion/Reveal"
import type { Dictionary } from "@/i18n/get-dictionary"

type MissionVisionProps = {
  mission: Dictionary["about"]["mission"]
  vision: Dictionary["about"]["vision"]
}

export default function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <section className="section muted">
      <div className="container two-cards">
        <Reveal as="article" direction="left">
          <span className="eyebrow">{mission.label}</span>
          <h2>{mission.title}</h2>
          <p>{mission.text}</p>
        </Reveal>
        <Reveal as="article" className="red-card" direction="right" delay={0.1}>
          <span className="eyebrow light">{vision.label}</span>
          <h2>{vision.title}</h2>
          <p>{vision.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
