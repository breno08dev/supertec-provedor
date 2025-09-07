import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}.%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-lime-400">Contato</span>
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
                  <div className="bg-lime-400 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefone</p>
                    <p className="text-blue-100">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-lime-400 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">E-mail</p>
                    <p className="text-blue-100">contato@supertec.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-lime-400 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-blue-100">Atendimento 24h disponível</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Horários de Atendimento</h4>
              <div className="space-y-2 text-blue-100">
                <p><strong>Comercial:</strong> Segunda à Sexta, 8h às 18h</p>
                <p><strong>Sábados:</strong> 8h às 14h</p>
                <p><strong>Suporte Técnico:</strong> 24 horas por dia</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Envie sua Mensagem</h3>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-nos sobre suas necessidades de internet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-blue-900 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-colors flex items-center justify-center space-x-3"
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