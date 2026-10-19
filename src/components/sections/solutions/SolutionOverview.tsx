import type { Dictionary, SolutionPageData } from "@/i18n/dictionaries/fr"
import { images } from "@/lib/site"
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
        <aside>
          <span className="eyebrow">{t.customEyebrow}</span>
          <h2>{data.audienceTitle}</h2>
          <ul className="audience-list">
            {data.audience.map((item, i) => (
              <li key={item}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <div>
          <CornerImage src={images[data.image]} alt={data.breadcrumb} />
          <div className="advantages">
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
          </div>
        </div>
      </div>
    </section>
  )
}
