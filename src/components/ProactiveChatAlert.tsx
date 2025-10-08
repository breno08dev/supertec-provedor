// src/components/ProactiveChatAlert.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const ProactiveChatAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = 'Olá! Estou navegando no site e gostaria de tirar uma dúvida.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=5516993757457&text=${encodedMessage}`, '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 max-w-xs w-full rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <div className="p-6 text-center relative">
            {/* Botão de Fechar */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar alerta"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Conteúdo Centralizado */}
            <h3 className="font-bold text-lg text-background-dark mt-2">Ficou com alguma dúvida?</h3>
            <p className="text-gray-600 mt-2 text-sm mb-5">
              Nossa equipe está pronta para te ajudar a escolher o plano ideal. Fale conosco no WhatsApp!
            </p>
            
            {/* Botão Animado */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="w-full bg-green text-white px-4 py-3 rounded-xl font-bold text-base hover:bg-green-500 transition-colors flex items-center justify-center space-x-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Conversar Agora</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProactiveChatAlert;