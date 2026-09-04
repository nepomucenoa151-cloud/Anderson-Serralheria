import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Maximize2, X, Sparkles } from 'lucide-react';

interface ModelImage {
  url: string;
  title: string;
  category: string;
}

export const ModelsCarouselSection: React.FC = () => {
  const images: ModelImage[] = [
    {
      url: 'https://i.ibb.co/RGBmtptL/Captura-de-tela-2026-09-03-104746.png',
      title: 'Projeto Detalhado de Portão & Estrutura',
      category: 'Portões & Esquadrias',
    },
    {
      url: 'https://i.ibb.co/4npQsZbm/Captura-de-tela-2026-09-03-104800.png',
      title: 'Planta Técnica com Medidas Exatas',
      category: 'Estruturas Metálicas',
    },
    {
      url: 'https://i.ibb.co/fGQqLfz7/Captura-de-tela-2026-09-03-104807.png',
      title: 'Vistas Explodidas & Montagem',
      category: 'Gabaritos & Perfis',
    },
    {
      url: 'https://i.ibb.co/GvN7j0GD/Captura-de-tela-2026-09-03-104815.png',
      title: 'Detalhamento de Soldas e Cortes',
      category: 'Lista de Corte',
    },
    {
      url: 'https://i.ibb.co/TBHnGW8Q/Captura-de-tela-2026-09-03-104828.png',
      title: 'Modelos Modernos & Ripados',
      category: 'Portões de Alto Padrão',
    },
    {
      url: 'https://i.ibb.co/8LxBWHcp/Captura-de-tela-2026-09-03-104834.png',
      title: 'Especificações Técnicas Milimétricas',
      category: 'CAD & PDF',
    },
    {
      url: 'https://i.ibb.co/VYRRpHpR/Captura-de-tela-2026-09-03-104842.png',
      title: 'Grades & Proteções Estruturais',
      category: 'Residencial e Comercial',
    },
    {
      url: 'https://i.ibb.co/XrBMHsLX/Captura-de-tela-2026-09-03-104855.png',
      title: 'Coberturas, Telhados & Mezaninos',
      category: 'Coberturas Metálicas',
    },
    {
      url: 'https://i.ibb.co/Z1LzBLcS/Captura-de-tela-2026-09-03-104909.png',
      title: 'Projetos Prontos para Fabricação',
      category: 'Pronto para Produzir',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 3.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="modelos-do-pack"
      className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-600/20 border border-amber-500/30 text-[#d97706] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            ACERVO REAL EM ALTA RESOLUÇÃO
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight uppercase leading-tight">
            VEJA ALGUNS DOS NOSSOS MODELOS :
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Arraste ou navegue pelas fotos abaixo para ver exemplos reais de projetos e modelos inclusos no pack:
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Card */}
          <div className="relative bg-[#1e293b] rounded-2xl border-2 border-amber-500/40 hover:border-amber-500 shadow-2xl shadow-slate-950/80 overflow-hidden transition-all duration-300">
            {/* Image Stage */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 hover:scale-105 select-none"
                onClick={() => setLightboxImg(images[currentIndex].url)}
              />

              {/* Tag indicator */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-amber-500/50 text-amber-400 text-xs font-bold px-3 py-1 rounded-md shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>{images[currentIndex].category}</span>
              </div>

              {/* Zoom hint */}
              <button
                type="button"
                onClick={() => setLightboxImg(images[currentIndex].url)}
                aria-label="Ampliar imagem"
                className="absolute top-3 right-3 bg-black/80 hover:bg-slate-900 border border-slate-700 text-slate-200 hover:text-white p-2 rounded-lg text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Maximize2 className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline text-[11px] font-semibold">Ampliar</span>
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-lg drop-shadow-md">
                    {images[currentIndex].title}
                  </h3>
                  <span className="text-xs text-amber-300 font-semibold">
                    Modelo {currentIndex + 1} de {images.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxImg(images[currentIndex].url)}
                  className="bg-amber-600/80 hover:bg-amber-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-md flex items-center gap-1 cursor-pointer transition-colors shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Detalhe</span>
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Modelo anterior"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-black text-white hover:text-amber-400 border border-slate-700/80 hover:border-amber-500 flex items-center justify-center transition-all cursor-pointer shadow-xl backdrop-blur-xs z-10 active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo modelo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-black text-white hover:text-amber-400 border border-slate-700/80 hover:border-amber-500 flex items-center justify-center transition-all cursor-pointer shadow-xl backdrop-blur-xs z-10 active:scale-90"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Ir para modelo ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 h-2.5 bg-amber-500 shadow-sm shadow-amber-500/50'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview Strip */}
          <div
            ref={scrollContainerRef}
            className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-amber-500/40 scrollbar-track-slate-900"
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer bg-slate-950 ${
                  currentIndex === idx
                    ? 'border-amber-500 scale-105 shadow-md shadow-amber-500/30 ring-1 ring-amber-500'
                    : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img.url}
                  alt={`Miniatura ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0.5 right-1 text-[9px] font-black text-amber-300 bg-black/80 px-1 rounded">
                  #{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
          onClick={() => setLightboxImg(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImg(null)}
            aria-label="Fechar ampliação"
            className="absolute top-4 right-4 text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full cursor-pointer z-50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg}
              alt="Modelo ampliado"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-slate-700 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
