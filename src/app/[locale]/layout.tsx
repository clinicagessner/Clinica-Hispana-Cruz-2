import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
// TODO(randy): reactivar GoogleAnalytics cuando exista la propiedad GA4 de Cruz 2
// import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [t, googleData] = await Promise.all([
    getTranslations({ locale, namespace: "metadata" }),
    getGooglePlaceData(),
  ]);
  const reviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const ogDescription = t("ogDescription", { reviews, rating });

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "clínica hispana Houston",
      "médico español Houston",
      "doctor hispano Houston",
      "clínica médica Houston TX",
      "medicina familiar Houston",
      "urgencias menores Houston",
      "laboratorio clínico Houston",
      "Hispanic clinic Houston",
      "Spanish speaking doctor Houston",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      title: t("title"),
      description: ogDescription,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Clínica médica hispana en Houston TX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: ogDescription,
      images: [`${SITE_CONFIG.baseUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // TODO(randy): PENDIENTE — tokens de Google Search Console de Cruz 2
    // verification: {
    //   google: ["<TOKEN_1>", "<TOKEN_2>"],
    // },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  // IDs de analítica desde env (NEXT_PUBLIC_* se inyectan en build).
  // Si faltan, el bloque correspondiente no se renderiza (útil en dev/preview).
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://cdn.callrail.com" />
        <link rel="dns-prefetch" href="https://cdn.callrail.com" />
        {/* CallRail - Call Tracking (number swap) */}
        <script
          type="text/javascript"
          src="//cdn.callrail.com/companies/627710951/9d62e7f39addbae4c199/12/swap.js"
          async
        />
        {/* Meta Pixel noscript fallback (píxel 1x1 de tracking; next/image no aplica dentro de noscript) */}
        {metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            <ScrollToTop />
            <JsonLdMedicalClinic />
            <ScrollAnimations />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
      {/* TODO(randy): PENDIENTE — crear propiedad GA4 de Cruz 2 y activar:
          <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      {googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-tag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
