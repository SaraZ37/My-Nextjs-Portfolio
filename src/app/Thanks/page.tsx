import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#F3F2EE] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
        <h1 className="text-4xl font-serif text-[#B87333] mb-4">Tack!</h1>
        <p className="text-gray-700 mb-8 font-light">
          Din check har skickats framgångsrikt. Vi återkommer till dig så snart som möjligt.
        </p>
        
        {/* زر العودة للصفحة الرئيسية */}
        <Link 
          href="/" 
          className="inline-block border-2 border-[#B87333] text-[#B87333] px-10 py-3 rounded-full text-xs font-bold hover:bg-[#B87333] hover:text-white transition duration-300 uppercase tracking-widest"
        >
          Tillbaka till hem
        </Link>
      </div>
    </div>
  );
}