import type { Metadata } from "next";

import {
  ContactFaqSection,
  ContactIntroSection,
  ContactStepsSection,
} from "@/features/contact/components/contact-sections";

export const metadata: Metadata = {
  title: "Contato e avaliação inicial",
  description:
    "Fale com a equipe da Odontto e solicite uma avaliação inicial gratuita do cenário financeiro e tributário da sua clínica odontológica.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato | Odontto Contabilidade para Dentistas",
    description:
      "Conte seu cenário à Odontto para receber uma orientação inicial sobre os próximos passos.",
    url: "/contato",
    images: [
      {
        url: "/images/bg-hero.png",
        width: 1200,
        height: 630,
        alt: "Contato Odontto Contabilidade",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactIntroSection />
      <ContactStepsSection />
      <ContactFaqSection />
    </>
  );
}
