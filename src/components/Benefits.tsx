
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
      title: 'Suporte 24h',
      description: 'Atendimento especializado disponível 24 horas por dia, 7 dias por semana'
    },
    {
      icon: Clock,
      title: 'Instalação Rápida',
      description: 'Instalação profissional em até 48h após a contratação, sem complicação'
    },
    {
      icon: Wrench,
      title: 'Manutenção Gratuita',
      description: 'Suporte técnico e manutenção preventiva sem custos adicionais'
    },
    {
      icon: Users,
      title: 'Atendimento Local',
      description: 'Equipe local que conhece sua região e oferece atendimento personalizado'
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            Por que escolher a <span className="text-secondary">SuperTec?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 4 anos oferecendo a melhor experiência em conectividade para nossa região
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-yellow-50 hover:to-blue-50 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-highlight rounded-full mb-6 group-hover:bg-orange-600 transition-colors">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-background-dark mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-background-dark to-black rounded-2xl p-8 md:p-12 text-center text-white">
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
        </div>
      </div>
    </section>
  );
};

export default Benefits;