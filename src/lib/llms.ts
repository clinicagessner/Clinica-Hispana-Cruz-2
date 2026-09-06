import {
  SITE_CONFIG,
  CONTACT_INFO,
  SERVICES,
  SOCIAL_LINKS,
  GOOGLE_REVIEWS_DATA,
  CONTENT_LAST_UPDATED,
} from "@/lib/constants";
import { getLocalizedPromotions } from "@/lib/promotions";
import { getBlogPosts } from "@/lib/blog";
import { getServiceFAQs } from "@/lib/service-faqs";
import type { Service } from "@/types";

// Generadores de /llms.txt y /llms-full.txt. Se construyen desde los mismos
// datos que alimentan el sitio (servicios, promociones, blog, contacto) para
// que nunca queden desactualizados respecto a lo que ve un paciente.

const BASE = SITE_CONFIG.baseUrl;

const CATEGORY_ORDER: Service["category"][] = [
  "medicina-general",
  "salud-mujer",
  "examenes",
  "laboratorio",
  "tratamientos",
];

const CATEGORY_LABELS: Record<Service["category"], string> = {
  "medicina-general": "General Medicine / Medicina general",
  "salud-mujer": "Women's Health / Salud de la mujer",
  examenes: "Exams & Certificates / Exámenes y certificados",
  laboratorio: "Lab & Testing / Laboratorio y pruebas",
  tratamientos: "Treatments / Tratamientos",
};

function compactTitle(title: string) {
  return title.split(/\s[:|]\s|:\s/)[0].trim();
}

function servicesByCategory() {
  return CATEGORY_ORDER.map((category) => ({
    label: CATEGORY_LABELS[category],
    services: SERVICES.filter((s) => s.category === category).sort((a, b) => a.order - b.order),
  })).filter((g) => g.services.length > 0);
}

function header() {
  const address = `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`;
  return `# Clínica Hispana Cruz 2 - Houston, TX

> Spanish-speaking walk-in medical clinic in north Houston (Kuykendahl Rd, between Champions and Spring). Primary care, women's health, lab testing, urgent minor care, DOT and I-693 immigration exams. Open every day 9 AM - 9 PM. No appointment and no insurance needed.

Clínica Hispana Cruz 2 is branch 2 of the Clínica Hispana Cruz network, which also operates the Cruz, Cruz 3 and Cruz 4 clinics in the Houston area. Care is provided 100% in Spanish, with English also available. The clinic is Latino-owned.

## Key facts
- Official website: ${BASE}
- Address: ${address}
- Area served: North Houston (Champions, Willowbrook, Klein, Cypress Station, Greenspoint) and Spring, TX
- Phone (calls): ${CONTACT_INFO.phoneFormatted}
- WhatsApp (chat only): ${CONTACT_INFO.whatsappDisplay} - https://wa.me/${CONTACT_INFO.whatsapp}
- Email: ${CONTACT_INFO.email}
- Hours: Monday to Sunday, 9:00 AM - 9:00 PM (open 7 days a week)
- Appointments: not required, walk-ins welcome; you can also call to reserve a time
- Insurance: not required; transparent self-pay pricing
- Payment: cash, debit and credit cards
- Languages: Spanish (primary), English
- Accessibility: wheelchair-accessible entrance, parking and restroom
- Parking: free parking lot and street parking
- Google rating: ${GOOGLE_REVIEWS_DATA.averageRating.toFixed(1)} stars from ${GOOGLE_REVIEWS_DATA.totalReviews}+ reviews (Google Business Profile)
- Google Maps: ${SOCIAL_LINKS.google ?? ""}
- Content last updated: ${CONTENT_LAST_UPDATED}

## Profiles
${[
  ["Facebook", SOCIAL_LINKS.facebook],
  ["Instagram", SOCIAL_LINKS.instagram],
  ["TikTok", SOCIAL_LINKS.tiktok],
  ["Yelp", SOCIAL_LINKS.yelp],
  ["Apple Maps", SOCIAL_LINKS.appleMaps],
]
  .filter(([, url]) => Boolean(url))
  .map(([name, url]) => `- ${name}: ${url}`)
  .join("\n")}
`;
}

function servicesIndex() {
  const groups = servicesByCategory();
  return `## Services (Spanish page / English page)
${groups
  .map(
    (g) => `
### ${g.label}
${g.services
  .map(
    (s) =>
      `- ${compactTitle(s.title)} / ${compactTitle(s.titleEn ?? s.title)}: ${BASE}/servicios/${s.slug} | ${BASE}/en/servicios/${s.slug}`
  )
  .join("\n")}`
  )
  .join("\n")}

- All services: ${BASE}/servicios | ${BASE}/en/servicios
`;
}

function promotionsIndex() {
  const promos = getLocalizedPromotions("es");
  const promosEn = getLocalizedPromotions("en");
  if (promos.length === 0) return "";
  return `## Current promotions (limited time, prices may change; confirm by phone)
${promos
  .map((p, i) => {
    const en = promosEn[i];
    const price = p.price ? ` - ${p.price}` : "";
    return `- ${p.title} / ${en?.title ?? ""}${price}. Includes: ${p.includes.join(", ")}`;
  })
  .join("\n")}

- Promotions page: ${BASE}/promociones | ${BASE}/en/promociones
`;
}

function blogIndex() {
  const posts = getBlogPosts("es");
  const postsEn = getBlogPosts("en");
  if (posts.length === 0) return "";
  return `## Health articles (blog)
${posts
  .map((p) => {
    const en = postsEn.find((e) => e.slug === p.slug);
    const modified = p.dateModified ? `, updated ${p.dateModified}` : "";
    return `- ${p.title} (${p.date}${modified}): ${BASE}/blog/${p.slug}${en ? ` | ${BASE}/en/blog/${p.slug}` : ""}`;
  })
  .join("\n")}

- Blog index: ${BASE}/blog | ${BASE}/en/blog
`;
}

function footer() {
  return `## Machine-readable resources
- Sitemap: ${BASE}/sitemap.xml
- Full version of this file: ${BASE}/llms-full.txt
- Structured data: MedicalClinic, FAQPage, BreadcrumbList, MedicalProcedure and BlogPosting JSON-LD are embedded in each page.
`;
}

export function buildLlmsTxt() {
  return [header(), servicesIndex(), promotionsIndex(), blogIndex(), footer()].join("\n");
}

function servicesFull() {
  const groups = servicesByCategory();
  return `## Services in detail
${groups
  .map(
    (g) => `
### ${g.label}
${g.services
  .map((s) => {
    const faqs = getServiceFAQs(s.slug, "es");
    const faqBlock =
      faqs.length > 0
        ? `\nPreguntas frecuentes:\n${faqs.map((f) => `- P: ${f.question}\n  R: ${f.answer}`).join("\n")}`
        : "";
    return `
#### ${compactTitle(s.title)} / ${compactTitle(s.titleEn ?? s.title)}
- Spanish page: ${BASE}/servicios/${s.slug}
- English page: ${BASE}/en/servicios/${s.slug}
- Summary (EN): ${s.descriptionEn ?? s.description}
- Resumen (ES): ${s.description}
- Includes: ${(s.featuresEn ?? s.features).join("; ")}

${s.longDescription}
${faqBlock}`;
  })
  .join("\n")}`
  )
  .join("\n")}
`;
}

function promotionsFull() {
  const promos = getLocalizedPromotions("es");
  const promosEn = getLocalizedPromotions("en");
  if (promos.length === 0) return "";
  return `## Current promotions in detail
${promos
  .map((p, i) => {
    const en = promosEn[i];
    return `
### ${p.title} / ${en?.title ?? ""}${p.price ? ` - ${p.price}` : ""}
${p.blurb}
${en ? `\n${en.blurb}` : ""}
Includes: ${p.includes.join(", ")}`;
  })
  .join("\n")}

Promotions page: ${BASE}/promociones | ${BASE}/en/promociones
`;
}

function blogFull() {
  const posts = getBlogPosts("es");
  const postsEn = getBlogPosts("en");
  if (posts.length === 0) return "";
  return `## Health articles in detail
${posts
  .map((p) => {
    const en = postsEn.find((e) => e.slug === p.slug);
    return `
### ${p.title}${en ? ` / ${en.title}` : ""}
- Published: ${p.date}${p.dateModified ? ` · Updated: ${p.dateModified}` : ""}
- Author: ${p.author}
- Spanish: ${BASE}/blog/${p.slug}${en ? `\n- English: ${BASE}/en/blog/${p.slug}` : ""}
- ${p.description}${en ? `\n- ${en.description}` : ""}`;
  })
  .join("\n")}
`;
}

export function buildLlmsFullTxt() {
  return [header(), servicesFull(), promotionsFull(), blogFull(), footer()].join("\n");
}
