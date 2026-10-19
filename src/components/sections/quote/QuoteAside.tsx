import Image from "next/image"
import type { Dictionary } from "@/i18n/get-dictionary"
import { company, images } from "@/lib/site"
import Reveal from "../../motion/Reveal"
import Icon from "../../ui/Icon"

export default function QuoteAside({ t }: { t: Dictionary["quote"]["aside"] }) {
  return (
    <Reveal as="aside" className="quote-aside" direction="right">
      <Image src={images.engineer} alt={t.imageAlt} placeholder="blur" sizes="(max-width: 1100px) 50vw, 30vw" />
      <div>
        <span className="eyebrow light">{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <a href={`tel:${company.phone}`}>
          <Icon name="phone" />
          {company.phoneDisplay}
        </a>
        <a href={company.whatsapp} target="_blank" rel="noopener">
          <Icon name="mail" />
          {t.whatsapp}
        </a>
        <a href={`mailto:${company.email}`}>
          <Icon name="mail" />
          {company.email}
        </a>
        <ul>
          {t.points.map((point) => (
            <li key={point}>
              <Icon name="check" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
