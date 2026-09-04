import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

interface Buyer {
  name: string;
  city: string;
  timeAgo: string;
}

const BUYERS: Buyer[] = [
  { name: 'Carlos Eduardo M.', city: 'Belo Horizonte - MG', timeAgo: 'há 2 minutos' },
  { name: 'Marcos Vinicius S.', city: 'Campinas - SP', timeAgo: 'há 4 minutos' },
  { name: 'José Roberto P.', city: 'Goiânia - GO', timeAgo: 'há 1 minuto' },
  { name: 'Antônio da Silva R.', city: 'Curitiba - PR', timeAgo: 'há 3 minutos' },
  { name: 'Rodrigo F. Ferreira', city: 'Joinville - SC', timeAgo: 'há 5 minutos' },
  { name: 'Luciano Moreira B.', city: 'Ribeirão Preto - SP', timeAgo: 'há 2 minutos' },
  { name: 'Paulo Henrique T.', city: 'Fortaleza - CE', timeAgo: 'há 6 minutos' },
  { name: 'Sandro de Almeida', city: 'Porto Alegre - RS', timeAgo: 'há 1 minuto' },
  { name: 'Cláudio Mendonça', city: 'Salvador - BA', timeAgo: 'há 3 minutos' },
  { name: 'Fernando Martins V.', city: 'Vitória - ES', timeAgo: 'há 4 minutos' },
  { name: 'Anderson Souza L.', city: 'Caxias do Sul - RS', timeAgo: 'há 2 minutos' },
  { name: 'Valdir dos Santos', city: 'Sorocaba - SP', timeAgo: 'há 5 minutos' },
  { name: 'Wellington C. Costa', city: 'Anápolis - GO', timeAgo: 'há 1 minuto' },
  { name: 'Edimilson Ramos', city: 'Londrina - PR', timeAgo: 'há 3 minutos' },
];

export const SalesNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let hideTimeout: NodeJS.Timeout;
    let nextCycleTimeout: NodeJS.Timeout;

    // Primeiro disparo após exatamente 10 segundos de delay solicitado
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 10000);

    const triggerNotification = () => {
      setIsVisible(true);

      // Fica visível na tela por 5 segundos
      hideTimeout = setTimeout(() => {
        setIsVisible(false);

        // Após ocultar, aguarda o intervalo de 10 segundos para o próximo comprador automático
        nextCycleTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % BUYERS.length);
          triggerNotification();
        }, 10000);
      }, 5000);
    };

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimeout);
      clearTimeout(nextCycleTimeout);
    };
  }, [dismissed]);

  if (dismissed || !isVisible) {
    return null;
  }

  const currentBuyer = BUYERS[currentIndex];

  return (
    <div
      id="notificacao-compra-aprovada"
      role="alert"
      aria-live="polite"
      className="fixed top-[60px] sm:top-[48px] right-3 sm:right-6 z-40 max-w-[340px] sm:max-w-sm w-[calc(100vw-24px)] bg-[#0c1322]/95 backdrop-blur-md border-2 border-emerald-500/80 rounded-2xl p-3.5 shadow-2xl shadow-black/80 transition-all duration-500 animate-in fade-in slide-in-from-top-4 hover:border-emerald-400"
    >
      <div className="flex items-start gap-3">
        {/* Ícone com pulso verde */}
        <div className="relative shrink-0 mt-0.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-inner">
            <CheckCircle2 className="w-6 h-6 fill-emerald-500/20 text-emerald-400" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>

        {/* Informações da Compra */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/40">
              COMPRA APROVADA
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {currentBuyer.timeAgo}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-white truncate">
            {currentBuyer.name}
          </p>

          <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5 truncate">
            <span>Adquiriu o</span>
            <span className="font-extrabold text-amber-400">Pacote Completo</span>
          </p>

          <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400 font-medium">
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">{currentBuyer.city} • Acesso Imediato</span>
          </div>
        </div>

        {/* Botão de Fechar */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fechar notificação"
          className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800/60 transition-colors cursor-pointer shrink-0 -mr-1 -mt-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Barra de progresso de exibição */}
      <div className="w-full bg-slate-800/80 h-1 rounded-full mt-2.5 overflow-hidden">
        <div className="bg-emerald-500 h-full w-full animate-[shrink_5s_linear_forwards]" />
      </div>
    </div>
  );
};
