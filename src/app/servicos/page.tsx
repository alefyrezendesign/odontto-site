import type { Metadata } from "next";

import { FinalCtaSection } from "@/features/home/components/closing-sections";
import { EcosystemSection } from "@/features/home/components/ecosystem-section";
import { ServicesSection } from "@/features/home/components/growth-sections";
import { DigitalSection, ProcessSection } from "@/features/home/components/operations-sections";

export const metadata: Metadata = {
  title: "Serviços contábeis para dentistas e clínicas",
  description:
    "Conheça os serviços da Odontto para abertura de clínicas, planejamento tributário, folha de pagamento e gestão financeira.",
  alternates: { canonical: "/servicos" },
  openGraph: { url: "/servicos" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection showMoreLink={false} />
      <ProcessSection />
      <DigitalSection />
      <EcosystemSection />
      <FinalCtaSection />
    </>
  );
}
