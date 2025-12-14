"use client"; // Required for Next.js to ensure state/interaction readiness

import React from 'react';

// === لوحة الألوان (Nordic Copper Palette) ===
// Accent: #B87333 (نحاسي مطفأ)
// Deep Charcoal: #1E1E1E (رمادي فاحم للعناوين)
// Light Taupe: #F3F2EE (خلفية دافئة)

// بيانات الأغاني
const musicTracks = [
  {
    id: 1,
    title: "Shu Taamalet",
    type: "lyrics",
    year: 2016,
    description: "Mayada Bselis & Samir kwaifati. A song that reflects deep emotional resonance and powerful vocal delivery, showcasing a rich collaboration.",
    link: "https://www.youtube.com/watch?v=Y3YDSHU8_MQ&list=RDY3YDSHU8_MQ&start_radio=1",
  },
  {
    id: 2,
    title:  "Kan al zaman Bkheir",
    type: "lyrics",
    year: 2014,
    description: "Mayada Bselis & Samir kwaifati. A nostalgic track reflecting on the passing of time and better days, with a captivating arrangement.",
    link: "https://www.youtube.com/watch?v=fmO6Zcjokgg&list=RDfmO6Zcjokgg&start_radio=1",
  },
  {
    id: 3,
    title: "Akher ayam elhob",
    type : "lyrics",
    year: 2009,
    description: "Hala sabbagh & Radwan nasri. A dramatic piece about the final moments of a love story, featuring intricate musical composition.",
    link: "https://www.youtube.com/watch?v=9xmqScery6g&list=RD9xmqScery6g&start_radio=1",
  },
  {
    id: 4,
    title: "The Cello & The City Score",
    type : "instrumental",
    year: 2021,
    description: "A short film scoring project using only live strings, creating an atmospheric and urban soundscape.",
    link: "#",
  },
];

// المكون الأساسي لصفحة الأغاني
export default function SongsPage() {
  return (
    // الخلفية: بيج فاتح دافئ (#F3F2EE)
    <main className="min-h-screen bg-[#F3F2EE] py-16">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* عنوان الصفحة ووصفها - بنمط Playfair Display الفخم */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-light text-[#1E1E1E] mb-4 tracking-tight border-b-2 border-[#B87333] inline-block px-8 pb-3">
            My Sonic Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4 font-light">
            Wrote numerous songs and soundtracks for both local and international TV series.
          </p>
        </div>
        
        {/* شبكة عرض الأغاني (Grid) - 3 أعمدة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {musicTracks.map((track) => (
            <div 
              key={track.id} 
              // البطاقة: خلفية بيضاء، حواف مستديرة، ظل خفيف، وتأثير Hover نحاسي خفيف
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden border border-[#A0A0A0]/20 flex flex-col justify-between"
            >
              <div className="p-6">
                
                {/* العنوان - رمادي فاحم - تحديد ارتفاع أدنى لضمان التوحيد */}
                <h2 className="text-2xl font-bold text-[#1E1E1E] mb-2 min-h-[60px] flex items-center">
                   {track.title}
                </h2>
                
                {/* تفاصيل سريعة - خط فاصل بلون الخلفية الثانوي */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4 border-b border-t border-[#F3F2EE] py-2">
                  {/* نوع الأغنية - لون نحاسي فاتح */}
                  <span className="bg-[#B87333]/10 text-[#B87333] px-3 py-1 rounded-full font-medium">
                    {track.type}
                  </span>
                  <span>
                    Year: {track.year}
                  </span>
                </div>

                {/* الوصف - تحديد ارتفاع ثابت وإخفاء الفائض لضمان توحيد حجم البطاقة */}
                <p className="text-gray-700 mb-6 h-12 overflow-hidden text-sm">
                  {track.description}
                </p>
                
              </div>
              
              {/* زر الاستماع - لون نحاسي مطفأ (Accent) */}
              <a
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#B87333] text-white px-4 py-3 font-semibold 
                           hover:bg-[#1E1E1E] transition duration-300 tracking-wider" // Hover إلى الرمادي الفاحم
              >
                Listen Now
              </a>
                
            </div>
          ))}
          
        </div>
        
      </div>
    </main>
  );
}