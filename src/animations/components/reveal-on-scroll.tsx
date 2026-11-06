import type { ElementType, ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delayMs?: number;
  durationMs?: number;
  className?: string;
  as?: ElementType;
};

/** Keeps existing section wrappers while rendering their content immediately. */
export function RevealOnScroll({
  children,
  className = "",
  as: Component = "div",
}: RevealOnScrollProps) {
  return <Component className={className}>{children}</Component>;
}
