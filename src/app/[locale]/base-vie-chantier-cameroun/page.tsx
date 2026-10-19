import type { Metadata } from "next"
import SolutionDetailPage, { solutionMetadata } from "@/components/sections/solutions/SolutionDetailPage"
import type { LocaleParams } from "@/i18n/config"
import { resolveLocale } from "@/i18n/resolve-locale"

const slug = "base-vie-chantier-cameroun"

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return solutionMetadata(await resolveLocale(params), slug)
}

export default async function Page({ params }: LocaleParams) {
  return <SolutionDetailPage locale={await resolveLocale(params)} slug={slug} />
}
