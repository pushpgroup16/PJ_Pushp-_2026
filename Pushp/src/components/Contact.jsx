import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pushp-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-pushp-red font-bold tracking-wide uppercase text-sm mb-2">Let's Talk Growth</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-pushp-navy mb-4">
            Claim Your Market Share
          </h3>
          <p className="text-lg text-gray-600">
            Ready to dominate Central India? Request a campaign strategy session with our experts today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Info & Map */}
          <div className="lg:w-2/5 bg-pushp-navy text-white p-10 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-pushp-yellow">Pushp Group Headquarters</h4>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-pushp-red mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <div>
                    <strong className="block text-lg">Bhopal Office</strong>
                    <span className="text-gray-300">Office no.204, Plot no.147, MP Nagar Zone-2, Bhopal, Madhya Pradesh 462011<br/>India</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-pushp-red mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-gray-300">+91 70898 49806</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-pushp-red mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-gray-300">support@pushpadvertising.com</span>
                </div>
              </div>
            </div>

            {/* Google Map Embed (Centered on Bhopal) */}
            <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-white/10">
              <iframe 
                title="Pushp Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117304.75787169901!2d77.32759905202688!3d23.23891040330689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Right Side: High-Converting Lead Form */}
          <div className="lg:w-3/5 p-10 md:p-14">
            <h4 className="text-2xl font-bold text-pushp-dark mb-8">Request a Campaign Strategy Session</h4>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pushp-red focus:ring-2 focus:ring-pushp-red/20 outline-none transition-colors bg-gray-50 focus:bg-white" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Brand / Company Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pushp-red focus:ring-2 focus:ring-pushp-red/20 outline-none transition-colors bg-gray-50 focus:bg-white" placeholder="Acme Corp" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pushp-red focus:ring-2 focus:ring-pushp-red/20 outline-none transition-colors bg-gray-50 focus:bg-white" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Campaign Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pushp-red focus:ring-2 focus:ring-pushp-red/20 outline-none transition-colors bg-gray-50 focus:bg-white text-gray-700">
                    <option>Select Budget...</option>
                    <option>Under ₹1 Lakh</option>
                    <option>₹1 Lakh - ₹5 Lakhs</option>
                    <option>₹5 Lakhs - ₹15 Lakhs</option>
                    <option>₹15 Lakhs +</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Campaign Goal</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pushp-red focus:ring-2 focus:ring-pushp-red/20 outline-none transition-colors bg-gray-50 focus:bg-white text-gray-700">
                  <option>Select Goal...</option>
                  <option>Mass Brand Awareness</option>
                  <option>Direct Lead Generation</option>
                  <option>New Product/Store Launch</option>
                  <option>Other</option>
                </select>
              </div>

              <button type="button" className="w-full bg-pushp-red hover:bg-red-700 text-white font-black text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 mt-4">
                UNLOCK MY BRAND'S POTENTIAL
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;