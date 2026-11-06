import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { digitalItems, processItems } from "@/features/home/home-content";
import { RevealOnScroll } from "@/animations/components/reveal-on-scroll";

export function ProcessSection() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-page">
        <RevealOnScroll>
          <SectionHeading
            align="center"
            eyebrow="Metodologia"
            title="Como a Odontto cuida do seu consultório."
            description="Um método claro para que a contabilidade ajude você a decidir o futuro com segurança."
          />
        </RevealOnScroll>
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          {/* Desktop horizontal timeline connector */}
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-10 hidden border-t-2 border-dashed border-aqua/40 md:block"
          />
          {/* Mobile vertical timeline connector */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-aqua/30 md:hidden"
          />
          {processItems.map((item, index) => (
            <RevealOnScroll
              key={item.title}
              as="li"
              delayMs={index * 100}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <span
                className={
                  index === 2
                    ? "mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-aqua text-2xl font-extrabold text-navy shadow-md transition-transform hover:scale-105"
                    : "mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-aqua bg-white text-2xl font-extrabold text-navy shadow-md transition-transform hover:scale-105"
                }
              >
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{item.description}</p>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function DigitalSection() {
  return (
    <section className="section-y border-b border-border bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll direction="left">
          <SectionHeading
            eyebrow="Digital"
            title="Atendimento digital, rápido e feito para a odontologia."
            description="Esqueça papelada e burocracia lenta. Você fala com especialistas por canais ágeis, com processos seguros e informações organizadas."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {digitalItems.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="card-base flex items-center gap-3 p-3.5 text-sm font-semibold text-navy shadow-2xs"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-light text-aqua-strong">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
        <RevealOnScroll
          direction="right"
          delayMs={150}
          className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-soft lg:aspect-square"
        >
          <Image
            src="/images/odontto-equipe-atendimento.png"
            alt="Equipe de atendimento da Odontto"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
