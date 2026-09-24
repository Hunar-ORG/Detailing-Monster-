import React from 'react';
import StudioAccessSection from '../components/StudioAccessSection';

/**
 * Page7Content — Section 11 (Studio Access).
 * Can be embedded in HomePage or viewed standalone at /location.
 */
export const Page7Content: React.FC = () => {
  return (
    <>
      {/* Section 11 — Studio Access */}
      <StudioAccessSection />
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
