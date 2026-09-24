import React from 'react';
import { serviceCards } from '../data/siteData';
import ServiceCard from './ServiceCard';

const ServiceIntro: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
    {/* Left: heading */}
    <div>
      <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold text-white leading-[1.1] tracking-[-0.02em]">
        Every surface. Every detail.<br />
        No compromise.
      </h2>
    </div>

    {/* Right: description */}
    <div className="flex items-start lg:items-center">
      <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[380px]">
        From precision paint correction to advanced composite coatings, every process
        is executed inside our climate-controlled studio with dedicated lighting.
      </p>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="container-site pt-20 pb-20 sm:pb-24 scroll-mt-16"
      aria-label="Services Overview"
    >
      {/* Section label */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-2.5 h-2.5 bg-[#25D366] flex-shrink-0" aria-hidden="true" />
        <span className="text-micro text-[#A1A1AA] tracking-[0.18em]">OUR SERVICES</span>
      </div>

      {/* Intro */}
      <ServiceIntro />

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5 xl:gap-6">
        {serviceCards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
