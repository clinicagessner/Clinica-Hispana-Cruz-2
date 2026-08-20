// Mapea cada servicio a los posts del blog que tratan el mismo tema,
// para enlazado interno cruzado (servicio ↔ artículo)
export const SERVICE_BLOG_MAP: Record<string, string[]> = {
  "examenes-inmigracion": ["guia-examen-medico-inmigracion-i693-houston"],
  "examen-dot": ["examen-dot-cdl-camioneros-houston"],
  "examenes-sangre": ["laboratorio-clinico-houston-analisis-sangre"],
  "condiciones-cronicas": [
    "control-diabetes-houston-guia-pacientes",
    "atencion-medica-sin-seguro-houston",
  ],
  "ginecologia": ["salud-mujer-houston-servicios-ginecologia"],
  "anticonceptivos": ["salud-mujer-houston-servicios-ginecologia"],
  "salud-hombre": ["salud-hombre-houston-chequeos-preventivos"],
  "sueros-vitaminados": ["vitamina-b12-houston-beneficios-inyecciones"],
  "tiroides": ["laboratorio-clinico-houston-analisis-sangre"],
  "enfermedades-transmision-sexual": ["salud-mujer-houston-servicios-ginecologia"],
  "electrocardiograma": ["salud-hombre-houston-chequeos-preventivos"],
  "examen-fisico-escolar": ["atencion-medica-sin-seguro-houston"],
};
