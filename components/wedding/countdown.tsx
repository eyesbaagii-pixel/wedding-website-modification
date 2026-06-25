"use client"

import { useEffect, useState } from "react"
import { wedding } from "@/lib/wedding-config"

const LABELS: Record<string, string> = {
  days: "Өдөр",
  hours: "Цаг",
  minutes: "Минут",
  seconds: "Секунд",
}

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const target = new Date(wedding.dateISO).getTime()
  const [time, setTime] = useState(() => getTimeLeft(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <section className="bg-secondary px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl text-primary md:text-4xl">
          Хайрт өдөр хүртэл
        </h2>
        <div className="mx-auto mt-3 h-px w-12 bg-accent" />

        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div
              key={unit}
              className="flex flex-col items-center rounded-xl bg-card px-2 py-5 shadow-sm sm:py-7"
            >
              <span className="font-heading text-3xl font-semibold tabular-nums text-primary sm:text-5xl">
                {mounted ? String(time[unit]).padStart(2, "0") : "--"}
              </span>
              <span className="mt-1 font-sans text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                {LABELS[unit]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
