import React from 'react';
import { studioConfig } from '../data/studioConfig';

const LocationMapPanel: React.FC = () => {
  return (
    <div className="relative w-full min-w-0 max-w-full overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#111113] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center group">
      {/* ── Actual Google Maps Screenshot Image Link ─────────────────────── */}
      <a
        href={studioConfig.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 w-full h-full block cursor-pointer z-0"
        aria-label="Open Detailing Monster on Google Maps"
        id="location-map-link"
      >
        <img
          src="/maps.png"
          alt="Detailing Monster studio location on Google Maps"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] select-none"
          loading="lazy"
        />
      </a>

      {/* ── Overlay Location Information Card ────────────────────────────── */}
      <div className="absolute top-2.5 left-2.5 sm:top-5 sm:left-5 z-10 bg-[#0D0D0F]/95 border border-white/[0.08] rounded-[5px] sm:rounded-[6px] p-2.5 min-[360px]:p-3 sm:p-5 shadow-2xl w-[clamp(170px,52%,215px)] sm:w-auto sm:max-w-[270px] text-left backdrop-blur-sm pointer-events-auto">
        <h3 className="text-white font-bold text-[clamp(11px,2.9vw,12.5px)] sm:text-[15px] tracking-tight leading-tight">
          {studioConfig.name}
        </h3>
        <p className="text-[#a1a1aa] text-[clamp(9px,2.3vw,10px)] sm:text-[11.5px] leading-tight sm:leading-snug mt-1 sm:mt-1.5">
          {studioConfig.street},<br />
          {studioConfig.locality},<br />
          {studioConfig.city}, {studioConfig.state} - {studioConfig.postalCode}
        </p>
        <p className="text-[#25D366] text-[clamp(8.5px,2.1vw,9.5px)] sm:text-[10.5px] font-medium leading-tight sm:leading-snug mt-0.5 sm:mt-1">
          {studioConfig.landmark}
        </p>

        {/* Timings */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-3 text-[#d4d4d8] text-[clamp(9px,2.3vw,10.2px)] sm:text-[11px] leading-tight">
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25D366] flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{studioConfig.hours}</span>
        </div>

        {/* Phone — 1-Tap Calling */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5 text-[#d4d4d8] text-[clamp(9px,2.3vw,10.2px)] sm:text-[11px] leading-tight">
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25D366] flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <a
            href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}
            className="hover:text-white transition-colors"
          >
            {studioConfig.phone}
          </a>
        </div>

        {/* CTA Button */}
        <a
          href={studioConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 sm:mt-4 w-full h-[28px] min-[360px]:h-[30px] sm:h-auto sm:min-h-[42px] flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-[#050505] text-[clamp(8.5px,2.1vw,9.5px)] sm:text-[10.5px] font-extrabold tracking-[0.08em] sm:tracking-[0.1em] uppercase py-1 sm:py-2.5 px-2 sm:px-3 rounded-[3px] text-center transition-colors shadow-sm cursor-pointer select-none leading-none"
          id="get-directions-btn"
        >
          GET DIRECTIONS
        </a>
      </div>
    </div>
  );
};

export default LocationMapPanel;
