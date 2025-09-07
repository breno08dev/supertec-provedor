// src/components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

// Correção: Adicione a propriedade aqui
const CookieConsent = ({ openPrivacyModal }: { openPrivacyModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      // O banner se tornará visível imediatamente, sem o atraso de 2 segundos.
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-sm p-4 z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <Cookie className="h-8 w-8 text-secondary flex-shrink-0 mt-1 sm:mt-0" />
          <p className="text-white text-sm">
            Nós utilizamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com a nossa{' '}
            <button onClick={openPrivacyModal} className="font-bold text-secondary hover:underline">
              Política de Privacidade
            </button>
            .
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto flex-shrink-0"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;