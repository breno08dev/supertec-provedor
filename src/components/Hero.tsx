"use client";

import { motion, Variants } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import familiaImage from '../Assets/familia.webp'; // Otimizado para .webp

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

  // 1. Variantes para o container do título (para animar palavra por palavra)
  const titleContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Atraso suave entre as palavras
      },
    },
  };

  // 2. Variantes para cada palavra do título
  const wordVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8, // Duração aumentada para mais suavidade
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // 3. Variantes para os outros elementos (parágrafo e botões)
  const otherElementsVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duração aumentada
        ease: 'easeOut',
        delay: 1.0, // Atraso para começar APÓS o título animar
      },
    },
  };
  
  // Textos do título para facilitar o mapeamento
  const titleLine1 = "Internet Rápida e Estável";
  const titleLine2 = "para sua casa ou empresa";


  return (
    <section
      className="relative text-white py-20 px-4 md:px-6 overflow-hidden bg-cover bg-center"
    >
      {/* Imagem otimizada com lazy loading */}
      <img
        src={familiaImage}
        alt="Família assistindo TV"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Container do Título Principal */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight overflow-hidden" // overflow-hidden é importante para o efeito
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mapeia a primeira linha para animar cada palavra */}
          {titleLine1.split(" ").map((word, index) => (
            <span key={index} className="inline-block md:mr-4 mr-2"> {/* Wrapper para cada palavra */}
              <motion.span className="inline-block" variants={wordVariants}>
                {word.includes('Rápida') || word.includes('Estável') ? <span className="text-secondary">{word}</span> : word}
              </motion.span>
            </span>
          ))}
          <br />
          {/* Mapeia a segunda linha */}
          <span className="text-3xl md:text-4xl lg:text-5xl">
            {titleLine2.split(" ").map((word, index) => (
              <span key={index} className="inline-block md:mr-3 mr-1.5">
                <motion.span className="inline-block" variants={wordVariants}>
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.h1>

        {/* Animação para os outros elementos */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
          variants={otherElementsVariants}
          initial="hidden"
          animate="visible"
        >
          Conectividade de alta performance com suporte todos os dias e instalação rápida.
          Experimente a diferença de uma internet que não falha.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          variants={otherElementsVariants}
          initial="hidden"
          animate="visible"
        >
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
        </motion.div>

        <motion.div 
          className="mt-12 text-blue-200"
          variants={otherElementsVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm">
            ✓ Internet 100% Fibra Óptica ✓ Suporte Todos os Dias <br /> ✓ Conexão de Alta Performance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;