import Image from "next/image";

import { RevealOnScroll } from "@/animations/components/reveal-on-scroll";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutAudiences,
  aboutHeroContent,
  aboutStoryContent,
  aboutValues,
} from "@/features/about/about-content";

export function AboutHeroSection() {
  return (
    <section className="border-b border-border/70 bg-[#f5f8f7] py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="max-w-4xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-aqua-strong sm:text-sm">
            {aboutHeroContent.eyebrow}
          </span>
          <h1 className="title-page mt-5">{aboutHeroContent.title}</h1>
          <p className="subtitle-standard mt-5">{aboutHeroContent.subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export function AboutStorySection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll direction="left">
          <SectionHeading title={aboutStoryContent.title} />
          <div className="body-standard mt-6 space-y-4">
            {aboutStoryContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100}>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-soft border border-border/80 lg:aspect-square">
            <Image
              src="/images/odontto-historia-dentista-gestora.webp"
              alt="Dentista analisando a gestão da clínica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function AboutValuesSection() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-page">
        <RevealOnScroll>
          <SectionHeading
            align="center"
            eyebrow="Nossos pilares"
            title="Os valores que guiam nossa atuação"
          />
        </RevealOnScroll>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {aboutValues.map(({ title, description, emphasis, icon: Icon }, index) => (
            <RevealOnScroll key={title} delayMs={index * 100} className="h-full">
              <article className="card-base flex h-full flex-col justify-between p-8 text-center shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-aqua/40 group">
                <div>
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua-light text-aqua-strong transition-transform group-hover:scale-105">
                    <Icon size={31} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-tight text-navy">{title}</h3>
                  <p className="body-standard mt-4">
                    {emphasis ? (
                      <>
                        {description.split(emphasis)[0]}
                        <strong className="text-navy">{emphasis}</strong>
                        {description.split(emphasis)[1]}
                      </>
                    ) : (
                      description
                    )}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutAudienceSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll direction="left" className="order-2 lg:order-1">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-soft border border-border/80 lg:aspect-video">
            <Image
              src="/images/odontto-equipe-atendimento.png"
              alt="Equipe de atendimento da Odontto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delayMs={100} className="order-1 lg:order-2">
          <div>
            <SectionHeading
              eyebrow="Para quem fazemos"
              title="Soluções para todo o ecossistema odontológico"
            />
            <ul className="mt-7 grid gap-4">
              {aboutAudiences.map(({ title, description, icon: Icon }) => (
                <li
                  key={title}
                  className="card-base flex items-center gap-4 p-4 shadow-line transition-all duration-150 hover:translate-x-1 hover:border-aqua/40"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-light text-aqua-strong">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">{title}</h3>
                    <span className="text-sm leading-6 text-secondary">{description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function AboutCtaSection() {
  return (
    <section className="bg-linear-to-r from-aqua to-[#00ded2] py-16 text-center text-navy sm:py-20 shadow-inner">
      <div className="container-page max-w-3xl">
        <h2 className="title-standard">
          Pronto para transformar a gestão financeira do seu consultório?
        </h2>
        <p className="subtitle-standard mx-auto text-navy/80">
          Conquiste mais tranquilidade e visibilidade sobre os resultados da sua clínica.
        </p>
        <CtaLink
          href="/contato#formulario"
          className="mt-8 bg-navy text-white hover:bg-navy-soft shadow-lg"
        >
          Pedir avaliação inicial
        </CtaLink>
      </div>
    </section>
  );
}
