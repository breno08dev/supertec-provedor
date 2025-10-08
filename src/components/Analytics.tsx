// src/components/Analytics.tsx
import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // 1. Verifica a escolha do usuário no localStorage
    const userConsent = localStorage.getItem('cookie_consent');

    // 2. Se o consentimento for 'true', carrega o script
    if (userConsent === 'true') {
      // Cria a tag do script do Google Analytics
      const script = document.createElement('script');
      script.async = true;
      // Substitua 'G-XXXXXXXXXX' pelo seu ID de medição do Google
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      document.head.appendChild(script);

      // Inicia a camada de dados e configura o gtag
      const scriptInner = document.createElement('script');
      scriptInner.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `;
      document.head.appendChild(scriptInner);
      
      console.log("Cookies de Analytics aceitos. Script carregado.");
    } else {
      console.log("Cookies de Analytics recusados. Script não será carregado.");
    }
  }, []); // O array vazio garante que isso rode apenas uma vez

  return null; // Este componente não renderiza nada na tela
};

export default Analytics;