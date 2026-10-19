"use client"

import { useRef, useState, type FormEvent } from "react"
import type { Dictionary } from "@/i18n/get-dictionary"
import { company } from "@/lib/site"
import Icon, { type IconName } from "../../ui/Icon"

const typeIcon = (i: number): IconName => (i < 2 ? "building" : i < 6 ? "box" : "tools")

export default function QuoteForm({ t }: { t: Dictionary["quote"]["form"] }) {
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const next = () => {
    // Validate only the current step's fields before moving on.
    const fieldset = formRef.current?.querySelectorAll("fieldset")[step - 1]
    const fields = Array.from(fieldset?.elements ?? []) as HTMLInputElement[]
    const invalid = fields.find((field) => !field.checkValidity())
    if (invalid) return invalid.reportValidity()
    setStep(step + 1)
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    // TODO: send the request to a backend (Server Action, email service or CRM).
    setSent(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="quote-form">
      <div className="progress">
        <span>
          {t.step} {step} {t.of} 3
        </span>
        <div role="progressbar" aria-valuemin={1} aria-valuemax={3} aria-valuenow={step}>
          <i style={{ width: `${step * 33.333}%` }} />
        </div>
      </div>
      {sent ? (
        <div className="success" role="status">
          <span>
            <Icon name="check" size={38} />
          </span>
          <h2>{t.successTitle}</h2>
          <p>{t.successText}</p>
          <a className="button" href={company.whatsapp} target="_blank" rel="noopener">
            {t.whatsapp} <Icon name="arrow" />
          </a>
        </div>
      ) : (
        <form ref={formRef} onSubmit={submit}>
          <fieldset hidden={step !== 1}>
            <legend>
              <span>01</span>
              {t.step1}
            </legend>
            <p className="label">{t.buildingType}</p>
            <div className="choice-grid">
              {t.types.map((item, i) => (
                <label className="choice" key={item}>
                  <input type="radio" name="type" value={item} required={i === 0} />
                  <Icon name={typeIcon(i)} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <p className="label">{t.purchaseOrRent}</p>
            <div className="radio-row">
              {t.modes.map((item) => (
                <label key={item}>
                  <input type="radio" name="mode" value={item} />
                  {item}
                </label>
              ))}
            </div>
            <label>
              {t.size}
              <input type="text" name="size" placeholder={t.sizePlaceholder} />
            </label>
          </fieldset>
          <fieldset hidden={step !== 2}>
            <legend>
              <span>02</span>
              {t.step2}
            </legend>
            <div className="field-grid">
              <label>
                {t.city}
                <input type="text" name="city" placeholder={t.cityPlaceholder} />
              </label>
              <label>
                {t.land}
                <select name="land">
                  {t.landOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label>
                {t.deadline}
                <select name="deadline">
                  {t.deadlineOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label>
                {t.budget}
                <select name="budget">
                  {t.budgetOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              {t.details}
              <textarea name="details" rows={5} placeholder={t.detailsPlaceholder} />
            </label>
          </fieldset>
          <fieldset hidden={step !== 3}>
            <legend>
              <span>03</span>
              {t.step3}
            </legend>
            <div className="field-grid">
              <label>
                {t.name}
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                {t.company}
                <input type="text" name="company" autoComplete="organization" />
              </label>
              <label>
                {t.phone}
                <input type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label>
                {t.email}
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label className="consent">
              <input type="checkbox" name="consent" required />
              {t.consent}
            </label>
          </fieldset>
          <div className="form-nav">
            {step > 1 && (
              <button type="button" className="button secondary" onClick={() => setStep(step - 1)}>
                {t.back}
              </button>
            )}
            {step < 3 ? (
              <button type="button" className="button" onClick={next}>
                {t.next} <Icon name="arrow" />
              </button>
            ) : (
              <button className="button" type="submit">
                {t.submit} <Icon name="arrow" />
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}
