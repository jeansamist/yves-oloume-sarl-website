"use client"

import { useId, useState } from "react"
import type { Faq } from "@/i18n/dictionaries/fr"
import Icon from "../../ui/Icon"

export default function FaqAccordion({ items }: { items: Faq }) {
  const [open, setOpen] = useState(0)
  const id = useId()

  return (
    <div className="accordion">
      {items.map(([question, answer], i) => {
        const isOpen = open === i
        return (
          <article className={isOpen ? "open" : ""} key={question}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
              >
                <span>{question}</span>
                <Icon name={isOpen ? "x" : "plus"} />
              </button>
            </h3>
            <div id={`${id}-${i}`}>
              <p>{answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
