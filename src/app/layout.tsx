import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StructuredData } from "@/components/seo/structured-data";
import { absoluteUrl, isIndexableEnvironment, siteUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Odontto Contabilidade | Especialistas em Clínicas e Consultórios",
    template: "%s | Odontto Contabilidade",
  },
  description:
    "Contabilidade consultiva e estratégica especializada em dentistas, clínicas e consultórios odontológicos. Redução tributária legal, BPO financeiro e gestão completa.",
  keywords: [
    "contabilidade para dentistas",
    "contabilidade odontológica",
    "abertura de clínica odontológica",
    "planejamento tributário odontologia",
    "BPO financeiro dentistas",
    "carnê-leão dentista",
    "livro caixa dentista",
    "regularização CRO",
  ],
  authors: [{ name: "Odontto Contabilidade" }],
  creator: "Odontto Contabilidade",
  publisher: "Odontto Contabilidade",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title: "Odontto Contabilidade | Especialistas em Clínicas e Consultórios",
    description:
      "Contabilidade especializada para dentistas. Transformamos números em lucro, segurança e crescimento para o seu consultório.",
    images: [
      {
        url: "/images/odontto-hero-clinica-fade-2026.webp",
        width: 1672,
        height: 941,
        alt: "Contabilidade Odontto para dentistas e clínicas odontológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odontto Contabilidade | Especialistas em Clínicas e Consultórios",
    description:
      "Contabilidade consultiva para dentistas. Menos impostos, mais lucro e controle financeiro real.",
    images: ["/images/odontto-hero-clinica-fade-2026.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: isIndexableEnvironment,
    follow: isIndexableEnvironment,
    googleBot: {
      index: isIndexableEnvironment,
      follow: isIndexableEnvironment,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: absoluteUrl(),
  telephone: siteConfig.phone.label,
  image: absoluteUrl("/logo-odontto-cor-escura.png"),
  address: siteConfig.addresses.map((addr) => ({
    "@type": "PostalAddress",
    streetAddress: addr.lines.join(", "),
    addressLocality: addr.name.includes("Rio") ? "Rio de Janeiro" : "Itaboraí",
    addressRegion: "RJ",
    postalCode: addr.postalCode,
    addressCountry: "BR",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <head>
        <StructuredData data={structuredData} />
      </head>
      <body className="flex min-h-screen flex-col font-sans text-navy antialiased selection:bg-aqua-light selection:text-navy">
        {/* SVG definition for icon-gradient */}
        <svg aria-hidden="true" className="absolute" focusable="false" height="0" width="0">
          <defs>
            <linearGradient
              id="odontto-icon-gradient"
              gradientUnits="userSpaceOnUse"
              x1="2"
              x2="22"
              y1="2"
              y2="22"
            >
              <stop offset="0%" stopColor="#00C8BD" />
              <stop offset="100%" stopColor="#C6D53A" />
            </linearGradient>
          </defs>
        </svg>

        <a href="#conteudo" className="skip-link">
          Ir para conteúdo principal
        </a>

        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
