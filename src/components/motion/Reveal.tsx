"use client"

import type { ReactNode } from "react"
import { ease, motionTags, type MotionTag } from "./tags"

const offsets = {
  up: { y: 36 },
  down: { y: -36 },
  left: { x: -48 },
  right: { x: 48 },
  scale: { scale: 0.94 },
  none: {},
}

type RevealProps = {
  children?: ReactNode
  as?: MotionTag
  className?: string
  id?: string
  direction?: keyof typeof offsets
  delay?: number
  duration?: number
}

/** Fades and slides its content in the first time it scrolls into view. */
export default function Reveal({ children, as = "div", className, id, direction = "up", delay = 0, duration = 0.8 }: RevealProps) {
  const Tag = motionTags[as] as typeof motionTags.div
  return (
    <Tag
      className={className}
      id={id}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Tag>
  )
}
