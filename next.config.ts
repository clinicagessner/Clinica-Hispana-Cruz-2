import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado (cuota de Image Optimization, /_next/image
    // → 402). Loader propio (B4): sirve las variantes pregeneradas de public/images
    // (scripts/generate-image-variants.mjs, en prebuild; manifiesto en
    // src/lib/image-variants.json) para que next/image emita srcset y el móvil no
    // descargue el archivo de escritorio. Lo que no está en el manifiesto (logo,
    // remotas) se sirve tal cual.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1376],
    imageSizes: [128, 256, 512],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "maps.googleapis.com", pathname: "/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async redirects() {
    // Cruz 2 es un sitio nuevo sin historial de WordPress: se eliminaron los ~110
    // redirects de migración del proyecto de referencia. Añadir aquí solo si el
    // dominio tuvo una web anterior con URLs que migrar.
    return [
      // Rutas renombradas al español (2026-07): conservar las inglesas como redirect
      { source: "/services/:path*", destination: "/servicios/:path*", permanent: true },
      { source: "/en/services/:path*", destination: "/en/servicios/:path*", permanent: true },
      { source: "/privacy", destination: "/privacidad", permanent: true },
      { source: "/en/privacy", destination: "/en/privacidad", permanent: true },
      // URL final de un anuncio de Google Ads que nunca existió en el sitio (2026-10-02)
      { source: "/examen-de-inmigracion", destination: "/servicios/examenes-inmigracion", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      // Imágenes de public/: 30 días + revalidación en segundo plano. No
      // `immutable` porque los nombres no llevan hash y un flyer puede
      // reemplazarse con el mismo nombre.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
