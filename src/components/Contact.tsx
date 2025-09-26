// src/components/Contact.tsx

import { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mensagem corrigida com encodeURIComponent
    const messageText = `Olá! Meu nome é ${formData.name}.\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/5516993757457?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-br from-background-dark to-black">
        {/* O restante do seu código JSX continua o mesmo... */}
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefone</p>
                    <p className="text-blue-100">(16) 99375-7457</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">E-mail</p>
                    <p className="text-blue-100">gerentecomercial.elig@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-highlight p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-blue-100">Atendimento das 8:00 ás 17:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background-dark rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Horários de Atendimento</h4>
              <div className="space-y-2 text-blue-100">
                <p><strong>Comercial:</strong> Domingo à Domingo, 8h às 17h30</p>
                <p><strong>Suporte Técnico:</strong> Domingo à Domingo até as 17h30</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-background-dark mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-nos sobre suas necessidades de internet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-3"
              >
                <Send className="h-5 w-5" />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;