import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { localizePath } from "@/lib/routes"
import { images, type ImageKey } from "@/lib/site"
import SolutionCard from "./SolutionCard"

type SolutionsGridProps = {
  locale: Locale
  items: Dictionary["solutions"]
  learnMore: string
  /** Replace the default image of some solutions (by slug) on this page only. */
  imageOverrides?: Partial<Record<string, ImageKey>>
}

export default function SolutionsGrid({ locale, items, learnMore, imageOverrides = {} }: SolutionsGridProps) {
  return (
    <div className="solutions-grid">
      {items.map((item, index) => (
        <SolutionCard
          key={item.slug}
          href={localizePath(locale, `/${item.slug}`)}
          title={item.title}
          text={item.text}
          tag={item.tag}
          image={images[imageOverrides[item.slug] ?? item.image]}
          index={index}
          learnMore={learnMore}
        />
      ))}
    </div>
  )
}
