import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocale } from "next-intl/server";
import { getLocalizedService } from "@/lib/utils";

export async function JsonLdMedicalClinic() {
  const [placeData, locale] = await Promise.all([getGooglePlaceData(), getLocale()]);

  // Rating y reseñas solo si vienen de Google (Places). Si la API falla se usa
  // el respaldo comprobado solo para el conteo; nunca reseñas de relleno.
  const ratingValue = placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const reviewCount = placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  const reviewItems = placeData?.reviews.length
    ? placeData.reviews.slice(0, 5).map((r) => ({
        "@type": "Review" as const,
        author: { "@type": "Person" as const, name: r.author_name },
        datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
        reviewBody: r.text,
        reviewRating: { "@type": "Rating" as const, ratingValue: r.rating, bestRating: 5 },
        itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }))
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        // Nombre tal como aparece en la ficha de Google (sin tilde).
        alternateName: "Clinica Hispana Cruz 2",
        description: SITE_CONFIG.description,
        disambiguatingDescription:
          locale === "en"
            ? "Clínica Hispana Cruz 2 is the north Houston location of the Clínica Hispana Cruz clinics, at 13331 Kuykendahl Rd Suite 128 (ZIP 77090), near Champions and Spring. It is not the same clinic as Cruz, Cruz 3 or Cruz 4."
            : "Clínica Hispana Cruz 2 es la sede del norte de Houston de las clínicas Clínica Hispana Cruz, en 13331 Kuykendahl Rd Suite 128 (ZIP 77090), cerca de Champions y Spring. No es la misma clínica que Cruz, Cruz 3 ni Cruz 4.",
        url: SITE_CONFIG.baseUrl,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        hasMap: CONTACT_INFO.googleMapsUrl,
        ...(reviewCount > 0 && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }),
        review: reviewItems,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          { "@type": "Language", name: "Spanish", alternateName: "es" },
          { "@type": "Language", name: "English", alternateName: "en" },
        ],
        availableService: SERVICES.map((service) => {
          const localized = getLocalizedService(service, locale);
          return {
            "@type": "MedicalProcedure",
            "@id": `${SITE_CONFIG.baseUrl}/servicios/${service.slug}#procedure`,
            name: localized.title,
            description: localized.description,
            url: `${SITE_CONFIG.baseUrl}${locale === "en" ? "/en" : ""}/servicios/${service.slug}`,
          };
        }),
        sameAs: [
          SOCIAL_LINKS.google,
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.tiktok,
          SOCIAL_LINKS.yelp,
          SOCIAL_LINKS.appleMaps,
        ].filter(Boolean),
        // Áreas de la ficha de Google (Houston y Spring 77373) y los barrios del
        // norte de Houston que nombra el sitio.
        areaServed: [
          { "@type": "City", name: "Houston", "@id": "https://www.wikidata.org/wiki/Q16555" },
          { "@type": "Place", name: "Spring, TX 77373" },
          { "@type": "Place", name: "Champions, Houston, TX" },
          { "@type": "Place", name: "Willowbrook, Houston, TX" },
          { "@type": "Place", name: "Klein, TX" },
          { "@type": "Place", name: "Cypress Station, Houston, TX" },
          { "@type": "Place", name: "Greenspoint, Houston, TX" },
        ],
        // Atributo declarado en la ficha (visto en Bing Places, importado de Google).
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Entrada accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: locale === "en" ? "Free parking" : "Estacionamiento gratuito", value: true },
        ],
        publicAccess: true,
        // Solo lo que ejerce el equipo médico general: sin urgencias ni
        // ginecología como especialidad (no hay titulados, §9 del playbook).
        medicalSpecialty: [
          "https://schema.org/FamilyPractice",
          "https://schema.org/PrimaryCare",
          "https://schema.org/PreventiveMedicine",
          "https://schema.org/LaboratoryScience",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
        inLanguage: ["es-MX", "en-US"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Nodo ligero con el mismo @id que el completo de la home. Va en cada página
// que no es la home; nunca en el layout (§7 B0.14).
export function JsonLdMedicalClinicRef() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.state,
      postalCode: CONTACT_INFO.zip,
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  bodyLocation?: string;
  procedureType?: string;
}

export function JsonLdMedicalProcedure({
  name,
  description,
  image,
  url,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${SITE_CONFIG.baseUrl}/servicios/${url.split("/servicios/")[1]}#procedure`,
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    provider: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// MedicalWebPage de un servicio (§12 B2): revisor = la clínica, sin médico
// nombrado (§9). mainEntity apunta al MedicalProcedure con @id estable.
export function JsonLdMedicalWebPage({
  url,
  slug,
  name,
  description,
  lastReviewed,
  locale,
}: {
  url: string;
  slug: string;
  name: string;
  description: string;
  lastReviewed: string;
  locale: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    lastReviewed,
    dateModified: lastReviewed,
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    about: { "@id": `${SITE_CONFIG.baseUrl}/servicios/${slug}#procedure` },
    isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    mainEntity: { "@id": `${SITE_CONFIG.baseUrl}/servicios/${slug}#procedure` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
