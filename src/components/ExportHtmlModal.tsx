import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2 } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1103305072164889');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1103305072164889&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Serralharia Lucrativa - Pack de Projetos e Planilhas</title>
  <meta name="description" content="Aumente o lucro da sua serralharia executando projetos prontos em metade do tempo com o Pack Serralharia Lucrativa 2.0." />
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    /* Reset & Base Styles */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0f172a; color: #f8fafc; }
    body { line-height: 1.6; background-color: #0f172a; overflow-x: hidden; }
    a { text-decoration: none; color: inherit; }

    /* Keyframe Animations */
    @keyframes pulseGlow {
      0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2); }
      50% { transform: scale(1.025); box-shadow: 0 0 35px rgba(34, 197, 94, 0.7), 0 0 65px rgba(34, 197, 94, 0.35); }
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    /* Top Bar Fixa */
    body { padding-top: 48px; }
    .top-bar {
      background: #dc2626;
      color: #ffffff;
      padding: 10px 16px;
      text-align: center;
      font-size: 13px;
      font-weight: 700;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      border-bottom: 1px solid rgba(239, 68, 68, 0.5);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }
    .top-bar-content { max-width: 900px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
    .badge-urgent { background-color: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.2); color: #fef08a; }

    /* Hero Section */
    .hero { padding: 40px 20px 60px; text-align: center; position: relative; max-width: 900px; margin: 0 auto; }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: #1e293b;
      border: 1px solid rgba(217, 119, 6, 0.4);
      color: #d97706;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .headline {
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 1.2;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .headline span { color: #d97706; text-decoration: underline; text-decoration-color: rgba(217, 119, 6, 0.5); }
    .subheadline {
      font-size: 16px;
      color: #cbd5e1;
      max-width: 700px;
      margin: 0 auto 30px;
    }
    .subheadline strong { color: #ffffff; }

    /* Product Mockup Container */
    .mockup-container {
      background-color: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 16px;
      max-width: 650px;
      margin: 0 auto 30px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.7);
    }
    .mockup-container img { width: 100%; height: auto; border-radius: 10px; display: block; }

    /* Pulsing CTA Button */
    .cta-btn {
      display: inline-block;
      width: 100%;
      max-width: 480px;
      background-color: #22c55e;
      color: #022c22;
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
      padding: 18px 24px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      text-align: center;
      box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
      animation: pulseGlow 2.2s infinite ease-in-out;
      transition: background-color 0.2s;
    }
    .cta-btn:hover { background-color: #16a34a; }
    .cta-subtext { font-size: 12px; color: #94a3b8; margin-top: 10px; }

    /* What Is The Pack Section */
    .section-what-is { background-color: #0c1322; padding: 60px 20px; border-top: 1px solid #1e293b; }
    .highlight-box {
      max-width: 800px;
      margin: 40px auto 0;
      background: linear-gradient(90deg, #0f172a, #1e293b, #0f172a);
      border: 2px solid #d97706;
      border-radius: 14px;
      padding: 24px;
      text-align: center;
    }
    .highlight-text { font-size: 20px; font-weight: 900; text-transform: uppercase; color: #ffffff; }

    /* Carousel Section */
    .section-carousel { background-color: #0f172a; padding: 60px 20px; border-top: 1px solid #1e293b; text-align: center; }
    .carousel-container { max-width: 880px; margin: 0 auto; position: relative; }
    .carousel-stage {
      position: relative;
      background: #020617;
      border: 2px solid rgba(217, 119, 6, 0.4);
      border-radius: 16px;
      overflow: hidden;
      aspect-ratio: 16/10;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.8);
    }
    .carousel-stage img { width: 100%; height: 100%; object-fit: contain; }
    .carousel-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(0,0,0,0.75);
      border: 1px solid #475569;
      color: #ffffff;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .carousel-nav-btn:hover { background: #000; border-color: #d97706; color: #d97706; }
    .carousel-nav-btn.prev { left: 12px; }
    .carousel-nav-btn.next { right: 12px; }
    .carousel-strip {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      padding: 16px 0 4px;
      margin-top: 10px;
      justify-content: flex-start;
    }
    .carousel-thumb {
      flex-shrink: 0;
      width: 80px;
      height: 56px;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid #1e293b;
      cursor: pointer;
      opacity: 0.6;
      background: #000;
    }
    .carousel-thumb.active { border-color: #d97706; opacity: 1; transform: scale(1.05); }
    .carousel-thumb img { width: 100%; height: 100%; object-fit: cover; }

    /* What You Get Section */
    .section-what-you-get { background-color: #0b1120; padding: 60px 20px; border-top: 1px solid #1e293b; }
    .section-title { text-align: center; font-size: 26px; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: #ffffff; }
    .section-desc { text-align: center; color: #94a3b8; font-size: 14px; margin-bottom: 40px; }
    .grid-cards { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 1000px; margin: 0 auto; }
    @media (min-width: 768px) {
      .headline { font-size: 42px; }
      .subheadline { font-size: 19px; }
      .grid-cards { grid-template-columns: repeat(3, 1fr); }
    }
    .card {
      background-color: #1e293b;
      border: 1px solid #334155;
      border-radius: 14px;
      padding: 24px;
      border-top: 4px solid #d97706;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    }
    .card-badge { display: inline-block; font-size: 10px; font-weight: 800; background: rgba(217,119,6,0.15); color: #d97706; padding: 3px 8px; border-radius: 4px; margin-bottom: 12px; }
    .card-title { font-size: 19px; font-weight: 800; color: #ffffff; margin-bottom: 8px; }
    .card-text { font-size: 13px; color: #94a3b8; margin-bottom: 16px; }
    .card-list { list-style: none; font-size: 13px; color: #cbd5e1; }
    .card-list li { margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px; }
    .card-list li::before { content: "✓"; color: #22c55e; font-weight: 900; }

    /* Bonus Section */
    .section-bonus { padding: 60px 20px; max-width: 900px; margin: 0 auto; }
    .bonus-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
    @media (min-width: 768px) { .bonus-grid { grid-template-columns: repeat(2, 1fr); } }
    .bonus-card {
      background-color: #1e293b;
      border: 2px solid #d97706;
      border-radius: 14px;
      padding: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .bonus-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
    .bonus-tag { background: #d97706; color: #000; font-weight: 900; font-size: 11px; padding: 4px 8px; border-radius: 4px; }
    .bonus-free { color: #22c55e; font-weight: 800; font-size: 12px; }

    /* Pricing Section */
    .section-pricing { background-color: #0b1120; padding: 60px 20px; border-top: 1px solid #1e293b; }
    .pricing-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      max-width: 1080px;
      margin: 0 auto;
      align-items: stretch;
    }
    @media (min-width: 860px) {
      .pricing-container {
        grid-template-columns: 1fr 1.3fr;
      }
    }
    .pricing-box-basic {
      background-color: #172033;
      border: 1px solid #334155;
      border-radius: 20px;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .pricing-box {
      background-color: #1e293b;
      border: 2px solid #d97706;
      border-radius: 20px;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      box-shadow: 0 20px 50px rgba(0,0,0,0.8);
      position: relative;
    }
    .pricing-badge-top {
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(90deg, #d97706, #f59e0b);
      color: #000;
      font-weight: 900;
      font-size: 11px;
      padding: 6px 14px;
      border-bottom-left-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .old-price { font-size: 14px; color: #94a3b8; text-decoration: line-through; }
    .new-price { font-size: 48px; font-weight: 900; color: #22c55e; margin: 5px 0; }
    .new-price-basic { font-size: 38px; font-weight: 900; color: #22c55e; margin: 5px 0; }
    .installments { font-size: 15px; color: #f59e0b; font-weight: 700; margin-bottom: 20px; }
    .pricing-list { text-align: left; list-style: none; font-size: 14px; color: #e2e8f0; margin-bottom: 25px; padding: 0 10px; }
    .pricing-list li { margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
    .pricing-list li::before { content: "✔"; color: #22c55e; font-weight: 900; }
    .cta-btn-basic {
      display: block;
      background: #334155;
      color: #ffffff;
      border: 1px solid #475569;
      font-weight: 800;
      font-size: 15px;
      padding: 16px;
      border-radius: 12px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.2s;
    }
    .cta-btn-basic:hover { background: #475569; border-color: #22c55e; }

    /* Guarantee Section */
    .section-guarantee { padding: 50px 20px; max-width: 750px; margin: 0 auto; }
    .guarantee-box {
      background-color: #1e293b;
      border: 1px solid rgba(217,119,6,0.5);
      border-radius: 16px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
    }
    @media (min-width: 640px) {
      .guarantee-box { flex-direction: row; text-align: left; }
    }
    .guarantee-shield {
      width: 80px;
      height: 80px;
      background: #d97706;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #000;
      font-weight: 900;
      flex-shrink: 0;
    }

    /* Footer */
    footer { background-color: #070b13; padding: 40px 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; }
    footer p { max-width: 600px; margin: 0 auto 10px; line-height: 1.5; }

    /* Toast de Compra Aprovada */
    .purchase-toast {
      position: fixed;
      top: 60px;
      right: 20px;
      z-index: 9999;
      max-width: 350px;
      background: rgba(12, 19, 34, 0.96);
      border: 2px solid #10b981;
      border-radius: 16px;
      padding: 12px 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.85);
      display: none;
      align-items: center;
      gap: 12px;
      font-family: inherit;
    }
    .toast-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: rgba(16, 185, 129, 0.2);
      border: 1px solid rgba(16, 185, 129, 0.5);
      color: #10b981;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }
    .toast-badge {
      font-size: 9px;
      font-weight: 900;
      color: #10b981;
      background: rgba(16, 185, 129, 0.15);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid rgba(16, 185, 129, 0.4);
      text-transform: uppercase;
      display: inline-block;
      margin-bottom: 2px;
    }
    .toast-name { font-size: 13px; font-weight: 800; color: #ffffff; }
    .toast-desc { font-size: 11px; color: #cbd5e1; }
    .toast-sub { font-size: 10px; color: #94a3b8; margin-top: 2px; }
  </style>
</head>
<body>

  <!-- 1. Faixa Superior (Top Bar) -->
  <div class="top-bar">
    <div class="top-bar-content">
      <span id="dynamicUrgencyBadge" class="badge-urgent">⚠️ OFERTA VÁLIDA ATÉ <span id="topBarDate">HOJE</span> HOJE!</span>
    </div>
  </div>

  <!-- 2. Hero Section -->
  <header class="hero">
    <div class="hero-badge">★ PACK Nº 1 PARA SERRALHEIROS E FABRICANTES</div>
    <h1 class="headline">
      AUMENTE O LUCRO DA SUA SERRALHARIA EXECUTANDO PROJETOS PRONTOS EM <span>METADE DO TEMPO</span>
    </h1>
    <p class="subheadline">
      Acesse o maior acervo de projetos em <strong>PDF/CAD</strong>, listas de corte e planilhas de orçamentos. <strong>Pare de perder horas desenhando ou errando nos cálculos!</strong>
    </p>

    <!-- Mockup do Produto -->
    <div class="mockup-container">
      <img src="pack-mockup.jpg" alt="Mockup Pack Serralharia Lucrativa 2.0" onerror="this.src='https://picsum.photos/seed/metalwork/800/600'" />
    </div>

    <!-- Botão de Ação CTA Chamativo e Pulsante -->
    <div>
      <a href="#oferta" class="cta-btn">QUERO ACESSAR AGORA O PACK</a>
      <div class="cta-subtext">✔ Acesso Imediato no E-mail &bull; ✔ Garantia Incondicional de 7 Dias</div>
    </div>
  </header>

  <!-- 3. O Que é o Pack Serralharia Lucrativa -->
  <section class="section-what-is">
    <h2 class="section-title">O QUE É O PACK <span style="color: #d97706;">SERRALHARIA LUCRATIVA?</span></h2>
    <p class="section-desc" style="max-width: 700px; margin-left: auto; margin-right: auto;">
      É o maior acervo de projetos prontos para uso imediato na sua oficina. Esqueça a perda de tempo desenhando do zero ou errando nos orçamentos.
    </p>

    <div class="grid-cards">
      <div class="card">
        <span class="card-badge">📐 PROJETOS</span>
        <h3 class="card-title">+3.000 Projetos Prontos</h3>
        <p class="card-text">Organizados por categorias (portões, coberturas, esquadrias, estruturas e mais).</p>
      </div>

      <div class="card">
        <span class="card-badge">📋 DETALHAMENTO</span>
        <h3 class="card-title">Detalhamento Completo</h3>
        <p class="card-text">Medidas exatas e lista de materiais necessária para evitar sobra de ferro.</p>
      </div>

      <div class="card">
        <span class="card-badge">💰 FINANCEIRO</span>
        <h3 class="card-title">Precificação Pronta</h3>
        <p class="card-text">Custo estimado de produção e sugestão de preço final de venda para garantir seu lucro.</p>
      </div>
    </div>

    <div class="highlight-box">
      <div class="highlight-text">⚡ "Zero Teoria. Zero Complicação. É escolher o projeto, fabricar e faturar."</div>
    </div>
  </section>

  <!-- Carrossel de Modelos -->
  <section class="section-carousel" id="modelos">
    <div style="display:inline-block; font-size:11px; font-weight:900; background:rgba(217,119,6,0.2); color:#d97706; padding:4px 10px; border-radius:6px; border:1px solid rgba(217,119,6,0.4); margin-bottom:12px; text-transform:uppercase;">
      ✨ ACERVO REAL EM ALTA RESOLUÇÃO
    </div>
    <h2 class="section-title">VEJA ALGUNS DOS NOSSOS MODELOS :</h2>
    <p class="section-desc" style="max-width: 650px; margin: 0 auto 30px;">
      Arraste ou navegue pelas fotos abaixo para ver exemplos reais de projetos e modelos inclusos no pack:
    </p>

    <div class="carousel-container">
      <div class="carousel-stage">
        <img id="carouselMainImg" src="https://i.ibb.co/RGBmtptL/Captura-de-tela-2026-09-03-104746.png" alt="Modelo do Pack" referrerpolicy="no-referrer">
        <button type="button" class="carousel-nav-btn prev" onclick="navigateCarousel(-1)">&#10094;</button>
        <button type="button" class="carousel-nav-btn next" onclick="navigateCarousel(1)">&#10095;</button>
      </div>

      <div class="carousel-strip" id="carouselStrip">
        <!-- Thumbnails gerados dinamicamente -->
      </div>
    </div>
  </section>

  <!-- 4. O Que Você Vai Receber -->
  <section class="section-what-you-get">
    <h2 class="section-title">O QUE VOCÊ VAI RECEBER</h2>
    <p class="section-desc">Tudo pronto e mastigado para você aplicar e lucrar na sua oficina.</p>
    
    <div class="grid-cards">
      <!-- Card 1 -->
      <div class="card">
        <span class="card-badge">PROJETOS PRONTOS</span>
        <h3 class="card-title">+300 Projetos Detalhados</h3>
        <p class="card-text">Arquivos em PDF e CAD (DWG) completos e prontos para corte e montagem.</p>
        <ul class="card-list">
          <li>Portões Basculantes, Pivotantes e Deslizantes</li>
          <li>Coberturas Metálicas e Pergolados</li>
          <li>Grades Modernas e Guarda-Corpos</li>
          <li>Galpões Estruturais e Mezaninos</li>
        </ul>
      </div>

      <!-- Card 2 -->
      <div class="card">
        <span class="card-badge">FINANCEIRO</span>
        <h3 class="card-title">Calculadora de Orçamentos</h3>
        <p class="card-text">Planilha para cálculo exato de custo de materiais, mão de obra e margem de lucro.</p>
        <ul class="card-list">
          <li>Cálculo automático do peso do ferro</li>
          <li>Custos de solda, discos e pintura</li>
          <li>Cálculo da diária e hora do serralheiro</li>
          <li>Margem de lucro limpa sem risco de prejuízo</li>
        </ul>
      </div>

      <!-- Card 3 -->
      <div class="card">
        <span class="card-badge">ECONOMIA</span>
        <h3 class="card-title">Lista de Materiais e Corte</h3>
        <p class="card-text">Otimização milimétrica de perfis para eliminar sobras e desperdício de ferro.</p>
        <ul class="card-list">
          <li>Aproveitamento máximo de barras de 6m</li>
          <li>Lista exata para enviar ao distribuidor</li>
          <li>Redução de até 35% nas sobras de oficina</li>
          <li>Mais dinheiro no seu bolso por projeto</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 4. Seção de Bônus -->
  <section class="section-bonus">
    <h2 class="section-title">BÔNUS EXCLUSIVOS</h2>
    <p class="section-desc">Garantindo hoje você leva gratuitamente:</p>

    <div class="bonus-grid">
      <div class="bonus-card">
        <div class="bonus-header">
          <span class="bonus-tag">BÔNUS #1</span>
          <span class="bonus-free">GRÁTIS HOJE (Era R$ 97)</span>
        </div>
        <h3 class="card-title">Planilha Inteligente de Precificação</h3>
        <p class="card-text" style="line-height: 1.6; text-align: left;">
          ⏱️ <strong>Orçamentos em 2 Minutos:</strong> Calcule custos de material, insumos e horas trabalhadas com poucos cliques.<br><br>
          💰 <strong>Preço de Venda Certo:</strong> Saiba exatamente quanto cobrar para ter margem de lucro real em cada serviço.<br><br>
          📊 <strong>Livre de Erros:</strong> Fórmula pronta que evita esquecer custos escondidos como discos, tintas e transporte.<br><br>
          💻 <strong>Pronta para Usar:</strong> Abra no Google Planilhas ou Excel sem precisar instalar nada complexo.
        </p>
      </div>

      <div class="bonus-card">
        <div class="bonus-header">
          <span class="bonus-tag">BÔNUS #2</span>
          <span class="bonus-free">GRÁTIS HOJE (Era R$ 67)</span>
        </div>
        <h3 class="card-title">Guia Prático - Quanto Cobrar Sem Perder Serviço</h3>
        <p class="card-text" style="line-height: 1.6; text-align: left;">
          📊 <strong>Margem de Segurança:</strong> Saiba até onde você pode negociar sem comprometer o lucro da sua oficina.<br><br>
          🚀 <strong>Orçamento Irresistível:</strong> Como montar uma proposta que passa autoridade e faz o cliente fechar na hora.<br><br>
          🚫 <strong>Chega de "Leilão de Preço":</strong> Pare de competir com serralheiros curiosos que cobram baratinho e queimam o mercado.<br><br>
          💬 <strong>Respostas para Clientes Indecisos:</strong> Modelos prontos de mensagens para destravar orçamentos parados no WhatsApp.
        </p>
      </div>
    </div>
  </section>

  <!-- 5. Seção de Oferta e Preço -->
  <section id="oferta" class="section-pricing">
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="display:inline-block; font-size:11px; font-weight:900; background:rgba(239,68,68,0.15); color:#f87171; padding:4px 14px; border-radius:999px; border:1px solid rgba(239,68,68,0.4); margin-bottom:12px; text-transform:uppercase;">
        ⚡ ESCOLHA O PLANO IDEAL PARA SUA OFICINA
      </div>
      <h2 class="section-title">INVISTA HOJE NA SUA SERRALHARIA</h2>
      <p class="section-desc" style="max-width: 650px; margin: 0 auto;">
        Comece com o Pacote Básico ou leve a biblioteca completa com todos os bônus e atualizações vitalícias.
      </p>
    </div>

    <div class="pricing-container">
      
      <!-- 1. PACOTE BÁSICO - R$ 14,90 -->
      <div class="pricing-box-basic">
        <div>
          <div style="font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; background: #0f172a; padding: 4px 10px; border-radius: 999px; display: inline-block; margin-bottom: 8px;">
            Essencial para Iniciar
          </div>
          <h3 style="font-size: 22px; font-weight: 900; margin-bottom: 6px; color: #ffffff;">Pacote Básico</h3>
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">
            Ideal para quem quer começar rápido com os projetos essenciais em PDF.
          </p>

          <div style="background: #0f172a; padding: 16px; border-radius: 14px; border: 1px solid #1e293b; margin-bottom: 20px;">
            <div class="old-price">De R$ 67,00</div>
            <div style="font-size: 13px; color: #cbd5e1;">Por apenas</div>
            <div class="new-price-basic">R$ 14,90</div>
            <div style="font-size: 13px; color: #cbd5e1; font-weight: 600;">ou em até 2x no cartão</div>
          </div>

          <ul class="pricing-list">
            <li>500 Projetos Essenciais em PDF prontos</li>
            <li>Modelos mais pedidos de móveis industriais</li>
            <li>Projetos de portões, grades e suportes simples</li>
            <li>Medidas principais e especificações básicas</li>
            <li>Envio imediato no seu e-mail</li>
          </ul>
        </div>

        <div>
          <a href="https://pay.wiapy.com/Cdhzimr-jDTJ" target="_blank" rel="noopener noreferrer" class="cta-btn-basic">
            GARANTIR PACOTE BÁSICO (R$ 14,90)
          </a>
          <div style="margin-top: 10px; font-size: 11px; color: #94a3b8;">
            🛡️ Garantia de 7 Dias &bull; Envio Imediato
          </div>
        </div>
      </div>

      <!-- 2. PACOTE COMPLETO 2.0 - R$ 47,00 (DESTAQUE) -->
      <div class="pricing-box">
        <div class="pricing-badge-top">⭐ MAIS ESCOLHIDO • 70% OFF</div>

        <div>
          <div style="font-size: 12px; font-weight: 800; color: #d97706; text-transform: uppercase; margin-top: 6px;">Acesso Completo e Vitalício</div>
          <h3 style="font-size: 26px; font-weight: 900; margin-bottom: 12px; color: #ffffff;">Pack Serralharia Lucrativa 2.0</h3>
          
          <div style="background: #0f172a; padding: 18px; border-radius: 14px; border: 1px solid #334155; margin-bottom: 20px;">
            <div class="old-price">De R$ 197,00</div>
            <div style="font-size: 14px; color: #cbd5e1;">Por apenas</div>
            <div class="new-price">R$ 47,00</div>
            <div class="installments">ou em até 5x de R$ 10,11 no cartão</div>
            <div style="display:inline-block; font-size:11px; font-weight:800; color:#4ade80; background:rgba(34,197,94,0.15); padding:3px 10px; border-radius:999px;">
              Economia de R$ 150,00 garantida hoje
            </div>
          </div>

          <ul class="pricing-list">
            <li><strong>+3000 Projetos Detalhados</strong> (PDF e CAD DWG)</li>
            <li>600 projetos de móveis industriais</li>
            <li>500 projetos de Estruturas rápidas</li>
            <li>50 projetos de churrasqueiras</li>
            <li>100 projetos de aparelho de academia (entre outros …)</li>
            <li>Detalhamento de Medidas e Espessuras de Tubos e Perfis</li>
            <li>Lista de Materiais e Plano Otimizado de Corte de Barras</li>
            <li style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 8px; padding: 10px; color: #fde68a; font-weight: 700; margin: 8px 0;">
              ⭐ <strong>BÔNUS #1:</strong> Planilha Inteligente de Precificação (Excel e Sheets)
            </li>
            <li style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 8px; padding: 10px; color: #fde68a; font-weight: 700; margin: 8px 0;">
              ⭐ <strong>BÔNUS #2:</strong> Guia Prático - Quanto Cobrar Sem Perder Serviço
            </li>
            <li>Acesso Vitalício: Para novos projetos</li>
            <li>Lista de fornecedores</li>
            <li>Envio imediato no seu e-mail logo após a confirmação</li>
          </ul>
        </div>

        <div>
          <a href="https://pay.wiapy.com/5gVNgI-UNci3" target="_blank" rel="noopener noreferrer" class="cta-btn">
            QUERO MEU ACESSO AGORA!
          </a>
          
          <div style="margin-top: 18px; display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-size: 12px; font-weight: 700;">
            <span style="color: #22c55e;">🔒 Compra 100% Segura</span>
            <span style="color: #d97706;">⚡ Acesso Imediato</span>
            <span style="color: #38bdf8;">🛡️ Garantia de 7 Dias</span>
          </div>
          <div style="margin-top: 8px; font-size: 11px; color: #94a3b8;">
            PIX Instantâneo &bull; Cartão em até 5x &bull; Ambiente Criptografado
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 6. Garantia -->
  <section class="section-guarantee">
    <div class="guarantee-box">
      <div class="guarantee-shield">
        <span>7 DIAS</span>
        <span style="font-size: 9px;">GARANTIA</span>
      </div>
      <div style="flex: 1; text-align: center; display: flex; flex-direction: column; align-items: center;">
        <span style="font-size: 11px; font-weight: 900; letter-spacing: 1px; color: #fbbf24; text-transform: uppercase; margin-bottom: 4px;">SEU RISCO É ABSOLUTAMENTE ZERO</span>
        <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 12px; text-align: center;">Garantia de 7 dias.</h3>
        <a href="https://ibb.co/zWfJhsTR" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
          <img src="https://i.ibb.co/XfJ8ZXrs/site-seguro.png" alt="site seguro" border="0" style="max-width: 100%; height: auto; border-radius: 10px; display: block; margin: 0 auto;">
        </a>
      </div>
    </div>
  </section>

  <!-- 7. Rodapé -->
  <footer>
    <p>&copy; 2026 Serralharia Lucrativa. Todos os direitos reservados.</p>
    <p style="font-size: 11px;">
      Este produto não garante a obtenção de resultados sem trabalho e execução prática. Termos de Uso e Políticas de Privacidade.
    </p>
  </footer>

  <script>
    const carouselImages = [
      "https://i.ibb.co/RGBmtptL/Captura-de-tela-2026-09-03-104746.png",
      "https://i.ibb.co/4npQsZbm/Captura-de-tela-2026-09-03-104800.png",
      "https://i.ibb.co/fGQqLfz7/Captura-de-tela-2026-09-03-104807.png",
      "https://i.ibb.co/GvN7j0GD/Captura-de-tela-2026-09-03-104815.png",
      "https://i.ibb.co/TBHnGW8Q/Captura-de-tela-2026-09-03-104828.png",
      "https://i.ibb.co/8LxBWHcp/Captura-de-tela-2026-09-03-104834.png",
      "https://i.ibb.co/VYRRpHpR/Captura-de-tela-2026-09-03-104842.png",
      "https://i.ibb.co/XrBMHsLX/Captura-de-tela-2026-09-03-104855.png",
      "https://i.ibb.co/Z1LzBLcS/Captura-de-tela-2026-09-03-104909.png"
    ];
    let currentSlide = 0;

    function renderThumbs() {
      const strip = document.getElementById('carouselStrip');
      if (!strip) return;
      strip.innerHTML = '';
      carouselImages.forEach((img, idx) => {
        const thumb = document.createElement('div');
        thumb.className = 'carousel-thumb ' + (idx === currentSlide ? 'active' : '');
        thumb.onclick = () => setSlide(idx);
        thumb.innerHTML = '<img src="' + img + '" referrerpolicy="no-referrer" alt="thumb ' + (idx + 1) + '">';
        strip.appendChild(thumb);
      });
    }

    function setSlide(idx) {
      currentSlide = idx;
      const mainImg = document.getElementById('carouselMainImg');
      if (mainImg) mainImg.src = carouselImages[currentSlide];
      renderThumbs();
    }

    function navigateCarousel(direction) {
      currentSlide = (currentSlide + direction + carouselImages.length) % carouselImages.length;
      setSlide(currentSlide);
    }

    document.addEventListener('DOMContentLoaded', () => {
      renderThumbs();
    });
    renderThumbs();

    // Notificação de Compra Aprovada Automática com 10 segundos de delay
    const buyersData = [
      { name: 'Carlos Eduardo M.', city: 'Belo Horizonte - MG' },
      { name: 'Marcos Vinicius S.', city: 'Campinas - SP' },
      { name: 'José Roberto P.', city: 'Goiânia - GO' },
      { name: 'Antônio da Silva R.', city: 'Curitiba - PR' },
      { name: 'Rodrigo F. Ferreira', city: 'Joinville - SC' },
      { name: 'Luciano Moreira B.', city: 'Ribeirão Preto - SP' },
      { name: 'Paulo Henrique T.', city: 'Fortaleza - CE' },
      { name: 'Sandro de Almeida', city: 'Porto Alegre - RS' },
      { name: 'Cláudio Mendonça', city: 'Salvador - BA' },
      { name: 'Fernando Martins V.', city: 'Vitória - ES' },
      { name: 'Anderson Souza L.', city: 'Caxias do Sul - RS' }
    ];
    let currentBuyerIndex = 0;

    function triggerPurchaseNotification() {
      const toast = document.getElementById('purchaseToast');
      const nameEl = document.getElementById('toastBuyerName');
      const cityEl = document.getElementById('toastBuyerCity');
      if (!toast || !nameEl || !cityEl) return;

      const buyer = buyersData[currentBuyerIndex];
      nameEl.textContent = buyer.name;
      cityEl.textContent = buyer.city + ' • Acesso Imediato';

      toast.style.display = 'flex';

      setTimeout(() => {
        toast.style.display = 'none';
        currentBuyerIndex = (currentBuyerIndex + 1) % buyersData.length;
        // Intervalo de 10 segundos para a próxima notificação
        setTimeout(triggerPurchaseNotification, 10000);
      }, 5000);
    }

    // Delay inicial de 10 segundos
    setTimeout(triggerPurchaseNotification, 10000);

    // Atualiza a data da oferta automaticamente conforme os dias passam
    function updateDynamicDate() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = String(now.getFullYear()).slice(-2);
      const dateEl = document.getElementById('topBarDate');
      if (dateEl) {
        dateEl.textContent = day + '/' + month + '/' + year;
      }
    }
    updateDynamicDate();
  </script>

  <!-- Notificação Flutuante de Compra Aprovada -->
  <div id="purchaseToast" class="purchase-toast">
    <div class="toast-icon">✓</div>
    <div style="flex: 1; min-width: 0;">
      <span class="toast-badge">COMPRA APROVADA</span>
      <div id="toastBuyerName" class="toast-name">Carlos Eduardo M.</div>
      <div class="toast-desc">Adquiriu o <strong style="color: #f59e0b;">Pacote Completo</strong></div>
      <div id="toastBuyerCity" class="toast-sub">Belo Horizonte - MG • Acesso Imediato</div>
    </div>
    <button type="button" onclick="document.getElementById('purchaseToast').style.display='none';" style="background: none; border: none; color: #64748b; cursor: pointer; font-size: 16px; padding: 0 4px;">&times;</button>
  </div>

</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-100 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Code2 className="w-4 h-4" />
          <span>Publicação Imediata</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
          Código HTML Completo para Vercel / Netlify / Lovable
        </h3>
        
        <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
          Aqui está o código HTML completo com CSS estilizado e responsivo pronto para você copiar e colar diretamente no seu projeto de hospedagem ou salvar como <code className="text-amber-400 bg-slate-900 px-1 py-0.5 rounded font-mono">index.html</code>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <button
            onClick={handleCopy}
            type="button"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Código Copiado!' : 'Copiar Código HTML Completo'}</span>
          </button>

          <button
            onClick={handleDownload}
            type="button"
            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Baixar arquivo index.html</span>
          </button>

          <a
            href="/standalone.html"
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1 ml-auto"
          >
            <span>Ver versão standalone</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Code Snippet Box */}
        <div className="relative bg-slate-950 rounded-xl p-3 border border-slate-800 max-h-72 overflow-y-auto font-mono text-xs text-slate-300">
          <pre>{standaloneHtml}</pre>
        </div>
      </div>
    </div>
  );
};
