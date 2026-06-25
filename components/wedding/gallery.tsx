const photos = [
  { src: "/images/gallery-1.jpg", className: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/gallery-2.jpg", className: "" },
  { src: "/images/gallery-3.jpg", className: "" },
  { src: "/images/gallery-4.jpg", className: "sm:row-span-2" },
  { src: "/images/gallery-5.jpg", className: "" },
  { src: "/images/gallery-6.jpg", className: "" },
]

export function Gallery() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 h-px w-16 bg-accent" />
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
          {photos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl shadow-sm ${photo.className}`}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={`Хосын дурсамж ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
