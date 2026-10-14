import React, { useState } from 'react';

const Portfolio = () => {
  // We start by showing 4 items (2 rows of 2)
  const [visibleCount, setVisibleCount] = useState(4);

  const caseStudies = [
    {
      client: "Physics Wallah",
      industry: "Education / EdTech",
      challenge: "Required massive, immediate visibility for new offline center launches across Central India to drive student walk-ins.",
      solution: "Deployed a hyper-local OOH strategy using 150+ hoardings positioned exclusively within a 5km radius of major schools and coaching hubs.",
      results: "300% increase in center walk-ins within the first 30 days.",
      // Targeted image: Classroom/Students
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
    },
    {
      client: "Indira IVF",
      industry: "Healthcare",
      challenge: "Needed to build deep trust and brand awareness in Tier 2 and Tier 3 upcountry markets across MP and CG.",
      solution: "Executed an empathy-driven, vernacular OOH campaign utilizing mobile vans and 300+ upcountry hoardings.",
      results: "40% rise in consultation bookings from rural districts.",
      // Targeted image: Modern clinic/hospital environment
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    },
    {
      client: "Tata Motors",
      industry: "Automotive",
      challenge: "Drive immediate awareness and test-drive bookings for a new EV model launch in major urban centers.",
      solution: "Secured high-impact, premium LED displays and large-format billboards at major traffic bottlenecks and tech parks.",
      results: "Over 10,000 test-drive inquiries generated in two weeks.",
      // Targeted image: Modern automotive/driving
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop"
    },
    {
      client: "Unilever",
      industry: "FMCG",
      challenge: "Increase rural market penetration and visibility for everyday personal care products in deep upcountry locations.",
      solution: "Rolled out a massive transit media campaign across 200+ intercity buses and executed strategic wall painting in 500+ villages.",
      results: "25% growth in regional distributor off-take.",
      // Targeted image: Retail/FMCG shelves
      image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=800&auto=format&fit=crop"
    },
    {
      client: "Prestige Group",
      industry: "Real Estate",
      challenge: "Generate high-net-worth individual (HNI) leads for a premium luxury township project.",
      solution: "Dominated airport transit media and secured exclusive hoarding rights along routes to premium golf courses and luxury hotels.",
      results: "80% of Phase 1 inventory sold within 45 days of launch.",
      // Targeted image: Premium commercial real estate
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      client: "Symbiosis",
      industry: "Higher Education",
      challenge: "Boost admission applications from Tier-2 cities in Madhya Pradesh and Chhattisgarh.",
      solution: "Targeted media planning using railway station branding and strategic billboards near prominent local high schools.",
      results: "150% rise in out-of-station student applications.",
      // Targeted image: University campus environment
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Function to show all cases when the button is clicked
  const handleShowMore = () => {
    setVisibleCount(caseStudies.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-pushp-navy mb-6 leading-tight">
            Campaigns That Command Attention
          </h3>
          <p className="text-lg text-gray-600">
            We don't just create ads; we build market share. Take a look at how we've transformed brands across Central India.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.slice(0, visibleCount).map((study, index) => (
            <div key={index} className="flex flex-col bg-pushp-light rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300">
              
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={study.image} 
                  alt={`${study.client} Campaign Environment`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-pushp-red text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md">
                  Case Study
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{study.industry}</span>
                </div>
                <h4 className="text-2xl font-black text-pushp-navy mb-6">{study.client}</h4>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <strong className="text-pushp-dark block mb-1 text-sm">The Challenge:</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-pushp-dark block mb-1 text-sm">The Pushp Solution:</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <strong className="text-pushp-red block mb-1 text-xs uppercase tracking-wide">Measurable Results:</strong>
                  <p className="text-pushp-navy font-bold text-md">{study.results}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < caseStudies.length && (
          <div className="text-center mt-12">
            <button 
              onClick={handleShowMore}
              className="bg-white border-2 border-pushp-navy text-pushp-navy hover:bg-pushp-navy hover:text-white font-bold py-4 px-10 rounded-lg shadow-sm transition-all duration-300 text-lg uppercase tracking-wide"
            >
              View More Campaigns
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;