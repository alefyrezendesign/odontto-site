# Odontto — site institucional

Base oficial do site institucional da Odontto, construída com Next.js, React, TypeScript e Tailwind CSS. Este diretório é a única fonte de implementação ativa; não há etapa de conversão de JSX para HTML por expressões regulares.

Rotas públicas: `/`, `/sobre-nos`, `/servicos`, `/analises` e `/contato`. A home apresenta a oferta principal; Serviços e Análises concentram o conteúdo detalhado.

## Executar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm ci
npm run dev
```

O servidor de desenvolvimento informa a URL local no terminal.

## Imagens e versões

- `public/images/` guarda as imagens do site e as alternativas para futuras edições.
- A foto da hero é configurada em `src/features/home/components/hero-section.tsx`. O fundo da faixa de indicadores é configurado em `src/features/home/components/impact-stats-section.tsx`.
- Em desenvolvimento, as imagens de `public/` são servidas diretamente. Ao substituir um arquivo pelo mesmo nome, recarregue a página.
- As atualizações ficam locais até que seja solicitado um `git push`.

## Validação e build

```bash
npm run lint
npm run typecheck
npm run build
```

O atalho `npm run check` executa formatação, lint, tipos, testes e build em sequência. Para servir o build de produção, use `npm start` após `npm run build`.

## Arquitetura

```text
src/
├── app/                    # rotas, metadados, layout global e página 404
├── components/
│   ├── layout/             # header e footer compartilhados
│   └── ui/                 # componentes de interface reutilizáveis
├── config/                 # navegação, contatos e configuração institucional
├── features/
│   ├── about/              # seções da página Sobre nós
│   ├── contact/            # conteúdo e formulário de Contato
│   └── home/               # conteúdo e seções da página inicial
├── services/               # limites de integração e transformação de dados
└── types/                  # contratos compartilhados e compatibilidade de tipos
```

As rotas são compostas por componentes de feature; conteúdo repetitivo fica em estruturas de dados tipadas. O layout global é responsável por header, footer, skip link e região principal.

## Criar uma página

1. Crie `src/app/nova-rota/page.tsx` e exporte seus metadados.
2. Coloque componentes específicos em `src/features/nova-feature/`.
3. Reutilize componentes de `src/components/ui/`.
4. Se a página entrar na navegação, adicione um item a `primaryNavigation` em `src/config/site.ts`.
5. Execute `npm run check` e teste a rota em mobile e desktop.

## Navegação e conteúdo institucional

- Menu e links principais: `src/config/site.ts`.
- Telefones, WhatsApp e endereços: `src/config/site.ts`.
- Conteúdo repetitivo da home: `src/features/home/home-content.ts`.
- Conteúdo do contato: `src/features/contact/contact-content.ts`.

Submenus podem ser declarados em `NavigationItem.children`; o header já oferece renderização para desktop e mobile quando houver itens nesse nível.

## Design system

Os tokens globais ficam em `src/app/globals.css`, incluindo cores, tipografia, sombras, tempos de movimento, containers, botões, cards, controles e estados de foco. Prefira tokens e componentes existentes a valores arbitrários repetidos.

O aqua e o lime institucionais continuam sendo usados em fundos, destaques e superfícies escuras. Para texto e ícones pequenos sobre fundo claro, use `aqua-strong` ou `lime-strong`, que oferecem contraste mais seguro.

## Acessibilidade e movimento

- O skip link leva diretamente ao conteúdo principal.
- O menu mobile informa seu estado, fecha com `Escape` e gerencia o foco.
- Itens expansíveis usam `details`/`summary`, com suporte nativo a teclado e toque.
- Todo elemento interativo recebe foco visível.
- `prefers-reduced-motion` desativa movimento não essencial e scroll suave.
- Imagens com `fill` possuem contêiner proporcional e `sizes`, reduzindo layout shift.

Animações futuras devem ficar desacopladas do conteúdo, usar `transform` e `opacity`, preferir Intersection Observer a listeners de scroll e sempre respeitar redução de movimento.

## Contato e futura integração com CRM

O formulário atual não simula um backend: ele valida os campos no navegador e prepara uma mensagem que o usuário confirma no WhatsApp. O e-mail é opcional. A transformação está isolada em `src/services/contact/build-whatsapp-url.ts`.

Antes de publicar, configure `NEXT_PUBLIC_SITE_URL` com o domínio oficial HTTPS. Sem essa variável, canonical e sitemap apontam para `localhost` e o site permanece fora da indexação. Confirme também o conteúdo jurídico aprovado e as provas de qualquer dado quantitativo ou parceria antes de voltar a exibi-los.

Quando o CRM for definido:

1. crie um Route Handler no servidor;
2. valide os dados também no servidor;
3. adicione proteção contra spam e rate limiting;
4. mantenha tokens somente em variáveis de ambiente do servidor;
5. implemente estados explícitos de envio, sucesso e erro;
6. registre consentimento e regras de retenção conforme a LGPD.

## Baseline anterior

A implementação estática anterior foi preservada em `.baseline/legacy-static-2026-10-16/`. Ela existe apenas para recuperação e auditoria; não deve voltar a ser usada como fonte de build.
