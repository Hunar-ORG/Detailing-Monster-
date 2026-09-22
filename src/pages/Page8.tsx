import React from 'react';
import FinalCTA from '../components/FinalCTA';

/**
 * Page8Content — Section 13 (Final CTA).
 * The closing call-to-action before Section 14 (Footer).
 */
export const Page8Content: React.FC = () => {
  return <FinalCTA />;
};

const Page8: React.FC = () => {
  return (
    <main className="pt-[52px]">
      <Page8Content />
    </main>
  );
};

export default Page8;
