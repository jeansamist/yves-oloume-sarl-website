import Link from "next/link"
import type { ReactNode } from "react"
import Icon from "./Icon"

type LinkButtonProps = {
  href: string
  children: ReactNode
  outline?: boolean
  light?: boolean
}

export default function LinkButton({ href, children, outline = false, light = false }: LinkButtonProps) {
  const className = ["button", outline && "button-outline", light && "button-light"].filter(Boolean).join(" ")
  const content = (
    <>
      {children}
      <Icon name="arrow" size={18} />
    </>
  )
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a className={className} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
        {content}
      </a>
    )
  }
  return (
    <Link className={className} href={href}>
      {content}
    </Link>
  )
}
