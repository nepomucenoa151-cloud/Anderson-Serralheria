import React from 'react';
import { ArrowRight, Check, X, ShieldCheck, Lock, CreditCard, QrCode, Zap, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onCtaClick: (plan: 'basic' | 'complete') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-900 relative scroll-mt-14">
      <div id="oferta-especial" className="hidden" />
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[450px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 fill-red-400" />
            ESCOLHA O PLANO IDEAL PARA A SUA OFICINA
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            INVISTA HOJE NA SUA SERRALHARIA
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Comece com o Pacote Básico ou leve a biblioteca completa com todos os bônus e atualizações vitalícias.
          </p>
        </div>

        {/* Pricing Grid (2 Plans: Básico vs Completo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* 1. PACOTE BÁSICO - R$ 14,90 (cols 1 to 5) */}
          <div
            id="pricing-card-basic"
            className="lg:col-span-5 bg-[#172033] rounded-3xl border border-slate-700/80 p-6 sm:p-7 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              {/* Plan Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  Essencial para Iniciar
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Acesso aos Arquivos
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mt-3">
                Pacote Básico
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Ideal para quem quer começar rápido com os projetos essenciais em PDF.
              </p>

              {/* Price Tag */}
              <div className="mt-5 mb-5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 font-medium line-through">
                  De R$ 67,00
                </div>
                <div className="mt-0.5 flex items-baseline justify-center gap-1 text-white">
                  <span className="text-xs font-semibold text-slate-400">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                    R$ 14,90
                  </span>
                  <span className="text-xs text-slate-400">à vista</span>
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">
                  ou em até <strong>2x de R$ 7,85</strong> no cartão
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3 mb-6">
                <h4 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">
                  BENEFÍCIOS INCLUSOS:
                </h4>

                {[
                  '500 Projetos Essenciais em PDF prontos',
                  'Modelos mais pedidos de móveis industriais',
                  'Projetos de portões, grades e suportes simples',
                  'Medidas principais e especificações básicas',
                  'Envio imediato no seu e-mail',
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-medium text-slate-200 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Button Básico */}
              <button
                id="cta-pacote-basico"
                onClick={() => onCtaClick('basic')}
                type="button"
                className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-emerald-500 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 shadow-md"
              >
                <span>GARANTIR PACOTE BÁSICO (R$ 14,90)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garantia de 7 dias • Envio Imediato</span>
              </div>
            </div>
          </div>

          {/* 2. PACOTE COMPLETO 2.0 - R$ 47,00 (cols 6 to 12 - DESTAQUE) */}
          <div
            id="pricing-card"
            className="lg:col-span-7 bg-[#1e293b] rounded-3xl border-2 border-amber-500 p-6 sm:p-8 shadow-2xl shadow-black/90 flex flex-col justify-between relative overflow-hidden ring-4 ring-amber-500/20"
          >
            {/* Top Ribbons */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 font-black text-[11px] sm:text-xs px-4 py-1.5 rounded-bl-xl shadow-md uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              MAIS ESCOLHIDO • 70% OFF
            </div>

            <div>
              {/* Product Title */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Acesso Completo & Vitalício
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  Pack Serralharia Lucrativa 2.0
                </h3>
              </div>

              {/* Price Stack */}
              <div className="mt-5 mb-6 p-4 sm:p-5 rounded-2xl bg-slate-900/95 border border-slate-700/80 text-center">
                <div className="text-xs sm:text-sm text-slate-400 font-medium line-through">
                  De R$ 197,00
                </div>
                
                <div className="mt-1 flex items-baseline justify-center gap-1.5 text-white">
                  <span className="text-sm sm:text-base font-semibold text-slate-300">Por apenas</span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-400 tracking-tight">
                    R$ 47,00
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">à vista</span>
                </div>

                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-amber-300">
                  ou em até <strong className="text-white font-bold">5x de R$ 10,11</strong> no cartão
                </div>

                <div className="mt-2.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/50 py-1 px-3 rounded-full inline-block border border-emerald-500/30">
                  Economia imediata de R$ 150,00 garantida hoje
                </div>
              </div>

              {/* Included Checklist */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-2">
                  TUDO O QUE ESTÁ INCLUSO:
                </h4>

                {[
                  { text: '+3000 Projetos Detalhados (PDF e CAD DWG)', isBonus: false },
                  { text: '600 projetos de móveis industriais', isBonus: false },
                  { text: '500 projetos de Estruturas rápidas', isBonus: false },
                  { text: '50 projetos de churrasqueiras', isBonus: false },
                  { text: '100 projetos de aparelho de academia (entre outros …)', isBonus: false },
                  { text: 'Detalhamento de Medidas e Espessuras de Tubos e Perfis', isBonus: false },
                  { text: 'Lista de Materiais e Plano Otimizado de Corte de Barras', isBonus: false },
                  { text: 'BÔNUS #1: Planilha Inteligente de Precificação (Excel e Sheets)', isBonus: true },
                  { text: 'BÔNUS #2: Guia Prático - Quanto Cobrar Sem Perder Serviço', isBonus: true },
                  { text: 'Acesso Vitalício: Para novos projetos', isBonus: false },
                  { text: 'Lista de fornecedores', isBonus: false },
                  { text: 'Envio imediato no seu e-mail logo após a confirmação', isBonus: false },
                ].map((item, i) => (
                  item.isBonus ? (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-emerald-500/15 border border-amber-500/50 shadow-md shadow-amber-500/10 text-xs sm:text-sm"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 rounded-full p-0.5 bg-amber-400 text-slate-950 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="font-bold text-amber-200 leading-snug">{item.text}</span>
                      </div>
                      <span className="shrink-0 text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full shadow-sm">
                        DESTAQUE
                      </span>
                    </div>
                  ) : (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{item.text}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div>
              {/* Integrated Checkout CTA Button */}
              <button
                id="checkout-cta-button"
                onClick={() => onCtaClick('complete')}
                type="button"
                className="w-full relative group overflow-hidden bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-black text-base sm:text-xl py-4 px-6 rounded-xl shadow-2xl shadow-emerald-500/30 transition-all duration-300 cursor-pointer animate-pulse-glow flex items-center justify-center gap-3 active:scale-95"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 animate-shimmer pointer-events-none" />
                <span className="tracking-wide uppercase drop-shadow-sm text-center">
                  QUERO MEU ACESSO AGORA!
                </span>
                <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>

              {/* Payment Badges and Security */}
              <div className="mt-4 pt-4 border-t border-slate-700/60 flex flex-col items-center gap-2.5">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                    <Lock className="w-4 h-4" />
                    Compra 100% Segura
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-amber-400">
                    <Zap className="w-4 h-4" />
                    Acesso Imediato
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-sky-400">
                    <ShieldCheck className="w-4 h-4" />
                    Garantia de 7 Dias
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                    PIX Instantâneo
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-slate-300" />
                    Cartão em até 5x
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

