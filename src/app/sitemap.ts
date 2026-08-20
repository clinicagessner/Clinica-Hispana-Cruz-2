import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG, CONTENT_LAST_UPDATED } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  // Fecha fija por deploy: un lastmod que cambia en cada request hace que
  // Google deje de confiar en el dato
  const lastUpdated = new Date(CONTENT_LAST_UPDATED);

  // Helper to create alternates for hreflang
  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  // Static pages
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/promociones", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/privacidad", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  const staticRoutes: SitemapEntry[] = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${page.path}`,
      lastModified: lastUpdated,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: createAlternates(page.path),
    }))
  );

  // Service pages
  const serviceRoutes: SitemapEntry[] = SERVICES.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/servicios/${service.slug}`,
      lastModified: lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: createAlternates(`/servicios/${service.slug}`),
    }))
  );

  // Blog posts
  const blogPosts = getBlogPosts("es");
  const blogRoutes: SitemapEntry[] = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: createAlternates(`/blog/${post.slug}`),
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
