import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import Icon from "../../ui/Icon"

type SolutionCardProps = {
  href: string
  title: string
  text: string
  tag: string
  image: StaticImageData
  index: number
  learnMore: string
}

export default function SolutionCard({ href, title, text, tag, image, index, learnMore }: SolutionCardProps) {
  return (
    <article className="solution-card reveal" style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
      <Link className="card-image" href={href} tabIndex={-1} aria-hidden="true">
        <Image src={image} alt={title} placeholder="blur" sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <div className="card-body">
        <span className="eyebrow">
          0{index + 1} / {tag}
        </span>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link className="text-link" href={href}>
          {learnMore} <Icon name="arrow" size={18} />
          <span className="sr-only"> — {title}</span>
        </Link>
      </div>
    </article>
  )
}
