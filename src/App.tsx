import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Benefits from './components/Benefits';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
      <Benefits />
      <About />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;