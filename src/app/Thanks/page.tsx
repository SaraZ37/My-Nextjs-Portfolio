import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#F3F2EE] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden">
        
        {/* أفاتار سارة - تأكدي من وضع صورتكِ في مجلد public/images/sara-avatar.jpg */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-[#B87333] overflow-hidden shadow-inner">
            <img 
              src="/images/sara-avatar.jpg" 
              alt="Sara Crew" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* عنوان الشكر باللغة السويدية */}
        <h1 className="text-5xl font-serif text-[#1E1E1E] mb-6 tracking-tight">Tack!</h1>
        
        {/* رسالة التأكيد - تم تصحيح القواعد اللغوية السويدية */}
        <p className="text-lg text-gray-700 mb-10 font-light leading-relaxed">
          Ditt meddelande har skickats framgångsrikt. <br />
          Jag återkommer till dig så snart som möjligt.
        </p>
        
        {/* زر العودة للرئيسية - بنفس تصميم موقعك */}
        <Link 
          href="/" 
          className="inline-block border-2 border-[#B87333] text-[#B87333] px-12 py-3.5 rounded-full text-sm font-bold hover:bg-[#B87333] hover:text-white transition duration-300 uppercase tracking-[0.3em] shadow-md"
        >
          Tillbaka till hem
        </Link>

        {/* تذييل بسيط */}
        <p className="mt-12 text-[10px] text-gray-400 uppercase tracking-[0.4em]">
            SaraCrew Production 
        </p>
      </div>
    </div>
  );
}