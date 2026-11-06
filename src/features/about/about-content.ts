import {
  Heart,
  Lightbulb,
  ShieldCheck,
  Target,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

export type AboutValueItem = {
  title: string;
  description: string;
  emphasis?: string;
  icon: LucideIcon;
};

export type AboutAudienceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutHeroContent = {
  eyebrow: "Nossa história",
  title: "Uma contabilidade que conhece a rotina da odontologia.",
  subtitle:
    "Aproximamos contabilidade, gestão e atendimento humano das decisões que fazem parte do dia a dia de uma clínica.",
} as const;

export const aboutStoryContent = {
  title: "A origem da Odontto",
  paragraphs: [
    "A Odontto nasceu da observação da rotina exaustiva dos profissionais da odontologia. Dentistas são formados para cuidar de pessoas e realizar procedimentos complexos com excelência clínica.",
    "Na faculdade, porém, gestão, finanças e planejamento tributário raramente recebem a mesma atenção. É exatamente nessa lacuna que clínicas excelentes ficam vulneráveis a impostos excessivos e desorganização financeira.",
    "Por isso nos especializamos exclusivamente neste segmento: compreendemos a fundo custos de materiais e implantes, divisão de honorários com parceiros, obrigações profissionais com o CRO e o alinhamento seguro entre pessoa jurídica e pessoa física.",
  ],
} as const;

export const aboutValues: AboutValueItem[] = [
  {
    title: "Humanização",
    description:
      "Por trás de cada CNPJ existe um profissional com sonhos, desafios e uma família. Nosso atendimento é próximo, claro, empático e focado na sua tranquilidade.",
    icon: Heart,
  },
  {
    title: "Ética e transparência",
    description:
      "Buscamos a menor carga tributária possível rigorosamente dentro da lei, protegendo o patrimônio construído e repudiando promessas irreais ou arriscadas.",
    emphasis: "dentro da lei",
    icon: ShieldCheck,
  },
  {
    title: "Inteligência estratégica",
    description:
      "Usamos os números reais da clínica para embasar decisões sobre equipe, aquisição de equipamentos, reformas, expansão e novos investimentos sustentáveis.",
    icon: Lightbulb,
  },
];

export const aboutAudiences: AboutAudienceItem[] = [
  {
    title: "Dentistas recém-formados",
    description:
      "Abertura de CNPJ, escolha do enquadramento tributário ideal e primeiros passos seguros na profissão.",
    icon: UserPlus,
  },
  {
    title: "Consultórios individuais",
    description:
      "Redução da mordida tributária, organização do fluxo de caixa e clareza sobre o pró-labore real.",
    icon: Target,
  },
  {
    title: "Clínicas e redes",
    description:
      "Gestão financeira avançada (BPO), conciliação diária, folha de múltiplos sócios e segurança trabalhista.",
    icon: Users,
  },
];
