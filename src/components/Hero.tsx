import { ArrowRight, MessageCircle } from 'lucide-react';
import familiaImage from '../Assets/familia.jpg'; // ajuste o caminho se necessário

const Hero = () => {
  const handleWhatsApp = () => {
    const message = 'Olá! Gostaria de conhecer os planos de internet da SuperTec.';
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=5516993757457&text=${encodedMessage}`,
      '_blank'
    );
  };

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative text-white py-20 px-4 md:px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${familiaImage})`,
      }}
    >
      {/* Overlay para escurecer a imagem */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Internet <span className="text-secondary">Rápida</span> e{' '}
          <span className="text-secondary">Estável</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            para sua casa ou empresa
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Conectividade de alta performance com suporte 24h e instalação rápida.
          Experimente a diferença de uma internet que não falha.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsApp}
            className="group bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Fale no WhatsApp</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToPlans}
            className="group bg-transparent border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-background-dark transition-all duration-300 flex items-center space-x-3"
          >
            <span>Ver Planos</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 text-blue-200">
          <p className="text-sm">
            ✓ Instalação gratuita ✓ Sem fidelidade ✓ Suporte 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
