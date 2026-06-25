// Wedding configuration — update these values as needed.

export const wedding = {
  // Couple
  groom: "Д.Балдан-Иш",
  bride: "Ц.Ичинхорлоо",

  // Wedding day (used for the countdown and event details).
  // Format: YYYY-MM-DDTHH:mm:ss (local time)
  // NOTE: Update this to your real ceremony date/time.
  dateISO: "2026-08-01T17:00:00",
  dateLabel: "2026 оны 8-р сарын 1",
  timeLabel: "17:00 цаг",

  // Venue — update to your real location.
  venueName: "Чингис хааны өргөө",
  venueAddress: "Улаанбаатар хот",
  // Google Maps embed/link (replace with your venue location)
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ulaanbaatar&output=embed",
  mapLink: "https://maps.google.com/?q=Ulaanbaatar",

  // RSVP deadline text
  rsvpDeadline: "2026 оны 7-р сарын 25-ны дотор хариугаа өгнө үү",

  // Background music file placed in /public/audio
  musicSrc: "/audio/wedding-music.mp3",
} as const

// ---------------------------------------------------------------------------
// GOOGLE FORM → GOOGLE SHEETS
// ---------------------------------------------------------------------------
// Paste your Google Form details below so RSVP submissions are saved to your
// connected Google Sheet.
//
// HOW TO FIND THESE:
// 1. Open your Google Form, click the three dots → "Get pre-filled link".
// 2. Fill the fields with sample text and click "Get link".
// 3. The generated URL contains values like `entry.123456789=...`.
//    Those `entry.XXXXX` numbers are your field IDs below.
// 4. The form action URL is your form URL with `/viewform` replaced by
//    `/formResponse`.
//
// Example formActionUrl:
//   https://docs.google.com/forms/d/e/FORM_ID/formResponse
// ---------------------------------------------------------------------------
export const googleForm = {
  formActionUrl: "REPLACE_WITH_YOUR_GOOGLE_FORM_RESPONSE_URL",
  fields: {
    name: "entry.0000000000", // Нэр
    phone: "entry.0000000000", // Утас
    attendance: "entry.0000000000", // Ирэх эсэх
    guests: "entry.0000000000", // Хүний тоо
    message: "entry.0000000000", // Захиас (optional)
  },
} as const
