import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceItems } from "@/features/home/home-content";
import { RevealOnScroll } from "@/animations/components/reveal-on-scroll";

export function AboutPreviewSection() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll direction="left" className="relative mx-auto aspect-square w-full max-w-lg">
          <Image
            src="/images/odontto-about-accountant.webp"
            alt="Especialista da Odontto em atendimento"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-2xl object-cover shadow-soft"
          />
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={150} className="pt-2 sm:pt-4 lg:pt-0">
          <SectionHeading
            eyebrow="Sobre nós"
            title="Uma contabilidade feita para a realidade do dentista."
            description="Por trás dos números existem pacientes, procedimentos, equipe, taxas e margens. A Odontto entende o dia a dia da sua clínica para apoiar decisões melhores."
          />
          <ul className="mt-7 grid gap-3">
            {[
              "Atendimento humanizado e focado na saúde",
              "Especialistas em enquadramento e redução tributária",
              "Avaliação inicial do seu cenário financeiro e tributário",
            ].map((item) => (
              <li
                key={item}
                className="card-base flex items-center gap-3 p-4 shadow-line transition-transform duration-150 hover:translate-x-1"
              >
                <CheckCircle2 className="shrink-0 text-aqua-strong" size={23} aria-hidden="true" />
                <span className="text-sm font-semibold text-navy">{item}</span>
              </li>
            ))}
          </ul>
          <CtaLink href="/sobre-nos" variant="secondary" className="mt-7">
            Conheça a Odontto
          </CtaLink>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function ServicesSection({ showMoreLink = true }: { showMoreLink?: boolean }) {
  const visibleServices = showMoreLink ? serviceItems.slice(0, 3) : serviceItems;

  return (
    <section id="servicos" className="section-y bg-white">
      <div className="container-page">
        <RevealOnScroll>
          <SectionHeading
            as={showMoreLink ? "h2" : "h1"}
            align="center"
            eyebrow="Serviços"
            title="O que fazemos para o seu consultório crescer com segurança."
            description="Ajudamos desde a abertura até a gestão financeira avançada de clínicas maiores."
          />
        </RevealOnScroll>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-xl border border-border bg-white p-7 transition-colors hover:border-aqua-strong/40"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-aqua-light text-aqua-strong">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tabular-nums text-secondary/60">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-tight text-navy">{title}</h3>
              <p className="body-standard mt-3">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          {showMoreLink ? (
            <Link href="/servicos" className="button button-secondary">
              Ver todos os serviços
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : (
            <CtaLink href="/contato#formulario">Conversar sobre os serviços</CtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
