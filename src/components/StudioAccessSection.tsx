import React from 'react';
import LocationMapPanel from './LocationMapPanel';
import StudioImagePanel from './StudioImagePanel';

const StudioAccessSection: React.FC = () => {
  return (
    <section
      id="studio"
      className="container-site py-20 lg:py-24 scroll-mt-16"
      aria-labelledby="studio-access-heading"
    >
      {/* Anchor alias for backwards compatibility */}
      <span id="location" className="scroll-mt-16" aria-hidden="true" />

      {/* ── Two-Column Intro Header ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
        {/* Left Column: Micro label + Main heading */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#25D366] flex-shrink-0" aria-hidden="true" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#A1A1AA] uppercase">
              STUDIO ACCESS
            </span>
          </div>
          <h2
            id="studio-access-heading"
            className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold text-white tracking-[-0.025em] leading-[1.1] md:whitespace-nowrap"
          >
            Visit DETAILING MONSTER.
          </h2>
        </div>

        {/* Right Column: Facility Description */}
        <div className="flex lg:justify-end">
          <p className="text-[13.5px] sm:text-[14px] text-[#8a8a94] leading-[1.65] max-w-[430px]">
            Located in Saraswathipuram, Mysuru, near the Central Library. Our dust-free
            facility is open to registered appointments and walk-in consultations.
          </p>
        </div>
      </div>

      {/* ── Matched Visual Panels: Map + Studio Photo ───────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 w-full min-w-0">
        <LocationMapPanel />
        <StudioImagePanel />
      </div>
    </section>
  );
};

export default StudioAccessSection;
