// src/App.tsx

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Streaming from './components/Streaming'; 
import Plans from './components/Plans';
import Benefits from './components/Benefits';
import About from './components/About'; // <- Seu componente está aqui
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';
import ProactiveChatAlert from './components/ProactiveChatAlert';
import Analytics from './components/Analytics';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Plans />
        <Streaming />
        <Benefits />
        <About />
        <Testimonials/>
        <Contact />
      </main>
      <Footer openPrivacyModal={openPrivacyModal} openTermsModal={openTermsModal} />
      <WhatsAppButton />
      <CookieConsent openPrivacyModal={openPrivacyModal} />
      
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
      <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
      <ProactiveChatAlert />
    </div>
  );
}

export default App;