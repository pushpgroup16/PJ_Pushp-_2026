import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const servicesList = [
    "OOH Media",
    "Transit Media",
    "PR Management",
    "Media House",
    "Printing Solutions",
    "Podcast",
    "Influencer Marketing",
    "Customized Goodies",
    "Content Strategy",
    "Advertising Consultancy"
  ];

  return (
    <>
      <style>
        {`
          .brand-logo {
            animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          .brand-text {
            animation: slideInRight 0.6s ease-out 0.7s both;
          }
          .brand-shimmer {
            animation: lightSweep 1.2s ease-in-out 1.4s forwards;
          }
          
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.5) rotate(-15deg); }
            100% { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes lightSweep {
            0% { left: -100%; }
            100% { left: 200%; }
          }
        `}
      </style>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Cinematic Animated Logo & Name Group */}
            <div className="flex-shrink-0 flex items-center">
              {/* Changed from gap-4 to gap-2 to bring the name much closer to the logo */}
              <a 
                href="#home" 
                className="group relative flex items-center gap-2 py-2 px-1 overflow-hidden transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
              >
                {/* Step 1: The Logo Image (h-16) */}
                <img 
                  src="/Image/logo.png" 
                  alt="Pushp Group Logo mark" 
                  className="h-16 w-auto object-contain brand-logo drop-shadow-sm" 
                />
                
                {/* Step 2: The Name Image - Size increased to h-16 to perfectly match the logo */}
                <img 
                  src="/Image/name.png" 
                  alt="Pushp Advertising" 
                  className="h-16 w-auto object-contain brand-text" 
                />

                {/* Step 3: Unified Light Sweep Effect */}
                <div className="absolute top-0 bottom-0 left-[-100%] w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 brand-shimmer pointer-events-none"></div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center h-full">
              <a href="#home" className="text-pushp-dark hover:text-pushp-red transition-colors font-semibold">Home</a>
              <a href="#about" className="text-pushp-dark hover:text-pushp-red transition-colors font-semibold">About Us</a>
              
              {/* Services Dropdown */}
              <div className="relative group cursor-pointer h-full flex items-center">
                <span className="text-pushp-dark group-hover:text-pushp-red transition-colors font-semibold flex items-center py-8">
                  Services
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
                
                <div className="absolute top-[80px] -left-32 w-[500px] bg-white shadow-2xl rounded-b-lg border-t-4 border-pushp-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 p-6">
                    {servicesList.map((service, index) => (
                      <a 
                        key={index}
                        href="#services" 
                        className="block px-4 py-3 text-sm font-bold text-gray-600 hover:bg-pushp-light hover:text-pushp-red rounded-md transition-colors"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#process" className="text-pushp-dark hover:text-pushp-red transition-colors font-semibold">Process</a>
              <a href="#portfolio" className="text-pushp-dark hover:text-pushp-red transition-colors font-semibold">Portfolio</a>
              
              <a href="#contact" className="bg-pushp-red text-white px-6 py-2.5 rounded font-bold hover:bg-red-700 transition-colors shadow-lg tracking-wide">
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-pushp-navy hover:text-pushp-red focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-pushp-dark hover:bg-pushp-light hover:text-pushp-red font-bold rounded">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-pushp-dark hover:bg-pushp-light hover:text-pushp-red font-bold rounded">About Us</a>
              
              <div className="px-3 py-2">
                <span className="block font-bold text-gray-400 uppercase text-xs tracking-wider mb-2">Services</span>
                <div className="pl-4 space-y-2 border-l-2 border-pushp-red/20">
                  {servicesList.map((service, index) => (
                    <a key={index} href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-pushp-red font-semibold">
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#process" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-pushp-dark hover:bg-pushp-light hover:text-pushp-red font-bold rounded">Process</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-pushp-dark hover:bg-pushp-light hover:text-pushp-red font-bold rounded">Portfolio</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-3 py-4 bg-pushp-red text-white font-bold rounded-lg shadow-md">Let's Talk</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;