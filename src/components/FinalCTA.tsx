import React from 'react';
import { PrimaryButton, SecondaryButton } from './ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden w-full py-24 sm:py-28 lg:py-32 bg-[#050505] flex items-center justify-center text-center scroll-mt-16"
      aria-labelledby="final-cta-heading"
    >
      {/* ── Cinematic Automotive Background Image ───────────────────────── */}
      <img
        src="/final-cta-bg.jpg"
        alt="DETAILING MONSTER detailing cleanroom studio background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        loading="lazy"
        decoding="async"
      />

      {/* ── Dark Overlays for Strong Text Readability & Edge Vignette ────── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-[#050505]/40 to-[#050505]/90 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Centered Content Container ───────────────────────────────────── */}
      <div className="container-site relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Micro label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#25D366] flex-shrink-0" aria-hidden="true" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#A1A1AA] uppercase">
            UNCOMPROMISING RESULTS
          </span>
        </div>

        {/* Main CTA Heading — Two lines */}
        <h2
          id="final-cta-heading"
          className="text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4 max-w-2xl mx-auto"
        >
          Make your car look<br />
          unforgettable.
        </h2>

        {/* Supporting brand promise */}
        <p className="text-[13.5px] sm:text-[14px] text-[#a1a1aa] max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
          Precision detailing. Premium protection. Obsessive attention to detail.
        </p>

        {/* Two Horizontally Aligned Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <PrimaryButton
            href="#reserve"
            id="cta-book-btn"
            className="w-full sm:w-auto"
          >
            BOOK YOUR APPOINTMENT
          </PrimaryButton>
          <SecondaryButton
            href="#services"
            id="cta-services-btn"
            className="w-full sm:w-auto"
          >
            EXPLORE SERVICES
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
