import type { Dictionary } from "@/i18n/get-dictionary"
import { company } from "@/lib/site"
import { Stagger, StaggerItem } from "../../motion/Stagger"
import Icon, { type IconName } from "../../ui/Icon"

export default function ContactCards({ t }: { t: Dictionary["contact"] }) {
  const cards: { icon: IconName; title: string; text: string; href?: string }[] = [
    { icon: "map", title: t.cards.address, text: t.cards.addressText, href: company.mapsUrl },
    { icon: "phone", title: t.cards.phone, text: `${company.phoneDisplay} — ${t.cards.phoneAction}`, href: `tel:${company.phone}` },
    { icon: "mail", title: t.cards.whatsapp, text: `${company.phoneDisplay} — ${t.cards.whatsappAction}`, href: company.whatsapp },
    { icon: "mail", title: t.cards.email, text: company.email, href: `mailto:${company.email}` },
  ]

  return (
    <section className="section contact">
      <div className="container">
        <Stagger as="address" className="contact-cards">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
            <a href={card.href} target={card.href?.startsWith("http") ? "_blank" : undefined} rel="noopener">
              <Icon name={card.icon} size={28} />
              <span>{card.title}</span>
              <strong>{card.text}</strong>
            </a>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="hours">
          <Icon name="clock" />
          {t.hours}
        </p>
      </div>
    </section>
  )
}
