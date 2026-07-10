"use client";

import { useEffect, useRef } from "react";

interface ScrollSpyProps {
  /** Ids de las secciones a observar, en orden de aparición en la página */
  sectionIds: string[];
}

/**
 * Actualiza el hash de la URL según la sección visible al hacer scroll.
 * Usa history.replaceState (no pushState) para no ensuciar el historial
 * ni disparar scrolls; la sección inicial ("home") limpia el hash.
 */
export function ScrollSpy({ sectionIds }: ScrollSpyProps) {
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      // Sección activa: la última cuyo inicio quedó por encima del tercio superior
      const probe = window.scrollY + window.innerHeight * 0.35;
      let active = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= probe) active = section.id;
        else break;
      }

      if (active === activeRef.current) return;
      activeRef.current = active;

      const base = window.location.pathname + window.location.search;
      // La primera sección (hero) deja la URL limpia, sin hash
      const url = active === sectionIds[0] ? base : `${base}#${active}`;
      history.replaceState(history.state, "", url);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return null;
}
