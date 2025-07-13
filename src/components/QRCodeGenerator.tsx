import React from 'react';

interface QRCodeGeneratorProps {
  pixKey: string;
  amount: number;
  description: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ pixKey, amount, description }) => {

  // Função para formatar campos do PIX
  const formatField = (id: string, value: string): string => {
    const length = value.length.toString().padStart(2, '0');
    return id + length + value;
  };

  // Função para calcular CRC16
  const calculateCRC16 = (str: string): string => {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x8000) !== 0) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc <<= 1;
        }
        crc &= 0xFFFF;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  };

  // Função para gerar payload PIX válido
  const generatePixPayload = (): string => {
    // Campos obrigatórios do PIX
    const payloadFormatIndicator = formatField('00', '01');

    // Informações da conta do comerciante (PIX)
    const pixInfo = formatField('00', 'br.gov.bcb.pix') + 
                   formatField('01', pixKey) + 
                   (description ? formatField('02', description.substring(0, 72)) : '');
    const merchantAccountInfo = formatField('26', pixInfo);

    const merchantCategoryCode = formatField('52', '0000');
    const transactionCurrency = formatField('53', '986'); // BRL
    const transactionAmount = amount > 0 ? formatField('54', amount.toFixed(2)) : '';
    const countryCode = formatField('58', 'BR');
    const merchantName = formatField('59', 'CURSO RESIDENCIA PELO MIGRAMÓVIL NO PARAGUAI'.substring(0, 25));
    const merchantCity = formatField('60', 'CIDADE DEL ESTE'.substring(0, 15));

    // Dados adicionais
    const additionalData = formatField('62', formatField('05', '***'));

    // Monta payload sem CRC
    let payload = [
      payloadFormatIndicator,
      merchantAccountInfo,
      merchantCategoryCode,
      transactionCurrency,
      transactionAmount,
      countryCode,
      merchantName,
      merchantCity,
      additionalData,
      '6304' // Placeholder para CRC
    ].join('');

    // Calcula e adiciona CRC16
    const crc = calculateCRC16(payload);
    payload += crc;

    return payload;
  };

  const pixPayload = generatePixPayload();
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(pixPayload)}`;

  // Função para copiar texto
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${type} copiado com sucesso!`);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      alert('Erro ao copiar. Tente novamente.');
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">PIX - Pagamento Instantâneo</h3>

      {/* Aviso importante */}
      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>⚠️ ATENÇÃO:</strong> Este valor é apenas do curso. Taxas oficiais do processo são pagas separadamente no Paraguai.
        </p>
      </div>

      {/* QR Code */}
      <div className="mb-4">
        <img 
          src={qrCodeUrl} 
          alt="QR Code PIX" 
          className="mx-auto border-2 border-gray-200 rounded-lg shadow-sm"
          onError={(e) => {
            console.error('Erro ao carregar QR Code');
            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y5ZjlmOSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVycm8gYW8gY2FycmVnYXIgUVI8L3RleHQ+PC9zdmc+';
          }}
        />
      </div>

      {/* Informações do pagamento */}
      <div className="space-y-3">
        {/* Código PIX para cópia manual - POSIÇÃO PRINCIPAL */}
        <div className="bg-green-50 p-3 rounded-lg border-2 border-green-200">
          <p className="text-sm text-green-700 mb-1 font-semibold">Código PIX (Copia e Cola):</p>
          <p className="font-mono text-xs text-gray-700 break-all bg-white p-2 rounded border">
            {pixPayload}
          </p>
          <button
            onClick={() => copyToClipboard(pixPayload, 'Código PIX')}
            className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors font-semibold"
          >
            📋 Copiar Código PIX
          </button>
        </div>

        {/* Valor */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Valor:</p>
          <p className="text-2xl font-bold text-blue-600">R$ {amount.toFixed(2)}</p>
        </div>

        {/* Descrição */}
        {description && (
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Descrição:</p>
            <p className="text-sm font-medium text-purple-800">{description}</p>
          </div>
        )}

        {/* Chave PIX - POSIÇÃO SECUNDÁRIA */}
        <div className="bg-gray-50 p-3 rounded-lg">

        </div>
      </div>

      {/* Instruções */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>Como pagar:</strong><br/>
          1. Abra seu app do banco<br/>
          2. Escaneie o QR Code ou cole o código PIX<br/>
          3. Confirme os dados e finalize o pagamento
        </p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;