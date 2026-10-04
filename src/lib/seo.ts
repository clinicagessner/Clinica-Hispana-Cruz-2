import { SITE_CONFIG } from "@/lib/constants";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

// Landings de Google Ads (RED.md): su <title> y su meta no cambian sin la
// aprobación del usuario (HERMES.md regla 5). Las que estén aquí conservan la
// plantilla. Ginecología, infecciones urinarias e I-693: aprobadas el 2026-10-04
// (usan seoTitle).
export const ADS_LANDING_SLUGS = new Set<string>([]);

/**
 * Título completo (sin la plantilla del layout): con la marca si cabe en 60,
 * y si no, solo el título de la página.
 */
export function seoTitle(title: string): string {
  const withBrand = `${title} | ${SITE_CONFIG.name}`;
  return withBrand.length <= TITLE_MAX ? withBrand : title;
}

/** Corta en el último límite de palabra que quepa. Red de seguridad. */
export function seoDescription(text: string, max: number = DESCRIPTION_MAX): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max + 1);
  const at = cut.lastIndexOf(" ");
  return cut.slice(0, at > 0 ? at : max).replace(/[\s,.;:–—-]+$/, "");
}

/**
 * Imagen OG por defecto. El `openGraph` de una página **reemplaza entero** al
 * del layout: si la página no pone imagen, se queda sin ninguna.
 */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: SITE_CONFIG.name,
};
