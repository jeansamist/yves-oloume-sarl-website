import type { Locale } from "./config"
import en from "./dictionaries/en"
import fr from "./dictionaries/fr"

export type { Dictionary } from "./dictionaries/fr"

const dictionaries = { fr, en }

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
