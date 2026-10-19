import type { Dictionary } from "@/i18n/get-dictionary"
import { company } from "@/lib/site"
import Reveal from "../../motion/Reveal"
import Icon from "../../ui/Icon"
import LinkButton from "../../ui/LinkButton"

export default function MapCard({ t }: { t: Dictionary["contact"]["map"] }) {
  return (
    <Reveal className="map-placeholder" direction="right">
      <Icon name="map" size={42} />
      <h3>{t.title}</h3>
      <p>{t.text}</p>
      <LinkButton href={company.mapsUrl} outline>
        {t.button}
      </LinkButton>
    </Reveal>
  )
}
