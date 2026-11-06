import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="surface-dark overflow-hidden bg-footer-gradient text-white">
      <div className="container-page py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-2 lg:items-center">
          <Image
            src="/logo-odontto-cor-clara.png"
            alt="Odontto Contabilidade"
            width={178}
            height={51}
            className="h-auto w-36 sm:w-44"
          />
          <p className="max-w-xl text-base leading-7 text-white/75 lg:ml-auto lg:text-right">
            {siteConfig.description}
          </p>
        </div>

        <div className="grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-12">
          <section aria-labelledby="footer-contato">
            <h2 className="footer-title" id="footer-contato">
              Contato
            </h2>
            <ul className="mt-7 grid gap-5">
              <li>
                <a href={siteConfig.phone.href} className="footer-contact-link group">
                  <span className="footer-icon">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span>{siteConfig.phone.label}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link group"
                >
                  <span className="footer-icon">
                    <MessageCircle size={18} aria-hidden="true" />
                  </span>
                  <span>{siteConfig.whatsapp.label}</span>
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-enderecos">
            <h2 className="footer-title" id="footer-enderecos">
              Endereços
            </h2>
            <ul className="mt-7 grid gap-5">
              {siteConfig.addresses.map((address) => (
                <li key={address.name}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-4 rounded-sm">
                      <span className="footer-icon">
                        <MapPin size={18} aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 items-center gap-2 text-sm font-bold text-white/85 group-open:text-white">
                        <span>{address.name}</span>
                        <ChevronDown
                          size={16}
                          className="shrink-0 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </summary>
                    <address className="ml-14 mt-4 space-y-1 text-sm not-italic leading-6 text-white/75">
                      {address.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      <p className="pt-1 font-bold text-white">CEP: {address.postalCode}</p>
                    </address>
                  </details>
                </li>
              ))}
            </ul>
          </section>

          <nav aria-labelledby="footer-institucional">
            <h2 className="footer-title" id="footer-institucional">
              Institucional
            </h2>
            <ul className="mt-7 grid gap-4 text-sm text-white/80">
              <li>
                <Link href="/sobre-nos" className="footer-link">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="footer-link">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/analises" className="footer-link">
                  Análises
                </Link>
              </li>
              <li>
                <Link href="/#duvidas" className="footer-link">
                  Dúvidas
                </Link>
              </li>
              <li>
                <Link href="/contato" className="footer-link">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-3 py-5 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Odontto Contabilidade.</p>
          <p>Contabilidade especializada para o segmento odontológico.</p>
        </div>
      </div>
    </footer>
  );
}
