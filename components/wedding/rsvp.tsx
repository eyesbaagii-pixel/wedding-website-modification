"use client"

import { useRef, useState } from "react"
import { Heart } from "lucide-react"
import { googleForm, wedding } from "@/lib/wedding-config"

export function Rsvp() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const configured =
    googleForm.formActionUrl.startsWith("http") &&
    !Object.values(googleForm.fields).some((id) => id.includes("0000000000"))

  function handleSubmit() {
    // The form posts directly to Google Forms (target = hidden iframe).
    // We optimistically show the success state.
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-4xl text-primary md:text-5xl">
          Хариу өгөх
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        <p className="mt-6 font-sans text-base text-foreground/80">
          {wedding.rsvpDeadline}
        </p>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-12 shadow-sm">
            <Heart className="h-10 w-10 fill-primary text-primary" />
            <p className="mt-4 font-heading text-2xl text-primary">
              Баярлалаа!
            </p>
            <p className="mt-2 font-sans text-foreground/80">
              Таны хариуг хүлээн авлаа. Уулзахыг тэсэн ядан хүлээж байна.
            </p>
          </div>
        ) : (
          <>
            {!configured && (
              <p className="mt-6 rounded-lg border border-accent/50 bg-accent/15 px-4 py-3 text-left font-sans text-sm text-accent-foreground">
                Тохиргоо хүлээгдэж байна: <code>lib/wedding-config.ts</code>{" "}
                файлд Google Form-ынхоо холбоос болон талбаруудын ID-г оруулна
                уу. Үүний дараа илгээсэн хариу шууд Google Sheets рүү очно.
              </p>
            )}

            {/* Hidden iframe receives the Google Forms POST response */}
            <iframe
              ref={iframeRef}
              name="gform-target"
              title="rsvp-target"
              className="hidden"
            />

            <form
              action={configured ? googleForm.formActionUrl : undefined}
              method="POST"
              target="gform-target"
              onSubmit={configured ? handleSubmit : (e) => e.preventDefault()}
              className="mt-10 space-y-5 text-left"
            >
              <Field label="Таны нэр" required>
                <input
                  type="text"
                  name={googleForm.fields.name}
                  required
                  className="rsvp-input"
                  placeholder="Бат-Эрдэнэ"
                />
              </Field>

              <Field label="Утасны дугаар" required>
                <input
                  type="tel"
                  name={googleForm.fields.phone}
                  required
                  className="rsvp-input"
                  placeholder="99112233"
                />
              </Field>

              <Field label="Та ирэх үү?" required>
                <select
                  name={googleForm.fields.attendance}
                  required
                  defaultValue=""
                  className="rsvp-input"
                >
                  <option value="" disabled>
                    Сонгоно уу
                  </option>
                  <option value={googleForm.options.attendance.yes}>
                    {googleForm.options.attendance.yes}
                  </option>
                  <option value={googleForm.options.attendance.no}>
                    {googleForm.options.attendance.no}
                  </option>
                </select>
              </Field>

              <Field label="Хэдэн хүн ирэх вэ?" required>
                <select
                  name={googleForm.fields.guests}
                  required
                  defaultValue=""
                  className="rsvp-input"
                >
                  <option value="" disabled>
                    Сонгоно уу
                  </option>
                  {googleForm.options.guests.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Захиас (сонголтоор)">
                <textarea
                  name={googleForm.fields.message}
                  rows={3}
                  className="rsvp-input resize-none"
                  placeholder="Ерөөлийн үг..."
                />
              </Field>

              <button
                type="submit"
                disabled={submitting || !configured}
                className="w-full rounded-full bg-primary px-8 py-3.5 font-sans text-base font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Илгээж байна..." : "Хариу илгээх"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </span>
      {children}
    </label>
  )
}
