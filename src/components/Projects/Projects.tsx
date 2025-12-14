"use client";
import React, { useState, useMemo } from 'react';

// === لوحة الألوان (Nordic Copper Palette) ===
// Accent: #B87333 (نحاسي مطفأ)
// Deep Charcoal: #1E1E1E (رمادي فاحم للعناوين)
// Light Taupe: #F3F2EE (خلفية دافئة للوسوم)
// Sharp Gray: #A0A0A0 (للحدود الخفيفة)

// === 1. بيانات المشاريع (دمج جميع التصنيفات، بما في ذلك الأغاني) ===
const projectsData = [
  // مشاريع الأفلام والبودكاست والمحتوى والتسويق الأصلية
  { id: 1, title: "Seven hours in Syria", category: "Films", duration: "13 min", description: "A pregnant woman gives birth under siege in a destroyed church.", tags: ["Cine", "War", "documentary"], link: "https://www.youtube.com/watch?v=eGb8UOR4FCI" }, 
  { id: 2, title: "Story with Sarah", category: "Pod", duration: "Ongoing", description: "Because we are made of stories.", tags: ["Pod", "story telling", "youtube"], link: "https://www.youtube.com/@SarahAlZeer/podcasts" },
  { id: 3, title: "Digital Strategy for RedRose Clinic", category: "Marketing", duration: "6 months", description: "Full social media and Google Ads setup .", tags: ["SEO", "Google Ads", "Strategy"], link: "#" },
  { id: 5, title: "Content Creation Series", category: "Content", duration: "Ongoing", description: "Nostalgia for Syrian TV series on Instagram.", tags: ["Nostalgia", "Syrian series", "Content"], link: "https://www.instagram.com/sarah_a_alzeer/" },
  { id: 6, title: "Dharma - Film", category: "Films", duration: "Short Film", description: "A dramatic short film exploring pet.", tags: ["Short Film", "Director", "docu"], link: "#" },
  { id: 7, title: "Podcast Shabablik with Miral", category: "Pod", duration: "In Production", description: "A painful experiences and overcoming them.", tags: ["Interviews", "Social"], link: "https://www.youtube.com/@Shabablikwithmiral" },
  { id: 8, title: "Branding for Framtalent company", category: "Marketing", duration: "6 month", description: "Complete visual identity and logo design package.", tags: ["Branding", "Design", "Logo"], link: "" },
  { id: 9, title: "Ward Ahmar", category: "Series", duration: "4 episods", description: "A romance series production.", tags: ["Series", "Drama"], link: "https://www.youtube.com/watch?v=oCTd8DsTFW8" },
{ id: 10, title: "Arabizi", category: "Series", duration: "23 episods", description: "A comedy series production.", tags: ["Series", "Comedy"], link: 
  "https://www.youtube.com/watch?v=z7C9s90uMx4&list=PLFt8cx1Uc9IG-fB26GuhzIwn9M37GcDlr" },
  // === مشاريع الأغاني المدمجة (Songs) ===
  { id: 11, title: "Shu Taamalet", category: "Songs", duration: "2016", description: "Mayada Bselis & Samir kwaifati. A song that reflects deep emotional resonance and powerful vocal delivery.", tags: ["Lyrics", "Music", "2016"], link: "https://www.youtube.com/watch?v=Y3YDSHU8_MQ&list=RDY3YDSHU8_MQ&start_radio=1" },
  { id: 12, title: "Kan al zaman Bkheir", category: "Songs", duration: "2014", description: "Mayada Bselis & Samir kwaifati. A nostalgic track reflecting on the passing of time and better days.", tags: ["Lyrics", "Music", "2014"], link: "https://www.youtube.com/watch?v=fmO6Zcjokgg&list=RDfmO6Zcjokgg&start_radio=1" },
  { id: 13, title: "Akher ayam elhob", category: "Songs", duration: "2009", description: "Hala sabbagh & Radwan nasri. A dramatic piece about the final moments of a love story.", tags: ["Lyrics", "Music", "2009"], link: "https://www.youtube.com/watch?v=9xmqScery6g&list=RD9xmqScery6g&start_radio=1" },

];

// قائمة فلاتر التصنيفات
const categories = ['All', 'Films', 'Songs', 'Pod', 'Content', 'Marketing','Series']; // تم إزالة 'Series' لأنه لا يوجد تصنيف Series في البيانات

// === 2. المكون الرئيسي ===
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);
    
  return (
    // الخلفية: بيضاء نقية
    <main className="min-h-screen bg-cyan-950 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* عنوان فخم بنمط Playfair Display - تم تطبيق الألوان الجديدة */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-light text-white mb-4 tracking-tight border-b-2 border-[#B87333] inline-block px-8 pb-3">
             Curated Portfolio
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto mt-4 font-light">
            My work is categorized across Production, Design, and Digital Strategy.
          </p>
        </div>
        
        {/* 1. Category Filter */}
        <div className="flex justify-center mb-12">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-3 border-2 border-[#B87333] text-[#1E1E1E] bg-white rounded-lg shadow-lg 
                       focus:ring-[#B87333] focus:border-[#B87333] text-lg cursor-pointer transition duration-300 w-full sm:w-80 text-left"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'View All Projects' : category}
              </option>
            ))}
          </select>
        </div>
        
        {/* === شبكة عرض المشاريع (Grid) - تم التوسيع إلى 4 أعمدة === */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-zinc-50 rounded-lg p-0 overflow-hidden border border-[#A0A0A0]/20 
                           transition duration-300 hover:shadow-2xl hover:border-[#B87333] flex flex-col justify-between" // hover border نحاسي
              >
                <div className="p-6 flex flex-col h-full"> {/* استخدام flex-col و h-full لضمان توحيد الحجم */}
                  
                  {/* العنوان والتصنيف */}
                  <span className="text-xs font-medium text-[#B87333] mb-2 uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold text-[#1E1E1E] mb-3"> {/* العنوان بالرمادي الفاحم */}
                    {project.title}
                  </h2>
                  
                  {/* الوصف - تحديد ارتفاع ثابت وإخفاء الفائض لتوحيد حجم البطاقات */}
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden text-sm">
                    {project.description}
                  </p>

                  {/* الوسوم (Tags) - تم تطبيق ألوان Light Taupe و Deep Charcoal */}
                   <div className="flex flex-wrap gap-1 mb-4 pt-2 border-t border-[#A0A0A0]/20">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs font-light bg-[#F3F2EE] text-[#1E1E1E] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* مدة المشروع */}
                    <p className="text-sm text-gray-500 mt-auto">
                        Duration: {project.duration}
                    </p>
                </div>

                {/* زر عرض التفاصيل/الرابط - اللون النحاسي المطفأ (Accent) مع hover بالرمادي الفاحم */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#B87333] text-white px-4 py-3 font-semibold 
                             hover:bg-[#1E1E1E] transition duration-300 tracking-wider"
                >
                  VIEW PROJECT 
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              No projects found in the <span className="font-bold text-gray-800">&quot;{activeCategory}</span> category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}