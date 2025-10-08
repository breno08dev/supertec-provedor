// src/components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent = ({ openPrivacyModal }: { openPrivacyModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez uma escolha anteriormente
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    // Salva a escolha do usuário. 'true' para aceito, 'false' para recusado.
    localStorage.setItem('cookie_consent', consent.toString());
    setIsVisible(false);
    
    // Opcional: Recarregar a página para aplicar as configurações de script
    // window.location.reload(); 
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-sm p-4 z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-white text-sm">
          <Cookie className="h-8 w-8 text-secondary flex-shrink-0 mt-1 md:mt-0" />
          <p>
            Nós utilizamos cookies para aprimorar sua experiência de navegação e analisar o tráfego do site. Para saber mais, acesse nossa{' '}
            <button onClick={openPrivacyModal} className="font-bold text-secondary hover:underline">
              Política de Privacidade
            </button>
            .
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto flex-shrink-0">
          <button
            onClick={() => handleConsent(false)}
            className="bg-gray-600/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 transition-colors w-full"
          >
            Recusar
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;