import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Story */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-3">Our Roots</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-pushp-navy mb-8 leading-tight">
            Born in Bhopal. Dominating Central India.
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            We recognized early on that Madhya Pradesh and Chhattisgarh require a unique marketing dialect. We understand the pulse of the heartland—from bustling urban centers to emerging upcountry markets.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Pushp Group is the premier advertising powerhouse of the region. We don't just rent space; we curate geographical narratives that turn local audiences into loyal consumers. When we broadcast your brand, the entire state pays attention.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;