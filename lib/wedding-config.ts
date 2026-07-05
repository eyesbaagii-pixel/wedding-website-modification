// Wedding configuration — update these values as needed.

export const wedding = {
  // Couple
  groom: "Д.Балдан-Иш",
  bride: "Ц.Ичинхорлоо",

  // Wedding day (used for the countdown and event details).
  // Format: YYYY-MM-DDTHH:mm:ss (local time)
  // NOTE: Update this to your real ceremony date/time.
  dateISO: "2026-08-01T11:00:00",
  dateLabel: "2026 оны 8-р сарын 1",
  timeLabel: "11:00 цаг",

  // Venue — update to your real location.
  venueName: "Лагерийн бүс",
  venueAddress:
    "Улаанбаатар хот, СХД, 21-р хороо, Ар гүнтийн даваанаас уруудаад Лагерийн бүс",
  // Google Maps embed/link (replace with your venue location)
  mapEmbedUrl:
    "https://www.google.com/maps?q=48.080068,106.823396&z=16&output=embed",
  mapLink: "https://maps.app.goo.gl/6gSkhnyhYgeYDZYy9",

  // RSVP deadline text
  rsvpDeadline:
    "Бэлтгэлээ хангахын тулд 2026 оны 7-р сарын 25-ны дотор хариугаа өгнө үү",

  // Background music file placed in /public/audio
  musicSrc: "/audio/wedding-music.mp3",
} as const

// ---------------------------------------------------------------------------
// RSVP → WEB3FORMS (responses arrive in your email inbox)
// ---------------------------------------------------------------------------
// HOW TO SET UP (2 minutes, free — 250 submissions/month):
// 1. Go to https://web3forms.com
// 2. Enter the email address where you want to receive RSVPs
//    and click "Create Access Key".
// 3. Check your inbox — Web3Forms emails you an Access Key
//    (looks like: a1b2c3d4-e5f6-7890-abcd-ef1234567890).
// 4. Paste that key below and deploy the site.
// ---------------------------------------------------------------------------
export const rsvp = {
  // Paste your Web3Forms access key here:
  web3formsAccessKey: "534cc738-843b-4fa3-b5a8-1cdd3f81b1ec",

  options: {
    attendance: {
      yes: "Тийм, ирнэ",
      no: "Уучлаарай, ирэхгүй",
    },
    guests: ["1", "2", "3", "4", "5+"],
  },
} as const
