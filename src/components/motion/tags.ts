import { motion } from "motion/react"

/** HTML elements the motion wrappers can render as (keeps semantic markup). */
export const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  figure: motion.figure,
  form: motion.form,
  address: motion.address,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  dl: motion.dl,
}

export type MotionTag = keyof typeof motionTags

/** Shared easing (same curve as the CSS `--ease` variable). */
export const ease = [0.22, 1, 0.36, 1] as const
