"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Mantém o erro disponível no console até que um serviço de observabilidade seja configurado.
    console.error("Runtime exception caught by ErrorBoundary:", error);
  }, [error]);

  return (
    <section className="section-y bg-offwhite flex min-h-[60vh] items-center">
      <div className="container-page max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-xs mb-6">
          <AlertCircle size={32} aria-hidden="true" />
        </div>
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-red-700">
          Ocorreu uma falha
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          Não foi possível carregar esta seção.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-secondary">
          Você pode tentar recarregar a visualização ou retornar à página inicial.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="button button-primary w-full sm:w-auto cursor-pointer"
          >
            <RefreshCw size={18} aria-hidden="true" />
            <span>Tentar novamente</span>
          </button>
          <Link href="/" className="button button-secondary w-full sm:w-auto">
            <Home size={18} aria-hidden="true" />
            <span>Voltar ao início</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
