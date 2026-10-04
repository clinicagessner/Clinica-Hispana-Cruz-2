// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod) y, desde B2, la página del servicio (caja de revisión
// médica y MedicalWebPage.lastReviewed), para que las fechas no diverjan.
// Fecha del catálogo según el historial de git; las excepciones van en
// SERVICE_DATES con su propia fecha.
export const SERVICES_LAST_REVIEWED = "2026-09-06";
export const SERVICE_DATES: Record<string, string> = {};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}

// Última edición de contenido de las páginas fijas (historial de git).
export const PAGE_DATES: Record<string, string> = {
  "": "2026-09-06",
  "/servicios": "2026-09-06",
  "/promociones": "2026-09-06",
  "/blog": "2026-09-06",
  "/privacidad": "2026-07-11",
};
