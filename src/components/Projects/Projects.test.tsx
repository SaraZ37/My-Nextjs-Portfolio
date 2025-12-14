// Projects.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../../app/projects/page'; // ⚠️ تأكدي من مسار الاستيراد الصحيح للمكون الرئيسي

// ملاحظة: إذا كان مكون المشاريع (Projects) داخل مجلد components، 
// يجب تغيير مسار الاستيراد أعلاه ليناسب الهيكلية لديكِ.

describe('Projects Component', () => {
  it('يجب أن يعرض صفحة المشاريع بنجاح ويحتوي على عنوان رئيسي', () => {
    // 1. عرض المكون في بيئة الاختبار
    render(<Projects />);

    // 2. التحقق من وجود عنوان H1 أو نص رئيسي في الصفحة
    // افتراضاً أن صفحة المشاريع ستحتوي على العنوان "My Portfolio" أو "Projects"
    
    // يتم البحث عن نص "Projects" (لا يهتم بحالة الأحرف /i)
    const pageHeading = screen.getByRole('heading', { name: /Curated Portfolio/i }); 
    
    // 3. التأكد من أن هذا العنوان موجود في شجرة الـ DOM
    expect(pageHeading).toBeInTheDocument();
  });
});