import React from 'react';

const Capabilities = () => {
  // The 10-Point Expertise List
  const expertise = [
    { num: "01", title: "OOH Media", desc: "High-impact outdoor advertising solutions including hoardings, billboards, LED displays, pole ads, wall wraps, and other formats designed to maximize visibility and brand recall." },
    { num: "02", title: "Transit Media", desc: "Take your brand on the move with advertising across buses, vehicles, transit points, and high-traffic mobility networks to reach audiences throughout their daily journeys." },
    { num: "03", title: "PR Management", desc: "Build credibility and strengthen your public presence with strategic PR management, media relations, press communication, and brand reputation initiatives." },
    { num: "04", title: "Media House", desc: "Your end-to-end offline media partner for planning, sourcing, executing, and managing advertising campaigns across Madhya Pradesh, Chhattisgarh, and beyond." },
    { num: "05", title: "Printing Solutions", desc: "From everyday marketing collateral to large-format production, we deliver high-quality printing solutions including flex, banners, posters, booklets, standees, brochures, and more." },
    { num: "06", title: "Podcast", desc: "Create meaningful conversations and build a stronger brand voice through professionally planned podcast concepts, production, promotion, and branded content opportunities." },
    { num: "07", title: "Influencer Marketing", desc: "Connect your brand with relevant creators and communities through targeted influencer campaigns designed to build awareness, engagement, and authentic audience connections." },
    { num: "08", title: "Customized Goodies", desc: "Make your brand memorable with customized promotional merchandise and corporate goodies tailored to your campaign, audience, and brand identity." },
    { num: "09", title: "Content Strategy", desc: "Develop purposeful content that communicates your brand story, supports your campaigns, and keeps your audience engaged across relevant platforms." },
    { num: "10", title: "Advertising Consultancy", desc: "Make smarter advertising decisions with strategic consultation covering media planning, campaign selection, market opportunities, budgeting, execution, and brand visibility." }
  ];

  // The 8 Campaign Types
  const campaigns = [
    { title: "Brand Launches", desc: "Create immediate visibility when entering a new market or launching a new product." },
    { title: "Regional Campaigns", desc: "Build strong market presence across Madhya Pradesh, Chhattisgarh, and surrounding markets." },
    { title: "Multi-City Campaigns", desc: "Coordinate outdoor and promotional campaigns across multiple cities through a unified media strategy." },
    { title: "Corporate Branding", desc: "Strengthen brand visibility across offices, facilities, events, and key business locations." },
    { title: "Retail & Trade Promotions", desc: "Drive visibility around stores, markets, commercial zones, and high-footfall areas." },
    { title: "Events & Activations", desc: "Support events with outdoor visibility, printing, branding, promotional materials, and customized campaign requirements." },
    { title: "Education & Institutional", desc: "Build awareness and reach students, parents, professionals, and institutional audiences through targeted media solutions." },
    { title: "Government & Public Awareness", desc: "Execute large-scale awareness and communication campaigns across multiple markets and media formats." }
  ];

  return (
    <section id="services" className="bg-pushp-light pt-24 pb-16">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Our Expertise Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-pushp-navy mb-6 leading-tight">
            Integrated Media Solutions That Move Brands Forward
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From high-impact outdoor visibility to strategic media, content, and brand promotion, we create integrated campaigns that put your brand in front of the right audience—at the right place and at the right time.
          </p>
        </div>

        {/* 5-Column Grid for the 10 Expertise Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-32">
          {expertise.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="text-4xl font-black text-pushp-red/20 mb-4">{item.num}</div>
              <h4 className="text-lg font-bold text-pushp-navy mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. Campaign Types Section (Remains Unchanged) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-3">Built for Every Campaign</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-pushp-navy mb-6 leading-tight">
            From Local Launches to Large-Scale Campaigns
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every brand has a different objective. Our media network and service capabilities allow us to create solutions around the scale, geography, and nature of your campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {campaigns.map((camp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-pushp-navy hover:border-pushp-red transition-colors duration-300">
              <h4 className="text-lg font-bold text-pushp-dark mb-2">{camp.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{camp.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;