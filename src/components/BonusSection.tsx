import React from 'react';
import { Gift, Calculator, BookOpen, Sparkles } from 'lucide-react';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus-exclusivos" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0c1322] border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-4 h-4 text-emerald-400" />
            Presentes Especiais Para Esta Turma
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            LEVE HOJE ESTES 2 BÔNUS EXCLUSIVOS
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Materiais desenvolvidos para profissionalizar sua oficina e multiplicar seus lucros.
          </p>
        </div>

        {/* 2 Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Bonus 1 */}
          <div
            id="bonus-1"
            className="bg-[#1e293b] rounded-2xl border-2 border-amber-500/40 hover:border-amber-500 p-6 sm:p-7 relative transition-all duration-300 shadow-xl shadow-slate-950/60 flex flex-col justify-between"
          >
            {/* Tag Badge */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                BÔNUS #1
              </span>
              <div className="text-right">
                <span className="text-xs text-slate-400 line-through mr-1.5">R$ 97,00</span>
                <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  GRÁTIS HOJE
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Planilha Inteligente de Precificação
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">⏱️</span>
                  <span><strong className="text-white">Orçamentos em 2 Minutos:</strong> Calcule custos de material, insumos e horas trabalhadas com poucos cliques.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">💰</span>
                  <span><strong className="text-white">Preço de Venda Certo:</strong> Saiba exatamente quanto cobrar para ter margem de lucro real em cada serviço.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">📊</span>
                  <span><strong className="text-white">Livre de Erros:</strong> Fórmula pronta que evita esquecer custos escondidos como discos, tintas e transporte.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">💻</span>
                  <span><strong className="text-white">Pronta para Usar:</strong> Abra no Google Planilhas ou Excel sem precisar instalar nada complexo.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-700/60 text-xs font-semibold text-amber-400 flex items-center justify-between">
              <span>Formato: Excel (.xlsx) + Google Planilhas</span>
              <span className="text-emerald-400 font-bold">100% Liberado</span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div
            id="bonus-2"
            className="bg-[#1e293b] rounded-2xl border-2 border-amber-500/40 hover:border-amber-500 p-6 sm:p-7 relative transition-all duration-300 shadow-xl shadow-slate-950/60 flex flex-col justify-between"
          >
            {/* Tag Badge */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                BÔNUS #2
              </span>
              <div className="text-right">
                <span className="text-xs text-slate-400 line-through mr-1.5">R$ 67,00</span>
                <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  GRÁTIS HOJE
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Guia Prático - Quanto Cobrar Sem Perder Serviço
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">📊</span>
                  <span><strong className="text-white">Margem de Segurança:</strong> Saiba até onde você pode negociar sem comprometer o lucro da sua oficina.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🚀</span>
                  <span><strong className="text-white">Orçamento Irresistível:</strong> Como montar uma proposta que passa autoridade e faz o cliente fechar na hora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">🚫</span>
                  <span><strong className="text-white">Chega de "Leilão de Preço":</strong> Pare de competir com serralheiros curiosos que cobram baratinho e queimam o mercado.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-base shrink-0">💬</span>
                  <span><strong className="text-white">Respostas para Clientes Indecisos:</strong> Modelos prontos de mensagens para destravar orçamentos parados no WhatsApp.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-700/60 text-xs font-semibold text-amber-400 flex items-center justify-between">
              <span>Formato: E-book Prático em PDF (Acesso Imediato)</span>
              <span className="text-emerald-400 font-bold">100% Liberado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
