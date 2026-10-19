import type { ReactNode } from "react"

export type IconName =
  | "arrow"
  | "box"
  | "building"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "factory"
  | "hardhat"
  | "home"
  | "mail"
  | "map"
  | "menu"
  | "phone"
  | "plus"
  | "ruler"
  | "shield"
  | "tools"
  | "truck"
  | "users"
  | "x"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </>
  ),
  box: (
    <>
      <path d="m21 8-9 5-9-5" />
      <path d="m3 8 9-5 9 5v8l-9 5-9-5Z" />
      <path d="M12 13v8" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M8 10h2M14 10h2M8 14h2M14 14h2M9 21v-3h6v3" />
    </>
  ),
  calendar: (
    <>
      <path d="M3 5h18v16H3z" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 3V9l6 3V4h6v17Z" />
      <path d="M7 17h2M13 17h2M18 8h3" />
    </>
  ),
  hardhat: (
    <>
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M3 14h18v4H3zM12 6v8" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  map: (
    <>
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" />
      <path d="M9 3v15M15 6v15" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-5.5-3.5-7-7l2-2Z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  ruler: (
    <>
      <path d="m4 17 13-13 3 3L7 20H4Z" />
      <path d="m13 8 3 3M10 11l2 2M7 14l3 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  tools: (
    <>
      <path d="m14 6 4-4 4 4-4 4" />
      <path d="m16 8-8 8" />
      <path d="m7 14 3 3-4 4-3-3Z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 5h11v12H3zM14 9h4l3 4v4h-7Z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3 20c0-4 2-7 6-7s6 3 6 7M15 14c3 0 5 2 5 5" />
    </>
  ),
  x: <path d="M5 5l14 14M19 5 5 19" />,
}

export default function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {paths[name]}
    </svg>
  )
}
