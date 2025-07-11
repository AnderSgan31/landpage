import React from 'react';

interface QRCodeGeneratorProps {
  pixKey: string;
  amount: number;
  description: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ pixKey, amount, description }) => {
  const pixPayload = `00020126580014br.gov.bcb.pix0136${pixKey}0208${description}5204000053039865802BR5925CURSO RESIDENCIA PARAGUAI6014CIDADE DEL ESTE62070503***6304`;
  
  // Usando um serviço gratuito para gerar QR Code
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(pixPayload)}`;
  
  return (
    <div className="bg-white rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800 mb-4">PIX - Pagamento Instantâneo</h3>
      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ ATENÇÃO:</strong> Este valor é apenas do curso. Taxas oficiais do processo são pagas separadamente no Paraguai.
        </p>
      </div>
      <div className="mb-4">
        <img 
          src={qrCodeUrl} 
          alt="QR Code PIX" 
          className="mx-auto border-2 border-gray-200 rounded-lg"
        />
      </div>
      <div className="space-y-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Chave PIX:</p>
          <p className="font-mono text-lg font-bold text-gray-800">{pixKey}</p>
          <button
            onClick={() => navigator.clipboard.writeText(pixKey)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Copiar Chave PIX
          </button>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Valor:</p>
          <p className="text-2xl font-bold text-green-600">R$ {amount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;