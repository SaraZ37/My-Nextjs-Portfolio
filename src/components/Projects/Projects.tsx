"use client";
import React, { useState, useMemo } from 'react';

// === بيانات المشاريع (نفس البيانات الأصلية) ===
const projectsData = [
  { id: 1, title: "Seven hours in Syria", category: "Films", duration: "13 min", description: "A pregnant woman gives birth under siege in a destroyed church.", tags: ["Cine", "War", "documentary"], link: "https://www.youtube.com/watch?v=eGb8UOR4FCI" }, 
  { id: 2, title: "Story with Sarah", category: "Pod", duration: "Ongoing", description: "Because we are made of stories.", tags: ["Pod", "story telling", "youtube"], link: "https://www.youtube.com/@SarahAlZeer/podcasts" },
  { id: 5, title: "Content Creation Series", category: "Content", duration: "Ongoing", description: "Nostalgia for Syrian TV series on Instagram.", tags: ["Nostalgia", "Syrian series", "Content"], link: "https://www.instagram.com/sarah_a_alzeer/" },
  { id: 6, title: "Dharma - Film", category: "Films", duration: "Short Film", description: "A dramatic short film exploring pet.", tags: ["Short Film", "Director", "docu"], link: "#" },
  { id: 7, title: "Podcast Shabablik with Miral", category: "Pod", duration: "In Production", description: "A painful experiences and overcoming them.", tags: ["Interviews", "Social"], link: "https://www.youtube.com/@Shabablikwithmiral" },
  { id: 8, title: "Branding for Framtalent company", category: "Marketing", duration: "3 month", description: "Content for Instagram & Tiktok", tags: ["Branding", "Reels", "Social Media"], link: "" },
  { id: 9, title: "Ward Ahmar", category: "Series", duration: "4 episods", description: "A romance series production.", tags: ["Series", "Drama"], link: "https://www.youtube.com/watch?v=oCTd8DsTFW8" },
  { id: 10, title: "Arabizi", category: "Series", duration: "23 episods", description: "A comedy series production.", tags: ["Series", "Comedy"], link: "https://www.youtube.com/watch?v=z7C9s90uMx4&list=PLFt8cx1Uc9IG-fB26GuhzIwn9M37GcDlr" },
  { id: 11, title: "Shu Taamalet", category: "Songs", duration: "2016", description: "Mayada Bselis & Samir kwaifati. A song that reflects emotional resonance.", tags: ["Lyrics", "Music", "2016"], link: "https://www.youtube.com/watch?v=Y3YDSHU8_MQ&list=RDY3YDSHU8_MQ&start_radio=1" },
  { id: 12, title: "Kan al zaman Bkheir", category: "Songs", duration: "2014", description: "Mayada Bselis & Samir kwaifati. A nostalgic track reflecting on time.", tags: ["Lyrics", "Music", "2014"], link: "https://www.youtube.com/watch?v=fmO6Zcjokgg&list=RDfmO6Zcjokgg&start_radio=1" },
  { id: 13, title: "Akher ayam elhob", category: "Songs", duration: "2009", description: "Hala sabbagh & Radwan nasri. A dramatic piece about love story.", tags: ["Lyrics", "Music", "2009"], link: "https://www.youtube.com/watch?v=9xmqScery6g&list=RD9xmqScery6g&start_radio=1" },
];

const categories = ['All', 'Films', 'Songs', 'Pod', 'Content', 'Marketing', 'Series'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);
    
  return (
    <main className="min-h-screen bg-cyan-950 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-light text-white mb-4 tracking-tight border-b-2 border-[#B87333] inline-block px-8 pb-3">
             Curated Portfolio
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto mt-4 font-light">
            My work is categorized across Production, Design, and Digital Strategy.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-3 border-2 border-[#B87333] text-[#1E1E1E] bg-white rounded-lg shadow-lg 
                       focus:ring-[#B87333] focus:border-[#B87333] text-lg cursor-pointer transition duration-300 w-full sm:w-80"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'View All Projects' : category}
              </option>
            ))}
          </select>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-zinc-50 rounded-lg p-0 overflow-hidden border-2 border-transparent 
                           transition-all duration-300 ease-in-out
                           hover:shadow-xl hover:border-[#B87333] 
                           flex flex-col justify-between 
                           transform-gpu" // يجبر الكروم على استخدام كرت الشاشة
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitFontSmoothing: 'antialiased',
                  willChange: 'transform, box-shadow' // تحضير المتصفح للحركة
                }}
              >
                <div className="p-6 flex flex-col h-full">
                  <span className="text-xs font-medium text-[#B87333] mb-2 uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold text-[#1E1E1E] mb-3 leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden text-sm leading-relaxed">
                    {project.description}
                  </p>

                   <div className="flex flex-wrap gap-1 mb-4 pt-2 border-t border-[#A0A0A0]/20">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-[10px] uppercase font-semibold bg-[#F3F2EE] text-[#1E1E1E] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-auto font-medium">
                        DURATION: {project.duration}
                    </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#B87333] text-white px-4 py-3 font-semibold 
                             hover:bg-[#1E1E1E] transition-colors duration-300 tracking-wider text-sm"
                >
                  VIEW PROJECT 
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-white/50">
              No projects found in the <span className="text-white">&quot;{activeCategory}&quot;</span> category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}