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
    "https://www.google.com/maps?q=Songinokhairkhan+District+21st+khoroo+Ulaanbaatar&output=embed",
  mapLink:
    "https://maps.google.com/?q=Songinokhairkhan+District+21st+khoroo+Ulaanbaatar",

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
  formActionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdgeQU3wwM_zFnBWdpnm4Ort6BVYsBlWO9qUO2cMbUv9jQF2g/formResponse",
  fields: {
    name: "entry.1159086757", // Таны нэр
    phone: "entry.1149540383", // Утасны дугаар
    attendance: "entry.1932609704", // Та ирэх боломжтой юу?
    guests: "entry.1678963508", // Хэдэн хүн ирэх вэ?
    message: "entry.789765406", // Ерөөл, захиас (заавал биш)
  },
  // Exact option values — these MUST match the Google Form choices exactly.
  options: {
    attendance: {
      yes: "Тийм, ирнэ",
      no: "Уучлаарай, ирэхгүй",
    },
    guests: ["1", "2", "3", "4", "5+"],
  },
} as const
