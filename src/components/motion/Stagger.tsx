"use client"

import { stagger, type Variants } from "motion/react"
import type { CSSProperties, ReactNode } from "react"
import { ease, motionTags, type MotionTag } from "./tags"

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: stagger(0.09) } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

type StaggerProps = {
  children?: ReactNode
  as?: MotionTag
  className?: string
  style?: CSSProperties
  role?: string
  "aria-label"?: string
}

/** Container that reveals its <StaggerItem> children one after another when scrolled into view. */
export function Stagger({ children, as = "div", ...props }: StaggerProps) {
  const Tag = motionTags[as] as typeof motionTags.div
  return (
    <Tag {...props} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
      {children}
    </Tag>
  )
}

/** Child of <Stagger>; inherits the reveal timing from its parent. */
export function StaggerItem({ children, as = "div", ...props }: StaggerProps) {
  const Tag = motionTags[as] as typeof motionTags.div
  return (
    <Tag {...props} variants={item}>
      {children}
    </Tag>
  )
}
