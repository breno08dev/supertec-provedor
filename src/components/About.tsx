import { Award, Users, MapPin, Clock, Eye, Target, HeartHandshake } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '4+', label: 'Anos de experiência' },
    { icon: Users, value: '1K+', label: 'Clientes ativos' },
    { icon: MapPin, value: '3+', label: 'Cidades atendidas' },
    { icon: Award, value: '99.9%', label: 'Disponibilidade' }
  ];

  return (
    <>
       {/* --- SEÇÃO SOBRE NÓS (FUNDO CLARO) --- */}
      <section id="about" className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Adicione as classes de alinhamento AQUI 👇 */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-6">
                Confiança e <span className="text-secondary">Experiência</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Há mais de 4 anos, a SuperTec é sinônimo de internet de qualidade na região. 
                Começamos como uma pequena empresa local com o sonho de conectar pessoas e 
                negócios com a melhor tecnologia disponível.
              </p>
              
              <button
                onClick={() => window.open('https://wa.me/5516993757457?text=Gostaria de saber mais sobre a SuperTec!', '_blank')}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Conheça Nossa História
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-highlight rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-background-dark mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco com Certificações / Equipe / Cobertura */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-background-dark mb-2">Certificações</h3>
              <p className="text-gray-600">Certificados pelos principais órgãos do setor de telecomunicações</p>
            </div>
            
            <div className="text-center">
              <div className="bg-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-background-dark mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">Profissionais qualificados e em constante atualização tecnológica</p>
            </div>
            
            <div className="text-center">
              <div className="bg-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-background-dark mb-2">Cobertura Regional</h3>
              <p className="text-gray-600">Atendimento local com conhecimento profundo da região</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO NOSSA ESSÊNCIA (FUNDO AZUL) --- */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-background-dark via-black to-background-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-center text-white mb-12">
            Nossa <span className="text-secondary">Essência</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card Visão */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:bg-white/10 transition-colors text-center">
              <div className="bg-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visão</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser referência em conectividade, transformando a vida das pessoas por meio de inovação, 
                tecnologia e um atendimento que inspira confiança.
              </p>
            </div>
            {/* Card Missão */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:bg-white/10 transition-colors text-center">
              <div className="bg-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Missão</h3>
              <p className="text-blue-100 leading-relaxed">
                Conectar pessoas e empresas com internet rápida, estável e acessível, 
                promovendo inclusão digital e impulsionando novos horizontes.
              </p>
            </div>
            {/* Card Valores */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:bg-white/10 transition-colors text-center">
              <div className="bg-highlight w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Valores</h3>
              <p className="text-blue-100 leading-relaxed">
                Ética, respeito e inovação estão no nosso DNA. Valorizamos cada cliente e buscamos 
                sempre entregar soluções que realmente façam diferença.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;