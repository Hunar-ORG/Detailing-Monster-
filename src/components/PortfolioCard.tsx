import React from 'react';
import type { PortfolioVehicle } from '../types';

interface PortfolioCardProps {
  vehicle: PortfolioVehicle;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ vehicle }) => {
  return (
    <article className="group relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#0d0d10] aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] flex flex-col justify-end transition-all duration-300 hover:border-white/[0.18]">
      {/* Background Photography */}
      <img
        src={vehicle.image}
        alt={`${vehicle.vehicle} — ${vehicle.service}`}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        loading="lazy"
        decoding="async"
      />

      {/* Dark gradient overlay toward bottom */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#09090b]/95 via-[#09090b]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content overlay inside the photo at bottom-left */}
      <div className="relative z-10 p-5 sm:p-6 pointer-events-none">
        <h3 className="text-white font-bold text-[15px] sm:text-[17px] tracking-[0.01em] leading-snug">
          {vehicle.vehicle}
        </h3>
        <p className="text-[#a1a1aa] text-[12px] sm:text-[12.5px] mt-1 font-normal tracking-[0.01em]">
          {vehicle.service}
        </p>
      </div>
    </article>
  );
};

export default PortfolioCard;
