import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, hasLocale } from "@/i18n/config"
import { allPaths, notFoundPath } from "@/lib/routes"

const knownPaths = new Set(allPaths)

/**
 * - Paths without a locale prefix ("/", legacy "/devis") redirect to French.
 * - Unknown paths under a locale are rewritten to the localized 404 page with
 *   a 404 status, so the error page is fully server-rendered.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const [, firstSegment = "", ...rest] = pathname.split("/")
  const url = request.nextUrl.clone()

  if (!hasLocale(firstSegment)) {
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`
    return NextResponse.redirect(url, pathname === "/" ? 307 : 308)
  }

  const path = `/${rest.join("/")}`.replace(/\/$/, "") || "/"
  if (!knownPaths.has(path)) {
    url.pathname = `/${firstSegment}${notFoundPath}`
    return NextResponse.rewrite(url, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  // Skip Next.js internals, metadata routes and any file with an extension.
  matcher: ["/((?!_next|api|sitemap.xml|robots.txt|manifest.webmanifest|.*\\..*).*)"],
}
