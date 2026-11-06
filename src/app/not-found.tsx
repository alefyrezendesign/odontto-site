import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-page max-w-3xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.15em] text-aqua-strong">
          Erro 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-secondary">
          O endereço pode ter mudado ou não existir. Volte para a página inicial ou fale com nossa
          equipe.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="button button-primary">
            Voltar ao início
          </Link>
          <Link href="/contato" className="button button-secondary">
            Ir para contato
          </Link>
        </div>
      </div>
    </section>
  );
}
