import React, { useState } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentProof: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const message = `*COMPROVANTE - CURSO RESIDÊNCIA PELO MIGRAMÓVIL PARAGUAI* 

*Dados do Cliente:*
• Nome: ${formData.name}
• Email: ${formData.email}
• WhatsApp: ${formData.phone || 'Não informado'}

*Pagamento:*
• Valor: R$ 397,00
• Método: PIX

Aguardo liberação do acesso ao curso.

Obrigado! `;

    // Abrir WhatsApp
    const phoneNumber = '595975551881'; // Substitua pelo seu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, paymentProof: e.target.files[0] });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Pagamento Recebido!</h3>
        <p className="text-green-700 mb-4">
          Obrigado pelo seu pagamento. Você receberá o acesso ao curso em até 24 horas no email informado.
        </p>
        <p className="text-sm text-green-600">
          Verifique também sua caixa de spam caso não receba o email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Enviar Comprovante de Pagamento</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          WhatsApp (opcional)
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
          placeholder="(00) 00000-0000"
        />
      </div>


        <p className="text-sm text-gray-500 mt-1">
          Envie uma foto ou PDF do comprovante de pagamento PIX
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
      >
        <Send className="w-5 h-5" />
        <span>Enviar Comprovante</span>
      </button>
    </form>
  );
};

export default PaymentForm;