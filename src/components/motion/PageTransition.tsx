"use client"

import { motion } from "motion/react"
import { useEffect, type ReactNode } from "react"
import { ease } from "./tags"

// False during SSR and the first hydration so the initial page is never hidden
// (good for LCP and crawlers); true for every client-side navigation afterwards.
let hasNavigated = false

/** Enter transition for page content, used by app/[locale]/template.tsx. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const animate = hasNavigated
  useEffect(() => {
    hasNavigated = true
  }, [])

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24, filter: "blur(6px)" } : false}
      // Clear the filter afterwards so it never affects fixed/sticky descendants.
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  )
}
