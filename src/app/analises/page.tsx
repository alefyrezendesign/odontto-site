import type { Metadata } from "next";

import { AnalysisSection } from "@/features/home/components/analysis-section";
import { FinalCtaSection } from "@/features/home/components/closing-sections";

export const metadata: Metadata = {
  title: "Análises financeiras e tributárias para clínicas",
  description:
    "Entenda os pontos que a Odontto analisa para identificar custos, impostos e oportunidades de melhoria na gestão da clínica odontológica.",
  alternates: { canonical: "/analises" },
  openGraph: { url: "/analises" },
};

export default function AnalysisPage() {
  return (
    <>
      <AnalysisSection as="h1" />
      <FinalCtaSection />
    </>
  );
}
