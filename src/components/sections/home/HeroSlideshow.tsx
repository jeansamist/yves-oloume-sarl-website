import Image, { type StaticImageData } from "next/image"
import type { CSSProperties } from "react"
import HeroExtraSlides from "./HeroExtraSlides"

/** Seconds between two slides (a new image appears every 4s). */
const SLIDE_SECONDS = 4
/** Seconds of the cross-fade between two slides. */
const FADE_SECONDS = 1.2

type HeroSlideshowProps = {
  slides: StaticImageData[]
  /** Describes the first slide; the following slides are decorative. */
  alt: string
  overlay: string
}

const pct = (seconds: number, cycle: number) => `${((seconds / cycle) * 100).toFixed(3)}%`

/**
 * Keyframes for any number of slides. Each slide fades in on top of the previous
 * one, which stays opaque until fully covered (no brightness dip). The last slide
 * fades out instead, revealing the first one underneath to loop seamlessly.
 */
function buildKeyframes(count: number) {
  const cycle = count * SLIDE_SECONDS
  const fadeIn = pct(FADE_SECONDS, cycle)
  const covered = pct(SLIDE_SECONDS + FADE_SECONDS, cycle)
  const hidden = pct(SLIDE_SECONDS + FADE_SECONDS + 0.01, cycle)
  const fadeOutStart = pct(SLIDE_SECONDS, cycle)
  return `
@keyframes heroFirst { 0%, ${covered} { opacity:1; } ${hidden}, 100% { opacity:0; } }
@keyframes heroMid { 0% { opacity:0; } ${fadeIn}, ${covered} { opacity:1; } ${hidden}, 100% { opacity:0; } }
@keyframes heroLast { 0% { opacity:0; } ${fadeIn}, ${fadeOutStart} { opacity:1; } ${covered}, 100% { opacity:0; } }
.hero-slide { animation:heroMid ${cycle}s linear infinite; }
.hero-slide:first-of-type { animation-name:heroFirst; }
.hero-slide:last-of-type { animation-name:heroLast; }
@media (prefers-reduced-motion: reduce) { .hero-slide { animation:none; } }`
}

/**
 * Cross-fading background slideshow. The first slide is server-rendered (LCP);
 * the others load after the page is idle (see HeroExtraSlides). With
 * `prefers-reduced-motion` only the first slide is shown.
 */
export default function HeroSlideshow({ slides, alt, overlay }: HeroSlideshowProps) {
  const [first, ...rest] = slides
  return (
    <div className="bg-media hero-slides" style={{ "--overlay": overlay } as CSSProperties}>
      {/* Slide 1 is server-rendered and is the LCP image; it gets its animation once the others mount. */}
      <Image
        className="hero-slide"
        src={first}
        alt={alt}
        fill
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
        sizes="100vw"
        style={{ animationDelay: `${-FADE_SECONDS}s` }}
      />
      {rest.length > 0 && (
        <HeroExtraSlides
          slides={rest}
          offset={1}
          slideSeconds={SLIDE_SECONDS}
          fadeSeconds={FADE_SECONDS}
          keyframes={buildKeyframes(slides.length)}
        />
      )}
    </div>
  )
}
