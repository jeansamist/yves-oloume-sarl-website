import Image, { type StaticImageData } from "next/image"
import ParallaxLayer from "../motion/ParallaxLayer"
import Reveal from "../motion/Reveal"

type CornerImageProps = {
  src: StaticImageData
  alt: string
  /** Optional second image that fades in on hover. */
  hoverSrc?: StaticImageData
  className?: string
}

const sizes = "(max-width: 760px) 100vw, 50vw"
const PARALLAX = 40

export default function CornerImage({ src, alt, hoverSrc, className = "" }: CornerImageProps) {
  return (
    <Reveal className={`corner-image ${className}`} direction="scale" duration={1}>
      <div className="corner-frame">
        <ParallaxLayer className="parallax-fill" style={{ inset: `-${PARALLAX}px 0` }} range={PARALLAX}>
          <Image src={src} alt={alt} fill placeholder="blur" sizes={sizes} />
          {hoverSrc && <Image className="corner-image-hover" src={hoverSrc} alt="" aria-hidden fill sizes={sizes} />}
        </ParallaxLayer>
      </div>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </Reveal>
  )
}
