"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef, type CSSProperties, type ReactNode } from "react"

type ParallaxLayerProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  /** Max vertical shift in px while the element crosses the viewport (negative = moves up). */
  range?: number
}

/**
 * Moves its content vertically as the page scrolls. The layer must overscan its
 * container by `range` px (see `.parallax-bg` / `.parallax-fill` in globals.css).
 */
export default function ParallaxLayer({ children, className, style, range = 80 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  return (
    <motion.div ref={ref} className={className} style={reduce ? style : { ...style, y }}>
      {children}
    </motion.div>
  )
}
