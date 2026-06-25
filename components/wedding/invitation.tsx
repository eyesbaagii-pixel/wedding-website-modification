import { wedding } from "@/lib/wedding-config"

export function Invitation() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent-foreground">
          Хайрт хосын урилга
        </p>
        <h2 className="mt-4 font-heading text-4xl text-primary md:text-5xl text-balance">
          Хамтдаа шинэ амьдралаа эхлүүлж байна
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-accent" />
        <p className="mt-8 font-sans text-lg leading-relaxed text-foreground/85 text-pretty">
          Бид хоёрын амьдралын хамгийн чухал, баяр баясгалантай өдрийг
          хамтдаа өнгөрүүлэхийг хүсэн та бүхнийг урьж байна. Таны халуун дулаан
          ерөөл, инээд хөөр бидний баярыг улам гэрэлтүүлэх болно.
        </p>
        <p className="mt-10 font-heading text-2xl text-primary md:text-3xl">
          {wedding.groom} &amp; {wedding.bride}
        </p>
      </div>
    </section>
  )
}
