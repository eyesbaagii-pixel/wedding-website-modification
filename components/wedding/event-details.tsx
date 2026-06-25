import { CalendarHeart, Clock, MapPin } from "lucide-react"
import { wedding } from "@/lib/wedding-config"

export function EventDetails() {
  const items = [
    { icon: CalendarHeart, label: "Огноо", value: wedding.dateLabel },
    { icon: Clock, label: "Цаг", value: wedding.timeLabel },
    { icon: MapPin, label: "Байршил", value: wedding.venueName },
  ]

  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-4xl text-primary md:text-5xl">
          Ёслолын мэдээлэл
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-accent" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
              <p className="mt-1 font-heading text-2xl text-primary">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-sans text-base text-muted-foreground">
          {wedding.venueAddress}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Байршлын газрын зураг"
            src={wedding.mapEmbedUrl}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
