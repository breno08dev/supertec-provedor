// src/components/ProactiveChatAlert.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const ProactiveChatAlert = () => {
  // Estado para controlar a visibilidade do alerta
  const [isVisible, setIsVisible] = useState(false);

  // Efeito para iniciar o timer quando o componente é montado
  useEffect(() => {
    // Define um timer para 20 segundos (20000 milissegundos)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000);

    // Função de limpeza: se o componente for desmontado, o timer é cancelado
    return () => clearTimeout(timer);
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  const handleWhatsAppClick = () => {
    const message = 'Olá! Estou navegando no site e gostaria de tirar uma dúvida.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=5516993757457&text=${encodedMessage}`, '_blank');
    setIsVisible(false); // Esconde o alerta após o clique
  };

  return (
    // AnimatePresence permite animar a saída do componente
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden"
          // Animações de entrada e saída
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-secondary p-3 rounded-full mr-4 mt-1">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-background-dark">Ficou com alguma dúvida?</h3>
                <p className="text-gray-600 mt-1">
                  Nossa equipe está pronta para te ajudar a escolher o plano ideal. Fale conosco no WhatsApp!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-4 w-full bg-primary text-white px-4 py-3 rounded-xl font-bold text-base hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Conversar Agora</span>
                </button>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar alerta"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProactiveChatAlert;