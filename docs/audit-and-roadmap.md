# Auditoria, decisões e roadmap

## Atualização da estrutura — novembro de 2026

- A home ficou focada na proposta principal, apresentação, serviços resumidos, perguntas e contato.
- Serviços e Análises passaram a ter rotas próprias, incluídas na navegação e no sitemap.
- Números de resultado e nomes de plataformas sem comprovação no projeto foram retirados da home.
- O contato apresenta a triagem inicial com mais clareza; e-mail é opcional e o envio continua dependendo da confirmação no WhatsApp.
- A dependência de lint foi alinhada à versão do Next.js.
- As imagens em `docs/previews/` são históricas e precisam de novas capturas.

Pendências de publicação: configurar o domínio HTTPS em `NEXT_PUBLIC_SITE_URL`, publicar conteúdo jurídico aprovado e validar dados quantitativos antes de exibi-los. Os arquivos sem uso aparente em `public/images/recovered/` devem ser revisados antes de qualquer remoção, pois podem ter referências externas.

## Diagnóstico anterior

| Severidade | Problema                                                                                       | Impacto                                                           |
| ---------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Crítica    | O build Vite publicava apenas a home e dependia de outra pasta para gerar HTML por regex.      | Rotas ausentes em produção, fonte dupla e risco de HTML inválido. |
| Alta       | O formulário de Contato continha marcação inválida e a rota respondia com erro.                | Perda direta do principal fluxo de conversão.                     |
| Alta       | Header, footer e navegação eram duplicados entre páginas.                                      | Alterações inconsistentes e manutenção cara.                      |
| Alta       | Conteúdo importante dependia de hover e o menu não refletia corretamente seu estado acessível. | Barreiras para teclado, toque e tecnologias assistivas.           |
| Média      | Links para âncoras inexistentes e links-placeholder.                                           | Navegação imprevisível e confiança reduzida.                      |
| Média      | Ausência de redução de movimento e foco global consistente.                                    | Desconforto e falha de acessibilidade.                            |
| Média      | Cores institucionais claras eram usadas em texto pequeno sobre branco.                         | Contraste abaixo da referência WCAG AA.                           |
| Média      | Imagens sem estratégia consistente de dimensões e carregamento.                                | Risco de CLS e desperdício de rede.                               |
| Baixa      | Ausência de documentação, verificação de tipos e página 404 própria.                           | Onboarding lento e regressões mais prováveis.                     |

## Refatorações concluídas

- Next.js e TypeScript consolidados neste repositório.
- Baseline recuperável criado antes da alteração estrutural.
- Conversor por regex, páginas HTML duplicadas e build Vite removidos da fonte ativa.
- Layout global com header, footer, skip link e conteúdo principal sem duplicação.
- Home, Sobre nós e Contato compostas por componentes de feature.
- Navegação e dados institucionais centralizados.
- Rotas `/`, `/sobre-nos`, `/contato` e página 404 estruturadas pelo App Router.
- Âncoras `#servicos`, `#analises`, `#duvidas` e `#formulario` corrigidas.
- Formulário substituído por fluxo validado e transparente de preparação da conversa no WhatsApp.
- Conteúdo de hover convertido para controles nativos acionáveis por teclado e toque.
- Foco visível, contraste seguro e redução de movimento aplicados globalmente.
- Imagens migradas para `next/image` com dimensões, prioridade e `sizes` adequados.
- Scripts de lint, tipos, build e verificação completa padronizados.

## Riscos e pendências conhecidas

- URLs oficiais das redes sociais e páginas jurídicas ainda não foram fornecidas; links falsos não foram mantidos.
- O formulário ainda não persiste dados, por decisão explícita de não implementar CRM sem fornecedor, credenciais e requisitos.
- Os PDFs e arquivos de referência em `public/` continuam grandes e devem ser movidos para armazenamento documental se precisarem permanecer disponíveis.
- Métricas de Lighthouse/Core Web Vitals precisam ser executadas em ambiente de produção representativo; nenhuma pontuação é presumida neste relatório.
- A declaração de compatibilidade de tipos de `lucide-react` existe porque a versão instalada declara um arquivo de tipos ausente no pacote publicado. Deve ser removida quando a dependência corrigir a distribuição.

## Próximas prioridades

1. Definir domínio de produção e completar canonical, Open Graph, sitemap e robots.
2. Confirmar URLs sociais e criar páginas jurídicas aprovadas.
3. Executar Lighthouse mobile/desktop em ambiente de homologação e otimizar com dados reais.
4. Adicionar testes E2E de navegação, menu mobile, âncoras e preparação do contato.
5. Definir CRM, consentimento LGPD, proteção contra spam e contrato da API.
6. Evoluir motion design com primitives reutilizáveis e Intersection Observer, mantendo a experiência sem movimento equivalente.
