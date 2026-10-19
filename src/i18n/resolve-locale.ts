import { notFound } from "next/navigation"
import { hasLocale, type Locale } from "./config"

/** Reads the `[locale]` route param and 404s on unsupported values. */
export async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()
  return locale
}
