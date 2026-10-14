import React from 'react';

const Hero = () => {
  const arsenalItems = [
    "Hoardings & Billboards", "Mobile Vans", "Pole Advertising",
    "Flares", "Posters & Banners", "LED Boards", "Flex Printing",
    "Standee & Display", "Wall Printing", "Booklets & Brochures", "Corporate Goodies"
  ];

  return (
    <div id="home" className="relative bg-pushp-navy text-white overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Transparent World Map Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-no-repeat bg-center invert pointer-events-none"
        style={{ 
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
          backgroundSize: '120% auto',
          backgroundPosition: 'center 30%' 
        }}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-36">
        
        {/* Headline & CTAs */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Dominating Central India’s <span className="text-pushp-yellow">Skyline</span> & Digital Space.
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed">
            <strong className="text-white font-semibold block mb-2">Brands in Sight. People in Mind.</strong>
            Comprehensive Outdoor, Transit, and Digital Media Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-pushp-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded shadow-lg transition-transform hover:-translate-y-1 text-center text-lg uppercase tracking-wide">
              Request Strategy Session
            </a>
            <a href="#portfolio" className="bg-white hover:bg-gray-100 text-pushp-navy font-bold py-4 px-8 rounded shadow-lg transition-transform hover:-translate-y-1 text-center text-lg uppercase tracking-wide border border-transparent">
              View Our Work
            </a>
          </div>
        </div>

        {/* The Scale & Stats Grid (Unified & Hover-Enabled) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full lg:w-[90%]">
            
            {/* Box 1 */}
            <div className="group bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pushp-red hover:bg-pushp-navy hover:border-pushp-yellow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-pushp-navy group-hover:text-white transition-colors duration-300 mb-2">
                1500<span className="text-pushp-red group-hover:text-pushp-yellow transition-colors duration-300">+</span>
              </div>
              <div className="text-gray-500 group-hover:text-gray-300 font-bold uppercase tracking-wider text-xs transition-colors duration-300">
                Premium Hoardings
              </div>
            </div>
            
            {/* Box 2 */}
            <div className="group bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pushp-red hover:bg-pushp-navy hover:border-pushp-yellow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-pushp-navy group-hover:text-white transition-colors duration-300 mb-2">
                700<span className="text-pushp-red group-hover:text-pushp-yellow transition-colors duration-300">+</span>
              </div>
              <div className="text-gray-500 group-hover:text-gray-300 font-bold uppercase tracking-wider text-xs transition-colors duration-300">
                Large-Format Billboards
              </div>
            </div>

            {/* Box 3 */}
            <div className="group bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pushp-red hover:bg-pushp-navy hover:border-pushp-yellow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-pushp-navy group-hover:text-white transition-colors duration-300 mb-2">
                3,000<span className="text-pushp-red group-hover:text-pushp-yellow transition-colors duration-300">+</span>
              </div>
              <div className="text-gray-500 group-hover:text-gray-300 font-bold uppercase tracking-wider text-xs transition-colors duration-300">
                Upcountry Sites
              </div>
            </div>

            {/* Box 4 */}
            <div className="group bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-pushp-red hover:bg-pushp-navy hover:border-pushp-yellow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-pushp-navy group-hover:text-white transition-colors duration-300 mb-2">
                StateWide
              </div>
              <div className="text-gray-500 group-hover:text-gray-300 font-bold uppercase tracking-wider text-xs transition-colors duration-300">
                MP & CG Coverage
              </div>
            </div>

        </div>

      </div>

      {/* The Arsenal Scrolling Ticker */}
      <div className="absolute bottom-0 w-full bg-pushp-dark/90 backdrop-blur-md border-t border-white/10 py-4 flex overflow-hidden z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...arsenalItems, ...arsenalItems, ...arsenalItems, ...arsenalItems].map((item, index) => (
            <span key={index} className="mx-6 text-pushp-yellow font-semibold uppercase tracking-widest text-sm flex items-center">
              {item}
              <span className="mx-6 text-white/30">•</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;