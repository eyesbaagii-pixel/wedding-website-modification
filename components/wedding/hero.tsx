import { wedding } from "@/lib/wedding-config"

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: "url(/images/background.png)" }}
        aria-hidden="true"
      />
      {/* Readability overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/55"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        <p className="font-sans text-sm uppercase tracking-[0.4em] text-background/90 md:text-base">
          {wedding.dateLabel}
        </p>

        <div className="my-6 h-px w-16 bg-background/60" aria-hidden="true" />

        {/* Enlarged main title */}
        <h1 className="font-heading text-5xl font-semibold uppercase leading-[0.95] tracking-[0.08em] text-background text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-7xl md:text-8xl lg:text-9xl">
          Хуримын
          <br />
          Урилга
        </h1>

        <div className="my-8 h-px w-16 bg-background/60" aria-hidden="true" />

        <p className="font-heading text-2xl text-background/95 sm:text-3xl md:text-4xl">
          {wedding.groom}
          <span className="mx-3 text-accent">&amp;</span>
          {wedding.bride}
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-background/70 p-1.5">
          <div className="h-2 w-1 rounded-full bg-background/70" />
        </div>
      </div>
    </section>
  )
}
