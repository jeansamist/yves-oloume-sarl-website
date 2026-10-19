"use client"

import Image, { type StaticImageData } from "next/image"
import { useEffect, useState } from "react"

type HeroExtraSlidesProps = {
  slides: StaticImageData[]
  /** Index of the first slide rendered here (slide 0 is server-rendered). */
  offset: number
  slideSeconds: number
  fadeSeconds: number
  keyframes: string
}

/**
 * Mounts the remaining hero slides (and starts the cross-fade) only once the page has
 * fully loaded and the browser is idle, so they never compete with the LCP image.
 * Skipped entirely when the user prefers reduced motion.
 */
export default function HeroExtraSlides({ slides, offset, slideSeconds, fadeSeconds, keyframes }: HeroExtraSlidesProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const start = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2000 })
      else timeoutId = setTimeout(() => setReady(true), 300)
    }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => {
      window.removeEventListener("load", start)
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [])

  if (!ready) return null

  return (
    <>
      <style>{keyframes}</style>
      {slides.map((src, i) => (
        <Image
          key={src.src}
          className="hero-slide"
          src={src}
          alt=""
          aria-hidden
          fill
          loading="eager"
          sizes="100vw"
          style={{ animationDelay: `${(i + offset) * slideSeconds - fadeSeconds}s` }}
        />
      ))}
    </>
  )
}
