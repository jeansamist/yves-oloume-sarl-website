"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import type { ReactNode } from "react"

type ScrollFadeProps = {
  children?: ReactNode
  className?: string
  /** Scroll distance (px) over which the content fades out. */
  distance?: number
}

/** Hero content that drifts down and fades out as the page scrolls past it. */
export default function ScrollFade({ children, className, distance = 600 }: ScrollFadeProps) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, distance], [1, 0])
  const y = useTransform(scrollY, [0, distance], [0, distance * 0.3])

  return (
    <motion.div className={className} style={reduce ? undefined : { opacity, y }}>
      {children}
    </motion.div>
  )
}
