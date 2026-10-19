import type { Dictionary, SolutionPageData } from "@/i18n/dictionaries/fr"
import { images } from "@/lib/site"
import Reveal from "../../motion/Reveal"
import { Stagger, StaggerItem } from "../../motion/Stagger"
import CornerImage from "../../ui/CornerImage"
import Icon from "../../ui/Icon"

type SolutionOverviewProps = {
  data: SolutionPageData
  t: Dictionary["solutionDetail"]
}

export default function SolutionOverview({ data, t }: SolutionOverviewProps) {
  return (
    <section className="section">
      <div className="container detail-layout">
        <Reveal as="aside" direction="left">
          <span className="eyebrow">{t.customEyebrow}</span>
          <h2>{data.audienceTitle}</h2>
          <Stagger as="ul" className="audience-list">
            {data.audience.map((item, i) => (
              <StaggerItem as="li" key={item}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                {item}
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
        <div>
          <CornerImage src={images[data.detailImage ?? data.image]} alt={data.breadcrumb} />
          <Reveal className="advantages">
            <span className="eyebrow">{t.advantagesLabel}</span>
            <h2>{t.advantagesTitle}</h2>
            <ul>
              {data.advantages.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
