"use client"

import { useState, type FormEvent } from "react"
import type { Dictionary } from "@/i18n/get-dictionary"
import Icon from "../../ui/Icon"
import SectionTitle from "../../ui/SectionTitle"

export default function ContactForm({ t }: { t: Dictionary["contact"]["form"] }) {
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    // TODO: send the message to a backend (Server Action, email service or CRM).
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <SectionTitle number="01" label={t.label} title={t.title} />
      {sent ? (
        <p role="status">{t.success}</p>
      ) : (
        <>
          <div className="field-grid">
            <label>
              {t.name}
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              {t.phone}
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              {t.email}
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              {t.subject}
              <select name="subject">
                {t.subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            {t.message}
            <textarea name="message" rows={6} required />
          </label>
          <button className="button" type="submit">
            {t.submit} <Icon name="arrow" />
          </button>
        </>
      )}
    </form>
  )
}
