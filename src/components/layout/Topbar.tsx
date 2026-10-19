import type { Dictionary } from "@/i18n/get-dictionary"
import { company } from "@/lib/site"

export default function Topbar({ t }: { t: Dictionary["header"] }) {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span>{t.address}</span>
        <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <span className="topbar-note">{t.topbarNote}</span>
      </div>
    </div>
  )
}
