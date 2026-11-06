import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
} & Pick<ComponentProps<"a">, "aria-label">;

export function CtaLink({
  href,
  children,
  className = "",
  variant = "primary",
  external = false,
  ...props
}: CtaLinkProps) {
  const classes = `button button-${variant} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
