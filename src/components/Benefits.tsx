"use client";

// 1. Importe 'motion' e 'Variants'
import { motion, Variants } from 'framer-motion';
import { Zap, Shield, Clock, Wrench, Users, Headphones } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Velocidade Garantida',
      description: 'Internet em alta velocidade com tecnologia de fibra ótica para máxima performance'
    },
    {
      icon: Shield,
      title: 'Conexão Estável',
      description: 'Rede robusta e confiável com 99.9% de disponibilidade para não te deixar na mão'
    },
    {
      icon: Headphones,
      title: 'Suporte Todos os Dias',
      description: 'Atendimento especializado disponível todos os dias até as 17:30'
    },
    {
      icon: Clock,
      title: 'Instalação Rápida',
      description: 'Instalação profissional em até 48h após a contratação, sem complicação'
    },
    {
      icon: Wrench,
      title: 'Monitoramento e Suporte',
      description: 'Monitoramos nossa rede para prevenir falhas e oferecemos suporte quando você precisar.'
    },
    {
      icon: Users,
      title: 'Atendimento Local',
      description: 'Equipe local que conhece sua região e oferece atendimento personalizado'
    }
  ];

  // 2. Defina as variantes para a animação
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 1.0, ease: 'easeOut' }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        // Atraso entre os cards
        delay: i * 0.2,
        ease: 'easeOut',
        // Duração da animação de cada card
        duration: 1.2
      },
    }),
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 1.0, ease: 'easeOut' }
    }
  };


  return (
    // Adicionado overflow-hidden para a seção
    <section id="benefits" className="py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 3. Animação do título */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            Por que escolher a <span className="text-secondary">SuperTec?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 5 anos oferecendo a melhor experiência em conectividade para nossa região
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            // 4. Animação de cada card de benefício
            <motion.div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-yellow-50 hover:to-blue-50 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index} // Passa o index para o delay em cascata
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-highlight rounded-full mb-6 group-hover:bg-orange-600 transition-colors">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-background-dark mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 5. Animação do bloco final de CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-background-dark to-black rounded-2xl p-8 md:p-12 text-center text-white"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 ">Pronto para experimentar?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a mais de 1.000 clientes satisfeitos em toda a região
          </p>
          <button
            onClick={() => window.open('https://wa.me/5516993757457?text=Olá! Quero experimentar a internet SuperTec!', '_blank')}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Começar Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;