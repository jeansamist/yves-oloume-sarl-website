import Image, { type StaticImageData } from "next/image"

type CornerImageProps = {
  src: StaticImageData
  alt: string
  /** Optional second image that fades in on hover. */
  hoverSrc?: StaticImageData
  className?: string
}

const sizes = "(max-width: 760px) 100vw, 50vw"

export default function CornerImage({ src, alt, hoverSrc, className = "" }: CornerImageProps) {
  return (
    <div className={`corner-image ${className}`}>
      <Image src={src} alt={alt} placeholder="blur" sizes={sizes} />
      {hoverSrc && <Image className="corner-image-hover" src={hoverSrc} alt="" aria-hidden sizes={sizes} />}
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </div>
  )
}
