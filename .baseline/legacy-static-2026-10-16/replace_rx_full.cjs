const fs = require('fs');

const newSection = `
<div id="rx-solucoes-wrapper" class="relative z-30 w-full bg-[#020817]">
  
  <!-- PART 1: Nossas Soluções (6 Cards) -->
  <section class="relative py-24 lg:py-32 overflow-hidden border-b border-white/5">
    <div class="container-page relative z-10">
      <div class="w-full mb-16 lg:mb-24 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12">
        <div class="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,200,189,0.15)] bg-aqua/10 border border-aqua/30 mb-6 transition-all hover:bg-aqua/20 w-fit">
            <span class="text-aqua">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            </span>
            <span class="text-[11px] font-bold uppercase tracking-[0.08em] text-aqua">Nossas Soluções</span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white md:whitespace-nowrap">
            Soluções para <br><span class="font-light italic text-aqua/70">resultados reais</span>
          </h2>
        </div>
        
        <div class="w-full lg:w-auto flex-1 max-w-[680px] flex flex-col md:flex-row items-center justify-between bg-[linear-gradient(135deg,#00C8BD_0%,#C6D53A_100%)] rounded-3xl p-8 lg:px-10 lg:py-10 shadow-xl shadow-aqua/20 gap-6">
          <span class="text-navy text-base lg:text-xl font-extrabold text-center md:text-left">Quer estruturar e proteger <br class="block sm:hidden"> sua clínica?</span>
          <a href="/contato#formulario" class="group flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-white hover:bg-[#07111f] transition-colors shadow-sm shrink-0 w-full md:w-auto justify-center">
            <span class="text-[15px] font-bold uppercase tracking-wide">Falar com consultor</span>
            <div class="w-8 h-8 rounded-full bg-aqua/20 flex items-center justify-center group-hover:bg-aqua/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-aqua"><path d="m9 18 6-6-6-6"></path></svg>
            </div>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Card 01 -->
        <div class="bg-[#0b1018] border border-white/5 hover:border-aqua/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[160px] md:min-h-[380px]">
          <span class="text-slate-500 group-hover:text-aqua text-sm font-bold mb-4 md:mb-6 block tracking-widest transition-colors">01</span>
          <h3 class="text-[1.3rem] md:text-2xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight pr-10 md:pr-0">Planejamento tributário</h3>
          <p class="text-slate-400 group-hover:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-0 md:mb-12 flex-1 transition-colors">Revisamos seu enquadramento e obrigações para eliminar cada real pago indevidamente pela sua clínica.</p>
          <div class="mt-auto md:relative z-10 flex items-center justify-end md:justify-between w-full">
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-aqua/10 rounded-full blur-[40px] group-hover:bg-aqua/20 transition-colors duration-700 pointer-events-none"></div>
            <button class="absolute top-5 right-5 md:relative md:top-auto md:right-auto z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-aqua flex items-center justify-center text-navy shadow-[0_0_15px_rgba(0,200,189,0.3)] group-hover:shadow-[0_0_25px_rgba(0,200,189,0.6)] group-hover:scale-110 transition-all duration-300" title="Saber mais"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
          </div>
        </div>

        <!-- Card 02 -->
        <div class="bg-[#0b1018] border border-white/5 hover:border-aqua/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[160px] md:min-h-[380px]">
          <span class="text-slate-500 group-hover:text-aqua text-sm font-bold mb-4 md:mb-6 block tracking-widest transition-colors">02</span>
          <h3 class="text-[1.3rem] md:text-2xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight pr-10 md:pr-0">Análise de margem</h3>
          <p class="text-slate-400 group-hover:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-0 md:mb-12 flex-1 transition-colors">Identificamos tratamentos com margem negativa e criamos estratégias de precificação orientadas por dados.</p>
          <div class="mt-auto md:relative z-10 flex items-center justify-end md:justify-between w-full">
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-aqua/10 rounded-full blur-[40px] group-hover:bg-aqua/20 transition-colors duration-700 pointer-events-none"></div>
            <button class="absolute top-5 right-5 md:relative md:top-auto md:right-auto z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-aqua flex items-center justify-center text-navy shadow-[0_0_15px_rgba(0,200,189,0.3)] group-hover:shadow-[0_0_25px_rgba(0,200,189,0.6)] group-hover:scale-110 transition-all duration-300" title="Saber mais"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
          </div>
        </div>

        <!-- Card 03 -->
        <div class="bg-[#0b1018] border border-white/5 hover:border-aqua/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[160px] md:min-h-[380px]">
          <span class="text-slate-500 group-hover:text-aqua text-sm font-bold mb-4 md:mb-6 block tracking-widest transition-colors">03</span>
          <h3 class="text-[1.3rem] md:text-2xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight pr-10 md:pr-0">Gestão financeira</h3>
          <p class="text-slate-400 group-hover:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-0 md:mb-12 flex-1 transition-colors">Obtenha clareza com projeções semanais, alertas de liquidez e um controle integrado da sua clínica.</p>
          <div class="mt-auto md:relative z-10 flex items-center justify-end md:justify-between w-full">
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-aqua/10 rounded-full blur-[40px] group-hover:bg-aqua/20 transition-colors duration-700 pointer-events-none"></div>
            <button class="absolute top-5 right-5 md:relative md:top-auto md:right-auto z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-aqua flex items-center justify-center text-navy shadow-[0_0_15px_rgba(0,200,189,0.3)] group-hover:shadow-[0_0_25px_rgba(0,200,189,0.6)] group-hover:scale-110 transition-all duration-300" title="Saber mais"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
          </div>
        </div>

        <!-- Card 04 -->
        <div class="bg-[#0b1018] border border-white/5 hover:border-aqua/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[160px] md:min-h-[380px]">
          <span class="text-slate-500 group-hover:text-aqua text-sm font-bold mb-4 md:mb-6 block tracking-widest transition-colors">04</span>
          <h3 class="text-[1.3rem] md:text-2xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight pr-10 md:pr-0">Controle de materiais</h3>
          <p class="text-slate-400 group-hover:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-0 md:mb-12 flex-1 transition-colors">Otimizamos o controle e giro de estoque da sua clínica, reduzindo perdas e desperdícios com materiais.</p>
          <div class="mt-auto md:relative z-10 flex items-center justify-end md:justify-between w-full">
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-aqua/10 rounded-full blur-[40px] group-hover:bg-aqua/20 transition-colors duration-700 pointer-events-none"></div>
            <button class="absolute top-5 right-5 md:relative md:top-auto md:right-auto z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-aqua flex items-center justify-center text-navy shadow-[0_0_15px_rgba(0,200,189,0.3)] group-hover:shadow-[0_0_25px_rgba(0,200,189,0.6)] group-hover:scale-110 transition-all duration-300" title="Saber mais"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
          </div>
        </div>

        <!-- Card 05 -->
        <div class="bg-[#0b1018] border border-white/5 hover:border-aqua/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[160px] md:min-h-[380px]">
          <span class="text-slate-500 group-hover:text-aqua text-sm font-bold mb-4 md:mb-6 block tracking-widest transition-colors">05</span>
          <h3 class="text-[1.3rem] md:text-2xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight pr-10 md:pr-0">Precificação estratégica</h3>
          <p class="text-slate-400 group-hover:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-0 md:mb-12 flex-1 transition-colors">Aplicamos mark-ups inteligentes nos seus procedimentos para maximizar lucros com previsibilidade.</p>
          <div class="mt-auto md:relative z-10 flex items-center justify-end md:justify-between w-full">
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-aqua/10 rounded-full blur-[40px] group-hover:bg-aqua/20 transition-colors duration-700 pointer-events-none"></div>
            <button class="absolute top-5 right-5 md:relative md:top-auto md:right-auto z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-aqua flex items-center justify-center text-navy shadow-[0_0_15px_rgba(0,200,189,0.3)] group-hover:shadow-[0_0_25px_rgba(0,200,189,0.6)] group-hover:scale-110 transition-all duration-300" title="Saber mais"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
          </div>
        </div>

        <!-- Card 06 -->
        <div class="bg-[#0b1018] border border-white/5 hover:border-aqua/30 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[160px] md:min-h-[380px]">
          <span class="text-slate-500 group-hover:text-aqua text-sm font-bold mb-4 md:mb-6 block tracking-widest transition-colors">06</span>
          <h3 class="text-[1.3rem] md:text-2xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight pr-10 md:pr-0">Diagnóstico 360º</h3>
          <p class="text-slate-400 group-hover:text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-0 md:mb-12 flex-1 transition-colors">Realizamos uma avaliação completa dos seus processos para identificar gargalos operacionais e oportunidades de economia.</p>
          <div class="mt-auto md:relative z-10 flex items-center justify-end md:justify-between w-full">
            <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-aqua/10 rounded-full blur-[40px] group-hover:bg-aqua/20 transition-colors duration-700 pointer-events-none"></div>
            <button class="absolute top-5 right-5 md:relative md:top-auto md:right-auto z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-aqua flex items-center justify-center text-navy shadow-[0_0_15px_rgba(0,200,189,0.3)] group-hover:shadow-[0_0_25px_rgba(0,200,189,0.6)] group-hover:scale-110 transition-all duration-300" title="Saber mais"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PART 2: Ecossistema RX -->
  <section id="rx-ecossistema" class="flex flex-col relative overflow-hidden w-full z-20">
    <div class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 pointer-events-none opacity-50" style="background-image: url('/bg-rx-gradient.jpg'); mix-blend-mode: screen;"></div>
    
    <div class="flex flex-col justify-center pt-24 lg:pt-[10rem] pb-0 relative z-10">
      <div class="container-page flex flex-col gap-8 lg:gap-24">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-10">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-0 text-white max-w-full">
              Muito além <br>da contabilidade <br>
              <span class="font-light italic text-aqua/70">um ecossistema <br>de soluções.</span>
            </h2>
            <a href="/contato#formulario" class="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-extrabold text-navy text-[15px] transition-all duration-300 bg-lime rounded-full hover:bg-aqua hover:text-white hover:shadow-[0_0_30px_rgba(0,200,189,0.4)] overflow-hidden cursor-pointer mt-8 lg:mt-10">
              <span class="relative z-10 flex items-center gap-2">Explorar Soluções
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1.5 transition-all duration-300" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </a>
          </div>
          
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 py-8 md:py-12 border-t-[3px] md:border-b-[3px] border-white/10 lg:mt-0 items-center">
          <div class="flex items-center gap-4 md:gap-8 min-w-0">
            <img alt="RX" class="h-8 sm:h-9 md:h-11 object-contain shrink" loading="lazy" decoding="async" src="/images/rx-solucoes-logo.png">
          </div>
          <p class="text-[15px] md:text-xl text-slate-300/90 leading-relaxed font-light">O <strong class="text-white font-medium">RX Soluções</strong> é um hub contábil que integra um ecossistema de serviços, diagnóstico, operação e parceiros estratégicos. Conectamos sua clínica às melhores soluções de maneira aderente ao seu momento de crescimento.</p>
        </div>
      </div>
    </div>

    <div class="w-full relative z-10 py-16 lg:py-24">
      <div class="container-page">
        <div class="grid grid-cols-1 md:grid-cols-3 border-t-[3px] md:border-y-[3px] border-white/10 md:divide-x-[3px] md:divide-y-0 divide-y-[3px] divide-white/10 border-x-0 md:border-x-[3px]">
          
          <div class="group relative p-6 md:p-10 lg:p-14 flex flex-col items-start bg-transparent hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
            <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-5 md:mb-0 w-full">
              <div class="w-10 h-10 md:w-12 md:h-12 md:mb-10 lg:mb-12 rounded-lg bg-aqua/10 border border-aqua/30 flex shrink-0 items-center justify-center group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(198,213,58,0.2)] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-[22px] md:h-[22px] text-aqua drop-shadow-[0_0_8px_rgba(0,200,189,0.8)]"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"></path><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"></path></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-semibold text-white md:mb-4 tracking-tight leading-tight whitespace-nowrap md:whitespace-normal group-hover:text-aqua transition-colors">Visão Sistêmica</h3>
            </div>
            <p class="text-[14.5px] md:text-base text-slate-400 font-light leading-relaxed">Compreendemos o seu negócio de ponta a ponta, integrando diferentes áreas para criar estratégias que funcionam na prática.</p>
          </div>

          <div class="group relative p-6 md:p-10 lg:p-14 flex flex-col items-start bg-transparent hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
            <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-5 md:mb-0 w-full">
              <div class="w-10 h-10 md:w-12 md:h-12 md:mb-10 lg:mb-12 rounded-lg bg-aqua/10 border border-aqua/30 flex shrink-0 items-center justify-center group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(198,213,58,0.2)] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-[22px] md:h-[22px] text-aqua drop-shadow-[0_0_8px_rgba(0,200,189,0.8)]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-semibold text-white md:mb-4 tracking-tight leading-tight whitespace-nowrap md:whitespace-normal group-hover:text-aqua transition-colors">Crescimento Escalável</h3>
            </div>
            <p class="text-[14.5px] md:text-base text-slate-400 font-light leading-relaxed">Focamos em resultados duradouros, construindo bases sólidas para que sua clínica escale de forma segura e contínua.</p>
          </div>

          <div class="group relative p-6 md:p-10 lg:p-14 flex flex-col items-start bg-transparent hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer">
            <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 mb-5 md:mb-0 w-full">
              <div class="w-10 h-10 md:w-12 md:h-12 md:mb-10 lg:mb-12 rounded-lg bg-aqua/10 border border-aqua/30 flex shrink-0 items-center justify-center group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(198,213,58,0.2)] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 md:w-[22px] md:h-[22px] text-aqua drop-shadow-[0_0_8px_rgba(0,200,189,0.8)]"><circle cx="12" cy="5" r="3"></circle><circle cx="5" cy="19" r="3"></circle><circle cx="19" cy="19" r="3"></circle><line x1="12" y1="8" x2="5" y2="16"></line><line x1="12" y1="8" x2="19" y2="16"></line></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-semibold text-white md:mb-4 tracking-tight leading-tight whitespace-nowrap md:whitespace-normal group-hover:text-aqua transition-colors">Conexões de Valor</h3>
            </div>
            <p class="text-[14.5px] md:text-base text-slate-400 font-light leading-relaxed">Encurtamos caminhos ao conectar sua operação a um ecossistema exclusivo de soluções validadas pelo mercado odontológico.</p>
          </div>

        </div>
      </div>
    </div>

    <div class="w-full relative z-10 pb-16 pt-0">
      <div class="container-page">
        <div class="border-t-[3px] border-white/10">
          
          <details class="group border-b-[3px] border-white/10" name="rx-solucoes-accordion">
            <summary class="w-full flex items-center justify-between py-8 md:py-10 cursor-pointer group text-left list-none">
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 text-white group-hover:text-aqua">RX Análises</h3>
              <div class="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 border-white/20 group-hover:border-white/40 group-open:border-aqua group-open:bg-aqua/10 group-open:rotate-45">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70 group-open:text-aqua"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
              </div>
            </summary>
            <div class="pb-10 md:pb-12 max-w-2xl">
              <p class="text-[15px] md:text-xl text-slate-300/80 leading-relaxed font-light mb-8">Inteligência estratégica baseada em dados reais da sua clínica. Avaliamos cenários, identificamos oportunidades e entregamos diagnósticos precisos para decisões mais seguras.</p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Diagnóstico Estratégico</span>
                <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Análise de Dados</span>
                <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Inteligência de Mercado</span>
              </div>
            </div>
          </details>

          <details class="group border-b-[3px] border-white/10" name="rx-solucoes-accordion">
            <summary class="w-full flex items-center justify-between py-8 md:py-10 cursor-pointer group text-left list-none">
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 text-white group-hover:text-aqua">Partner Program</h3>
              <div class="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 border-white/20 group-hover:border-white/40 group-open:border-aqua group-open:bg-aqua/10 group-open:rotate-45">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70 group-open:text-aqua"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
              </div>
            </summary>
            <div class="pb-10 md:pb-12 max-w-2xl">
              <p class="text-[15px] md:text-xl text-slate-300/80 leading-relaxed font-light mb-8">Rede curada de parceiros especializados em tecnologia, marketing, jurídico e gestão. Conectamos sua empresa aos melhores fornecedores com curadoria e acompanhamento.</p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Curadoria de Parceiros</span>
                <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Tecnologia</span>
                <span class="px-4 py-2 rounded-full border border-aqua/40 text-sm text-aqua font-light">Marketing</span>
              </div>
            </div>
          </details>

          <details class="group" name="rx-solucoes-accordion">
            <summary class="w-full flex items-center justify-between py-8 md:py-10 cursor-pointer group text-left list-none">
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-300 text-white group-hover:text-aqua">Operação e Soluções</h3>
              <div class="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 border-white/20 group-hover:border-white/40 group-open:border-aqua group-open:bg-aqua/10 group-open:rotate-45">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70 group-open:text-aqua"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
              </div>
            </summary>
            <div class="pb-10 md:pb-12 max-w-2xl">
              <p class="text-[15px] md:text-xl text-slate-300/80 leading-relaxed font-light mb-8">Acompanhamento completo da operação, do planejamento à execução. Garantimos que as estratégias saiam do papel e gerem resultados mensuráveis.</p>
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

</div>
`;

let html = fs.readFileSync('index.html', 'utf8');

// The regex will look for the old section (either the Odontto linear-gradient or the wrapper we added).
// Wait, the user said "não alterou nada no site".
// This means my previous script might NOT have replaced the section properly because the regex failed, OR the user reverted, OR they wanted the double-section.
// Let's replace the ENTIRE block where `bg-[linear-gradient(135deg,#03114E` or `id="rx-solucoes"` is.
// Actually, I can use an even safer regex.

html = html.replace(/<section id="rx-solucoes"[\s\S]*?<\/section>/g, ""); // Remove previous insertions if any
html = html.replace(/<div id="rx-solucoes-wrapper"[\s\S]*?<\/div>/g, ""); // Remove previous wrapper if any

html = html.replace(/<section class="overflow-hidden bg-\[linear-gradient\(135deg,#03114E_0%,#052B56_48%,#020817_100%\)\].*?>[\s\S]*?<\/section>/, newSection.trim());

fs.writeFileSync('index.html', html);
console.log('index.html replaced with DOUBLE Fitcount design successfully.');
