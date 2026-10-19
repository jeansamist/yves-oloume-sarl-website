import Image, { type StaticImageData } from "next/image"
import type { CSSProperties } from "react"
import ParallaxLayer from "../motion/ParallaxLayer"

type BackgroundImageProps = {
  src: StaticImageData
  overlay: string
  alt?: string
  priority?: boolean
  /** Scroll parallax range in px (0 = static). */
  parallax?: number
}

/** Full-bleed optimized background image with a gradient overlay. */
export default function BackgroundImage({ src, overlay, alt = "", priority = false, parallax = 0 }: BackgroundImageProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      placeholder="blur"
      sizes="100vw"
    />
  )
  if (parallax) {
    return (
      <ParallaxLayer
        className="bg-media"
        style={{ "--overlay": overlay, inset: `-${parallax}px 0` } as CSSProperties}
        range={parallax}
      >
        {image}
      </ParallaxLayer>
    )
  }
  return (
    <div className="bg-media" style={{ "--overlay": overlay } as CSSProperties}>
      {image}
    </div>
  )
}
