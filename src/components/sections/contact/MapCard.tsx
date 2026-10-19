import type { Dictionary } from "@/i18n/get-dictionary"
import { company } from "@/lib/site"
import Icon from "../../ui/Icon"
import LinkButton from "../../ui/LinkButton"

export default function MapCard({ t }: { t: Dictionary["contact"]["map"] }) {
  return (
    <div className="map-placeholder">
      <Icon name="map" size={42} />
      <h3>{t.title}</h3>
      <p>{t.text}</p>
      <LinkButton href={company.mapsUrl} outline>
        {t.button}
      </LinkButton>
    </div>
  )
}
