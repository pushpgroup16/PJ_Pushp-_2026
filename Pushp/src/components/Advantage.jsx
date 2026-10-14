import React from 'react';

const Advantage = () => {
  // Using Wikipedia's 'Special:FilePath' bypass guarantees the colorful SVGs load flawlessly every time
  const partners = [
    { name: "Apple", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Apple_logo_black.svg" },
    { name: "Unilever", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Unilever.svg" },
    { name: "Tata Motors", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Tata_logo.svg" },

    { name: "Airtel", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Bharti_Airtel_Logo.svg" },
    { name: "Samsung", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Samsung_Logo.svg" },
    { name: "Maruti Suzuki", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Maruti_Suzuki_logo.svg" },
    { name: "ITC Limited", logo: "https://en.wikipedia.org/wiki/Special:FilePath/ITC_Limited_Logo.svg" },
    { name: "Hyundai", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Hyundai_Motor_Company_logo.svg" },
    { name: "Honda", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Honda_Logo.svg" },
    { name: "State Bank of India", logo: "https://en.wikipedia.org/wiki/Special:FilePath/SBI-logo.svg" },
    { name: "HDFC Bank", logo: "https://en.wikipedia.org/wiki/Special:FilePath/HDFC_Bank_Logo.svg" },
    { name: "Zomato", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Zomato_Logo.svg" },
    { name: "Amazon", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Amazon_logo.svg" },
    { name: "Coca-Cola", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Coca-Cola_logo.svg" },
    { name: "Pepsi", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Pepsi_logo_2014.svg" },
    { name: "Nestlé", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Nestlé_textlogo.svg" },
    { name: "Procter & Gamble", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Procter_%26_Gamble_logo.svg" },
    { name: "L'Oréal", logo: "https://en.wikipedia.org/wiki/Special:FilePath/L%27Or%C3%A9al_logo.svg" },
    { name: "Johnson & Johnson", logo: "https://en.wikipedia.org/wiki/Special:FilePath/Johnson_%26_Johnson_logo.svg" },
  ];

  const advantages = [
    {
      title: "Unmatched Regional Reach",
      description: "With a growing network of 1,500+ hoardings, 700+ large-format billboards, and 3,000+ upcountry sites, we give brands access to high-visibility opportunities across MP, CG, and beyond.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: "One Partner. Complete Solutions.",
      description: "From OOH and Transit Media to PR, Podcasts, Influencers, Content Strategy, and Consultancy, we bring multiple marketing solutions together under one roof.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    },
    {
      title: "In-House Production Advantage",
      description: "Our own printing and production facility in Bhopal gives us greater control over quality, timelines, and execution. From large-format flex to customized goodies, we manage it all.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    },
    {
      title: "Strategic Media Planning",
      description: "We go beyond selling space. We understand your campaign objectives, target audience, geography, and budget to recommend the right media formats and locations.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    },
    {
      title: "End-to-End Campaign Execution",
      description: "From media planning and creative production to printing, installation, and deployment, our team manages the complete execution cycle for flawless consistency.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: "Built to Scale",
      description: "Whether targeting a single city, expanding across MP & CG, or planning a pan-India campaign, our extensive network allows us to build campaigns matching your exact scale.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    },
    {
      title: "Local Intelligence. Wider Reach.",
      description: "Our strong understanding of regional markets helps brands identify the right locations and audiences. We combine on-ground knowledge with a wider media network.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    },
    {
      title: "Visibility That Builds Recall",
      description: "Strategic placement, impactful creative execution, and multiple media touchpoints work together to create stronger brand awareness and lasting consumer recall.",
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </>
      )
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 45s linear infinite;
          }
        `}
      </style>
      
      <section className="bg-white pt-10 pb-24">
        
        {/* 1. Trust Banner (Seamless Scrolling Colorful Logos) */}
        <div className="bg-pushp-navy py-12 mb-24 border-y-4 border-pushp-red overflow-hidden relative">
          <div className="text-center mb-10">
            <h3 className="text-pushp-yellow font-bold uppercase tracking-widest text-sm">
              Trusted By Industry Titans
            </h3>
          </div>
          
          <div className="flex overflow-hidden group">
            {/* First Loop */}
            <div className="flex animate-infinite-scroll whitespace-nowrap min-w-full shrink-0 items-center group-hover:[animation-play-state:paused]">
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="mx-4 md:mx-6 bg-white w-40 h-24 rounded-lg flex items-center justify-center p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="font-bold text-pushp-navy text-sm text-center w-full break-words whitespace-normal">${partner.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Second Loop (Exact Duplicate for seamless wrap) */}
            <div className="flex animate-infinite-scroll whitespace-nowrap min-w-full shrink-0 items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="mx-4 md:mx-6 bg-white w-40 h-24 rounded-lg flex items-center justify-center p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="font-bold text-pushp-navy text-sm text-center w-full break-words whitespace-normal">${partner.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-pushp-navy to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-pushp-navy to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* 2. Why Choose Us (The 8-Point Grid) */}
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-3">Why Pushp</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-pushp-dark mb-6">
              Why Brands Choose Pushp
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine extensive media reach, regional market expertise, in-house production, and end-to-end campaign execution to help brands build visibility, connect with audiences, and create lasting market impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-pushp-light rounded-full flex items-center justify-center text-pushp-navy mb-6 group-hover:bg-pushp-red group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {adv.icon}
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-pushp-dark mb-3 group-hover:text-pushp-red transition-colors duration-300">
                  {adv.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Banner Statement */}
          <div className="mt-16 bg-pushp-navy rounded-2xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pushp-yellow via-pushp-red to-pushp-yellow"></div>
            <h4 className="text-3xl md:text-4xl font-extrabold mb-4">More Than an Advertising Agency</h4>
            <p className="text-xl text-pushp-light/80 max-w-2xl mx-auto font-light">
              We are your end-to-end media partner—from strategy and production to placement and promotion.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Advantage;