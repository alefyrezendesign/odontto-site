import { ArrowRight, ChevronDown, Eye } from "lucide-react";

import { CtaLink } from "@/components/ui/cta-link";
import { analysisItems } from "@/features/home/home-content";

export function AnalysisSection({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="analises" className="section-y bg-offwhite">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
        <div className="lg:sticky lg:top-32">
          <span className="section-eyebrow mb-5">
            <Eye size={15} className="text-aqua-strong" aria-hidden="true" />
            <span>RX Análise</span>
          </span>
          <Heading className={Heading === "h1" ? "title-page" : "title-standard"}>
            Análise profunda para <span className="text-aqua-strong">decisões claras.</span>
          </Heading>
          <p className="subtitle-standard max-w-lg">
            Identifique impostos pagos a mais, taxas invisíveis e gargalos financeiros que reduzem o
            lucro da clínica.
          </p>
          <CtaLink
            href="/contato#formulario"
            className="btn-gradient hover:btn-gradient-hover mt-8"
          >
            <span>Pedir avaliação inicial</span>
            <ArrowRight size={19} aria-hidden="true" />
          </CtaLink>
        </div>

        <div className="divide-y divide-border/80 border-y border-border/80">
          {analysisItems.map(({ number, title, tags, description, icon: Icon }, index) => (
            <details key={number} className="group transition-colors" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl py-5 sm:py-6 transition-colors">
                <div className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.25rem_1fr] gap-3 sm:gap-4 items-start">
                  <span className="text-2xl sm:text-3xl font-extrabold tabular-nums text-slate-400 group-open:text-aqua-strong transition-colors">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight text-navy transition-colors group-hover:text-navy-soft">
                      {title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white border border-border/80 px-2.5 py-0.5 text-xs font-semibold text-secondary shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-white text-secondary transition-all group-hover:border-aqua/50 group-open:rotate-180 group-open:bg-aqua-light group-open:text-aqua-strong shadow-2xs mt-1">
                  <ChevronDown size={17} aria-hidden="true" />
                </span>
              </summary>
              <div className="pl-10 sm:pl-13 pb-6 pt-1">
                <div className="flex items-start gap-4 rounded-xl border border-aqua/30 bg-white p-4 sm:p-5 shadow-xs">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aqua-light text-aqua-strong">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="max-w-xl text-sm leading-6 text-secondary sm:text-base sm:leading-7">
                    {description}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
