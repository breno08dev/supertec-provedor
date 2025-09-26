// src/components/Footer.tsx

import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import fullCompanyLogo from '../Assets/supertec.logo2.png'; 

interface FooterProps {
  openPrivacyModal: () => void;
  openTermsModal: () => void;
}

const Footer = ({ openPrivacyModal, openTermsModal }: FooterProps) => {
  return (
    <footer className="bg-background-dark text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center lg:text-left">
          
          {/* LOGO + DESCRIÇÃO */}
          <div>
            <div className="flex justify-center lg:justify-start mb-6">
              <img src={fullCompanyLogo} alt="Logo SuperTec Telecom" className="h-36 w-auto" />
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-xs mx-auto lg:mx-0">
              Conectando pessoas e empresas com internet de alta velocidade 
              e qualidade há mais de 5 anos.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/supertecfibraoptica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary/50 p-3 rounded-full hover:bg-secondary hover:text-background-dark transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/supertec_fibraoptica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary/50 p-3 rounded-full hover:bg-secondary hover:text-background-dark transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* PLANOS */}
          <div>
            <h3 className="text-xl font-bold mb-6">Planos</h3>
            <ul className="space-y-3 text-blue-100">
              {["50 MB", "100 MB", "200 MB", "300 MB"].map((plan) => (
                <li key={plan}>
                  <a href="#plans" className="hover:text-secondary transition-colors">{plan}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#streaming" className="hover:text-secondary transition-colors">Streaming</a></li>
              <li><a href="#benefits" className="hover:text-secondary transition-colors">Nossos Benefícios</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4 text-blue-100">
              <div className="flex justify-center lg:justify-start items-center space-x-3">
                <Phone className="h-5 w-5 text-highlight" />
                <span>(16) 99375-7457</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center space-x-3">
                <Mail className="h-5 w-5 text-highlight" />
                <span>gerentecomercial.elig@gmail.com</span>
              </div>
              <div className="flex justify-center lg:justify-start items-start space-x-3">
                <MapPin className="h-5 w-5 text-highlight mt-1" />
                <span>
                  Rua Ananias Costa Freitas, 820<br />
                  Sala 3 <br />
                  Centro - Pontal/SP<br />
                  CEP: 14180-039
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="border-t border-primary/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © 2025 SuperTec Telecom. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-blue-100">
              <button onClick={openPrivacyModal} className="hover:text-secondary transition-colors">
                Política de Privacidade
              </button>
              <button onClick={openTermsModal} className="hover:text-secondary transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
