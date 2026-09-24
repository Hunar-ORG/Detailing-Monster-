import React from 'react';
import PortfolioSection from '../components/PortfolioSection';

/**
 * Page5Content — Section 08 (Our Portfolio).
 * Can be embedded in HomePage or viewed standalone.
 */
export const Page5Content: React.FC = () => {
  return (
    <>
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
