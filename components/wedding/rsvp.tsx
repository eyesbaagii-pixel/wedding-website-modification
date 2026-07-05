"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { rsvp, wedding } from "@/lib/wedding-config"

type Status = "idle" | "submitting" | "success" | "error"

export function Rsvp() {
  const [status, setStatus] = useState<Status>("idle")

  const configured =
    rsvp.web3formsAccessKey.length > 30 &&
    !rsvp.web3formsAccessKey.includes("PASTE_YOUR")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!configured || status === "submitting") return

    const formData = new FormData(e.currentTarget)
    const name = String(formData.get("name") || "")

    const payload = {
      access_key: rsvp.web3formsAccessKey,
      subject: `Хуримын RSVP — ${name}`,
      from_name: "Хуримын вэбсайт",
      "Таны нэр": name,
      "Утасны дугаар": String(formData.get("phone") || ""),
      "Ирэх эсэх": String(formData.get("attendance") || ""),
      "Хүний тоо": String(formData.get("guests") || ""),
      "Ерөөл, захиас": String(formData.get("message") || ""),
      // Honeypot field — helps Web3Forms filter out spam bots
      botcheck: formData.get("botcheck") ? true : undefined,
    }

    setStatus("submitting")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-4xl text-primary md:text-5xl">
          Та ирэх үү
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        <p className="mt-6 font-sans text-base text-foreground/80">
          {wedding.rsvpDeadline}
        </p>

        {status === "success" ? (
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
                Тохиргоо хүлээгдэж байна: <code>lib/wedding-config.ts</code>{"534cc738-843b-4fa3-b5a8-1cdd3f81b1ec"}
                файлд Web3Forms-ийн Access Key-ээ оруулна уу
                (web3forms.com дээрээс үнэгүй авна).
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-10 space-y-5 text-left">
              {/* Honeypot — hidden from humans, catches spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <Field label="Таны нэр" required>
                <input
                  type="text"
                  name="name"
                  required
                  className="rsvp-input"
                  placeholder="Нэрээ бичнэ үү"
                />
              </Field>

              <Field label="Утасны дугаар" required>
                <input type="tel" name="phone" required className="rsvp-input" />
              </Field>

              <Field label="Та ирэх үү?" required>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[rsvp.options.attendance.yes, rsvp.options.attendance.no].map(
                    (option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-input bg-card px-4 py-3 font-sans text-base text-foreground shadow-sm transition-colors hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={option}
                          required
                          className="h-4 w-4 accent-primary"
                        />
                        {option}
                      </label>
                    ),
                  )}
                </div>
              </Field>

              <Field label="Хэдэн хүн ирэх вэ?" required>
                <select
                  name="guests"
                  required
                  defaultValue=""
                  className="rsvp-input"
                >
                  <option value="" disabled>
                    Сонгоно уу
                  </option>
                  {rsvp.options.guests.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Ерөөлийн үг (заавал биш)">
                <textarea
                  name="message"
                  rows={3}
                  className="rsvp-input resize-none"
                  placeholder="Ерөөлийн үг..."
                />
              </Field>

              {status === "error" && (
                <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 font-sans text-sm text-destructive">
                  Уучлаарай, хариу илгээхэд алдаа гарлаа. Дахин оролдоно уу.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || !configured}
                className="w-full rounded-full bg-primary px-8 py-3.5 font-sans text-base font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "submitting" ? "Илгээж байна..." : "Хариу илгээх"}
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
