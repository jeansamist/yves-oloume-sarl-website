import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  // Keep Vercel preview deployments (and anything with NEXT_PUBLIC_NOINDEX=true) out of search engines.
  if (process.env.NEXT_PUBLIC_NOINDEX === "true" || process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } }
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
