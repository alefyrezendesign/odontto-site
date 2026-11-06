import {
  BarChart3,
  Building2,
  Calculator,
  Clock,
  Cog,
  CreditCard,
  EyeOff,
  FileText,
  Landmark,
  Laptop,
  Layers3,
  MessageCircle,
  Network,
  ShieldCheck,
  Stethoscope,
  Tag,
  TrendingDown,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export type IconContentItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceItems: IconContentItem[] = [
  {
    title: "Abertura de Clínica",
    description:
      "CNPJ, alvarás, vigilância sanitária e tudo que você precisa para abrir as portas legalmente sem dor de cabeça.",
    icon: Building2,
  },
  {
    title: "Gestão Financeira (BPO)",
    description:
      "Contas a pagar, receber, conciliação e DRE para você saber exatamente quanto lucrou.",
    icon: Calculator,
  },
  {
    title: "Planejamento Tributário",
    description:
      "Encontramos a melhor forma jurídica e tributária para sua clínica pagar o menor imposto permitido por lei.",
    icon: ShieldCheck,
  },
  {
    title: "Folha de Pagamento",
    description:
      "Gestão completa de ASBs, TSBs, recepcionistas e dentistas parceiros, com segurança trabalhista.",
    icon: Users,
  },
  {
    title: "Emissão de Notas",
    description:
      "Parametrização e suporte para a emissão correta de notas fiscais, evitando inconsistências com a Receita.",
    icon: FileText,
  },
  {
    title: "Regularização CRO",
    description:
      "Cuidamos da parte burocrática junto ao Conselho, CNES e Prefeitura para manter seu consultório regular.",
    icon: Stethoscope,
  },
];

export const processItems = [
  {
    title: "Diagnóstico inicial",
    description: "Análise da carga tributária, estrutura de custos, oportunidades e riscos.",
  },
  {
    title: "Proteger",
    description:
      "Impostos corretos, regularidade, folha e retirada segura para proteger o que você construiu.",
  },
  {
    title: "Performar",
    description: "Gestão de fluxo de caixa e margem para a clínica produzir mais resultado.",
  },
  { title: "Evoluir", description: "Planejamento para investimentos, expansão e novas cadeiras." },
];

export const digitalItems: Pick<IconContentItem, "title" | "icon">[] = [
  { title: "Via WhatsApp", icon: MessageCircle },
  { title: "Totalmente em nuvem", icon: Laptop },
  { title: "Respostas rápidas", icon: Clock },
  { title: "Painéis visuais", icon: TrendingUp },
];

export const analysisItems: (IconContentItem & { number: string; tags: string[] })[] = [
  {
    number: "01",
    title: "Fluxo de caixa",
    tags: ["Entradas e saídas", "Previsibilidade"],
    description:
      "Sem controle de entradas e saídas, a falta de previsibilidade pode esconder prejuízos e impedir o crescimento sustentável da clínica.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Impostos pagos a mais",
    tags: ["Planejamento tributário", "Prevenção"],
    description:
      "Revisamos o enquadramento para identificar impostos indevidos e preservar o lucro dentro da legislação.",
    icon: TrendingDown,
  },
  {
    number: "03",
    title: "Altas taxas de cartões",
    tags: ["Maquininhas", "Cobranças indevidas"],
    description: "Mapeamos taxas não negociadas e cobranças que corroem a margem dos tratamentos.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Taxas bancárias",
    tags: ["Custos recorrentes", "Tarifas ocultas"],
    description:
      "Identificamos tarifas, custos de manutenção e juros acumulados que passam despercebidos na operação.",
    icon: Landmark,
  },
  {
    number: "05",
    title: "Margem de lucro",
    tags: ["Rentabilidade", "Análise por procedimento"],
    description:
      "Analisamos cada procedimento para mostrar onde a clínica ganha e onde perde dinheiro.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Precificação incorreta",
    tags: ["Formação de preço", "Competitividade"],
    description:
      "Corrigimos falhas na formação de preço que comprometem a lucratividade antes mesmo do atendimento.",
    icon: Tag,
  },
  {
    number: "07",
    title: "Custos invisíveis",
    tags: ["Despesas ocultas", "Previsibilidade"],
    description:
      "Revelamos custos de materiais e laboratórios que não aparecem com clareza nos relatórios.",
    icon: EyeOff,
  },
  {
    number: "08",
    title: "Desperdícios operacionais",
    tags: ["Eficiência", "Processos internos"],
    description:
      "Encontramos gargalos, retrabalho e processos manuais que consomem tempo e resultado.",
    icon: Cog,
  },
];

export const ecosystemPillars: IconContentItem[] = [
  {
    title: "Visão sistêmica",
    description:
      "Compreendemos o negócio de ponta a ponta e integramos áreas para criar estratégias aplicáveis.",
    icon: Layers3,
  },
  {
    title: "Crescimento escalável",
    description: "Construímos bases sólidas para que a empresa cresça de forma segura e contínua.",
    icon: TrendingUp,
  },
  {
    title: "Conexões de valor",
    description: "Conectamos sua operação a um ecossistema de soluções selecionadas.",
    icon: Network,
  },
];

export const ecosystemSolutions = [
  {
    title: "RX Análises",
    description:
      "Inteligência estratégica baseada em dados reais da clínica para identificar oportunidades e apoiar decisões seguras.",
    tags: [
      "Diagnóstico estratégico",
      "Análise de dados",
      "Inteligência de mercado",
      "Relatórios personalizados",
    ],
  },
  {
    title: "Partner Program",
    description:
      "Rede de parceiros especializados em tecnologia, marketing, jurídico e gestão, com curadoria e acompanhamento.",
    tags: ["Curadoria de parceiros", "Tecnologia", "Marketing digital", "Gestão e jurídico"],
  },
  {
    title: "Operação e Soluções",
    description:
      "Acompanhamento da operação comercial, do planejamento à execução, com foco em resultados mensuráveis.",
    tags: [
      "Operação comercial",
      "Planejamento estratégico",
      "Acompanhamento de resultados",
      "Crescimento escalável",
    ],
  },
];

export const homeFaqItems = [
  {
    question: "A Odontto atende em todo o Brasil?",
    answer:
      "Sim. Nossa estrutura digital permite atender clínicas odontológicas em todos os estados, com processos e acompanhamento remoto.",
  },
  {
    question: "Como funciona a troca de contabilidade?",
    answer:
      "Nossa equipe conduz a transição, solicita os documentos ao contador anterior e regulariza a base sem interromper a operação da clínica.",
  },
  {
    question: "Vocês fazem o imposto de renda da pessoa física?",
    answer:
      "Sim. Atendemos IRPF, Carnê-Leão e ajudamos a definir uma relação segura entre pró-labore e distribuição de lucros.",
  },
  {
    question: "Por que escolher uma contabilidade especializada em odontologia?",
    answer:
      "A odontologia tem regras tributárias, conselhos e rotinas próprias. A especialização reduz erros, evita pagamentos indevidos e melhora a leitura financeira da clínica.",
  },
];
