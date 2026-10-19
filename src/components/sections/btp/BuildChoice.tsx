import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import { images } from "@/lib/site"
import Reveal from "../../motion/Reveal"
import CornerImage from "../../ui/CornerImage"
import LinkButton from "../../ui/LinkButton"
import SectionTitle from "../../ui/SectionTitle"

export default function BuildChoice({ locale, t }: { locale: Locale; t: Dictionary["btp"]["choice"] }) {
  return (
    <section className="section muted">
      <div className="container split">
        <CornerImage src={images.steel} alt={t.imageAlt} />
        <Reveal direction="right">
          <SectionTitle number="02" label={t.label} title={t.title} />
          <p className="lead">{t.lead}</p>
          <LinkButton href={localizePath(locale, routes.quote)}>{t.button}</LinkButton>
        </Reveal>
      </div>
    </section>
  )
}
