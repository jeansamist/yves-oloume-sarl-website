import type { Metadata, Viewport } from "next"
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import type { ReactNode } from "react"
import FloatingActions from "@/components/layout/FloatingActions"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import MegaMenu from "@/components/layout/MegaMenu"
import RevealObserver from "@/components/layout/RevealObserver"
import Topbar from "@/components/layout/Topbar"
import JsonLd from "@/components/ui/JsonLd"
import { htmlLang, locales, type LocaleParams } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { resolveLocale } from "@/i18n/resolve-locale"
import { languageAlternates } from "@/lib/seo"
import { company, siteUrl } from "@/lib/site"
import { organizationSchema, websiteSchema } from "@/lib/structured-data"
import "../globals.css"

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" })
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
})
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: "#920f15",
  width: "device-width",
  initialScale: 1,
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.defaultTitle,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: company.name,
    authors: [{ name: company.name }],
    creator: company.name,
    publisher: company.name,
    category: "construction",
    alternates: { languages: languageAlternates("/") },
    formatDetection: { telephone: true, email: true, address: true },
    icons: { icon: "/favicon.svg" },
  }
}

export default async function LocaleLayout({ children, params }: { children: ReactNode } & LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)

  return (
    <html lang={htmlLang[locale]} className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          {dict.common.skipToContent}
        </a>
        <Topbar t={dict.header} />
        <Header
          locale={locale}
          t={dict.header}
          common={dict.common}
          megaMenu={<MegaMenu locale={locale} t={dict.header} solutions={dict.solutions} />}
        />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
        <FloatingActions locale={locale} t={dict.floating} />
        <RevealObserver />
        <JsonLd data={[organizationSchema(locale, dict.meta.description), websiteSchema(locale)]} />
      </body>
    </html>
  )
}
