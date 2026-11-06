import type { NavigationItem } from "@/types/navigation";

export const siteConfig = {
  name: "Odontto Contabilidade",
  description: "Contabilidade especializada para dentistas, consultórios e clínicas odontológicas.",
  phone: {
    label: "(21) 2635-4903",
    number: "552126354903",
    href: "tel:+552126354903",
  },
  whatsapp: {
    label: "(21) 97180-7881",
    number: "5521971807881",
    href: "https://wa.me/5521971807881",
  },
  addresses: [
    {
      name: "Matriz - Itaboraí",
      lines: [
        "Prédio Hellix - Av. Vinte e Dois de Maio, 6331",
        "Bloco 1, 7º andar",
        "Jardim Imperial, Itaboraí - RJ",
      ],
      postalCode: "24800-258",
    },
    {
      name: "Filial - Rio de Janeiro",
      lines: ["R. México, 11 Bloco B", "Centro do Rio - RJ"],
      postalCode: "20030-114",
    },
  ],
} as const;

export const primaryNavigation: NavigationItem[] = [
  { label: "Início", href: "/", activePath: "/" },
  { label: "Sobre nós", href: "/sobre-nos", activePath: "/sobre-nos" },
  { label: "Serviços", href: "/servicos", activePath: "/servicos" },
  { label: "Análises", href: "/analises", activePath: "/analises" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Contato", href: "/contato", activePath: "/contato" },
];

export const contactCta = {
  label: "Pedir avaliação inicial",
  href: "/contato#formulario",
} as const;
