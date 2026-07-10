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
      {/* Imagen de fondo a sangre completa (fachada real de la clínica) */}
      <Image
        src="/images/hero-bg.webp"
        alt="Fachada de Clínica Hispana Cruz 2 en 13331 Kuykendahl Rd Ste 128, Houston TX - atención médica 100% en español"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-[70%_35%]"
        sizes="100vw"
      />

      {/* Overlays: gradiente lateral para legibilidad + velo superior para el header */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-900/30" />
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-slate-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-950/85 to-transparent lg:hidden" />

      {/* Glows decorativos de marca */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 size-112 rounded-full bg-red-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-1/4 size-96 rounded-full bg-white/5 blur-3xl"
      />

      {/* Contenido */}
      <div className="container relative z-10 mx-auto px-4 pt-28 md:pt-32 pb-14 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_26rem] lg:gap-14">

          {/* Columna principal: mensaje + CTAs */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Badge de reseñas de Google */}
            {totalReviews > 0 && (
              <div className="animate-hero-title inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 mb-5 shadow-lg shadow-slate-950/20">
                <StarRating rating={rating} starClassName="size-4" />
                <span className="text-white font-medium text-sm">
                  {rating.toFixed(1)} · {totalReviews}
                  {t("googleReviews")}
                </span>
              </div>
            )}

            {/* Eyebrow */}
            <p className="animate-hero-title text-yellow-300 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
              {t("badge")}
            </p>

            {/* Título con palabra resaltada */}
            <h1
              id="hero-title"
              className="animate-hero-subtitle text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-[1.08] drop-shadow-lg text-balance"
            >
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="relative inline-block text-yellow-300">
                    {chunks}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-red-primary"
                    />
                  </span>
                ),
              })}
            </h1>

            {/* Subtítulo con servicios clave */}
            <p className="animate-hero-features text-lg md:text-xl text-white/90 mb-8 drop-shadow-md text-pretty">
              {t("subtitle")}
            </p>

            {/* CTAs */}
            <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-red-primary text-white hover:bg-red-dark shadow-xl shadow-red-primary/40"
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
                className="text-base md:text-lg px-8 py-6 gap-2 bg-white/10 backdrop-blur-md text-white border-white/40 hover:bg-white/20 hover:text-white"
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
            <div className="animate-hero-cta">
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-base text-white/85 underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white"
              >
                {t("ctaContact")}
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  weight="bold"
                />
              </a>
            </div>
          </div>

          {/* Tarjeta glass: por qué elegirnos + ubicación y horario */}
          <aside className="animate-hero-badges w-full max-w-md mx-auto lg:mx-0 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-slate-950/40 p-6 sm:p-8 text-left">
            <h2 className="font-heading font-bold text-white text-xl mb-1">
              {t("cardTitle")}
            </h2>
            <p className="text-white/70 text-sm mb-5">{t("cardSubtitle")}</p>

            <ul className="space-y-3.5 mb-6">
              {(["1", "2", "3", "4"] as const).map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-primary/30">
                    <CheckCircle className="size-4.5 text-yellow-300" weight="fill" />
                  </span>
                  <span className="text-white text-sm md:text-base">{t(`features.${key}`)}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/15 pt-5 space-y-3 text-white/90">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <MapPin className="size-5 shrink-0 mt-0.5 text-yellow-300" weight="fill" />
                <span className="text-sm">
                  {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="size-5 shrink-0 text-yellow-300" weight="fill" />
                <span className="text-sm">{t("hours")}</span>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`${t("ctaCall")} ${CONTACT_INFO.phoneFormatted}`}
                className="flex items-center gap-2.5 font-semibold text-white hover:text-yellow-300 transition-colors"
                suppressHydrationWarning
              >
                <Phone className="size-5 shrink-0 text-yellow-300" weight="fill" />
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
