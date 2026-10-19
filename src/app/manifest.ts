import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yves OLOUME SARL — Bâtiments préfabriqués",
    short_name: "Yves OLOUME",
    description: "Bâtiments préfabriqués au Cameroun : vente, location et installation.",
    start_url: "/fr",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#920f15",
    lang: "fr",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
