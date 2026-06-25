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
          Эрхэм хүндэт таныг гэр бүлийн хамт Хаан бугуйвчаар жаргал нэгтгэж,
          Хатан сүйхээр заяа зангидаж буй бидний{" "}
          <span className="text-primary">«Гэрлэх ёслолын цайллага»</span>-т
          хүрэлцэн ирэхийг хүндэтгэн урьж байна.
        </p>
        <p className="mt-8 font-heading text-xl italic leading-relaxed text-primary text-pretty md:text-2xl">
          Хорвоо дэлхийн уудамд хос хун шиг амьдрах гэж
          <br />
          Хоёр аав ээжээ хамгаас илүү халамжлах гэж
          <br />
          Хонгор үрийн зулайг хоёулаа зэрэгцэн үнэрлэх гэж
          <br />
          Нартын жамыг дагаж насаараа хамтдаа амьдрах гэж
          <br />
          Айл боллоо бид хоёр тань
          <br />
          Урьсан бидний ураг батжиж
          <br />
          Уригдсан таны өлмий бат оршиг
        </p>
        <p className="mt-10 font-heading text-2xl text-primary md:text-3xl">
          {wedding.groom} &amp; {wedding.bride}
        </p>
      </div>
    </section>
  )
}
