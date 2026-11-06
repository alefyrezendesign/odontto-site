"use client";

import { useEffect, useRef, useState } from "react";

export type UseInViewOptions = {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
};

/**
 * Hook para detectar visibilidade no viewport via IntersectionObserver nativo.
 * Otimizado para não causar reflows e descartar observers quando `once: true`.
 * Respeita preferências de redução de movimento (prefers-reduced-motion).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(options: UseInViewOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", once = true } = options;
  const elementRef = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Se o usuário prefere redução de movimento, marca como visível de forma assíncrona
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const rafId = requestAnimationFrame(() => setIsInView(true));
      return () => cancelAnimationFrame(rafId);
    }

    // Se IntersectionObserver não estiver disponível, fallback assíncrono para visível
    if (typeof IntersectionObserver === "undefined") {
      const rafId = requestAnimationFrame(() => setIsInView(true));
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [elementRef, isInView] as const;
}
