/**
 * Design tokens de animação e motion design para o site Odontto.
 * Centraliza tempos, curvas de aceleração (easings) e distâncias
 * para garantir consistência visual e facilidade de manutenção.
 */

export const motionTokens = {
  duration: {
    instant: 0,
    fast: 150, // Microinterações, hover, botões
    normal: 250, // Modais, menus, dropdowns, cards
    slow: 450, // Entradas de seção, reveals
    deliberate: 700, // Animações de destaque, contadores
  },
  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)", // Suave corporativo
    decelerate: "cubic-bezier(0, 0, 0.2, 1)", // Entrada de elementos
    accelerate: "cubic-bezier(0.4, 0, 1, 1)", // Saída de elementos
    spring: "cubic-bezier(0.34, 1.4, 0.64, 1)", // Efeito elástico sutil
  },
  distance: {
    sm: "12px",
    md: "24px",
    lg: "40px",
  },
} as const;

export type MotionDirection = "up" | "down" | "left" | "right" | "none";
