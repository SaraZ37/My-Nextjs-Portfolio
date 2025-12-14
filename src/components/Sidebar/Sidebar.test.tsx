import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar'; // Ensure this import path is correct

describe('Sidebar Component Tests', () => {

  // Test 1: Verifies the presence of the main support title and descriptive text
  test('should render the Sidebar with correct support content', () => {
    render(<Sidebar />);

    // 1. Check for the main heading "Support Our Mission" (H2)
    expect(screen.getByRole('heading', {
        name: /Support Our Mission/i,
        level: 2
    })).toBeInTheDocument();

    // 2. Check for the main descriptive text
    const mainText = /We are currently seeking critical funding to finalize production on our new feature film. Every contribution, big or small, helps us take a significant step closer to bringing this vision to the screen. Choose a support tier and become part of the SaraCrew legacy!/i;
    expect(screen.getByText(mainText)).toBeInTheDocument();
    
    // 3. Check for the final note about donations
    const finalNote = /All donations are final and contribute directly to the film production budget \(equipment, cast, and post-production\)\./i;
    expect(screen.getByText(finalNote)).toBeInTheDocument();
  });

  // Test 2: Verifies the presence of all four support tiers and their corresponding buttons/links
  test('should display four support tiers and their funding links', () => {
    render(<Sidebar />); 

    // 1. Check for four support tier headings (H3)
    const tierHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(tierHeadings).toHaveLength(4);

    // 2. Check for specific tier titles and amounts
    expect(screen.getByText(/Digital Supporter/i)).toBeInTheDocument();
    
   expect(screen.getByRole('heading', { name: /^\$50$/i, level: 3 })).toBeInTheDocument(); 
    expect(screen.getByRole('heading', { name: /^\$100$/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^\$500$/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^\$1000$/i, level: 3 })).toBeInTheDocument();

    // 3. Check for four "Fund This Tier" buttons/links
    const fundLinks = screen.getAllByRole('link', { name: /Fund This Tier/i });
    expect(fundLinks).toHaveLength(4);

    // 4. Check the href for one of the links (ensuring the dynamic tier is included)
    const specificFundLink = fundLinks[0];
    expect(specificFundLink).toHaveAttribute('href', expect.stringContaining('#donate-checkout?tier=')); 
  });
});
