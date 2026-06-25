import { wedding } from "@/lib/wedding-config"

export function Footer() {
  return (
    <footer className="bg-primary px-6 py-16 text-center text-primary-foreground">
      <p className="font-heading text-3xl md:text-4xl">
        {wedding.groom} &amp; {wedding.bride}
      </p>
      <div className="mx-auto my-5 h-px w-12 bg-primary-foreground/40" />
      <p className="font-sans text-sm tracking-widest text-primary-foreground/80">
        {wedding.dateLabel}
      </p>
    </footer>
  )
}
