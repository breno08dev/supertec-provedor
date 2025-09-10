// src/components/Testimonials.tsx

import { Star, Quote } from 'lucide-react';

// Você pode substituir estes dados pelos depoimentos reais dos seus clientes
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
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            O que nossos <span className="text-secondary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A confiança e a satisfação de quem usa a nossa internet todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <Quote className="w-10 h-10 text-secondary mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                {/* Você pode adicionar a foto do cliente aqui se desejar */}
                {/* <img src="..." alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" /> */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;