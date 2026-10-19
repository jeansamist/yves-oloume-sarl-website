import type { StaticImageData } from "next/image"
import type { Locale } from "@/i18n/config"
import logo from "@/assets/images/logo.jpeg"
import { localizePath } from "./routes"
import { company, images, siteUrl } from "./site"
import { absoluteUrl } from "./seo"

const businessId = `${siteUrl}/#business`

export function organizationSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: company.name,
    description,
    url: absoluteUrl(localizePath(locale, "/")),
    logo: absoluteUrl(logo.src),
    image: absoluteUrl(images.ogImage.src),
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.foundingYear),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.street}, ${company.district}`,
      addressLocality: company.city,
      postOfficeBoxNumber: company.postalBox,
      addressCountry: company.country,
    },
    geo: { "@type": "GeoCoordinates", ...company.geo },
    areaServed: [{ "@type": "Country", name: "Cameroon" }, "Central Africa"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
    ],
    sameAs: [company.whatsapp],
  }
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: absoluteUrl(localizePath(locale, "/")),
    name: company.name,
    inLanguage: locale,
    publisher: { "@id": businessId },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }
}

export function serviceSchema({ name, description, path, image }: { name: string; description: string; path: string; image: StaticImageData }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    image: absoluteUrl(image.src),
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: { "@type": "Country", name: "Cameroon" },
  }
}
