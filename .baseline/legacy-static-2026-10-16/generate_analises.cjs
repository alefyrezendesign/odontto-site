const fs = require('fs');

const items = [
  {
    num: '01', title: 'Fluxo de caixa', tags: ['Entradas e saídas', 'Previsibilidade'],
    desc: 'Sem controle de entradas e saídas, você trabalha no escuro. A falta de previsibilidade do fluxo de caixa pode esconder prejuízos e impedir o crescimento sustentável da sua clínica.',
    icon: 'bar-chart-3',
  },
  {
    num: '02', title: 'Impostos pagos a mais', tags: ['Planejamento tributário', 'Prevenção'],
    desc: 'Clínicas odontológicas muitas vezes pagam impostos indevidos no enquadramento. Sem uma revisão tributária, você pode estar deixando parte do seu lucro na mesa do governo todos os meses.',
    icon: 'trending-down',
  },
  {
    num: '03', title: 'Altas taxas de cartões', tags: ['Maquininhas', 'Cobranças indevidas'],
    desc: 'Você sabe exatamente quanto as maquininhas estão levando do lucro dos tratamentos? Taxas não negociadas e cobranças indevidas corroem sua margem de forma silenciosa e contínua.',
    icon: 'credit-card',
  },
  {
    num: '04', title: 'Taxas bancárias', tags: ['Custos recorrentes', 'Tarifas ocultas'],
    desc: 'Mapeie custos financeiros recorrentes que passam despercebidos na operação. Tarifas bancárias, taxas de manutenção e juros acumulados podem representar uma fatia significativa do faturamento.',
    icon: 'landmark',
  },
  {
    num: '05', title: 'Margem de lucro', tags: ['Rentabilidade', 'Análise por procedimento'],
    desc: 'Veja com clareza onde sua margem está sendo comprimida. Analisamos cada procedimento odontológico para identificar onde você ganha e onde está perdendo dinheiro sem perceber.',
    icon: 'trending-up',
  },
  {
    num: '06', title: 'Precificação incorreta', tags: ['Formação de preço', 'Competitividade'],
    desc: 'Evite vender com margem baixa por falhas na formação de preço. Uma precificação mal calibrada destrói a lucratividade antes mesmo do paciente sentar na cadeira.',
    icon: 'tag',
  },
  {
    num: '07', title: 'Custos invisíveis', tags: ['Despesas ocultas', 'Previsibilidade'],
    desc: 'Revele despesas ocultas que prejudicam a previsibilidade financeira. Custos com materiais e laboratórios que não aparecem nos relatórios podem estar drenando seu resultado.',
    icon: 'eye-off',
  },
  {
    num: '08', title: 'Desperdícios operacionais', tags: ['Eficiência', 'Processos internos'],
    desc: 'Encontre gargalos que consomem tempo, dinheiro e eficiência. Processos manuais, retrabalho e falta de automação prejudicam a operação da clínica e reduzem o lucro.',
    icon: 'cog',
  },
];

let itemsHtml = items.map((item) => `
<div class="analise-item group border-b border-border last:border-b-0 cursor-pointer transition-opacity duration-300 ease-out">
  <div class="lg:h-[149px] flex items-center gap-4 lg:gap-10 py-6 lg:py-0">
    <span class="text-4xl lg:text-5xl font-extrabold tabular-nums shrink-0 transition-colors duration-300 w-12 lg:w-16 text-slate-300 group-hover:text-aqua">${item.num}</span>
    <div class="flex-1 min-w-0">
      <h3 class="text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 text-secondary group-hover:text-navy">${item.title}</h3>
      <div class="flex items-center gap-2.5 mt-2 flex-wrap">
        ${item.tags.map((tag, i) => `
        <span class="flex items-center gap-2.5">
          <span class="text-sm font-medium transition-colors text-slate-400 group-hover:text-secondary">${tag}</span>
          ${i < item.tags.length - 1 ? `<span class="w-1.5 h-1.5 rounded-full shrink-0 transition-colors bg-slate-300 group-hover:bg-aqua"></span>` : ''}
        </span>
        `).join('')}
      </div>
    </div>
  </div>
  <div class="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 mb-0 group-hover:max-h-[300px] group-hover:opacity-100 group-hover:mb-6">
    <div class="flex items-start gap-4 pl-16 lg:pl-[5.5rem] pr-4">
      <div class="w-10 h-10 rounded-xl bg-aqua/10 text-aqua flex items-center justify-center shrink-0 border border-aqua/30">
        <i data-lucide="${item.icon}" class="w-5 h-5"></i>
      </div>
      <p class="text-[14.5px] text-secondary leading-relaxed max-w-lg">
        ${item.desc}
      </p>
    </div>
  </div>
</div>
`).join('');

const newSection = `
      <section id="odontto-analises" class="relative w-full bg-offwhite pt-10 md:pt-16 lg:h-[250vh]">
        <div class="lg:sticky lg:top-0 lg:h-screen w-full flex items-center justify-center lg:overflow-hidden pt-8 pb-6 lg:py-0">
          <div class="container-page relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
              
              <!-- LEFT SIDE -->
              <div class="w-full lg:w-[40%] shrink-0 flex flex-col justify-center relative z-20 items-center text-center lg:items-start lg:text-left pt-0">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-sm bg-white border border-border mb-6 mx-auto lg:mx-0">
                  <span class="text-aqua">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                  </span>
                  <span class="text-[11px] font-extrabold uppercase tracking-[0.08em] text-navy">
                    RX Análise
                  </span>
                </div>
                <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] mb-6">
                  Análise profunda <br class="hidden lg:block"/>
                  para <span class="text-aqua">decisões claras.</span>
                </h2>
                <p class="text-lg text-secondary mb-10 max-w-md mx-auto lg:mx-0">
                  Identifique impostos pagos a mais, taxas invisíveis e gargalos financeiros que reduzem o lucro da sua clínica todos os meses.
                </p>
                <a href="https://wa.me/5521971807881" target="_blank" rel="noreferrer" class="group btn-gradient hover:btn-gradient-hover inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-extrabold transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                  <span>Ver diagnóstico grátis</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>

              <!-- RIGHT SIDE -->
              <div class="flex-1 w-full relative z-10">
                <div class="relative w-full lg:h-[650px] flex flex-col justify-center lg:overflow-hidden">
                  <div id="analises-track" class="lg:absolute lg:left-0 lg:right-0 w-full" style="top: 50%;">
                    ${itemsHtml}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
`;

let html = fs.readFileSync('index.html', 'utf8');

// Use a regex that specifically targets the section containing "Análise profunda"
html = html.replace(/<section class="section-y bg-offwhite">(?:(?!<\/section>)[\s\S])*Análise profunda[\s\S]*?<\/section>/, newSection.trim());

fs.writeFileSync('index.html', html);
console.log('index.html updated successfully.');
