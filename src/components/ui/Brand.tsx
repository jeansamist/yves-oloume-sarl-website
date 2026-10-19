import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo.jpeg"

type BrandProps = {
  href: string
  ariaLabel: string
  tagline: string
  /** Light variant for dark backgrounds: text mark instead of the (white-background) logo image. */
  light?: boolean
  priority?: boolean
  onClick?: () => void
}

export default function Brand({ href, ariaLabel, tagline, light = false, priority = false, onClick }: BrandProps) {
  if (!light) {
    return (
      <Link className="brand" href={href} aria-label={ariaLabel} onClick={onClick}>
        <Image className="brand-logo" src={logo} alt="" priority={priority} sizes="160px" />
      </Link>
    )
  }

  return (
    <Link className="brand brand-light" href={href} aria-label={ariaLabel} onClick={onClick}>
      <span className="brand-mark">
        <span />
        <span />
        <span />
      </span>
      <span>
        <strong>YVES OLOUME</strong>
        <small>{tagline}</small>
      </span>
    </Link>
  )
}
