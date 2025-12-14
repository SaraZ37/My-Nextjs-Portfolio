import React from 'react';

// === لوحة الألوان (Nordic Copper Palette) ===
// Accent (نحاسي): #B87333
// Deep Charcoal (فاحم): #1E1E1E
// White: #FFFFFF

const Footer: React.FC = () => {
  return (
    // الخلفية: الرمادي الفاحم (#1E1E1E)، نص أبيض
    <footer className="bg-[#1E1E1E] py-6">
      <div className="container mx-auto px-6 lg:px-6">

        {/* حقوق النشر - نص رمادي فاتح */}
        <div className="text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Sarah Al Zeer. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;