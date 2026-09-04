import React from 'react';
import { Compass, ClipboardList, DollarSign, CheckCircle, Zap } from 'lucide-react';

export const WhatIsThePackSection: React.FC = () => {
  return (
    <section
      id="o-que-e-o-pack"
      className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0c1322] border-t border-slate-800 relative overflow-hidden"
    >
      {/* Subtle lighting ambiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-600/20 border border-amber-500/30 text-[#d97706] text-xs font-black uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
            DIRETO AO PONTO
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight uppercase leading-tight">
            O QUE É O PACK{' '}
            <span className="text-[#d97706]">SERRALHARIA LUCRATIVA?</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            É o maior acervo de projetos prontos para uso imediato na sua oficina. Esqueça a perda de tempo desenhando do zero ou errando nos orçamentos.
          </p>
        </div>

        {/* 3 Organized Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div
            id="card-projetos-prontos"
            className="bg-[#1e293b] rounded-2xl border border-slate-700/80 hover:border-[#d97706]/70 p-6 shadow-xl shadow-slate-950/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#d97706] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl mb-4 group-hover:border-[#d97706]/50 transition-colors shadow-inner">
                📐
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 flex items-center gap-2">
                +3.000 Projetos Prontos
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Organizados por categorias (portões, coberturas, esquadrias, estruturas e mais).
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-[#d97706] font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>PDF e CAD (DWG) Editáveis</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            id="card-detalhamento-completo"
            className="bg-[#1e293b] rounded-2xl border border-slate-700/80 hover:border-[#d97706]/70 p-6 shadow-xl shadow-slate-950/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#d97706] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl mb-4 group-hover:border-[#d97706]/50 transition-colors shadow-inner">
                📋
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 flex items-center gap-2">
                Detalhamento Completo
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Medidas exatas e lista de materiais necessária para evitar sobra de ferro.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-[#d97706] font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Corte Otimizado de Perfis</span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            id="card-precificacao-pronta"
            className="bg-[#1e293b] rounded-2xl border border-slate-700/80 hover:border-[#d97706]/70 p-6 shadow-xl shadow-slate-950/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-[#d97706] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl mb-4 group-hover:border-[#d97706]/50 transition-colors shadow-inner">
                💰
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 flex items-center gap-2">
                Precificação Pronta
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Custo estimado de produção e sugestão de preço final de venda para garantir seu lucro.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-[#d97706] font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Margem Limpa Garantida</span>
            </div>
          </div>
        </div>

        {/* Highlight Callout Box */}
        <div
          id="caixa-destaque-fechamento"
          className="rounded-2xl border-2 border-[#d97706] bg-gradient-to-r from-slate-900 via-[#1e293b] to-slate-900 p-5 sm:p-7 text-center shadow-xl shadow-amber-500/10"
        >
          <p className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
            ⚡ &quot;Zero Teoria. Zero Complicação. É escolher o projeto, fabricar e faturar.&quot;
          </p>
          <span className="text-xs sm:text-sm text-slate-300 mt-1.5 block font-medium">
            Projetado especialmente para serralheiros iniciantes e veteranos que querem economizar tempo e lucrar mais em cada serviço.
          </span>
        </div>
      </div>
    </section>
  );
};
