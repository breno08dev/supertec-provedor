// src/components/Plans.tsx

import { Check, Star, Zap, Tv } from 'lucide-react'; // Importe o ícone de TV

const Plans = () => {
  const plans = [
    {
      name: 'Básico',
      speed: '200MB',
      price: 'R$ 79',
      features: [
        'Download até 200MB',
        'Upload até 100MB',
        'WiFi incluso',
        'Suporte técnico',
        'Instalação gratuita'
      ],
      popular: false
    },
    {
      name: 'Mais Popular', // Nome alterado
      speed: '300MB', // Velocidade alterada
      price: 'R$ 99', // Preço ajustado para a oferta
      features: [
        'Download até 300MB',
        'Upload até 150MB',
        'WiFi 6 incluso',
        'Suporte prioritário',
        'Instalação gratuita',
      ],
      bonus: 'Streaming Grátis', // Bônus adicionado
      popular: true
    },
    {
      name: 'Ultra',
      speed: '600MB',
      price: 'R$ 159',
      features: [
        'Download até 600MB',
        'Upload até 300MB',
        'WiFi 6E incluso',
        'Suporte VIP 24h',
        'Instalação gratuita',
        'Roteador mesh',
        'IP fixo incluso'
      ],
      popular: false
    }
  ];

  const handleWhatsApp = (plan: string) => {
    window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de contratar o plano ${plan} da SuperTec.`, '_blank');
  };

  return (
    <section id="plans" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            Escolha o Plano <span className="text-secondary">Ideal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para atender desde residências até empresas de grande porte
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-b from-secondary to-yellow-600 text-background-dark shadow-2xl ring-4 ring-yellow-200 lg:scale-110'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>{plan.name}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-background-dark' : 'text-background-dark'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <Zap className={`h-8 w-8 mr-2 ${plan.popular ? 'text-background-dark' : 'text-highlight'}`} />
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-background-dark' : 'text-background-dark'}`}>
                    {plan.speed}
                  </span>
                </div>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-background-dark' : 'text-background-dark'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-800' : 'text-gray-600'}`}>
                    /mês
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${
                      plan.popular ? 'text-background-dark' : 'text-highlight'
                    }`} />
                    <span className={plan.popular ? 'text-background-dark' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
                {/* Adicionando o bônus de streaming */}
                {plan.bonus && (
                  <li className="flex items-center bg-primary/20 p-2 rounded-md">
                    <Tv className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-background-dark' : 'text-highlight'}`} />
                    <span className={`font-bold ${plan.popular ? 'text-background-dark' : 'text-gray-700'}`}>
                      {plan.bonus}
                    </span>
                  </li>
                )}
              </ul>

              <button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-blue-700'
                    : 'bg-primary text-white hover:bg-blue-700'
                }`}
              >
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;