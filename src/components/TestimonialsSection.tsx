import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/page6Data';

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="container-site py-20 lg:py-24 scroll-mt-16"
      aria-labelledby="testimonials-heading"
    >
      {/* ── Centered Header ─────────────────────────────────────────────── */}
      <div className="text-center mb-12 sm:mb-14 max-w-4xl mx-auto">
        {/* Micro label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#e31b23] flex-shrink-0" aria-hidden="true" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#8a8a94] uppercase">
            TESTIMONIALS
          </span>
        </div>

        {/* Main heading — single line on desktop */}
        <h2
          id="testimonials-heading"
          className="text-[clamp(1.75rem,3.1vw,2.65rem)] font-bold text-white tracking-[-0.025em] leading-[1.15] md:whitespace-nowrap"
        >
          Trusted by people who care about their cars.
        </h2>
      </div>

      {/* ── 3 Testimonial Cards Grid ────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
