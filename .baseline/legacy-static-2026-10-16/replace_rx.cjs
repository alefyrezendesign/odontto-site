const fs = require('fs');

const newSection = `
      <section id="rx-solucoes" class="flex flex-col bg-[#020817] relative overflow-hidden w-full z-20">
        <!-- Background Image -->
        <div class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none" style="background-image: url('/bg-rx-gradient.jpg')"></div>
        
        <!-- SECTION 1: HERO -->
        <div class="flex flex-col justify-center pt-24 lg:pt-[10rem] pb-0 relative z-10">
          <div class="container-page flex flex-col gap-8 lg:gap-24">
            
            <!-- Top Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <!-- Left — Large Title -->
              <div class="flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-10">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-0 text-white max-w-full">
                  Muito além <br />
                  da contabilidade <br />
                  <span class="font-light italic text-slate-300">
                    um ecossistema <br />
                    de soluções.
                  </span>
                </h2>
                
                <a href="/contato#formulario" class="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-extrabold text-navy text-[15px] transition-all duration-300 bg-lime rounded-full hover:bg-aqua hover:text-white hover:shadow-[0_0_30px_rgba(0,200,189,0.4)] overflow-hidden cursor-pointer mt-8 lg:mt-10">
                  <span class="relative z-10 flex items-center gap-2">
                    Explorar Soluções
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1.5 transition-all duration-300" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </a>
              </div>

              <!-- Right — Visual abstract (Odontto CSS Orbit) -->
              <div class="relative flex items-center justify-center w-full group cursor-pointer lg:justify-end">
                <div class="rx-orbit relative aspect-square w-full max-w-[430px]" aria-hidden="true">
                  <span class="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/[0.10] blur-3xl transition-colors duration-500 group-hover:bg-aqua/[0.24]"></span>
                  <span class="rx-orbit-ring" style="--orbit-size: 36%; --orbit-duration: 28s; --orbit-delay: -8s; --orbit-direction: normal; --orbit-start: 34deg"><span class="rx-orbit-dot bg-white h-3.5 w-3.5"></span></span>
                  <span class="rx-orbit-ring" style="--orbit-size: 52%; --orbit-duration: 42s; --orbit-delay: -17s; --orbit-direction: reverse; --orbit-start: 138deg"><span class="rx-orbit-dot bg-lime h-3.5 w-3.5"></span></span>
                  <span class="rx-orbit-ring" style="--orbit-size: 68%; --orbit-duration: 54s; --orbit-delay: -31s; --orbit-direction: normal; --orbit-start: 246deg"><span class="rx-orbit-dot bg-white h-3.5 w-3.5"></span></span>
                  <span class="rx-orbit-ring" style="--orbit-size: 84%; --orbit-duration: 66s; --orbit-delay: -44s; --orbit-direction: reverse; --orbit-start: 312deg"><span class="rx-orbit-dot bg-white h-4 w-4"></span></span>
                  <span class="rx-orbit-core">
                    <img src="/images/rx-orbit-logo.png" alt="" class="rx-orbit-mark">
                  </span>
                </div>
              </div>
            </div>

            <!-- Bottom Section - Logo + Description -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 py-8 md:py-12 border-t-[3px] md:border-b-[3px] border-white/10 lg:mt-0 items-center">
              <div class="flex items-center gap-4 md:gap-8 min-w-0">
                <img src="/images/rx-solucoes-logo.png" alt="RX Soluções" class="h-auto w-44 sm:w-52" loading="lazy" decoding="async">
              </div>
              <p class="text-[15px] md:text-xl text-slate-300/90 leading-relaxed font-light">
                O <strong class="text-white font-medium">RX Soluções</strong> é um hub contábil que integra um ecossistema de serviços, diagnóstico, operação e parceiros estratégicos. Conectamos sua clínica às melhores soluções de maneira aderente ao seu momento de crescimento.
              </p>
            </div>
          </div>
        </div>

        <!-- SECTION 2: CARDS GRID -->
        <div class="w-full relative z-10 py-16 lg:py-24">
          <div class="container-page">
            <div class="grid grid-cols-1 md:grid-cols-3 border-t-[3px] md:border-y-[3px] border-white/10 md:divide-x-[3px] md:divide-y-0 divide-y-[3px] divide-white/10 border-x-0 md:border-x-[3px]">
              
              <!-- Card 1 -->
              <div class="group relative p-6 md:p-10 lg:p-14 flex flex-col items-start bg-transparent hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
                <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-5 md:mb-0 w-full">
                  <div class="w-10 h-10 md:w-12 md:h-12 md:mb-10 lg:mb-12 rounded-lg bg-aqua/10 border border-aqua/30 flex shrink-0 items-center justify-center group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(198,213,58,0.2)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-[22px] md:h-[22px] text-aqua drop-shadow-[0_0_8px_rgba(0,200,189,0.8)]">
                      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                      <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                      <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
                    </svg>
                  </div>
                  <h3 class="text-xl md:text-2xl font-semibold text-white md:mb-4 tracking-tight leading-tight whitespace-nowrap md:whitespace-normal group-hover:text-aqua transition-colors">Visão Sistêmica</h3>
                </div>
                <p class="text-[14.5px] md:text-base text-slate-400 font-light leading-relaxed">
                  Compreendemos o seu negócio de ponta a ponta, integrando diferentes áreas para criar estratégias que funcionam na prática.
                </p>
              </div>

              <!-- Card 2 -->
              <div class="group relative p-6 md:p-10 lg:p-14 flex flex-col items-start bg-transparent hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
                <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-5 md:mb-0 w-full">
                  <div class="w-10 h-10 md:w-12 md:h-12 md:mb-10 lg:mb-12 rounded-lg bg-aqua/10 border border-aqua/30 flex shrink-0 items-center justify-center group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(198,213,58,0.2)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-[22px] md:h-[22px] text-aqua drop-shadow-[0_0_8px_rgba(0,200,189,0.8)]">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <h3 class="text-xl md:text-2xl font-semibold text-white md:mb-4 tracking-tight leading-tight whitespace-nowrap md:whitespace-normal group-hover:text-aqua transition-colors">Crescimento Escalável</h3>
                </div>
                <p class="text-[14.5px] md:text-base text-slate-400 font-light leading-relaxed">
                  Focamos em resultados duradouros, construindo bases sólidas para que sua empresa escale de forma segura e contínua.
                </p>
              </div>

              <!-- Card 3 -->
              <div class="group relative p-6 md:p-10 lg:p-14 flex flex-col items-start bg-transparent hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
                <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-5 md:mb-0 w-full">
                  <div class="w-10 h-10 md:w-12 md:h-12 md:mb-10 lg:mb-12 rounded-lg bg-aqua/10 border border-aqua/30 flex shrink-0 items-center justify-center group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(198,213,58,0.2)] transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-[22px] md:h-[22px] text-aqua drop-shadow-[0_0_8px_rgba(0,200,189,0.8)]">
                      <circle cx="12" cy="5" r="3" />
                      <circle cx="5" cy="19" r="3" />
                      <circle cx="19" cy="19" r="3" />
                      <line x1="12" y1="8" x2="5" y2="16" />
                      <line x1="12" y1="8" x2="19" y2="16" />
                    </svg>
                  </div>
                  <h3 class="text-xl md:text-2xl font-semibold text-white md:mb-4 tracking-tight leading-tight whitespace-nowrap md:whitespace-normal group-hover:text-aqua transition-colors">Conexões de Valor</h3>
                </div>
                <p class="text-[14.5px] md:text-base text-slate-400 font-light leading-relaxed">
                  Encurtamos caminhos ao conectar sua operação a um ecossistema exclusivo de soluções validadas pelo mercado.
                </p>
              </div>

            </div>
          </div>
        </div>

        <!-- SECTION 3: EXPANDABLE ACCORDION -->
        <div class="w-full relative z-10 pb-20 pt-0">
          <div class="container-page">
            <div class="border-t-[3px] border-white/10">
              
              <!-- Accordion 1 -->
              <details class="group border-b-[3px] border-white/10" name="rx-solucoes-accordion">
                <summary class="w-full flex items-center justify-between py-8 md:py-10 cursor-pointer group text-left list-none">
                  <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 text-white group-hover:text-aqua">
                    RX Análises
                  </h3>
                  <div class="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 border-white/20 group-hover:border-white/40 group-open:border-aqua group-open:bg-aqua/10 group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70 group-open:text-aqua">
                      <path d="M12 5v14" /><path d="M5 12h14" />
                    </svg>
                  </div>
                </summary>
                <div class="pb-10 md:pb-12 max-w-2xl">
                  <p class="text-[15px] md:text-xl text-slate-300/80 leading-relaxed font-light mb-8">
                    Inteligência estratégica baseada em dados reais da sua clínica. Avaliamos cenários, identificamos oportunidades e entregamos diagnósticos precisos para decisões mais seguras.
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Diagnóstico Estratégico</span>
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Análise de Dados</span>
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Inteligência de Mercado</span>
                  </div>
                </div>
              </details>

              <!-- Accordion 2 -->
              <details class="group border-b-[3px] border-white/10" name="rx-solucoes-accordion">
                <summary class="w-full flex items-center justify-between py-8 md:py-10 cursor-pointer group text-left list-none">
                  <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 text-white group-hover:text-aqua">
                    Partner Program
                  </h3>
                  <div class="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 border-white/20 group-hover:border-white/40 group-open:border-aqua group-open:bg-aqua/10 group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70 group-open:text-aqua">
                      <path d="M12 5v14" /><path d="M5 12h14" />
                    </svg>
                  </div>
                </summary>
                <div class="pb-10 md:pb-12 max-w-2xl">
                  <p class="text-[15px] md:text-xl text-slate-300/80 leading-relaxed font-light mb-8">
                    Rede curada de parceiros especializados em tecnologia, marketing, jurídico e gestão. Conectamos sua empresa aos melhores fornecedores com curadoria e acompanhamento.
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Curadoria de Parceiros</span>
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Tecnologia</span>
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Marketing</span>
                  </div>
                </div>
              </details>

              <!-- Accordion 3 -->
              <details class="group" name="rx-solucoes-accordion">
                <summary class="w-full flex items-center justify-between py-8 md:py-10 cursor-pointer group text-left list-none">
                  <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 text-white group-hover:text-aqua">
                    Operação e Soluções
                  </h3>
                  <div class="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 border-white/20 group-hover:border-white/40 group-open:border-aqua group-open:bg-aqua/10 group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70 group-open:text-aqua">
                      <path d="M12 5v14" /><path d="M5 12h14" />
                    </svg>
                  </div>
                </summary>
                <div class="pb-10 md:pb-12 max-w-2xl">
                  <p class="text-[15px] md:text-xl text-slate-300/80 leading-relaxed font-light mb-8">
                    Acompanhamento completo da operação comercial, do planejamento à execução. Garantimos que as estratégias saiam do papel e gerem resultados mensuráveis.
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Operação Comercial</span>
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Planejamento Estratégico</span>
                    <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Crescimento Escalável</span>
                  </div>
                </div>
              </details>

            </div>
          </div>
        </div>

      </section>
`;

let html = fs.readFileSync('index.html', 'utf8');

// Replace the old Odontto section starting with `<section class="overflow-hidden bg-[linear-gradient(135deg,#03114E_0%,#052B56_48%,#020817_100%)]`
// It ends right before `<!-- FOOTER -->` or another `<section>`
html = html.replace(/<section class="overflow-hidden bg-\[linear-gradient\(135deg,#03114E_0%,#052B56_48%,#020817_100%\)\].*?>[\s\S]*?<\/section>/, newSection.trim());

fs.writeFileSync('index.html', html);
console.log('index.html replaced with Fitcount design successfully.');
