import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Medal } from "lucide-react";

const clientAvatars = ["object-[24%_center]", "object-[50%_center]", "object-[78%_center]"];

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-white px-3 pb-5 pt-3 sm:px-5 sm:pb-8 sm:pt-5"
    >
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[1.75rem] bg-navy text-white lg:min-h-[650px]">
        <div className="hero-photo absolute inset-0">
          <Image
            src="/images/odontto-hero-clinica-fade-2026.webp"
            alt="Profissional de contabilidade de camisa azul cumprimenta dentista em um consultório odontológico"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-[linear-gradient(90deg,rgba(0,200,189,0.82)_0%,rgba(90,207,122,0.68)_48%,rgba(198,213,58,0.54)_100%)] [mask-image:linear-gradient(to_bottom,transparent,black)]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[650px] items-start px-6 py-12 sm:px-10 sm:py-14 lg:items-end lg:px-16 lg:py-20 xl:px-20">
          <div className="max-w-[610px] lg:ml-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:text-xs">
              <Medal size={15} className="text-white" aria-hidden="true" />
              Especialistas em contabilidade odontológica
            </p>
            <h1
              id="hero-title"
              className="mt-5 max-w-[570px] text-[clamp(2.35rem,4.2vw,4rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white"
            >
              Mais clareza para gerir. Mais tempo para cuidar.
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contato#formulario"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-navy transition-colors hover:bg-aqua"
              >
                Conversar com especialista
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/65 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
              >
                Conhecer serviços
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-[1.25rem] border border-white/90 bg-white/95 px-3.5 py-3 shadow-[0_14px_30px_rgba(3,17,78,0.16)] backdrop-blur-sm sm:bottom-8 sm:right-8 sm:px-4 sm:py-3.5">
          <div className="flex -space-x-2" aria-hidden="true">
            {clientAvatars.map((position) => (
              <span
                key={position}
                className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-aqua-light sm:h-10 sm:w-10"
              >
                <Image
                  src="/images/odontto-hero-equipe.webp"
                  alt=""
                  fill
                  sizes="40px"
                  className={`object-cover ${position}`}
                />
              </span>
            ))}
            <span
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#009b3a] shadow-sm sm:h-10 sm:w-10"
              role="img"
              aria-label="Bandeira do Brasil"
            >
              <span className="absolute h-4 w-4 rotate-45 bg-[#ffdf00]" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#002776] ring-1 ring-white/25" />
            </span>
          </div>
          <div className="whitespace-nowrap">
            <p className="text-xs font-extrabold leading-4 text-navy sm:text-sm">
              Atendimento digital
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium leading-3 text-secondary sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" aria-hidden="true" />
              em todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
