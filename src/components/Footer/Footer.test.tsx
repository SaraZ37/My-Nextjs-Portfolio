// Footer.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer/Footer'; // تأكدي من مسار الاستيراد الصحيح

describe('Footer Component', () => {
  it('يجب أن يعرض حقوق النشر بشكل صحيح مع السنة الحالية واسم المالك', () => {
    // 1. عرض المكون في بيئة الاختبار
    render(<Footer />);

    // 2. تحديد السنة الحالية لتوقع النص المطلوب (مثلاً 2025)
    const currentYear = new Date().getFullYear();

    // 3. بناء النص الكامل المتوقع
    // نستخدم تعبيرًا منتظمًا (Regular Expression) لمرونة أكبر في البحث عن النص.
    // نبحث عن نص يبدأ بـ © يليه السنة الحالية ثم اسم المالك.
    const expectedTextRegex = new RegExp(`© ${currentYear} Sarah Al Zeer\. All rights reserved\.`, 'i');

    // 4. التحقق من أن العنصر الذي يحتوي على النص المتوقع موجود في الوثيقة
    expect(screen.getByText(expectedTextRegex)).toBeInTheDocument();

    // اختبار إضافي: التأكد من أن المكون هو بالفعل عنصر تذييل HTML (<footer>)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});