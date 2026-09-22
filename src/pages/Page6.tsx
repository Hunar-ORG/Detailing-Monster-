import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import ReservationSection from '../components/ReservationSection';

/**
 * Page6Content — Section 09 (Testimonials) & Section 10 (Reserve Your Detail).
 * Can be embedded in HomePage or viewed standalone at /reserve or /testimonials.
 */
export const Page6Content: React.FC = () => {
  return (
    <>
      {/* Section 09 — Testimonials */}
      <TestimonialsSection />

      {/* Section 10 — Reserve Your Detail (with graphite background) */}
      <ReservationSection />
    </>
  );
};

const Page6: React.FC = () => {
  return (
    <main className="pt-[52px]">
      <Page6Content />
    </main>
  );
};

export default Page6;
