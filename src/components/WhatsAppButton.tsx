import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os planos da SuperTec.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppButton;