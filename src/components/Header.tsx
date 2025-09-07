import React from 'react';
import { Wifi, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-4 md:px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Wifi className="h-8 w-8 text-lime-400" />
          <span className="text-2xl font-bold">SuperTec</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a href="#plans" className="hover:text-lime-400 transition-colors">Planos</a>
            <a href="#benefits" className="hover:text-lime-400 transition-colors">Benefícios</a>
            <a href="#about" className="hover:text-lime-400 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">Contato</a>
          </nav>
          <a href="tel:+5511999999999" className="flex items-center space-x-2 bg-lime-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-lime-300 transition-colors">
            <Phone className="h-4 w-4" />
            <span>(11) 99999-9999</span>
          </a>
        </div>
        <div className="md:hidden">
          <a href="tel:+5511999999999" className="bg-lime-400 text-blue-900 px-3 py-2 rounded-lg font-semibold">
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;