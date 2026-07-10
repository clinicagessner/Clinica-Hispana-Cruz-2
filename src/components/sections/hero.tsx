import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Clock, CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Hero() {
  const [t, googleData] = await Promise.all([
    getTranslations("hero"),
    getGooglePlaceData(),
  ]);
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* Imagen de fondo a sangre completa */}
      <Image
        src="/images/hero-bg.webp"
        alt="Fachada de Clínica Hispana Cruz 2 en 13331 Kuykendahl Rd Ste 128, Houston TX - atención médica 100% en español"
        fill
        priority
        fetchPriority="high"
        quality={50}
        className="object-cover object-[50%_30%]"
        sizes="100vw"
      />

      {/* Overlay oscuro para legibilidad: denso donde va el texto, ligero a la derecha */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-slate-900/35" />
      {/* Oscurecido extra inferior solo en móvil */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-950/80 to-transparent md:hidden" />

      {/* Glow decorativo sutil */}
      <div aria-hidden="true" className="absolute -top-24 -right-24 size-96 rounded-full bg-white/5 blur-3xl" />

      {/* Contenido */}
      <div className="container relative z-10 mx-auto px-4 pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-xl lg:max-w-2xl mx-auto md:mx-0 text-center md:text-left">

          {/* Badge de reseñas de Google */}
          {totalReviews > 0 && (
            <div className="animate-hero-title inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-6">
              <StarRating rating={rating} starClassName="size-4" />
              <span className="text-white font-medium text-sm">
                {rating.toFixed(1)} · {totalReviews}
                {t("googleReviews")}
              </span>
            </div>
          )}

          {/* Título con palabra resaltada */}
          <h1
            id="hero-title"
            className="animate-hero-subtitle text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg text-balance"
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-yellow-300">{chunks}</span>
              ),
            })}
          </h1>

          {/* Subtítulo con servicios clave */}
          <p className="animate-hero-features text-lg md:text-xl text-white/95 mb-8 drop-shadow-md">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-3">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-6 gap-2 bg-white text-red-dark hover:bg-white/90 shadow-lg"
            >
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`${t("ctaCall")} ${CONTACT_INFO.phoneFormatted}`}
                suppressHydrationWarning
              >
                <Phone className="size-5" weight="fill" />
                {t("ctaCall")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 gap-2 bg-transparent text-white border-white/70 hover:bg-white/10 hover:text-white"
            >
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("ctaLocation")}: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state}`}
              >
                <MapPin className="size-5" weight="fill" />
                {t("ctaLocation")}
              </a>
            </Button>
          </div>

          {/* Enlace secundario al formulario */}
          <div className="animate-hero-cta mb-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-base text-white/90 underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white"
            >
              {t("ctaContact")}
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                weight="bold"
              />
            </a>
          </div>

          {/* Features con checks */}
          <ul className="animate-hero-badges grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 text-left w-fit mx-auto md:mx-0 md:w-auto">
            {(["1", "2", "3", "4"] as const).map((key) => (
              <li key={key} className="flex items-center gap-2.5">
                <CheckCircle className="size-5 text-yellow-300 shrink-0" weight="fill" />
                <span className="text-white text-sm md:text-base">{t(`features.${key}`)}</span>
              </li>
            ))}
          </ul>

          {/* Tira de ubicación + horario */}
          <div className="animate-hero-badges flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-6 border-t border-white/25 pt-6 text-white/90">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MapPin className="size-5 shrink-0" weight="fill" />
              <span className="text-sm">
                {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
              </span>
            </a>
            <div className="hidden sm:block w-px h-5 bg-white/30" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Clock className="size-5 shrink-0" weight="fill" />
              <span className="text-sm">{t("hours")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
