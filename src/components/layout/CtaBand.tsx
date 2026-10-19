import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import { company, images } from "@/lib/site"
import BackgroundImage from "../ui/BackgroundImage"
import LinkButton from "../ui/LinkButton"

export default function CtaBand({ locale, t }: { locale: Locale; t: Dictionary["cta"] }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <BackgroundImage src={images.steel} overlay="linear-gradient(90deg,rgba(57,3,6,.95),rgba(110,11,16,.82))" />
      <div className="container cta-inner">
        <div>
          <span className="eyebrow light">{t.eyebrow}</span>
          <h2 id="cta-title">
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h2>
          <p>{t.text}</p>
        </div>
        <div className="cta-actions">
          <LinkButton href={localizePath(locale, routes.quote)}>{t.quote}</LinkButton>
          <LinkButton href={company.whatsapp} outline light>
            {t.whatsapp}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
