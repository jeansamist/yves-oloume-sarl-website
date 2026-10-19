import Image, { type StaticImageData } from "next/image"
import type { CSSProperties } from "react"

type BackgroundImageProps = {
  src: StaticImageData
  overlay: string
  alt?: string
  priority?: boolean
}

/** Full-bleed optimized background image with a gradient overlay. */
export default function BackgroundImage({ src, overlay, alt = "", priority = false }: BackgroundImageProps) {
  return (
    <div className="bg-media" style={{ "--overlay": overlay } as CSSProperties}>
      <Image src={src} alt={alt} fill priority={priority} placeholder="blur" sizes="100vw" />
    </div>
  )
}
