// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod) y, desde B2, la página del servicio (caja de revisión
// médica y MedicalWebPage.lastReviewed), para que las fechas no diverjan.
// Fecha del catálogo según el historial de git; las excepciones van en
// SERVICE_DATES con su propia fecha.
export const SERVICES_LAST_REVIEWED = "2026-09-06";
// 2026-10-04: B3 (texto y FAQ propios) y §9 de B1 en las landings de Ads.
export const SERVICE_DATES: Record<string, string> = {
  "condiciones-cronicas": "2026-10-04",
  "tiroides": "2026-10-04",
  "alergias": "2026-10-04",
  "enfermedades-respiratorias": "2026-10-04",
  "prueba-embarazo": "2026-10-04",
  "anticonceptivos": "2026-10-04",
  "extraccion-implantes": "2026-10-04",
  "salud-hombre": "2026-10-04",
  "examen-fisico-escolar": "2026-10-04",
  "examenes-sangre": "2026-10-04",
  "examen-heces": "2026-10-04",
  "prueba-strep": "2026-10-04",
  "prueba-tuberculosis": "2026-10-04",
  "enfermedades-transmision-sexual": "2026-10-04",
  "examen-alcohol-drogas": "2026-10-04",
  "electrocardiograma": "2026-10-04",
  "ultrasonido": "2026-10-04",
  "examen-dot": "2026-10-04",
  "vacunas": "2026-10-04",
  "sueros-vitaminados": "2026-10-04",
  "suturas-heridas": "2026-10-04",
  "curacion-heridas": "2026-10-04",
  "cirugias-menores": "2026-10-04",
  "drenaje-abscesos": "2026-10-04",
  "unas-encarnadas": "2026-10-04",
  "farmacia": "2026-10-04",
  "ginecologia": "2026-10-04",
  "infecciones-urinarias": "2026-10-04",
  "examenes-inmigracion": "2026-10-04",
};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}

// Última edición de contenido de las páginas fijas (historial de git).
export const PAGE_DATES: Record<string, string> = {
  "": "2026-10-04",
  "/servicios": "2026-10-04",
  "/promociones": "2026-10-04",
  "/blog": "2026-10-04",
  "/privacidad": "2026-07-11",
};
