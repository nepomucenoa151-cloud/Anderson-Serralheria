import React, { useState, useEffect } from 'react';

export const TopBar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const getFormattedDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = String(now.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
    };

    setCurrentDate(getFormattedDate());

    // Atualiza automaticamente conforme os dias passam
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="top-urgency-bar"
      className="fixed top-0 left-0 right-0 z-50 bg-[#dc2626] text-white py-2 sm:py-2.5 px-3 shadow-xl shadow-red-950/60 border-b border-red-400/40"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center text-xs sm:text-sm font-semibold tracking-wide">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
          </span>
          <span className="uppercase font-black text-yellow-300 tracking-wider text-xs sm:text-sm">
            ⚠️ OFERTA VÁLIDA ATÉ {currentDate || 'HOJE'} HOJE!
          </span>
        </div>
      </div>
    </div>
  );
};

