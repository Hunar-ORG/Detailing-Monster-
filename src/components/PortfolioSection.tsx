import React from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioVehicles } from '../data/page5Data';

const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="container-site py-20 lg:py-24 scroll-mt-16"
      aria-labelledby="portfolio-heading"
    >
      {/* ── Two-Column Intro Header ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-12">
        {/* Left column: Micro label + Two-line heading */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#25D366] flex-shrink-0" aria-hidden="true" />
            <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#A1A1AA] uppercase">
              OUR PORTFOLIO
            </span>
          </div>
          <h2
            id="portfolio-heading"
            className="text-[clamp(2rem,3.6vw,2.8rem)] font-bold text-white tracking-[-0.025em] leading-[1.1]"
          >
            Cars we’ve had the<br />
            privilege to perfect.
          </h2>
        </div>

        {/* Right column: Muted paragraph description */}
        <div className="flex lg:justify-end">
          <p className="text-[13.5px] sm:text-[14px] text-[#8a8a94] leading-[1.65] max-w-[440px]">
            A showcase of exotic machinery, high-performance daily drivers, and
            precious collector classics treated to the ultimate DETAILING MONSTER
            detailing standard.
          </p>
        </div>
      </div>

      {/* ── 3x2 Grid (6 items) ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {portfolioVehicles.map((vehicle) => (
          <PortfolioCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
