import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** Rating 0–5; la última estrella se llena de forma fraccionada (4.7 → 70%) */
  rating: number;
  /** Clase de tamaño de cada estrella (p.ej. "size-4") */
  starClassName?: string;
  /** Color de las estrellas vacías (fondo) */
  emptyClassName?: string;
  /** Color de las estrellas llenas */
  filledClassName?: string;
}

/**
 * Estrellas con llenado proporcional al rating (server component, CSS puro).
 * Dos capas: estrellas apagadas de base y estrellas llenas recortadas
 * al porcentaje exacto del rating.
 */
export function StarRating({
  rating,
  starClassName = "size-4",
  emptyClassName = "text-white/30",
  filledClassName = "text-yellow-400",
}: StarRatingProps) {
  const pct = (Math.max(0, Math.min(5, rating)) / 5) * 100;

  return (
    <div className="relative inline-flex" aria-hidden="true">
      <div className="flex w-max gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={cn(starClassName, "shrink-0", emptyClassName)} weight="fill" />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <div className="flex w-max gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn(starClassName, "shrink-0", filledClassName)} weight="fill" />
          ))}
        </div>
      </div>
    </div>
  );
}
