import React, { useState } from 'react';
import { X, QrCode, CreditCard, FileText, CheckCircle2, ShieldCheck, Copy, Lock, ArrowRight, ExternalLink } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: 'basic' | 'complete';
  onSelectPlan?: (plan: 'basic' | 'complete') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = 'complete',
  onSelectPlan,
}) => {
  const [currentPlan, setCurrentPlan] = useState<'basic' | 'complete'>(selectedPlan);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customCheckoutUrl, setCustomCheckoutUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardExp: '',
    cardCvv: '',
    installments: '5',
  });

  // Sync prop changes
  React.useEffect(() => {
    setCurrentPlan(selectedPlan);
  }, [selectedPlan]);

  const handlePlanChange = (plan: 'basic' | 'complete') => {
    setCurrentPlan(plan);
    if (onSelectPlan) onSelectPlan(plan);
  };

  if (!isOpen) return null;

  const isBasic = currentPlan === 'basic';
  const planName = isBasic ? 'Pacote Básico Serralheiro' : 'Pack Serralharia Lucrativa 2.0';
  const planSub = isBasic ? '+500 Projetos em PDF' : '+3000 Projetos + Bônus + Acesso Vitalício';
  const planPrice = isBasic ? 'R$ 14,90' : 'R$ 47,00';
  const planOldPrice = isBasic ? 'R$ 67,00' : 'R$ 197,00';

  const mockPixCode = isBasic
    ? '00020126580014br.gov.bcb.pix0136serralharialucrativa-basico@pagamento.com520400005303986540514.905802BR5925SERRALHARIA LUCRATIVA6009SAO PAULO62070503***6304E2F1'
    : '00020126580014br.gov.bcb.pix0136serralharialucrativa-pack@pagamento.com520400005303986540547.005802BR5925SERRALHARIA LUCRATIVA6009SAO PAULO62070503***6304D1A4';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl shadow-black/90 p-5 sm:p-6 text-slate-100 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Pedido Confirmado!</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Seu acesso ao <strong className="text-white">{planName}</strong> foi gerado com sucesso.
            </p>
            <div className="bg-slate-900 p-4 rounded-xl text-xs text-left space-y-2 border border-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Produto:</span>
                <span className="font-semibold text-white">{planName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Valor Pago:</span>
                <span className="font-semibold text-emerald-400">{planPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">E-mail de Envio:</span>
                <span className="font-semibold text-amber-300">{formData.email || 'seu-email@dominio.com'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="font-bold text-emerald-400">Acesso Liberado no E-mail</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              type="button"
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold py-3 px-6 rounded-xl transition-colors cursor-pointer"
            >
              Concluir e Voltar à Página
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-4 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Lock className="w-3.5 h-3.5" />
                Checkout Seguro SSL 256-bit
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Finalizar Acesso
              </h3>
            </div>

            {/* Plan Switcher Tabs inside checkout */}
            <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-900/90 p-1.5 rounded-xl border border-slate-700/80">
              <button
                type="button"
                onClick={() => handlePlanChange('basic')}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center justify-center cursor-pointer ${
                  isBasic
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/50 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Pacote Básico</span>
                <span className="text-[10px] font-extrabold text-white">R$ 14,90</span>
              </button>
              <button
                type="button"
                onClick={() => handlePlanChange('complete')}
                className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center justify-center cursor-pointer relative ${
                  !isBasic
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1">
                  Pack Completo 2.0
                  <span className="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded-full uppercase">Top</span>
                </span>
                <span className="text-[10px] font-extrabold text-emerald-400">R$ 47,00</span>
              </button>
            </div>

            {/* Order Mini-Recap */}
            <div className="bg-slate-900/90 rounded-xl p-3 mb-5 border border-slate-700/80 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <div className="font-bold text-white">{planName}</div>
                <div className="text-[11px] text-slate-400">{planSub}</div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 line-through block">{planOldPrice}</span>
                <span className="text-base sm:text-lg font-black text-emerald-400">{planPrice}</span>
              </div>
            </div>

            {/* Payment Methods Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-2 px-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-sm'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>PIX (Imediato)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('credit')}
                className={`py-2 px-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  paymentMethod === 'credit'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-sm'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Cartão de Crédito</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('boleto')}
                className={`py-2 px-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                  paymentMethod === 'boleto'
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-sm'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Boleto Bancário</span>
              </button>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nome Completo:
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex: João da Silva Serralheiro"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  E-mail (Onde você vai receber os projetos):
                </label>
                <input
                  required
                  type="email"
                  placeholder="Ex: seuemail@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WhatsApp com DDD:
                </label>
                <input
                  required
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* PIX Specific View */}
              {paymentMethod === 'pix' && (
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-500/30 text-center space-y-2.5">
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Chave PIX Dinâmica Gerada
                  </div>
                  
                  {/* Visual QR Code Mockup */}
                  <div className="w-32 h-32 mx-auto bg-white p-2 rounded-lg shadow flex items-center justify-center">
                    <div className="grid grid-cols-6 grid-rows-6 gap-0.5 w-full h-full bg-slate-950 p-1 rounded">
                      {[...Array(36)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-xs ${
                            (i % 2 === 0 && i % 3 === 0) || (i < 8 && i % 2 === 1) || i === 15 || i === 22 || i === 33
                              ? 'bg-white'
                              : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300">
                    Pague pelo aplicativo do seu banco lendo o QR Code ou copiando o código abaixo:
                  </p>

                  <div className="flex items-center gap-1.5">
                    <input
                      readOnly
                      value={mockPixCode}
                      className="w-full bg-slate-950 text-slate-400 text-xs px-2 py-1.5 rounded border border-slate-800 font-mono truncate"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-3 py-1.5 rounded text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {copiedPix ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
              )}

              {/* Credit Card Specific View */}
              {paymentMethod === 'credit' && (
                <div className="space-y-2.5 bg-slate-900/70 p-3.5 rounded-xl border border-amber-500/30">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Número do Cartão:
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Validade:</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">CVV:</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={formData.cardCvv}
                        onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Parcelamento:</label>
                    <select
                      value={formData.installments}
                      onChange={(e) => setFormData({ ...formData, installments: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    >
                      {isBasic ? (
                        <>
                          <option value="1">1x de R$ 14,90 à vista</option>
                          <option value="2">2x de R$ 7,85</option>
                        </>
                      ) : (
                        <>
                          <option value="1">1x de R$ 47,00 à vista</option>
                          <option value="2">2x de R$ 24,40</option>
                          <option value="3">3x de R$ 16,50</option>
                          <option value="4">4x de R$ 12,55</option>
                          <option value="5">5x de R$ 10,11 (Mais Escolhido)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              )}

              {/* Boleto View */}
              {paymentMethod === 'boleto' && (
                <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white">Boleto Bancário:</p>
                  <p className="text-[11px] text-slate-400">
                    O boleto pode levar de 1 a 3 dias úteis para compensar. Para liberação imediata em segundos, recomendamos pagamento via PIX ou Cartão de Crédito.
                  </p>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-3 bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-black text-base py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>CONFIRMAR E LIBERAR MEU ACESSO</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
            </form>

            {/* Custom Payment Link Option for Creator / Merchant */}
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-center">
              <p className="text-[11px] text-slate-400 mb-1">
                Já tem link de checkout pronto (Kiwify, Hotmart, Eduzz, Braip)?
              </p>
              <div className="flex gap-1.5 max-w-sm mx-auto">
                <input
                  type="url"
                  placeholder="https://pay.kiwify.com.br/..."
                  value={customCheckoutUrl}
                  onChange={(e) => setCustomCheckoutUrl(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                />
                {customCheckoutUrl && (
                  <a
                    href={customCheckoutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2 py-1 rounded text-xs flex items-center gap-1"
                  >
                    <span>Ir</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Security notice */}
            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
