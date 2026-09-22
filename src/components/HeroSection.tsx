import React from 'react';
import { PrimaryButton, SecondaryButton } from './ui/Button';

const HeroCTA: React.FC = () => (
  <div className="flex flex-col sm:flex-row gap-3 mt-8">
    <PrimaryButton href="#reserve" id="hero-book-btn" className="w-full sm:w-auto">
      BOOK YOUR DETAIL
    </PrimaryButton>
    <SecondaryButton href="#services" id="hero-explore-btn" className="w-full sm:w-auto">
      EXPLORE SERVICES
    </SecondaryButton>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[520px] sm:min-h-[600px] flex flex-col justify-center pt-[52px] overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-car.jpg)' }}
        role="img"
        aria-label="Dark exotic supercar in a premium automotive studio"
      />

      {/* Dark overlay — left-weighted gradient so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/95 via-[#09090b]/80 to-[#09090b]/40" />
      {/* Bottom fade into page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#09090b]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-site py-14 sm:py-20">
        {/* Micro label */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2.5 h-2.5 bg-[#e31b23] flex-shrink-0" aria-hidden="true" />
          <span className="text-micro text-[#8a8a94] tracking-[0.18em]">PREMIUM AUTOMOTIVE DETAILING</span>
        </div>

        {/* Main heading */}
        <h1 className="text-[clamp(2.1rem,6vw,3.6rem)] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-5 max-w-[520px]">
          Precision Care for<br />Exceptional Cars
        </h1>

        {/* Description */}
        <p className="text-[14.5px] text-[#8a8a94] leading-[1.65] max-w-[400px]">
          Professional detailing and paint protection engineered to preserve the
          finish, character, and value of your vehicle in Mysuru.
        </p>

        {/* CTA buttons */}
        <HeroCTA />
      </div>
    </section>
  );
};

export default HeroSection;
