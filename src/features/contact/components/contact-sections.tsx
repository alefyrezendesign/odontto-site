import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";

import { RevealOnScroll } from "@/animations/components/reveal-on-scroll";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { contactFaqItems, contactSteps } from "@/features/contact/contact-content";
import { ContactForm } from "@/features/contact/components/contact-form";

export function ContactIntroSection() {
  const contacts = [
    {
      title: "WhatsApp",
      description: siteConfig.whatsapp.label,
      href: siteConfig.whatsapp.href,
      icon: MessageCircle,
      external: true,
    },
    {
      title: "Telefone fixo",
      description: siteConfig.phone.label,
      href: siteConfig.phone.href,
      icon: Phone,
      external: false,
    },
  ];

  return (
    <section className="section-y bg-offwhite">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Fale conosco"
            title="Vamos conversar sobre o futuro da sua clínica?"
            description="Nossa equipe está pronta para entender seu cenário e mostrar um caminho para uma gestão financeira mais clara e lucrativa."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map(({ title, description, href, icon: Icon, external }) => (
              <a
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="card-base flex items-center gap-4 p-5 shadow-line transition-all duration-200 hover:shadow-soft hover:border-aqua/50 hover:-translate-y-0.5 group"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-light text-aqua-strong transition-transform group-hover:scale-105">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy group-hover:text-navy-soft">
                    {title}
                  </h3>
                  <span className="text-sm font-medium text-secondary">{description}</span>
                </div>
              </a>
            ))}
            <div className="card-base flex items-center gap-4 p-5 shadow-line sm:col-span-2 lg:col-span-1">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-light text-aqua-strong">
                <MapPin size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-navy">Atendimento nacional</h3>
                <span className="text-sm text-secondary">
                  Atendemos de forma digital dentistas de todo o Brasil.
                </span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function ContactStepsSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <RevealOnScroll>
          <SectionHeading
            align="center"
            eyebrow="Próximos passos"
            title="O que acontece após o seu contato?"
          />
        </RevealOnScroll>
        <ol className="mt-14 grid gap-9 md:grid-cols-3">
          {contactSteps.map((step, index) => (
            <RevealOnScroll key={step.title} delayMs={index * 100} className="h-full">
              <li className="card-base h-full p-7 text-center shadow-line transition-all duration-200 hover:shadow-soft hover:-translate-y-1">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-aqua-light text-aqua-strong mb-4">
                  <CheckCircle2 size={31} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-navy">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-secondary">{step.description}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ContactFaqSection() {
  return (
    <section id="duvidas" className="section-y bg-offwhite">
      <div className="container-page max-w-4xl">
        <RevealOnScroll>
          <SectionHeading align="center" eyebrow="FAQ" title="Dúvidas frequentes" />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100}>
          <div className="mt-12">
            <FaqList items={contactFaqItems} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
