import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            Nossa <span className="text-secondary">Cobertura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verificar se sua região está coberta pela nossa rede de fibra ótica
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58513.15556863219!2d-46.658419969531225!3d-23.56136835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt!2sbr!4v1690890520000!5m2!1spt!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de cobertura SuperTec"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-background-dark" />
                <h3 className="text-xl font-bold text-background-dark">Área de Cobertura</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Centro da cidade</li>
                <li>• Bairros residenciais</li>
                <li>• Distrito industrial</li>
                <li>• Condomínios fechados</li>
                <li>• Zona comercial</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-background-dark" />
                <h3 className="text-xl font-bold text-background-dark">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><strong>Segunda à Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábados:</strong> 8h às 14h</p>
                <p><strong>Suporte Técnico:</strong> 24h</p>
              </div>
            </div>

            <div className="bg-background-dark rounded-2xl p-6 text-white text-center">
              <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Verifique sua região</h3>
              <p className="text-blue-100 mb-4">Ligue para confirmar disponibilidade</p>
              <button
                onClick={() => window.open('https://wa.me/5511999999999?text=Gostaria de verificar se minha região tem cobertura SuperTec', '_blank')}
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full"
              >
                Consultar WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-background-dark mb-4">Não está na nossa área ainda?</h3>
            <p className="text-xl text-gray-600">
              Estamos expandindo constantemente nossa rede. Cadastre seu interesse!
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() => window.open('https://wa.me/5511999999999?text=Quero me cadastrar para receber informações sobre expansão da SuperTec na minha região', '_blank')}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Cadastrar Interesse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;