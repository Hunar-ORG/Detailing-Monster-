import React from 'react';
import { studioConfig } from '../data/studioConfig';

const StudioImagePanel: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-white/[0.08] aspect-[4/3] sm:aspect-[16/11] bg-[#0d0d10] flex flex-col justify-end group">
      {/* Studio Photograph */}
      <img
        src={studioConfig.facilityImage}
        alt="DETAILING MONSTER Cleanroom Detailing Lab facility interior"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
      />

      {/* Subtle bottom gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Text overlay bottom-left */}
      <div className="relative z-10 p-5 sm:p-6 pointer-events-none text-left">
        <h3 className="text-white font-bold text-[15px] sm:text-[16px] tracking-[0.01em] leading-snug">
          {studioConfig.facilityTitle}
        </h3>
        <p className="text-[#d4d4d8] text-[12px] sm:text-[12.5px] mt-1 max-w-[420px] leading-relaxed">
          {studioConfig.facilityDescription}
        </p>
      </div>
    </div>
  );
};

export default StudioImagePanel;
