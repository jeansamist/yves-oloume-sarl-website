import Link from "next/link"

type BrandProps = {
  href: string
  ariaLabel: string
  tagline: string
  light?: boolean
  onClick?: () => void
}

export default function Brand({ href, ariaLabel, tagline, light = false, onClick }: BrandProps) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href={href} aria-label={ariaLabel} onClick={onClick}>
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
