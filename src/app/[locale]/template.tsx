import type { ReactNode } from "react"
import PageTransition from "@/components/motion/PageTransition"

/** Templates remount on every navigation, which triggers the page enter transition. */
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
