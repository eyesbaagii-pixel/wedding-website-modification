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
// RSVP → GOOGLE SHEET (via Apps Script)
// ---------------------------------------------------------------------------
// HOW TO SET UP (5 minutes, completely free):
// 1. Go to sheets.google.com and create a new spreadsheet, e.g. "Wedding RSVP".
// 2. In the sheet: Extensions → Apps Script.
// 3. Delete the default code, paste the contents of apps-script.js, click Save.
// 4. Click Deploy → New deployment → gear icon → Web app.
//      - Execute as: Me
//      - Who has access: Anyone
//    Click Deploy, authorize with your Google account.
// 5. Copy the Web app URL (it ends with /exec) and paste it below.
// ---------------------------------------------------------------------------
export const rsvp = {
  // Paste your Apps Script Web app URL here (must end with /exec)
  endpoint: "https://script.google.com/macros/s/AKfycbw11TZ0x6rVyrpiQVqvesYqXiJHvDzpStkI6DFR69wBJb21r8t9OVVDELgGPhMZTfOwPA/exec",

  options: {
    attendance: {
      yes: "Тийм, ирнэ",
      no: "Уучлаарай, ирэхгүй",
    },
    guests: ["1", "2", "3", "4", "5+"],
  },
} as const
