import { Hero } from "@/components/wedding/hero"
import { Countdown } from "@/components/wedding/countdown"
import { Invitation } from "@/components/wedding/invitation"
import { Gallery } from "@/components/wedding/gallery"
import { EventDetails } from "@/components/wedding/event-details"
import { Rsvp } from "@/components/wedding/rsvp"
import { Footer } from "@/components/wedding/footer"
import { MusicPlayer } from "@/components/wedding/music-player"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <Hero />
      <Countdown />
      <Invitation />
      <Gallery />
      <EventDetails />
      <Rsvp />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
