import React from 'react';
import StandardSection from '../components/StandardSection';
import PortfolioSection from '../components/PortfolioSection';

/**
 * Page5Content — Section 07 (The Standard) & Section 08 (Our Portfolio).
 * Can be embedded in HomePage or viewed standalone.
 */
export const Page5Content: React.FC = () => {
  return (
    <>
      {/* Section 07 — The Standard */}
      <StandardSection />

      {/* Subtle section transition boundary */}
      <div className="container-site">
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* Section 08 — Our Portfolio */}
      <PortfolioSection />
    </>
  );
};

const Page5: React.FC = () => {
  return (
    <main className="pt-[52px]">
      <Page5Content />
    </main>
  );
};

export default Page5;
