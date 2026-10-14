import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Advantage from './components/Advantage';
import About from './components/About';
import HowWeWork from './components/HowWeWork';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pushp-light font-sans text-pushp-dark">
      <Navbar />
      
      <main>
        <Hero />
        <Capabilities />
        <Advantage />
        <About />
        <HowWeWork />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;