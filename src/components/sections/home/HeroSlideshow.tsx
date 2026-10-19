import Image, { type StaticImageData } from "next/image"
import type { CSSProperties } from "react"

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
 * CSS-only cross-fading background slideshow (no client JavaScript).
 * The first slide is the LCP image and is visible immediately; with
 * `prefers-reduced-motion` only the first slide is shown.
 */
export default function HeroSlideshow({ slides, alt, overlay }: HeroSlideshowProps) {
  return (
    <div className="bg-media hero-slides" style={{ "--overlay": overlay } as CSSProperties}>
      {slides.length > 1 && <style>{buildKeyframes(slides.length)}</style>}
      {slides.map((src, i) => (
        <Image
          key={src.src}
          className="hero-slide"
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          fill
          priority={i === 0}
          placeholder={i === 0 ? "blur" : "empty"}
          sizes="100vw"
          // Negative offset so slide 1 starts fully visible; each next slide fades in over the previous one.
          style={{ animationDelay: `${i * SLIDE_SECONDS - FADE_SECONDS}s` }}
        />
      ))}
    </div>
  )
}
