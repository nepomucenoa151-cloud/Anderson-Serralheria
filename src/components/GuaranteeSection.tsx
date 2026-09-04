import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0c1322] border-t border-slate-800">
      <div className="max-w-3xl mx-auto">
        <div
          id="guarantee-card"
          className="bg-[#1e293b] rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-xl shadow-slate-950/60 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 sm:gap-8"
        >
          {/* Subtle amber ambient glow behind badge */}
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />

          {/* Shield Badge Container */}
          <div className="shrink-0 flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 p-1 shadow-xl shadow-amber-600/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center p-2 text-center border border-amber-400/40">
                <ShieldCheck className="w-10 h-10 text-amber-400" />
                <span className="text-white font-black text-xs uppercase mt-0.5 tracking-tight">
                  7 DIAS
                </span>
                <span className="text-[10px] font-bold text-amber-300 uppercase">
                  GARANTIA
                </span>
              </div>
            </div>
            <span className="mt-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" /> 100% Incondicional
            </span>
          </div>

          {/* Guarantee Content */}
          <div className="text-center flex-1 flex flex-col items-center justify-center">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block">
              SEU RISCO É ABSOLUTAMENTE ZERO
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-4 text-center">
              Garantia de 7 dias.
            </h3>

            <div className="mt-2 flex justify-center w-full">
              <a
                href="https://ibb.co/zWfJhsTR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-95 transition-opacity"
              >
                <img
                  src="https://i.ibb.co/XfJ8ZXrs/site-seguro.png"
                  alt="site seguro"
                  referrerPolicy="no-referrer"
                  className="max-w-full sm:max-w-md h-auto rounded-xl shadow-lg border border-slate-700/60 mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
