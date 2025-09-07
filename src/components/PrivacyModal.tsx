// src/components/PrivacyModal.tsx

import { X } from 'lucide-react';

// O componente recebe duas propriedades: se está aberto (isOpen) e a função para fechá-lo (onClose)
interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    // Fundo semi-transparente que cobre a tela inteira
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose} // Permite fechar o modal clicando fora dele
    >
      {/* Container do modal */}
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
      >
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-background-dark">Política de Privacidade</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo com scroll */}
        <div className="p-6 overflow-y-auto text-gray-700 space-y-4">
          <p className="font-bold text-red-600">
            AVISO: Este é um modelo de Política de Privacidade. É crucial que você revise, personalize e valide este texto com um profissional da área jurídica para garantir que ele atenda a todas as exigências da LGPD e seja adequado às práticas da sua empresa.
          </p>
          
          <h3 className="text-lg font-bold text-background-dark">1. Coleta de Dados</h3>
          <p>Coletamos informações que você nos fornece diretamente, como nome e telefone, ao preencher o formulário de contato. Também coletamos dados automaticamente através de cookies para melhorar a funcionalidade e a experiência de navegação em nosso site.</p>
          
          <h3 className="text-lg font-bold text-background-dark">2. Uso das Informações</h3>
          <p>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Entrar em contato para fornecer informações sobre nossos planos e serviços.</li>
            <li>Personalizar sua experiência em nosso site.</li>
            <li>Analisar o tráfego do site e entender como nossos usuários interagem com a página.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h3 className="text-lg font-bold text-background-dark">3. Cookies</h3>
          <p>Cookies são pequenos arquivos de texto armazenados no seu navegador. Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para monitorar o desempenho. Você pode gerenciar ou desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade de algumas partes do site.</p>

          <h3 className="text-lg font-bold text-background-dark">4. Compartilhamento de Dados</h3>
          <p>A SuperTec não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito. Podemos compartilhar seus dados com prestadores de serviços que nos auxiliam em nossas operações (como plataformas de atendimento ao cliente), sempre sob estritas obrigações de confidencialidade.</p>

          <h3 className="text-lg font-bold text-background-dark">5. Seus Direitos</h3>
          <p>De acordo com a LGPD, você tem o direito de acessar, corrigir, anonimizar ou eliminar seus dados pessoais. Para exercer seus direitos, entre em contato conosco através do e-mail: <span className="font-semibold">contato@supertec.com.br</span>.</p>

          <h3 className="text-lg font-bold text-background-dark">6. Alterações na Política</h3>
          <p>Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como estamos protegendo suas informações. A data da última atualização será sempre indicada no final deste documento.</p>
          
          <p className="text-sm text-gray-500 pt-4">Última atualização: 01 de Setembro de 2025.</p>
        </div>
        
        {/* Rodapé do Modal */}
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

export default PrivacyModal;