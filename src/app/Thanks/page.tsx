import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#F3F2EE] flex items-center justify-center px-6 text-center font-sans">
      <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
        
        {/* اللوجو الذهبي الخاص بكِ */}
        <div className="mb-10 flex justify-center">
          <div className="w-32 h-32 rounded-full border-2 border-[#B87333] overflow-hidden p-2 bg-[#101010] shadow-lg">
            <img 
              src="/logo/IMAGE .jpg" 
              alt="SaraCrew Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* النص السويدي المصحح فخامة */}
        <h1 className="text-4xl font-serif text-[#1E1E1E] mb-4 uppercase tracking-tighter font-bold">
          Tack! <span className="text-[#B87333]">Done.</span>
        </h1>
        
        <div className="w-16 h-0.5 bg-[#B87333] mx-auto mb-8 opacity-40"></div>

        <p className="text-lg text-gray-700 mb-10 font-light leading-relaxed">
          Ditt meddelande har skickats framgångsrikt. <br />
          Jag återkommer till dig så snart som möjligt.
        </p>
        
        {/* زر العودة للرئيسية */}
        <Link 
          href="/" 
          className="inline-block border-2 border-[#B87333] text-[#B87333] px-12 py-4 rounded-full text-xs font-bold hover:bg-[#B87333] hover:text-white transition-all duration-500 uppercase tracking-[0.4em] shadow-sm"
        >
          Tillbaka till hem
        </Link>

        <p className="mt-16 text-[9px] text-gray-400 uppercase tracking-[0.5em] opacity-60">
            SaraCrew Production • 2026
        </p>
      </div>
    </div>
  );
}