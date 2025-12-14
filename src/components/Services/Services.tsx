"use client";
import React, { useState, useMemo } from 'react';

// === COLOR PALETTE (Nordic Copper Palette) ===
// Accent (Copper): #B87333
// Deep Charcoal: #1E1E1E
// Light Taupe (Warm Background): #F3F2EE

// Service and Package Definitions
const servicesData = [
  {
    id: 'reels',
    name: 'Reels Filming & Production',
    description: 'Production of engaging short-form video content tailored for Instagram and TikTok.',
    packages: [
      { name: 'Basic Package', price: 'Starting from $450', features: ['2 Reels per month', 'High Definition Filming (FHD)', 'Standard Editing', '1 Review Round'] },
      { name: 'Advanced Package', price: 'Starting from $900', features: ['6 Reels per month', 'Professional Cinematic Filming', 'Advanced Editing & Color Grading', 'Creative Scripting', '2 Review Rounds'] },
    ],
  },
  {
    id: 'social',
    name: 'Social Media Management',
    description: 'Comprehensive account management to boost engagement and build your brand.',
    packages: [
      { name: 'Starter Package', price: 'Starting from $600', features: ['1 Platform Managed', '4 Posts per month', 'Basic Comment Response', 'Simple Monthly Report'] },
      { name: 'Professional Package', price: 'Starting from $1500', features: ['2 Platforms Managed', '10 Posts per month', 'Comprehensive Audience Engagement (24/7)', 'Strategic Planning & Advertising', 'Detailed Monthly Report'] },
    ],
  },
  {
    id: 'googleAds',
    name: 'Google Ads Management',
    description: 'Optimizing your advertising campaigns for maximum Return on Investment (ROI).',
    packages: [
      { name: 'Beginner Tier', price: '15% Service Fee', features: ['Campaign Setup', 'Budget Management up to $1000', 'Keyword Optimization', 'Weekly Report'] },
      { name: 'Growth Tier', price: '10% Service Fee', features: ['Unlimited Budget Management', 'Comprehensive Conversion Optimization', 'Retargeting Ads', 'In-depth Monthly Consultation'] },
    ],
  },
  {
    id: 'dataAnalysis',
    name: 'Data Analysis & Insight',
    description: 'Transforming complex data into actionable business decisions.',
    packages: [
      { name: 'Essential Analysis', price: 'Starting from $300', features: ['Social Media Performance Review', 'Target Audience Identification', 'Key Performance Indicators (KPIs)', 'Results Presentation'] },
      { name: 'In-depth Analysis', price: 'Starting from $750', features: ['Ad Performance Analysis (ROI)', 'User Journey Tracking', 'Actionable Strategic Recommendations', 'Custom Dashboard'] },
    ],
  },
{    id: 'WebDevelopment',
    name: 'Web Development & Design',
    description: 'Creating stunning, user-friendly websites that drive engagement and conversions.',
    packages: [
      { name: 'Basic Website', price: 'Starting from $800', features: [  'Basic SEO Optimization', 'Contact Form Integration'] },
      { name: 'Advanced Website', price: 'Starting from $2000', features: [  'E-commerce Functionality', 'Advanced SEO Strategies'] },

    ],
}
];

const ServicesPage: React.FC = () => {
  // State to store the selected service (default is the first service)
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);

  // Memoized active service data
  const activeService = useMemo(() => {
    return servicesData.find(service => service.id === selectedServiceId) || servicesData[0];
  }, [selectedServiceId]);

  return (
    // Background: warm light color (#F3F2EE) with luxurious contrast
    <div className="min-h-screen bg-[#F3F2EE] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Title and Description */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-serif font-light text-[#1E1E1E] mb-4">
            Our <span className="text-[#B87333]">Professional Services</span> & Packages
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            We offer a blend of visual creativity and precise analysis to ensure your goals are met. Choose the service that suits your project:
          </p>
        </header>

        {/* 1. Service Selection Dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={selectedServiceId}
            onChange={(e) => setSelectedServiceId(e.target.value)}
            className="p-3 border-2 border-[#B87333] text-[#1E1E1E] bg-white rounded-lg shadow-lg 
                       focus:ring-[#B87333] focus:border-[#B87333] text-lg cursor-pointer transition duration-300 w-full sm:w-80 text-left"
                       
            // Removed style={{ direction: 'rtl' }}
          >
            {servicesData.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Active Service Details */}
        <div className="bg-white p-8 rounded-xl shadow-2xl mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1E1E1E] mb-2 border-b-2 border-[#B87333]/50 inline-block pb-1">
                {activeService.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                {activeService.description}
            </p>
            
            {/* 3. Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                
                {activeService.packages.map((pkg, index) => (
                    <div 
                        key={index}
                        // Background contrast between white and light taupe (#F3F2EE)
                        className={`p-6 rounded-xl shadow-xl transition duration-300 transform 
                                    ${index === 1 ? 'bg-white scale-[1.03] border-4 border-[#B87333]' : 'bg-[#F3F2EE]'} 
                                    hover:shadow-2xl hover:scale-[1.05]`}
                    >
                        {/* Package Name */}
                        <h3 className={`text-2xl font-extrabold ${index === 1 ? 'text-[#B87333]' : 'text-[#1E1E1E]'} mb-4`}>
                            {pkg.name}
                        </h3>
                        
                        {/* Price */}
                        <p className={`text-4xl font-bold ${index === 1 ? 'text-[#B87333]' : 'text-[#1E1E1E]'} mb-6`}>
                            {pkg.price}
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-3 mb-8">
                            {pkg.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start text-gray-700">
                                    {/* Copper Icon */}
                                    <svg 
                                        className="flex-shrink-0 w-5 h-5 mt-1 mr-2" 
                                        fill="none" 
                                        stroke="#B87333" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className='font-light'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Booking Button - Changed to reflect appointment scheduling */}
                        <a
                            href="#contact"
                            className={`block w-full text-center px-6 py-3 rounded-lg text-lg font-semibold tracking-wider transition duration-300
                                       ${index === 1 
                                         ? 'bg-[#B87333] text-white hover:bg-[#1E1E1E]' // Advanced Package: Copper prominent
                                         : 'bg-[#1E1E1E] text-white hover:bg-[#B87333]' // Basic Package: Charcoal prominent
                                       }`}
                        >
                            Schedule a Consultation
                        </a>
                    </div>
                ))}
            </div>

        </div>

      </div>
    </div>
  );
};

export default ServicesPage;