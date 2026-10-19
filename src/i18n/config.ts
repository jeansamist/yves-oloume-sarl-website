export const locales = ["fr", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "fr"

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Open Graph locale codes for each supported language. */
export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
}

/** BCP 47 language tags used in <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  fr: "fr-CM",
  en: "en-CM",
}

export type LocaleParams = { params: Promise<{ locale: string }> }
