import { CtaLink } from "@/components/ui/cta-link";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { homeFaqItems } from "@/features/home/home-content";

export function HomeFaqSection() {
  return (
    <section id="duvidas" className="section-y bg-offwhite">
      <div className="container-page grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Dúvidas frequentes"
          description="Entenda como uma contabilidade especializada pode mudar o rumo da sua clínica."
        />
        <FaqList items={homeFaqItems} />
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="border-t border-border/80 bg-linear-to-b from-white to-offwhite py-20 text-center sm:py-24">
      <div className="container-page max-w-4xl">
        <span className="section-eyebrow mb-5">Próximo Passo</span>
        <h2 className="title-standard">
          Sua clínica cresce, seus controles{" "}
          <span className="text-aqua-strong">precisam crescer junto.</span>
        </h2>
        <p className="subtitle-standard mx-auto">
          Conte um pouco sobre a sua clínica. Nossa equipe fará uma triagem inicial e poderá
          combinar uma conversa para entender seu cenário.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaLink
            href={siteConfig.whatsapp.href}
            external
            className="btn-gradient hover:btn-gradient-hover w-full sm:w-auto min-h-12 px-8 text-base shadow-md shadow-aqua/15"
          >
            Falar no WhatsApp
          </CtaLink>
          <CtaLink
            href="/contato#formulario"
            variant="secondary"
            className="w-full sm:w-auto min-h-12 px-8 text-base"
          >
            Explicar meu cenário
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
