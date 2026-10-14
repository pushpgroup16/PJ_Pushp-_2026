import React from 'react';

const HowWeWork = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "We begin by understanding your brand, campaign objective, target audience, market, timeline, and budget." },
    { num: "02", title: "Strategize", desc: "Our team identifies the right media formats, locations, promotional channels, and campaign opportunities for your requirements." },
    { num: "03", title: "Create & Produce", desc: "From creative adaptation and content to printing and promotional materials, we coordinate the production required for your campaign." },
    { num: "04", title: "Execute", desc: "Our teams coordinate media deployment, installation, distribution, promotions, and other on-ground requirements." },
    { num: "05", title: "Manage", desc: "We stay involved throughout the campaign to coordinate execution, address requirements, and maintain consistency across the campaign." }
  ];

  return (
    <section id="process" className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-pushp-navy mb-6 leading-tight">
            One Campaign. One Coordinated Partner.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We simplify the advertising process by bringing strategy, media, production, and execution together.
          </p>
        </div>

        {/* 5-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-10 right-10 h-1 bg-gray-100 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pushp-navy text-white flex items-center justify-center text-xl font-black mb-6 shadow-lg border-4 border-white">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-pushp-dark mb-3">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed px-2">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Footer Banner */}
        <div className="bg-pushp-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pushp-yellow via-pushp-red to-pushp-yellow"></div>
          <h4 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-wide text-pushp-yellow">
            Strategy → Production → Placement → Promotion
          </h4>
          <p className="text-lg text-pushp-light/90 font-light">
            Everything your campaign needs, connected through one partner.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;