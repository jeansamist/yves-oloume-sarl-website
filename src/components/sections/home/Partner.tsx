import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import { images } from "@/lib/site"
import CornerImage from "../../ui/CornerImage"
import Icon from "../../ui/Icon"
import LinkButton from "../../ui/LinkButton"
import SectionTitle from "../../ui/SectionTitle"

export default function Partner({ locale, t }: { locale: Locale; t: Dictionary["home"]["partner"] }) {
  return (
    <section className="section partner">
      <div className="container split">
        <div className="partner-visual">
          <CornerImage src={images.craneInstallation} hoverSrc={images.moduleAssembly} alt={t.imageAlt} />
          <div className="experience">
            <strong>15+</strong>
            <span>
              {t.experienceLine1}
              <br />
              {t.experienceLine2}
            </span>
          </div>
        </div>
        <div>
          <SectionTitle number="03" label={t.label} title={t.title} />
          <p className="lead">{t.lead}</p>
          <ul className="check-list">
            {t.points.map((text) => (
              <li key={text}>
                <Icon name="check" />
                {text}
              </li>
            ))}
          </ul>
          <LinkButton href={localizePath(locale, routes.about)}>{t.button}</LinkButton>
        </div>
      </div>
    </section>
  )
}
