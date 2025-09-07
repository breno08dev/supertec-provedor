// src/App.tsx

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Streaming from './components/Streaming'; 
import Plans from './components/Plans';
import Benefits from './components/Benefits';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Plans />
      <Streaming />
      <Benefits />
      <About />
      <Location />
      <Contact />
      <Footer openPrivacyModal={openPrivacyModal} />
      <WhatsAppButton />
      <CookieConsent openPrivacyModal={openPrivacyModal} />
      
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
    </div>
  );
}

export default App;