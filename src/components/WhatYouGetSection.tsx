import React, { useState } from 'react';
import { Layers, Calculator, Scissors, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const [activeExpanded, setActiveExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setActiveExpanded(activeExpanded === index ? null : index);
  };

  const cards = [
    {
      id: 'card-projetos',
      badge: 'PROJETOS PRONTOS',
      title: '+300 Projetos Detalhados',
      subtitle: 'Arquivos em PDF prontos para impressão e arquivos CAD (DWG) 100% editáveis.',
      icon: Layers,
      items: [
        'Portões Basculantes, Pivotantes e Deslizantes',
        'Coberturas Metálicas, Pergolados e Telhados',
        'Grades Residenciais, Industriais e Guarda-Corpos',
        'Galpões Estruturais, Mezaninos e Escadas Caracol/Retas',
        'Móveis em Estilo Industrial (mesas, estantes, aparadores)',
      ],
      extraDetail: 'Todos os projetos possuem medidas milimétricas, espessuras recomendadas de tubos/chapas (metalon 16, 18, 20), pontos de solda e vistas explodidas para montagem sem complicação.',
    },
    {
      id: 'card-calculadora',
      badge: 'GESTÃO FINANCEIRA',
      title: 'Calculadora de Orçamentos',
      subtitle: 'Planilha inteligente no Excel e Google Planilhas para cálculo exato de custo e lucro.',
      icon: Calculator,
      items: [
        'Cálculo automático do quilo do aço e metragem de metalon',
        'Custos de consumíveis (eletrodos, arame MIG, disco, primer, tinta)',
        'Custo de hora trabalhada e diária da sua equipe',
        'Margem de lucro real calculada automaticamente sem chutes',
        'Emissor de proposta comercial em PDF pronta para fechar',
      ],
      extraDetail: 'Chega de cobrar no "olhômetro" e tomar prejuízo no final da obra. A planilha calcula tudo automaticamente e te dá o preço certo com sua margem limpa garantida.',
    },
    {
      id: 'card-lista-corte',
      badge: 'ECONOMIA DE MATERIAL',
      title: 'Lista de Materiais e Corte',
      subtitle: 'Otimização inteligente de perfis para eliminar o desperdício de ferro e sobras.',
      icon: Scissors,
      items: [
        'Aproveitamento máximo das barras de 6 metros',
        'Plano de corte detalhado peça por peça',
        'Lista de compras exata para enviar ao distribuidor de aço',
        'Redução imediata de até 35% no desperdício de materiais',
        'Evita paradas no meio do serviço por falta de peças',
      ],
      extraDetail: 'Cada pedaço de barra economizado é dinheiro vivo que fica no seu bolso. Ao comprar a quantidade milimétrica certa, o pack se paga no primeiro projeto executado.',
    },
  ];

  return (
    <section id="conteudo-pack" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-900/80 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-600/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Conteúdo Completo
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            O QUE VOCÊ VAI RECEBER NO PACK
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Uma estrutura completa e validada por profissionais para você apenas abrir, executar e lucrar.
          </p>
        </div>

        {/* 3 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isExpanded = activeExpanded === idx;

            return (
              <div
                key={card.id}
                id={card.id}
                className="bg-[#1e293b] rounded-2xl border border-slate-700/80 hover:border-amber-500/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-slate-950/50 hover:-translate-y-1 relative group"
              >
                {/* Top card banner accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400">
                      {card.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:border-amber-500/50 transition-colors shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {card.subtitle}
                  </p>

                  {/* Feature checklist */}
                  <ul className="space-y-2.5 border-t border-slate-700/60 pt-4">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <span className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable detail explanation */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-700/70 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg leading-relaxed">
                      <strong className="text-amber-400 block mb-1">Como funciona na prática:</strong>
                      {card.extraDetail}
                    </div>
                  )}
                </div>

                {/* Bottom Toggle details button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="mt-5 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-amber-400 hover:text-amber-300 w-full cursor-pointer transition-colors"
                >
                  <span>{isExpanded ? 'Ocultar detalhes' : 'Ver mais detalhes'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
