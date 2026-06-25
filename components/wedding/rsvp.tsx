"use client"

import { Heart, ExternalLink } from "lucide-react"
import { googleForm, wedding } from "@/lib/wedding-config"

export function Rsvp() {
  // Build the public "viewform" link from the configured formResponse URL.
  const formUrl = googleForm.formActionUrl.replace("/formResponse", "/viewform")

  const configured = formUrl.startsWith("http") && formUrl.includes("/viewform")

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

        <div className="mt-10 flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-12 shadow-sm">
          <Heart className="h-10 w-10 fill-primary text-primary" />
          <p className="mt-4 font-heading text-2xl text-primary">
            Хариугаа илгээнэ үү
          </p>
          <p className="mt-2 font-sans text-foreground/80">
            Доорх товчийг дарахад зочны бүртгэлийн маягт шинэ цонхонд нээгдэнэ.
          </p>

          {configured ? (
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-sans text-base font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              RSVP бөглөх
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <p className="mt-8 rounded-lg border border-accent/50 bg-accent/15 px-4 py-3 text-left font-sans text-sm text-accent-foreground">
              Тохиргоо хүлээгдэж байна: <code>lib/wedding-config.ts</code> файлд
              Google Form-ынхоо холбоосыг оруулна уу.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
