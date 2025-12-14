import React from 'react';

// === لوحة الألوان (Nordic Copper Palette) ===
// Accent (نحاسي): #B87333
// Deep Charcoal (فاحم): #1E1E1E
// White: #FFFFFF

const Navbar: React.FC = () => {
  // قائمة الروابط (يمكنك تكييفها حسب صفحاتك)
  const links = [
    { name: 'Mainpage', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/Services' },
    { name: 'Contact', href: '/#contact' },
  ];

  // دالة بسيطة لمحاكاة تفعيل الرابط
  // في تطبيق React/Next.js حقيقي، يتم استخدام usePathname
  const isActive = (href: string) => {
    // محاكاة: نفترض أن /projects هو الرابط النشط حالياً
    if (href === '/projects') return true; 
    return false;
  };

  return (
    // الخلفية: الرمادي الفاحم (#1E1E1E)، ثابت في الأعلى (sticky)
    <nav className="sticky top-0 z-50 bg-[#1E1E1E] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* الشعار - نحاسي مطفأ */}
          <div className="shrink-0">
            <a href="" className="text-3xl font-serif font-extrabold text-[#B87333] tracking-wider">
              SaraCrew
            </a>
          </div>

          {/* روابط التنقل - مخفية على الجوال (Mobile) */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  ml-8 px-3 py-2 text-sm font-medium tracking-wide transition duration-300 rounded-md
                  ${isActive(item.href) 
                    ? 'text-[#B87333] border-b-2 border-[#B87333]' // نشط: نحاسي بخط سفلي
                    : 'text-white hover:text-[#B87333]' // غير نشط: أبيض، يتحول إلى نحاسي عند المرور
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* زر CTA/Book Call - نحاسي بارز */}
          <a
            href="https://calendly.com/sarahalzeer2107/30min"
            className="hidden lg:block bg-[#B87333] text-[#1E1E1E] px-4 py-2 rounded-lg text-sm font-semibold 
                       hover:bg-white transition duration-300 shadow-lg tracking-wider"
          >
            BOOK YOUR TIME NOW
          </a>
          
          {/* زر قائمة الجوال (Hamburger Icon) - يمكنك إضافة المنطق لفتحه لاحقاً */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#B87333] hover:bg-[#1E1E1E]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* أيقونة همبرغر بسيطة */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;