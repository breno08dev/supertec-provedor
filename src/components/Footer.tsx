import React from 'react';
import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Wifi className="h-8 w-8 text-lime-400" />
              <span className="text-2xl font-bold">SuperTec</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Conectando pessoas e empresas com internet de alta velocidade 
              e qualidade há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Planos</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#plans" className="hover:text-lime-400 transition-colors">Básico 200MB</a></li>
              <li><a href="#plans" className="hover:text-lime-400 transition-colors">Popular 400MB</a></li>
              <li><a href="#plans" className="hover:text-lime-400 transition-colors">Ultra 600MB</a></li>
              <li><a href="#plans" className="hover:text-lime-400 transition-colors">Planos Empresariais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#about" className="hover:text-lime-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#benefits" className="hover:text-lime-400 transition-colors">Nossos Benefícios</a></li>
              <li><a href="#location" className="hover:text-lime-400 transition-colors">Cobertura</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lime-400 flex-shrink-0" />
                <span className="text-blue-100">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lime-400 flex-shrink-0" />
                <span className="text-blue-100">contato@supertec.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lime-400 flex-shrink-0 mt-1" />
                <span className="text-blue-100">
                  Rua da Internet, 123<br />
                  Centro - São Paulo/SP<br />
                  CEP: 01000-000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © 2024 SuperTec Internet. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-blue-100">
              <a href="#" className="hover:text-lime-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-lime-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-lime-400 transition-colors">Ouvidoria</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;