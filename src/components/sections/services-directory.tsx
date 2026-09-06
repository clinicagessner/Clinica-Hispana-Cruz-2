import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Tag } from "@phosphor-icons/react/dist/ssr";
import { SERVICES } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";
import type { Service } from "@/types";

type Props = {
  locale: string;
  /** Servicio actual: se muestra sin enlace para no auto-enlazar la página */
  currentSlug?: string;
  /** Oculta el enlace a promociones (p. ej. en la propia página de promociones) */
  showPromotions?: boolean;
};

const CATEGORY_ORDER: Service["category"][] = [
  "medicina-general",
  "salud-mujer",
  "examenes",
  "laboratorio",
  "tratamientos",
];

const CATEGORY_LABEL_KEY: Record<Service["category"], string> = {
  "medicina-general": "categoryMedicinaGeneral",
  "salud-mujer": "categorySaludMujer",
  examenes: "categoryExamenes",
  laboratorio: "categoryLaboratorio",
  tratamientos: "categoryTratamientos",
};

// Los títulos SEO llevan sufijo tras ":" o "|"; para la lista basta la parte principal
function compactTitle(title: string) {
  return title.split(/\s[:|]\s|:\s/)[0].trim();
}

/**
 * Directorio compacto de todos los servicios agrupados por categoría.
 * Existe para que cada servicio (ES y EN) reciba enlaces internos desde las
 * páginas ya indexadas: Google descubría las URLs por el sitemap pero no las
 * rastreaba por falta de enlaces.
 */
export async function ServicesDirectory({ locale, currentSlug, showPromotions = true }: Props) {
  const t = await getTranslations("services");
  const localePath = locale === "en" ? "/en" : "";

  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    label: t(CATEGORY_LABEL_KEY[category]),
    services: SERVICES.filter((s) => s.category === category)
      .sort((a, b) => a.order - b.order)
      .map((s) => getLocalizedService(s, locale)),
  })).filter((g) => g.services.length > 0);

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100" aria-labelledby="services-directory-title">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 id="services-directory-title" className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-2 text-center">
            {t("allServicesTitle")}
          </h2>
          <p className="text-muted-foreground text-center mb-8">{t("allServicesSubtitle")}</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div key={group.category}>
                <h3 className="font-heading font-semibold text-slate-dark mb-3 text-sm uppercase tracking-wide">
                  {group.label}
                </h3>
                <ul className="space-y-2">
                  {group.services.map((service) => {
                    const label = compactTitle(service.title);
                    const isCurrent = service.slug === currentSlug;
                    return (
                      <li key={service.slug} className="text-sm leading-snug">
                        {isCurrent ? (
                          <span className="text-slate-dark font-semibold" aria-current="page">
                            {label}
                          </span>
                        ) : (
                          <Link
                            href={`${localePath}/servicios/${service.slug}`}
                            className="text-slate-primary hover:text-red-primary hover:underline underline-offset-4 transition-colors"
                          >
                            {label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`${localePath}/servicios`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-dark hover:border-red-primary hover:text-red-primary transition-colors"
            >
              {t("viewAllServices")}
              <ArrowRight className="size-4" weight="bold" />
            </Link>
            {showPromotions && (
              <Link
                href={`${localePath}/promociones`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-red-dark transition-colors"
              >
                <Tag className="size-4" weight="fill" />
                {t("viewPromotions")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
