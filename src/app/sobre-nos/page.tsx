import type { Metadata } from "next";

import {
  AboutAudienceSection,
  AboutCtaSection,
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
} from "@/features/about/components/about-sections";

export const metadata: Metadata = {
  title: "Sobre nós — história e valores",
  description:
    "Conheça a Odontto Contabilidade. Nascemos para ser o parceiro estratégico do dentista, unindo inteligência contábil, gestão tributária e suporte humano.",
  alternates: {
    canonical: "/sobre-nos",
  },
  openGraph: {
    title: "Sobre a Odontto | Contabilidade Especializada em Odontologia",
    description:
      "Nós enxergamos a sua clínica, não apenas o CNPJ. Conheça nossa equipe, metodologia e valores éticos.",
    url: "/sobre-nos",
    images: [
      {
        url: "/images/odontto-sobre-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Equipe Odontto Contabilidade",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutAudienceSection />
      <AboutCtaSection />
    </>
  );
}
