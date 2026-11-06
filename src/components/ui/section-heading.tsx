import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="section-eyebrow mb-5">{eyebrow}</span> : null}
      <Heading className={Heading === "h1" ? "title-page" : "title-standard"}>{title}</Heading>
      {description ? <p className="subtitle-standard">{description}</p> : null}
    </div>
  );
}
