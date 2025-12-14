import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// نفترض أن مسار الاستيراد للمكون هو '.. /page' إذا كان ملف الاختبار بجوار ملف المكون
import ServicesPage from './Services';
describe('ServicesPage Component Tests', () => {
  
  // اختبار للتأكد من عرض العناصر الأساسية عند التحميل
  test('يجب أن يعرض العنوان الرئيسي ويحتوي على القائمة المنسدلة للخدمات', () => {
    render(<ServicesPage />);

    // 1. التحقق من وجود العنوان الرئيسي (المكتوب جزئيًا بالنحاسي)
    // نبحث عن جزء "Professional Services" الذي يظهر في العنوان
    expect(screen.getByRole('heading', { 
        name: /Our Professional Services & Packages/i 
    })).toBeInTheDocument();

    // 2. التحقق من وجود القائمة المنسدلة (باستخدام الدور "combobox" أو "textbox" للعناصر المحددة)
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
    
    // 3. التحقق من أن الخدمة الافتراضية "Reels Filming & Production" معروضة
    expect(screen.getByRole('heading', { 
        name: /Reels Filming & Production/i 
    })).toBeInTheDocument();

    // 4. التحقق من عرض الباقتين (Basic و Advanced) للخدمة الافتراضية
    expect(screen.getByText(/Basic Package/i)).toBeInTheDocument();
    expect(screen.getByText(/Advanced Package/i)).toBeInTheDocument();
  });

  // اختبار للتأكد من أن القائمة المنسدلة تحتوي على جميع خيارات الخدمات الأربعة
  test('يجب أن تحتوي القائمة المنسدلة على 4 خيارات خدمات متاحة', () => {
    render(<ServicesPage />);

    // نستخدم getAllByRole للبحث عن جميع خيارات "option" داخل عنصر الـ "combobox"
    const serviceOptions = screen.getAllByRole('option');
    
    // التحقق من أن عدد الخيارات يطابق عدد الخدمات في servicesData (وهو 4)
    expect(serviceOptions).toHaveLength(5);

    // التأكد من أن جميع أسماء الخدمات موجودة كخيارات
    expect(screen.getByRole('option', { name: /Social Media Management/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Google Ads Management/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Data Analysis & Insight/i })).toBeInTheDocument();
    // أضف هذا السطر بعد السطر 42
expect(screen.getByRole('option', { name: /Web Development & Design/i })).toBeInTheDocument();
  });
});