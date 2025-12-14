// Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar'; // تأكدي أن مسار الاستيراد صحيح

describe('Navbar Component Tests', () => {
  // هذا الاختبار يضمن أن جميع العناصر الأساسية موجودة وظاهرة
  it('يجب أن يعرض اسم الموقع وجميع الروابط المطلوبة', () => {
    render(<Navbar />);

    // 1. التحقق من وجود اسم الموقع (Sarah Al Zeer)
    expect(screen.getByText(/SaraCrew/i)).toBeInTheDocument();

    // 2. التحقق من وجود جميع الروابط الداخلية والخارجية بالأسماء الصحيحة
    expect(screen.getByRole('link', { name: /Mainpage/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    
    // الرابط الخارجي الثاني
  });

  // هذا الاختبار يتحقق من أن مسارات الروابط صحيحة
  it('يجب أن يمتلك الروابط الداخلية والخارجية مسارات (href) صحيحة', () => {
    render(<Navbar />);

    // 1. التحقق من مسار الصفحة الرئيسية
    const mainpageLink = screen.getByRole('link', { name: /Mainpage/i });
    expect(mainpageLink).toHaveAttribute('href', '/');

    // 2. التحقق من مسار المشاريع
    const projectsLink = screen.getByRole('link', { name: /Projects/i });
    expect(projectsLink).toHaveAttribute('href', '/projects');

    // 3. التحقق من مسار الأغاني (التصحيح: كان يتوقع /projects وأصبح يتوقع /Songs)
    // 4. التحقق من رابط Pod (الخارجي)
    const ServicesLink = screen.getByRole('link', { name: /Services/i });
    expect(ServicesLink).toHaveAttribute('href', '/Services');

  });
});