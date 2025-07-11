import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "O valor de R$ 397 inclui todas as taxas do processo?",
      answer: "NÃO. Os R$ 397 são apenas do curso. Durante o processo você pagará as taxas oficiais do governo paraguaio (documentos, autenticações, etc.). O curso ensina exatamente quais são essas taxas e valores atualizados para você se planejar."
    },
    {
      question: "Quanto tempo leva para receber o acesso ao curso?",
      answer: "Após o pagamento e envio do comprovante, você receberá o acesso em até 24 horas no email informado."
    },
    {
      question: "O curso serve apenas para 2025 ou para anos seguintes também?",
      answer: "O curso serve para 2025 e anos seguintes! O conteúdo é constantemente atualizado com novos cronogramas, custos e procedimentos. Uma vez adquirido, você terá acesso às atualizações sem custo adicional."
    },
    {
      question: "Como funciona a atualização do conteúdo?",
      answer: "Mantemos o curso sempre atualizado com as últimas informações do Migramóvil. Isso inclui novos cronogramas, mudanças nos custos, atualizações nos procedimentos e novos contatos quando necessário."
    },
    {
      question: "Posso tirar dúvidas durante o processo?",
      answer: "O curso inclui contatos diretos dos oficiais no Paraguai e orientações detalhadas para cada etapa do processo."
    },
    {
      question: "Qual a economia comparado a contratar um despachante?",
      answer: "Despachantes cobram entre R$ 10.000 a R$ 20.000 por pessoa ALÉM das taxas oficiais. Com nosso curso por apenas R$ 397 + taxas oficiais, você economiza mais de R$ 9.600 em honorários!"
    },
    {
      question: "O curso funciona para outros locais além de Ciudad del Este?",
      answer: "O curso é específico para Ciudad del Este, mas muitos procedimentos são similares em outras cidades do programa Migramóvil."
    },
    {
      question: "Vocês oferecem garantia de reembolso?",
      answer: "NÃO oferecemos garantia de reembolso. O curso contém informações sigilosas e contatos diretos de oficiais. Compre apenas se tem certeza que fará o processo."
    },
    {
      question: "Por que não há garantia?",
      answer: "Devido ao caráter confidencial das informações, incluindo contatos diretos de oficiais no Paraguai, todas as vendas são finais. O conteúdo é baseado em experiência real e contém estratégias sigilosas."
    }
  ];

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
          <button
            onClick={() => setOpenItem(openItem === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span className="font-semibold text-white">{item.question}</span>
            {openItem === index ? (
              <ChevronUp className="w-5 h-5 text-white" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white" />
            )}
          </button>
          {openItem === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-200 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;