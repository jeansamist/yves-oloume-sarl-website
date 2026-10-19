type NumberedListProps = {
  items: string[]
  className?: string
  pad?: boolean
}

/** A list of labels prefixed with 01, 02… used for sectors, domains and options. */
export default function NumberedList({ items, className, pad = false }: NumberedListProps) {
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <li key={item}>
          <b>{pad ? String(i + 1).padStart(2, "0") : `0${i + 1}`}</b>
          {item}
        </li>
      ))}
    </ul>
  )
}
