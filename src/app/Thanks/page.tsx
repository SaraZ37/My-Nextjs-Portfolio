import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#F3F2EE] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden">
        
        {/* لوجو سارة كرو الذهبي - يرجى التأكد من وجود الملف في public/images/saracrew-logo.png */}
        <div className="mb-10 flex justify-center">
          <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-[#B87333] overflow-hidden p-3 shadow-md bg-[#1E1E1E]">
            <Image 
              src="/logo/IMAGE.jpg" // تأكدي من المسار الصحيح للوجو في مجلد public
              alt="SaraCrew Production & Digital Marketing" 
              width={100} 
              height={100} 
              className="object-contain" 
            />
          </div>
        </div>

        {/* عنوان الشكر - تم تصحيحه لغوياً */}
        <h1 className="text-5xl font-serif text-[#1E1E1E] mb-6 tracking-tight">Tack!</h1>
        
        {/* رسالة التأكيد الشخصية */}
        <p className="text-lg text-gray-700 mb-10 font-light leading-relaxed">
          Ditt meddelande har skickats framgångsrikt. <br />
          Jag återkommer till dig så snart som möjligt.
        </p>
        
        {/* زر العودة المتناسق مع تصميم موقعك - تم تحديث الرابط */}
        <Link 
          href="/" 
          className="inline-block border-2 border-[#B87333] text-[#B87333] px-12 py-3.5 rounded-full text-xs font-bold hover:bg-[#B87333] hover:text-white transition duration-300 uppercase tracking-[0.3em] shadow-sm"
        >
          Tillbaka till hem
        </Link>

        {/* تذييل فني */}
        <p className="mt-12 text-[10px] text-gray-400 uppercase tracking-[0.4em]">
            SaraCrew Production 
        </p>
      </div>
    </div>
  );
}