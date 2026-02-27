"use client"; // ضروري في Next.js لاستخدام Hooks

import React, { useState } from 'react';
import Link from 'next/link'; // استخدام Link لضمان سرعة التنقل

const Navbar: React.FC = () => {
  // حالة التحكم بفتح وإغلاق قائمة الجوال
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Mainpage', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/Services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1E1E1E] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* الشعار */}
          <div className="shrink-0">
            <Link href="/" className="text-3xl font-serif font-extrabold text-[#B87333] tracking-wider">
              SaraCrew
            </Link>
          </div>

          {/* روابط التنقل للشاشات الكبيرة */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="ml-8 px-3 py-2 text-sm font-medium tracking-wide transition duration-300 rounded-md text-white hover:text-[#B87333]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* زر Calendly */}
          <a
            href="https://calendly.com/sarahalzeer2107/30min"
            className="hidden lg:block bg-[#B87333] text-[#1E1E1E] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white transition duration-300 shadow-lg tracking-wider"
          >
            BOOK YOUR TIME NOW
          </a>
          
          {/* زر قائمة الجوال (Hamburger) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // تبديل الحالة عند الضغط
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#B87333]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الجوال المنسدلة - تظهر فقط عندما يكون isOpen true */}
      {isOpen && (
        <div className="sm:hidden bg-[#1E1E1E] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // إغلاق القائمة عند اختيار صفحة
                className="block px-3 py-4 text-base font-medium text-white border-b border-gray-900 hover:text-[#B87333] transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://calendly.com/sarahalzeer2107/30min"
              className="block px-3 py-4 text-base font-bold text-[#B87333] hover:text-white"
            >
              BOOK YOUR TIME NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;