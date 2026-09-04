import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Download, CheckCircle2, Star } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative pt-6 pb-14 md:pt-12 md:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Quality & social proof badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
          <div className="flex -space-x-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-slate-200">Pack Nº 1 para Serralheiros e Fabricantes</span>
        </div>

        {/* Impactful Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.15] max-w-3xl">
          AUMENTE O LUCRO DA SUA SERRALHARIA EXECUTANDO PROJETOS PRONTOS EM{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 underline decoration-amber-500/50 decoration-4 underline-offset-4">
            METADE DO TEMPO
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
          Acesse o maior acervo de projetos em <strong className="text-white font-semibold">PDF/CAD</strong>, listas de corte e planilhas de orçamentos. <span className="text-amber-300 font-medium">Pare de perder horas desenhando</span> ou errando nos cálculos!
        </p>

        {/* Product Mockup Container */}
        <div className="mt-8 mb-8 w-full max-w-2xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-emerald-500/20 to-amber-600/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-90 transition duration-500" />
          
          <div className="relative rounded-2xl border border-slate-700 bg-[#1e293b] p-2.5 sm:p-4 shadow-2xl shadow-black/80 overflow-hidden">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src="/pack-mockup.jpg"
                alt="Mockup Pack Serralharia Lucrativa 2.0"
                className="w-full h-full object-cover sm:object-contain object-center transform group-hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to internal path if public isn't resolved yet
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/src/assets/images/pack_mockup_1788440737191.jpg';
                  }
                }}
              />
              
              {/* Product Badge Tag */}
              <div className="absolute top-3 left-3 bg-amber-600 text-slate-950 text-xs font-black px-2.5 py-1 rounded shadow-md tracking-wider uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                Versão 2.0 Atualizada
              </div>

              <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                Download Imediato em PDF & CAD
              </div>
            </div>
          </div>
        </div>

        {/* Pulsing CTA Action Button */}
        <div className="w-full max-w-md flex flex-col items-center">
          <a
            id="hero-cta-button"
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              onCtaClick();
            }}
            className="w-full relative group overflow-hidden bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-black text-lg sm:text-xl py-4 sm:py-5 px-6 rounded-xl shadow-xl shadow-emerald-500/25 transition-all duration-300 cursor-pointer animate-pulse-glow flex items-center justify-center gap-3 active:scale-95 text-center select-none"
          >
            {/* Shimmer light effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 animate-shimmer pointer-events-none" />
            
            <span className="tracking-wide uppercase drop-shadow-sm">
              QUERO ACESSAR AGORA O PACK
            </span>
            <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1.5 transition-transform" />
          </a>

          {/* Micro-assurances below button */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Acesso Imediato no E-mail
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Garantia Incondicional de 7 Dias
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Pagamento Único (Sem Mensalidades)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
