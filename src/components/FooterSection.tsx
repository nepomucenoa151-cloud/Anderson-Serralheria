import React from 'react';
import { ShieldCheck, Mail, MessageCircle } from 'lucide-react';

interface FooterSectionProps {
  onOpenExportModal?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <footer id="rodape" className="bg-[#090e1a] text-slate-400 text-xs py-10 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Brand mark */}
        <div className="flex items-center gap-2 text-white font-extrabold text-base sm:text-lg tracking-wider uppercase">
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
          <span>SERRALHARIA LUCRATIVA</span>
          <span className="text-amber-500 font-bold">2.0</span>
        </div>

        {/* Support & Quick Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400" />
            <span>suporte@serralharialucrativa.com.br</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Atendimento via WhatsApp</span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <p className="max-w-2xl text-[11px] leading-relaxed text-slate-400">
          Aviso Legal: Os resultados obtidos podem variar de acordo com a aplicação dos materiais, dedicação individual e características do mercado local de cada serralheiro. Nenhuma informação aqui apresentada deve ser interpretada como promessa de enriquecimento fácil ou garantia de lucros sem a execução dos projetos. A reprodução ou pirataria deste material digital é crime previsto em lei.
        </p>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-xs">
          <a href="#garantia" className="hover:text-amber-400 transition-colors">Garantia 7 Dias</a>
          <span>•</span>
          <a href="#oferta-especial" className="hover:text-amber-400 transition-colors">Preço Promocional</a>
          <span>•</span>
          <span className="hover:text-slate-200 cursor-default">Termos de Uso</span>
          <span>•</span>
          <span className="hover:text-slate-200 cursor-default">Política de Privacidade</span>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>&copy; {new Date().getFullYear()} Serralharia Lucrativa. Todos os direitos reservados.</span>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ambiente 100% Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
