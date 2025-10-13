"use client";

import { motion, Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Silva',
    location: 'Centro, Pontal - SP',
    quote: 'A melhor internet que já tive! O sinal é super estável, perfeito para minhas reuniões de trabalho e para assistir filmes em 4K sem travar. O atendimento também é nota 10!',
    stars: 5,
  },
  {
    name: 'Ricardo Oliveira',
    location: 'Novo Horizonte 2, Pontal - SP',
    quote: 'Finalmente uma internet que entrega a velocidade que promete. Jogo online sem lag nenhum e a instalação foi feita no dia seguinte que contratei. Recomendo demais a SuperTec!',
    stars: 5,
  },
  {
    name: 'Carla Souza',
    location: 'Jequitibá 2, Pontal - SP',
    quote: 'O plano com streaming grátis é fantástico! Economizo bastante e a qualidade da conexão é impecável. Suporte rápido e eficiente sempre que precisei.',
    stars: 5,
  },
];

const Testimonials = () => {
  // Variantes para a animação
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
      opacity: 1, y: 0,
      transition: {
        delay: i * 0.2, // Delay ajustado
        ease: 'easeOut',
        duration: 1.0 // Duração da animação de cada card aumentada
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animação para o título */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            O que nossos <span className="text-secondary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A confiança e a satisfação de quem usa a nossa internet todos os dias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            // Animação para cada card de depoimento
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index} // Passa o index para o delay em cascata
            >
              <Quote className="w-10 h-10 text-secondary mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <div>
                  <p className="font-bold text-background-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;