import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Maximize2, X, Star, CheckCircle, ShieldCheck } from 'lucide-react';

interface TestimonialImage {
  url: string;
  title: string;
  author: string;
  tag: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialImage[] = [
    {
      url: 'https://i.ibb.co/LX2qKfD2/img-0136-1.png',
      title: 'Feedback no WhatsApp',
      author: 'Cliente Verificado',
      tag: 'Acesso Imediato & Projetos Aprovados',
    },
    {
      url: 'https://i.ibb.co/vCWGVbkB/img-0136-2.png',
      title: 'Avaliação de Conteúdo',
      author: 'Cliente Verificado',
      tag: 'Qualidade Técnica dos Arquivos',
    },
    {
      url: 'https://i.ibb.co/ZR5CYd5q/img-0363.png',
      title: 'Comentário & Satisfação',
      author: 'Cliente Verificado',
      tag: 'Facilidade de Fabricação',
    },
    {
      url: 'https://i.ibb.co/Y4R9Lx2T/img-0136.png',
      title: 'Recomendação de Colega Serralheiro',
      author: 'Cliente Verificado',
      tag: 'Excelente Custo-Benefício',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-scroll every 4.5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="depoimentos"
      className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0a101d] border-t border-slate-800 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>FEEDBACKS REAIS DE QUEM COMPROU</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
            DEPOIMENTOS DE QUEM JÁ COMPROU O PACK :
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Veja as mensagens e avaliações reais de serralheiros e profissionais que já adquiriram o pack e estão aplicando no dia a dia de suas oficinas.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card */}
          <div className="relative bg-[#131d31] rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-500/70 shadow-2xl shadow-slate-950/80 overflow-hidden transition-all duration-300">
            {/* Top Bar with WhatsApp verified vibe */}
            <div className="bg-[#0b1424] px-4 py-3 border-b border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {testimonials[currentIndex].author}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                  </div>
                  <span className="text-[10px] text-slate-400">Compra Confirmada • WhatsApp</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                  {currentIndex + 1} de {testimonials.length}
                </span>

                <button
                  type="button"
                  onClick={() => setLightboxImg(testimonials[currentIndex].url)}
                  aria-label="Ampliar depoimento"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-semibold hidden sm:inline">Ampliar</span>
                </button>
              </div>
            </div>

            {/* Testimonial Image Stage */}
            <div className="relative bg-[#080d16] p-2 sm:p-4 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[560px] overflow-hidden">
              <img
                src={testimonials[currentIndex].url}
                alt={`Depoimento ${currentIndex + 1}`}
                referrerPolicy="no-referrer"
                className="max-h-[520px] w-auto max-w-full object-contain rounded-lg cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] select-none shadow-md"
                onClick={() => setLightboxImg(testimonials[currentIndex].url)}
              />
            </div>

            {/* Bottom info banner */}
            <div className="bg-[#0b1424] px-4 py-2.5 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] sm:text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {testimonials[currentIndex].tag}
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Toque na imagem para ampliar
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-emerald-600 border border-emerald-500/40 text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-emerald-600 border border-emerald-500/40 text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === index
                    ? 'w-8 h-2.5 bg-emerald-400 shadow-lg shadow-emerald-500/40'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails row */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-4">
            {testimonials.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-[3/4] sm:aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all p-1 bg-[#0b1424] cursor-pointer ${
                  currentIndex === index
                    ? 'border-emerald-400 ring-2 ring-emerald-500/30 shadow-md'
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
              >
                <img
                  src={item.url}
                  alt={`Miniatura ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              aria-label="Fechar ampliação"
              className="absolute -top-12 right-0 sm:-right-4 bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-full border border-slate-600 transition-all cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={lightboxImg}
              alt="Depoimento ampliado"
              referrerPolicy="no-referrer"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl border border-emerald-500/40 shadow-2xl bg-slate-950"
            />
          </div>
        </div>
      )}
    </section>
  );
};
