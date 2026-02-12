"use client";
import React from 'react';

// === بيانات الرؤية والقصة (نفس نصوصك من السكريبت والملفات) ===
const missionData = {
    vision: {
        title: "OUR VISION",
        content: "We are on a mission to bring visionary storytelling to the screen. Every step we take is a move toward finalized, high-quality production that leaves a legacy."
    },
    story: {
        title: "OUR STORY",
        content: "Finalizing our new feature film requires critical focus. We are building a community where every supporter becomes part of the SaraCrew creative journey."
    }
};

const LuxurySidebar: React.FC = () => {
    return (
        <aside className="w-full md:w-[320px] min-h-screen bg-gray text-black py-16 px-8 flex flex-col border-r border-[#B87333]/10 sticky top-0">
            <div className="flex flex-col h-full">
                
                {/* العنوان الرئيسي - نحاسي يتناغم مع الـ Branding في موقعك */}
                <div className="mb-14">
                    <h2 className="text-[10px] font-sans tracking-[0.4em] text-[#B87333] mb-2 uppercase font-bold">
                        The Core
                    </h2>
                    <h2 className="text-3xl font-serif font-light tracking-tight text-black leading-none">
                        MISSION
                    </h2>
                </div>

                {/* قسم الرؤية - خطوط متناسقة مع "Services Page" */}
                <section className="mb-12">
                    <div className="flex items-center mb-4">
                        <span className="text-[10px] font-bold text-[#B87333] mr-3">01</span>
                        <h3 className="text-[11px] tracking-[0.2em] font-sans font-bold text-black uppercase">
                            {missionData.vision.title}
                        </h3>
                    </div>
                    <p className="text-[13px] text-gray-400 leading-relaxed font-light italic">
                        "{missionData.vision.content}"
                    </p>
                </section>

                {/* قسم القصة - تباين لوني مريح للعين */}
                <section className="mb-12">
                    <div className="flex items-center mb-4">
                        <span className="text-[10px] font-bold text-[#B87333] mr-3">02</span>
                        <h3 className="text-[11px] tracking-[0.2em] font-sans font-bold text-blackuppercase">
                            {missionData.story.title}
                        </h3>
                    </div>
                    <p className="text-[13px] text-gray-300 leading-relaxed font-light">
                        {missionData.story.content}
                    </p>
                </section>

                {/* التوقيع السفلي - يتناسب مع الـ Footer العام */}
                <div className="mt-auto pt-8 border-t border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#B87333] mb-2 font-bold">
                        SaraCrew Production
                    </p>
                    <div className="text-[9px] text-gray-500 tracking-widest leading-loose font-light">
                        <p>EST. 2026</p>
                        
                        <p className="mt-1">© ALL RIGHTS RESERVED</p>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default LuxurySidebar;