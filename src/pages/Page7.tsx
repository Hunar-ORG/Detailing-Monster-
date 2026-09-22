import React from 'react';
import StudioAccessSection from '../components/StudioAccessSection';
import FAQSection from '../components/FAQSection';

/**
 * Page7Content — Section 11 (Studio Access) & Section 12 (Common Inquiries).
 * Can be embedded in HomePage or viewed standalone at /location or /faq.
 */
export const Page7Content: React.FC = () => {
  return (
    <>
      {/* Section 11 — Studio Access */}
      <StudioAccessSection />

      {/* Section 12 — Common Inquiries */}
      <FAQSection />
    </>
  );
};

const Page7: React.FC = () => {
  return (
    <main className="pt-[52px]">
      <Page7Content />
    </main>
  );
};

export default Page7;
