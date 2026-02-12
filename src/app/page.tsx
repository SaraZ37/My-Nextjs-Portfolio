"use client";

import React from 'react';

// === لوحة الألوان (Nordic Copper Palette) ===
// Accent: #B87333 (نحاسي مطفأ)
// Deep Charcoal: #1E1E1E (رمادي فاحم للعناوين)
// Light Taupe: #F3F2EE (خلفية دافئة)
// White: #FFFFFF

// البيانات الأساسية
const userName: string = "SaraCrew";
const mainTitle: string = "Filmmaker, Strategist, & Web developer";
const welcomeMessage: string = "Leveraging years of experience across film production, content creation, and digital strategy to bring visionary projects to life.";

// Video showcase component (moved out of JSX and corrected)
const VideoShowcase: React.FC = () => {
  const videoTitle = 'SaraCrew For  Film Production & Digital Markiting'; 
  // IMPORTANT: يجب استبدال هذا الرابط برابط فيديو صالح لديكِ.
  // يُفضل استخدام تنسيق MP4 أو WebM.
  // لضمان التشغيل التلقائي عبر المتصفحات، يجب أن يكون الفيديو صامتاً (Muted)
  const videoSourceUrl = "logo.mp4";

  return (
    // تم تعديل py-24 إلى py-16 أو py-8 لتقليل المسافة العلوية والنهائية
    <div className="py-8 px-6 lg:px-12 bg-white"> 
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-serif font-light text-[#1E1E1E] mb-12 text-center border-b border-[#A0A0A0]/30 px-8 pb-3 mx-auto block">
          {videoTitle}
        </h2>
        
        {/* حاوية الفيديو (Looping Video) */}
        <div className="relative w-full aspect-video bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden">
          
          <video 
            className="w-full h-full object-cover" 
            src={videoSourceUrl}
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto" 
          >
            <p className="text-white p-4">Your browser does not support the video tag.</p>
          </video>
          
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6">
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1E1E1E]">
      {/* 1. قسم الترحيب (Hero Section) */}
     
      <VideoShowcase />
 <div className="pt-24 pb-32 px-6 lg:px-12 text-center bg-[#F3F2EE] border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          {/* العنوان الرئيسي بلون رمادي فاحم وخط فخم */}
          <h1 className="text-7xl font-serif font-light mb-4 tracking-tight">
            Welcome to  <span className="text-[#B87333]">{userName}</span>.
          </h1>
          
          {/* الدور/التخصص بلون رمادي أغمق */}
          <p className="text-2xl font-medium text-[#1E1E1E] mb-6">
            {mainTitle}
          </p>
          
          {/* رسالة الترحيب/النبذة */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            {welcomeMessage}
          </p>
          
          {/* زر الاتصال أو حجز الموعد (CTA) - نحاسي بارز */}
         
        </div>
      </div>

     {/* 3. قسم التواصل الآمن (بدلاً من إظهار الإيميل) */}
<div id="contact" className="py-24 px-6 lg:px-12 bg-[#F3F2EE] border-t border-gray-200">
    <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-light text-[#1E1E1E] mb-4 uppercase tracking-widest">
            Ready to <span className="text-[#B87333]">Collaborate</span>?
        </h2>
        <p className="text-lg text-gray-700 mb-12 font-light">
            Whether you need film direction, a custom digital strategy, or creative consulting, let us discuss your vision.
        </p>
        
        {/* نموذج الاتصال - يرسل الرسائل لإيميلك دون كشفه */}
        <form 
          action="https://formspree.io/f/YOUR_ID_HERE" 
          method="POST" 
          className="text-left space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B87333] mb-2">Name</label>
              <input 
                type="text" name="name" required 
                className="border-b border-gray-300 py-2 focus:border-[#B87333] outline-none transition-colors bg-transparent text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B87333] mb-2">Email Address</label>
              <input 
                type="email" name="email" required 
                className="border-b border-gray-300 py-2 focus:border-[#B87333] outline-none transition-colors bg-transparent text-sm"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B87333] mb-2">Project Vision</label>
            <textarea 
              name="message" rows={4} required 
              className="border-b border-gray-300 py-2 focus:border-[#B87333] outline-none transition-colors bg-transparent text-sm resize-none"
              placeholder="Tell us a bit about your project..."
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button 
              type="submit"
              className="inline-block border-2 border-[#B87333] text-[#B87333] px-12 py-3 rounded-full text-xs font-bold hover:bg-[#B87333] hover:text-white transition duration-300 uppercase tracking-[0.3em]"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* تذييل فني بسيط */}
        <p className="mt-12 text-[10px] text-gray-400 uppercase tracking-[0.4em]">
            SaraCrew Production 
        </p>
    </div>
</div>
    </main>
  );
}