"use client";
import React, { useState, useMemo } from 'react';

// === COLOR PALETTE (Nordic Copper Palette) ===
// Accent (Copper): #B87333
// Deep Charcoal: #1E1E1E
// Light Taupe (Warm Background): #F3F2EE

const servicesData = [
  {
    id: 'reels',
    name: 'Reels Filming & Production',
    description: 'Cinematic short-form content designed for high engagement on Instagram and TikTok.',
    packages: [
      { name: 'Standard Production', tier: 'Essential Impact', features: ['Ideal for consistent social presence', 'High Definition Filming (FHD)', 'Professional Editing', 'Trend Analysis'] },
      { name: 'Premium Cinematic', tier: 'High-End Storytelling', features: ['4K Cinematic Production', 'Advanced Color Grading', 'Creative Scripting & Direction', 'Sound Design & Licensed Music'] },
    ],
  },
  {
    id: 'social',
    name: 'Social Media Management',
    description: 'Strategic account growth and community management to elevate your brand voice.',
    packages: [
      { name: 'Growth Starter', tier: 'Foundation Build', features: ['Core Platform Management', 'Strategic Content Calendar', 'Community Engagement', 'Monthly Performance Insights'] },
      { name: 'Brand Authority', tier: 'Full Ecosystem', features: ['Multi-platform Strategy', 'Advanced Audience Growth', 'Ad Campaign Integration', 'Comprehensive Strategy Consulting'] },
    ],
  },
  {
    id: 'googleAds',
    name: 'Google Ads Management',
    description: 'Results-driven advertising focused on maximizing ROI and conversion rates.',
    packages: [
      { name: 'Strategic Setup', tier: 'Launch Ready', features: ['Targeted Campaign Architecture', 'Keyword Research', 'Conversion Tracking Setup', 'Performance Monitoring'] },
      { name: 'Market Dominance', tier: 'Scalable Growth', features: ['Full Funnel Optimization', 'A/B Testing & Retargeting', 'Competitor Analysis', 'Dedicated Strategy Consultant'] },
    ],
  },
  {
    id: 'dataAnalysis',
    name: 'Data Analysis & Insight',
    description: 'Deep-dive analytics to turn complex metrics into clear business strategies.',
    packages: [
      { name: 'Performance Audit', tier: 'Insight Focused', features: ['Social & Web Health Check', 'KPI Identification', 'Target Audience Mapping', 'Strategic Review'] },
      { name: 'Strategic Intelligence', tier: 'Data Driven Growth', features: ['Full User Journey Tracking', 'ROI & Attribution Modeling', 'Custom Real-time Dashboards', 'Quarterly Strategy Planning'] },
    ],
  },
  {
    id: 'WebDevelopment',
    name: 'Web Development & Design',
    description: 'Custom digital experiences focused on performance, aesthetics, and user conversion.',
    packages: [
      { name: 'Professional Presence', tier: 'Clean & Responsive', features: ['Custom UI/UX Design', 'SEO Optimized Architecture', 'Seamless Mobile Experience', 'High-Speed Performance'] },
      { name: 'E-Commerce & Scale', tier: 'Complete Digital Store', features: ['Advanced Sales Integration', 'Dynamic Content Management', 'Premium SEO Strategy', 'Ongoing Technical Support'] },
    ],
  }
];

const ServicesPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);

  const activeService = useMemo(() => {
    return servicesData.find(service => service.id === selectedServiceId) || servicesData[0];
  }, [selectedServiceId]);

  return (
    <div className="min-h-screen bg-[#F3F2EE] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-16">
          <h1 className="text-5xl font-serif font-light text-[#1E1E1E] mb-4">
            Our <span className="text-[#B87333]">Creative Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            Elevating your digital presence through professional production, strategic design, and data-driven insights. 
          </p>
        </header>

        <div className="flex justify-center mb-16">
          <select
            value={selectedServiceId}
            onChange={(e) => setSelectedServiceId(e.target.value)}
            className="p-4 border-b-2 border-[#B87333] text-[#1E1E1E] bg-transparent font-medium text-xl focus:outline-none cursor-pointer w-full sm:w-96"
          >
            {servicesData.map((service) => (
              <option key={service.id} value={service.id} className="bg-white">
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-sm border border-white mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-[#1E1E1E] mb-4 uppercase tracking-widest">
                  {activeService.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {activeService.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {activeService.packages.map((pkg, index) => (
                    <div 
                        key={index}
                        className={`relative p-8 rounded-2xl transition duration-500 flex flex-col
                                    ${index === 1 ? 'bg-[#1E1E1E] text-white shadow-2xl' : 'bg-white border border-gray-200'}`}
                    >
                        <div className="mb-6">
                          <span className={`text-xs uppercase tracking-[0.2em] font-bold ${index === 1 ? 'text-[#B87333]' : 'text-gray-400'}`}>
                            {pkg.tier}
                          </span>
                          <h3 className="text-2xl font-serif mt-2">
                              {pkg.name}
                          </h3>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {pkg.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center text-sm">
                                    <span className={`mr-3 h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-[#B87333]' : 'bg-[#B87333]'}`}></span>
                                    <span className={index === 1 ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className={`block w-full text-center py-4 rounded-full text-sm font-bold uppercase tracking-widest transition duration-300
                                       ${index === 1 
                                         ? 'bg-[#B87333] text-white hover:bg-white hover:text-[#1E1E1E]' 
                                         : 'border border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white' 
                                       }`}
                        >
                            Request a Custom Quote
                        </a>
                    </div>
                ))}
            </div>
        </div>

        <footer className="text-center text-gray-500 text-sm italic">
          * All projects are uniquely scoped. Contact us for a personalized proposal tailored to your vision.
        </footer>
      </div>
    </div>
  );
};

export default ServicesPage;