"use client"

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react"
import { createContext, useContext, type PointerEvent, type ReactNode } from "react"

type Pointer = { x: MotionValue<number>; y: MotionValue<number> }

const PointerContext = createContext<Pointer | null>(null)

type PointerAreaProps = {
  children?: ReactNode
  className?: string
  "aria-labelledby"?: string
}

/**
 * Section that tracks the mouse position (normalized to -1…1 from the center)
 * for the <PointerLayer> elements inside it. Touch input is ignored.
 */
export function PointerArea({ children, className, ...props }: PointerAreaProps) {
  const spring = { stiffness: 60, damping: 18, mass: 0.6 }
  const x = useSpring(useMotionValue(0), spring)
  const y = useSpring(useMotionValue(0), spring)

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(((event.clientX - rect.left) / rect.width) * 2 - 1)
    y.set(((event.clientY - rect.top) / rect.height) * 2 - 1)
  }

  const onPointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <PointerContext value={{ x, y }}>
      <section className={className} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} {...props}>
        {children}
      </section>
    </PointerContext>
  )
}

type PointerLayerProps = {
  children?: ReactNode
  className?: string
  /** Max shift in px; negative values move against the mouse for a depth effect. */
  depth?: number
}

/** Shifts with the mouse inside the nearest <PointerArea>. */
export function PointerLayer({ children, className, depth = 20 }: PointerLayerProps) {
  const pointer = useContext(PointerContext)
  const reduce = useReducedMotion()
  const fallback = useMotionValue(0)
  const x = useTransform(pointer?.x ?? fallback, (v) => v * depth)
  const y = useTransform(pointer?.y ?? fallback, (v) => v * depth)

  return (
    <motion.div className={className} style={reduce || !pointer ? undefined : { x, y }}>
      {children}
    </motion.div>
  )
}
