// src/components/TermsModal.tsx

import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-background-dark">Termos de Uso</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-gray-700 space-y-4">
          <p className="font-bold text-red-600">
            AVISO: Este é um modelo de Termos de Uso. É crucial que você revise, personalize e valide este texto com um profissional da área jurídica para garantir que ele seja adequado ao seu modelo de negócio e às leis vigentes.
          </p>
          
          <h3 className="text-lg font-bold text-background-dark">1. Aceitação dos Termos</h3>
          <p>Ao contratar e utilizar os serviços de acesso à internet fornecidos pela SuperTec Telecom ("Empresa"), você ("Cliente") concorda em cumprir integralmente com os presentes Termos de Uso. A utilização do serviço implica na aceitação total destas condições.</p>
          
          <h3 className="text-lg font-bold text-background-dark">2. Obrigações do Cliente</h3>
          <p>O Cliente compromete-se a:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Efetuar o pagamento das mensalidades nas datas de vencimento estipuladas no plano contratado.</li>
            <li>Utilizar o serviço de forma lícita, não o empregando para a prática de atos proibidos por lei ou que violem os direitos de terceiros (como pirataria, disseminação de spam, fraudes, etc.).</li>
            <li>Zelar pelos equipamentos fornecidos em regime de comodato (se aplicável), sendo responsável por danos causados por mau uso.</li>
            <li>Manter seus dados cadastrais sempre atualizados junto à Empresa.</li>
          </ul>

          <h3 className="text-lg font-bold text-background-dark">3. Direitos e Deveres da Empresa</h3>
          <p>A SuperTec Telecom compromete-se a:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fornecer o serviço de acesso à internet conforme as especificações do plano contratado, garantindo os padrões de qualidade e velocidade estabelecidos pela Anatel.</li>
            <li>Prestar suporte técnico para solucionar problemas relacionados à conexão, dentro dos horários de atendimento estipulados.</li>
            <li>Realizar manutenções preventivas na rede para garantir a estabilidade e a qualidade do serviço, informando os clientes com antecedência sempre que possível.</li>
          </ul>

          <h3 className="text-lg font-bold text-background-dark">4. Velocidade de Conexão</h3>
          <p>A velocidade de download e upload contratada representa a capacidade máxima da conexão. Fatores externos, como o número de dispositivos conectados simultaneamente, a capacidade do site acessado e a qualidade da rede interna do Cliente, podem influenciar na velocidade percebida.</p>
          
          <h3 className="text-lg font-bold text-background-dark">5. Cancelamento e Fidelidade</h3>
          <p>As condições para cancelamento do serviço, bem como a existência de eventuais cláusulas de fidelidade e multas rescisórias, estão detalhadas no contrato de prestação de serviços assinado pelo Cliente no ato da contratação.</p>
          
          <p className="text-sm text-gray-500 pt-4">Última atualização: 01 de Setembro de 2025.</p>
        </div>
        
        <div className="flex justify-end p-4 border-t">
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;