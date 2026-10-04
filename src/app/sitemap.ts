import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";
import { PAGE_DATES, serviceLastReviewed } from "@/lib/content-dates";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  alternates?: { languages: Record<string, string> };
};

// `lastmod` = última edición real del contenido (git para las páginas fijas,
// content-dates para servicios, dateModified del frontmatter para posts).
// Sin priority ni changefreq: Google los ignora.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  // Una <url> por idioma, cada una con sus alternates recíprocos.
  const entry = (path: string, lastModified: Date): SitemapEntry[] =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${path}`,
      lastModified,
      alternates: createAlternates(path),
    }));

  const staticRoutes = Object.entries(PAGE_DATES).flatMap(([path, date]) =>
    entry(path, new Date(date))
  );

  const serviceRoutes = SERVICES.flatMap((service) =>
    entry(`/servicios/${service.slug}`, new Date(serviceLastReviewed(service.slug)))
  );

  const blogRoutes = getBlogPosts("es").flatMap((post) =>
    entry(`/blog/${post.slug}`, new Date(post.dateModified ?? post.date))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
