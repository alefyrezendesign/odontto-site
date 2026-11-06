import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import type { CSSProperties } from "react";

import { CtaLink } from "@/components/ui/cta-link";
import { ecosystemPillars, ecosystemSolutions } from "@/features/home/home-content";

type OrbitStyle = CSSProperties & {
  "--orbit-size": string;
  "--orbit-duration": string;
  "--orbit-delay": string;
  "--orbit-direction": string;
};

const orbits: OrbitStyle[] = [
  {
    "--orbit-size": "40%",
    "--orbit-duration": "28s",
    "--orbit-delay": "-8s",
    "--orbit-direction": "normal",
  },
  {
    "--orbit-size": "62%",
    "--orbit-duration": "44s",
    "--orbit-delay": "-17s",
    "--orbit-direction": "reverse",
  },
  {
    "--orbit-size": "84%",
    "--orbit-duration": "62s",
    "--orbit-delay": "-31s",
    "--orbit-direction": "normal",
  },
];

export function EcosystemSection() {
  return (
    <section className="surface-dark overflow-hidden bg-[linear-gradient(135deg,#03114e_0%,#052b56_48%,#020817_100%)] py-16 text-white sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="reveal-soft max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-lime uppercase backdrop-blur-xs">
              Ecossistema Integrado
            </span>
            <h2 className="title-standard text-white">
              Muito além da contabilidade{" "}
              <span className="block text-lime">um ecossistema de soluções.</span>
            </h2>
            <CtaLink
              href="/contato#formulario"
              className="btn-gradient hover:btn-gradient-hover mt-8"
            >
              <span>Conversar sobre soluções</span>
              <ArrowRight size={18} aria-hidden="true" />
            </CtaLink>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-107.5" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/15 blur-3xl" />
            {orbits.map((style, index) => (
              <span key={style["--orbit-size"]} className="rx-orbit-ring" style={style}>
                <span
                  className={`rx-orbit-dot h-3.5 w-3.5 ${index === 1 ? "bg-lime" : "bg-white"}`}
                />
              </span>
            ))}
            <span className="rx-orbit-core">
              <Image
                alt=""
                width={220}
                height={111}
                src="/images/rx-orbit-logo.png"
                className="h-auto w-40 sm:w-52"
              />
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-y border-white/15 py-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Image
            alt="RX Soluções"
            width={208}
            height={50}
            className="h-auto w-44 sm:w-52"
            src="/images/rx-solucoes-logo.png"
          />
          <p className="max-w-2xl text-base leading-7 text-white/80">
            O RX Soluções integra serviços, diagnóstico, operação e parceiros estratégicos para
            conectar sua clínica às soluções adequadas ao momento de crescimento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ecosystemPillars.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group h-full rounded-2xl border border-white/15 bg-white/4 p-8 backdrop-blur-xs transition-all duration-300 hover:border-aqua/60 hover:bg-white/8 hover:-translate-y-1 lg:p-9 shadow-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-aqua/40 bg-white/6 text-lime transition-transform group-hover:scale-105">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-lg font-semibold leading-tight text-white sm:text-xl">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 divide-y divide-white/15 border-y border-white/15">
          {ecosystemSolutions.map((solution) => (
            <details key={solution.title} className="group">
              <summary className="flex min-h-20 sm:min-h-24 cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-left">
                <h3 className="text-lg font-semibold text-white transition-colors sm:text-xl group-hover:text-aqua">
                  {solution.title}
                </h3>
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-aqua transition-transform duration-200 group-open:rotate-45 group-hover:border-aqua/60">
                  <Plus size={20} aria-hidden="true" />
                </span>
              </summary>
              <div className="max-w-3xl pb-8">
                <p className="text-sm leading-7 text-white/80 sm:text-base">
                  {solution.description}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                  aria-label={`Recursos de ${solution.title}`}
                >
                  {solution.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-aqua/40 bg-navy/40 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-lime backdrop-blur-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
