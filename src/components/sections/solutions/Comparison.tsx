import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import LinkButton from "../../ui/LinkButton"
import SectionTitle from "../../ui/SectionTitle"

export default function Comparison({ locale, t }: { locale: Locale; t: Dictionary["solutionsHub"]["comparison"] }) {
  return (
    <section className="section muted">
      <div className="container">
        <SectionTitle number="02" label={t.label} title={t.title} />
        <table className="comparison">
          <thead>
            <tr className="comparison-head">
              <th scope="col">{t.head[0]}</th>
              <th scope="col">{t.head[1]}</th>
              <th scope="col">{t.head[2]}</th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map(([criterion, buy, rent]) => (
              <tr className="comparison-row" key={criterion}>
                <th scope="row">{criterion}</th>
                <td>{buy}</td>
                <td>{rent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <LinkButton href={localizePath(locale, routes.quote)}>{t.button}</LinkButton>
      </div>
    </section>
  )
}
