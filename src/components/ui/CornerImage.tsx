import Image, { type StaticImageData } from "next/image"

type CornerImageProps = {
  src: StaticImageData
  alt: string
  className?: string
}

export default function CornerImage({ src, alt, className = "" }: CornerImageProps) {
  return (
    <div className={`corner-image ${className}`}>
      <Image src={src} alt={alt} placeholder="blur" sizes="(max-width: 760px) 100vw, 50vw" />
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </div>
  )
}
