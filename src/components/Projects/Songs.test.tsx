// Songs.test.tsx
import { render, screen } from '@testing-library/react';
import Songs from './Songs'; // تأكدي من المسار الصحيح

describe('Songs Component', () => {
  // أضيفي حالة اختبار واحدة للتأكد من أن المكون يتم عرضه بنجاح
  test('should render the Songs component without crashing', () => {
    render(<Songs />);
    // يمكنك هنا التأكد من وجود نص رئيسي في المكون
     expect(screen.getByText(/My Sonic Portfolio/i)).toBeInTheDocument(); 
  });
});