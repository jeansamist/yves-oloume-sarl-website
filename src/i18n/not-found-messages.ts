import type { Locale } from "./config"

/** Kept separate from the dictionaries so the client-side 404 page stays tiny. */
export const notFoundMessages: Record<Locale, { metaTitle: string; eyebrow: string; title: string; button: string }> = {
  fr: {
    metaTitle: "Page introuvable | Yves OLOUME SARL",
    eyebrow: "ERREUR 404",
    title: "Cette page n'existe pas.",
    button: "Revenir à l'accueil",
  },
  en: {
    metaTitle: "Page not found | Yves OLOUME SARL",
    eyebrow: "ERROR 404",
    title: "This page does not exist.",
    button: "Back to home",
  },
}
