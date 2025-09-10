// src/App.tsx

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Streaming from './components/Streaming'; 
import Plans from './components/Plans';
import Benefits from './components/Benefits';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  // 2. Adicione o estado para o novo modal
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  // 3. Adicione as funções para controlar o novo modal
  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Plans />
      <Streaming />
      <Benefits />
      <About />
      <Testimonials/>
      <Contact />
     <Footer openPrivacyModal={openPrivacyModal} openTermsModal={openTermsModal} />
      <WhatsAppButton />
      <CookieConsent openPrivacyModal={openPrivacyModal} />
      
      {/* 5. Renderize os dois modais */}
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
      <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
    </div>
  );
}

export default App;