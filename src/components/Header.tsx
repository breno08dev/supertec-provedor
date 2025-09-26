import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react'; 
import fullCompanyLogo from '../Assets/supertec.logo2.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <header className="bg-background-dark text-white px-4 md:px-6 shadow-lg sticky top-0 z-50 relative h-24 md:h-28">
  <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
    
    <div className="h-full flex items-center">
      <img 
        src={fullCompanyLogo} 
        alt="Logo SuperTec Telecom" 
        className="h-full w-auto object-contain" 
      />
    </div>
        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8 text-lg">
            <a href="#plans" className="hover:text-secondary transition-colors">Planos</a>
            <a href="#benefits" className="hover:text-secondary transition-colors">Benefícios</a>
            <a href="#about" className="hover:text-secondary transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contato</a>
          </nav>
          <a
            href="tel:+5516993757457"
            className="flex items-center space-x-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(16) 99375-7457</span>
          </a>
        </div>
        
        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none z-50"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden absolute top-full right-4 mt-2 w-56 
          bg-background-dark/95 backdrop-blur-sm rounded-md shadow-lg 
          ring-1 ring-white/10 origin-top-right transition-all duration-200 ease-in-out
          ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col p-2">
          <a href="#plans" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary/50 px-4 py-2 rounded-md transition-colors text-base">Planos</a>
          <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary/50 px-4 py-2 rounded-md transition-colors text-base">Benefícios</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary/50 px-4 py-2 rounded-md transition-colors text-base">Sobre</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:bg-primary/50 px-4 py-2 rounded-md transition-colors text-base">Contato</a>
          
          <div className="border-t border-white/10 my-2"></div>
          
          <a
            href="tel:+5516993757457"
            className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>(16) 99375-7457</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
