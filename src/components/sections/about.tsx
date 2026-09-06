import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { CONTACT_INFO } from "@/lib/constants";

/**
 * Bloque de definición de la entidad: un solo párrafo con hechos verificables
 * (qué es, dónde está, horario, condiciones, idiomas, servicios). Es el texto
 * que un buscador o un asistente de IA puede citar tal cual, por eso va sin
 * lenguaje publicitario y renderizado en servidor.
 */
export async function About() {
  const [t, locale] = await Promise.all([getTranslations("about"), getLocale()]);
  const localePath = locale === "en" ? "/en" : "";

  const link = (slug: string) => (chunks: React.ReactNode) => (
    <Link
      href={`${localePath}/servicios/${slug}`}
      className="text-red-primary font-medium hover:underline underline-offset-4"
    >
      {chunks}
    </Link>
  );

  return (
    <section id="sobre-la-clinica" aria-labelledby="about-title" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id="about-title" className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-5 text-center">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-primary text-center md:text-left">
            {t.rich("paragraph", {
              address: `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`,
              phone: CONTACT_INFO.phoneFormatted,
              whatsapp: CONTACT_INFO.whatsappDisplay,
              gyn: link("ginecologia"),
              uti: link("infecciones-urinarias"),
              lab: link("examenes-sangre"),
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
