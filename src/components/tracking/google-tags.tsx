import Script from "next/script";

// GA4 y Google Ads con un solo gtag.js, cargado después de la carga de la página
// (lazyOnload: no compite con el LCP; GA4 y Ads encolan en dataLayer).
// El gtag.js se pide con el ID de Ads: algunos flujos de GA4 de la red devuelven
// 404 en googletagmanager.com y, con el de Ads como cargador, GA4 mide igual.
// IDs desde env (NEXT_PUBLIC_*); si falta uno, se configura solo el otro.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleTags() {
  const ids = [GOOGLE_ADS_ID, GA_ID].filter(Boolean) as string[];
  if (ids.length === 0) return null;
  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join("\n")}`}
      </Script>
    </>
  );
}
