"use client"

import { useEffect, useRef, useState } from "react"
import { Music, Pause } from "lucide-react"
import { wedding } from "@/lib/wedding-config"

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  // Try to start the music softly after the first user interaction
  // (browsers block autoplay with sound until the user interacts).
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35

    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {})
      window.removeEventListener("pointerdown", tryPlay)
    }
    window.addEventListener("pointerdown", tryPlay, { once: true })
    return () => window.removeEventListener("pointerdown", tryPlay)
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src={wedding.musicSrc} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Хөгжмийг зогсоох" : "Хөгжим тоглуулах"}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {playing ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Music className="h-5 w-5" />
        )}
        {playing && (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
        )}
      </button>
    </>
  )
}
