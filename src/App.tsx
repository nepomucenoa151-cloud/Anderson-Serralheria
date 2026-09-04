import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { WhatIsThePackSection } from './components/WhatIsThePackSection';
import { ModelsCarouselSection } from './components/ModelsCarouselSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { SalesNotificationToast } from './components/SalesNotificationToast';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>('complete');

  const handleOpenCheckout = (plan: 'basic' | 'complete' = 'complete') => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleScrollToOffer = () => {
    const el = document.getElementById('oferta') || document.getElementById('oferta-especial');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setSelectedPlan('complete');
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* 1. Faixa Superior (Top Bar) com Urgência */}
      <TopBar />

      <main className="pt-[58px] sm:pt-[44px]">
        {/* 2. Hero Section com Headline, Subheadline, Mockup 3D e Botão Pulsante */}
        <HeroSection onCtaClick={handleScrollToOffer} />

        {/* 3. Seção "O que é o Pack Serralharia Lucrativa?" */}
        <WhatIsThePackSection />

        {/* 4. Seção Carrossel "VEJA ALGUNS DOS NOSSOS MODELOS :" */}
        <ModelsCarouselSection />

        {/* 5. Seção "O que você vai receber" (Grid 3 Cards: Projetos, Calculadora, Lista de Corte) */}
        <WhatYouGetSection />

        {/* 6. Seção de Depoimentos de Quem Já Comprou (Carrossel) */}
        <TestimonialsSection />

        {/* 7. Seção de Bônus (Presentes Especiais Para Esta Turma) */}
        <BonusSection />

        {/* 5. Seção de Oferta e Preço (Básico R$ 14,90 e Completo R$ 47,00) */}
        <PricingSection onCtaClick={handleOpenCheckout} />

        {/* 6. Garantia (Card Incondicional 7 Dias com Escudo) */}
        <GuaranteeSection />
      </main>

      {/* 7. Rodapé (Copyright e Avisos Legais) */}
      <FooterSection />

      {/* Interactive Checkout Modal (PIX, Cartão de Crédito, Boleto) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
      />

      {/* Social Proof: Live Approved Purchase Notification */}
      <SalesNotificationToast />
    </div>
  );
}
