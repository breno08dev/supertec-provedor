import { Check, Star, Zap, Tv } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'; // 1. Importe o hook

const Plans = () => {
  // 2. Use o hook para observar a seção principal
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const plans = [
    {
      name: 'Básico',
      speed: '50MB',
      price: 'R$ 59,90',
      features: [
        'Download até 50MB',
        'Upload até 25MB',
        'Redes sociais e e-mails',
      ],
      popular: false,
    },
    {
      name: 'Essencial',
      speed: '100MB',
      price: 'R$ 79,90',
      features: [
        'Download até 100MB',
        'Upload até 50MB',
        'Vídeos em HD e home office',
      ],
      popular: false,
    },
    {
      name: 'Avançado',
      speed: '200MB',
      price: 'R$ 89,90',
      features: [
        'Download até 200MB',
        'Upload até 100MB',
        'Múltiplos dispositivos',
      ],
      popular: false,
    },
    {
      name: 'Mais Popular',
      speed: '300MB',
      price: 'R$ 99,90',
      features: [
        'Download até 300MB',
        'Upload até 150MB',
        'Filmes 4K e Jogos ao vivo',
        'WiFi 6 incluso',
        'Suporte prioritário',
      ],
      bonus: 'Streaming Grátis',
      popular: true,
    },
  ];

  const handleWhatsApp = (planName: string, planSpeed: string) => {
    const message = `Olá! Gostaria de contratar o plano ${planName} de ${planSpeed} da SuperTec.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=5516993757457&text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="plans" className="py-20 px-4 md:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
              Escolha o Plano <span className="text-secondary">Ideal para Você</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temos a velocidade perfeita para cada necessidade, com a estabilidade que você merece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`fade-in-section animate-card relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:transform hover:scale-105
                  ${plan.popular ? 'bg-gradient-to-b from-highlight to-orange-600 text-white shadow-2xl ring-4 ring-orange-200 lg:scale-110' : 'bg-white shadow-lg hover:shadow-xl'}
                  ${isVisible ? 'is-visible' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>MAIS POPULAR</span>
                    </div>
                  </div>
                )}
                <div className="text-center mb-8 pt-4">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-background-dark'}`}>{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Zap className={`h-8 w-8 mr-2 ${plan.popular ? 'text-white' : 'text-highlight'}`} />
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-background-dark'}`}>{plan.speed}</span>
                  </div>
                  <div className="flex justify-center items-baseline">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-background-dark'}`}>{plan.price.split(' ')[1]}</span>
                    <span className={`text-lg ml-1 ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>/mês</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow w-max mx-auto">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-highlight'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                  {plan.bonus && (
                    <li className="flex items-center bg-black/20 p-2 rounded-md mt-4">
                      <Tv className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                      <span className="font-bold text-sm text-white">{plan.bonus}</span>
                    </li>
                  )}
                </ul>
                <button
                  onClick={() => handleWhatsApp(plan.name, plan.speed)}
                  className={`w-full py-3 mt-auto rounded-xl font-bold text-lg transition-all duration-300 ${plan.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-primary text-white hover:bg-blue-700'}`}
                >
                  Assinar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;