import React, { useState } from 'react';
import { 
  Globe, 
  Calendar, 
  FileText, 
  DollarSign, 
  Star, 
  CheckCircle, 
  Users,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Download,
  Zap,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  Heart
} from 'lucide-react';
import QRCodeGenerator from './components/QRCodeGenerator';
import PaymentForm from './components/PaymentForm';
import TestimonialCard from './components/TestimonialCard';
import FAQ from './components/FAQ';

const App = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: "Economia Garantida",
      description: "Economize mais de R$ 9.600 comparado a despachantes que cobram R$ 10-20 mil"
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      title: "Cronograma 2025",
      description: "Todas as datas e locais atualizados do Migramóvil para 2025"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-400" />,
      title: "Conteúdo Atualizado",
      description: "Válido para anos seguintes com atualizações constantes incluídas"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: "Documentação Completa",
      description: "Lista detalhada de todos os documentos necessários e onde conseguir"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-400" />,
      title: "Passo a Passo",
      description: "Roteiro completo desde a chegada até a retirada dos documentos"
    },
    {
      icon: <Phone className="w-8 h-8 text-yellow-400" />,
      title: "Contatos Diretos",
      description: "WhatsApp dos oficiais para agilizar seus processos"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Experiência Real",
      description: "Baseado em casos reais de sucesso no processo"
    }
  ];

  const courseContent = [
    "Cronograma completo 2025 do Migramóvil",
    "Conteúdo válido para anos seguintes (2026, 2027...)",
    "Atualizações constantes incluídas no acesso",
    "Custos detalhados de todas as taxas oficiais",
    "Lista de documentos para providenciar no Brasil",
    "Documentos para conseguir no Paraguai",
    "Passo a passo completo do processo",
    "Contatos diretos dos oficiais",
    "Dicas para evitar problemas comuns",
    "Processo completo da cédula paraguaia",
    "Endereços e localizações importantes",
    "Estratégias para economia de tempo e dinheiro"
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "Consegui minha residência seguindo exatamente o que estava no curso. Economizei mais de R$ 15.000 que um despachante estava cobrando!",
      rating: 5
    },
    {
      name: "Maria Santos",
      location: "Foz do Iguaçu, PR",
      text: "O curso é muito detalhado e os contatos dos oficiais fizeram toda a diferença. Processo super tranquilo!",
      rating: 5
    },
    {
      name: "João Oliveira",
      location: "Curitiba, PR",
      text: "Informações precisas e atualizadas. Consegui fazer todo o processo em uma semana seguindo o cronograma.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-blue-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-16 h-16 text-red-400 mr-4" />
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  RESIDÊNCIA
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  PARAGUAI
                </h2>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Guia Completo para Migramóvil 2025
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Aprenda como obter sua residência no Paraguai por conta própria com nosso curso de apenas <span className="text-green-400 font-bold">R$ 397</span> 
              ao invés de pagar <span className="text-red-400 font-bold line-through">R$ 10.000 - R$ 20.000</span> para despachantes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => setShowPayment(true)}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <Zap className="w-6 h-6" />
                <span>QUERO MINHA RESIDÊNCIA</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-gray-300">4.9/5 (247 avaliações)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">+500 Aprovados</h3>
                <p className="text-gray-300">Brasileiros já conseguiram residência</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">95% Sucesso</h3>
                <p className="text-gray-300">Taxa de aprovação dos nossos alunos</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">7 Dias</h3>
                <p className="text-gray-300">Tempo médio para conclusão</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que Milhares de Brasileiros Estão Migrando para o Paraguai?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-4">❌ Problemas no Brasil</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Alta carga tributária</li>
                  <li>• Insegurança jurídica</li>
                  <li>• Economia instável</li>
                  <li>• Burocracia excessiva</li>
                  <li>• Custos elevados para empresas</li>
                </ul>
              </div>
              
              <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-4">✅ Vantagens do Paraguai</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Impostos baixíssimos</li>
                  <li>• Estabilidade política</li>
                  <li>• Moeda forte (dólar)</li>
                  <li>• Facilidade para negócios</li>
                  <li>• Qualidade de vida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que Escolher Nosso Curso?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Método comprovado baseado em experiência real de quem já passou pelo processo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold ml-4">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que Você Vai Aprender
            </h2>
            <p className="text-xl text-gray-300">
              Conteúdo completo e atualizado para 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseContent.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Compare os Preços
            </h2>
            <p className="text-xl text-gray-300">
              Veja quanto você economiza escolhendo nosso curso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Despachantes</h3>
                <div className="text-4xl font-bold text-red-400 mb-4">R$ 10.000 - R$ 20.000</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• Você ainda precisa ir ao Paraguai</li>
                  <li>• Você ainda paga as taxas oficiais</li>
                  <li>• Processo demorado</li>
                  <li>• Sem garantias</li>
                  <li>• Falta de transparência</li>
                </ul>
                <div className="bg-red-600 text-white py-2 px-4 rounded-lg">
                  ❌ Muito Caro
                </div>
              </div>
            </div>
            
            <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                MELHOR ESCOLHA
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Nosso Curso</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">R$ 397</div>
                <p className="text-sm text-gray-400 mb-4">*Apenas o curso + taxas oficiais do processo</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• Faça você mesmo</li>
                  <li>• Você paga apenas as taxas oficiais</li>
                  <li>• Processo rápido</li>
                  <li>• Conteúdo sigiloso</li>
                  <li>• Total transparência</li>
                </ul>
                <div className="bg-green-600 text-white py-2 px-4 rounded-lg">
                  ✅ Econômico e Eficaz
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 inline-block">
              <h3 className="text-2xl font-bold mb-2">Você Economiza</h3>
              <div className="text-4xl font-bold">Mais de R$ 9.600 em honorários</div>
              <p className="text-sm mt-2 opacity-90">+ Atualizações vitalícias incluídas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-gray-300">
              Depoimentos reais de quem já conseguiu sua residência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre o curso
            </p>
          </div>
          
          <FAQ />
          
          {/* Aviso Importante */}
          <div className="mt-12 bg-red-900/30 backdrop-blur-sm rounded-xl p-8 border border-red-500/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ AVISO IMPORTANTE</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong>NÃO OFERECEMOS GARANTIA DE REEMBOLSO</strong>
                </p>
                <p>
                  Este curso contém informações sigilosas, incluindo contatos diretos de oficiais no Paraguai e estratégias específicas baseadas em experiência real. O conteúdo é válido para 2025 e anos seguintes, com atualizações constantes incluídas.
                </p>
                <p>
                  <strong className="text-yellow-400">COMPRE APENAS SE VOCÊ TEM CERTEZA</strong> de que virá fazer o processo de residência por conta própria no Paraguai.
                </p>
                <p>
                  Devido ao caráter confidencial das informações e contatos fornecidos, todas as vendas são finais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Conquistar sua Residência no Paraguai?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a mais de 500 brasileiros que já conseguiram sua residência com nosso método
          </p>
          
          <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-green-400 mb-2">R$ 397</div>
              <p className="text-gray-300">Curso completo - Pagamento único via PIX</p>
              <p className="text-sm text-gray-400 mt-2">*Taxas oficiais do processo são pagas separadamente no Paraguai</p>
            </div>
            
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setShowQRCode(true)}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <Download className="w-6 h-6" />
                <span>COMPRAR AGORA</span>
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Conteúdo protegido</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                <span>Atualizações vitalícias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {(showPayment || showQRCode) && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Finalizar Compra</h2>
              <button
                onClick={() => {
                  setShowPayment(false);
                  setShowQRCode(false);
                }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <QRCodeGenerator 
                pixKey="07433584900"
                amount={397}
                description="Curso Residencia Paraguai"
              />
              <PaymentForm />
            </div>
            
            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
              <h3 className="font-bold text-blue-400 mb-2">Instruções:</h3>
              <ol className="text-sm text-gray-300 space-y-1">
                <li>1. Escaneie o QR Code ou copie a chave PIX</li>
                <li>2. Faça o pagamento de R$ 397,00</li>
                <li>3. Envie o comprovante no formulário ao lado</li>
                <li>4. Receba o acesso em até 24 horas</li>
              </ol>
              <div className="mt-4 p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                <p className="text-red-400 text-sm font-semibold">
                  ⚠️ ATENÇÃO: Não há garantia de reembolso. Compre apenas se tem certeza que fará o processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-red-400 mr-2" />
                <h3 className="text-xl font-bold">Residência Paraguai</h3>
              </div>
              <p className="text-gray-400">
                Ajudamos brasileiros a conseguir sua residência no Paraguai de forma legal, rápida e econômica.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>WhatsApp: +595 97555 1881</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Garantias</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Sem garantia de reembolso</li>
                <li>• Atualizações constantes</li>
                <li>• Válido para anos seguintes</li>
                <li>• Acesso vitalício</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Residência Paraguai pelo Migramóvel. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;