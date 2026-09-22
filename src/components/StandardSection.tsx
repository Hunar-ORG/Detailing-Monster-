import React from 'react';
import StandardCard from './StandardCard';
import { standardPrinciples } from '../data/page5Data';

const StandardSection: React.FC = () => {
  return (
    <section
      id="standard"
      className="container-site py-20 lg:py-24 scroll-mt-16"
      aria-labelledby="standard-heading"
    >
      {/* Backward compatible anchor alias */}
      <span id="about" className="scroll-mt-16" aria-hidden="true" />

      {/* ── Centered Header ─────────────────────────────────────────────── */}
      <div className="text-center mb-12 sm:mb-14 max-w-4xl mx-auto">
        {/* Micro label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#e31b23] flex-shrink-0" aria-hidden="true" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#8a8a94] uppercase">
            THE STANDARD
          </span>
        </div>

        {/* Main heading */}
        <h2
          id="standard-heading"
          className="text-[clamp(1.75rem,3.1vw,2.65rem)] font-bold text-white tracking-[-0.025em] leading-[1.15] mb-4 md:whitespace-nowrap"
        >
          Exceptional cars deserve exceptional care.
        </h2>

        {/* Supporting description */}
        <p className="text-[13.5px] sm:text-[14px] text-[#8a8a94] leading-[1.7] max-w-[580px] mx-auto">
          At DETAILING MONSTER, detailing is not just a cleaning service. It's a high-level craft
          performed by dedicated specialists with zero room for error.
        </p>
      </div>

      {/* ── 4 Standard Cards Grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {standardPrinciples.map((principle) => (
          <StandardCard key={principle.id} principle={principle} />
        ))}
      </div>
    </section>
  );
};

export default StandardSection;
