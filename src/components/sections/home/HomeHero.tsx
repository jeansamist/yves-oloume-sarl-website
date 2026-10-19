import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath, routes } from "@/lib/routes"
import { images } from "@/lib/site"
import ParallaxLayer from "../../motion/ParallaxLayer"
import { PointerArea, PointerLayer } from "../../motion/PointerParallax"
import ScrollFade from "../../motion/ScrollFade"
import Icon from "../../ui/Icon"
import LinkButton from "../../ui/LinkButton"
import HeroSlideshow from "./HeroSlideshow"

export default function HomeHero({ locale, t }: { locale: Locale; t: Dictionary["home"]["hero"] }) {
  return (
    <PointerArea className="hero">
      {/* Background: slower scroll parallax + moves against the mouse */}
      <ParallaxLayer className="parallax-bg" style={{ inset: "-120px 0" }} range={120}>
        <PointerLayer className="pointer-fill" depth={-18}>
          <HeroSlideshow
            slides={[images.craneInstallation, images.modularComplex, images.modularUnits, images.modularWalkway, images.toilets]}
            alt={t.imageAlt}
            overlay="linear-gradient(90deg,rgba(57,3,6,.92) 0%,rgba(110,11,16,.66) 48%,rgba(20,10,10,.16) 100%)"
          />
        </PointerLayer>
      </ParallaxLayer>
      <PointerLayer className="hero-grid" depth={28} />
      <ScrollFade className="container hero-content">
        <span className="eyebrow light hero-kicker">{t.kicker}</span>
        <h1>
          {t.titleLine1}
          <br />
          {t.titleLine2} <em>{t.titleHighlight}</em>
          <br />
          {t.titleLine3}
        </h1>
        <p>{t.text}</p>
        <div className="hero-actions">
          <LinkButton href={localizePath(locale, routes.quote)}>{t.primary}</LinkButton>
          <LinkButton href={localizePath(locale, routes.projects)} outline light>
            {t.secondary}
          </LinkButton>
        </div>
        <ul className="proofs">
          {t.proofs.map((proof) => (
            <li key={proof}>
              <Icon name="check" />
              {proof}
            </li>
          ))}
        </ul>
      </ScrollFade>
      <div className="scroll-cue" aria-hidden="true">
        <span>{t.scroll}</span>
        <i />
      </div>
    </PointerArea>
  )
}
