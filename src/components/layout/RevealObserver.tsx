"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/** Adds the `visible` class to `.reveal` elements as they scroll into view. */
export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".reveal:not(.visible)").forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
