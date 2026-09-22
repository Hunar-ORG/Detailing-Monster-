import React from 'react';
import { studioConfig } from '../data/studioConfig';

const LocationMapPanel: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#666970] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
      {/* ── Technical Minimalist Map SVG Background ─────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        viewBox="0 0 600 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background Canvas */}
        <rect width="600" height="420" fill="#696c73" />

        {/* Top-Right Topographic Elevation Contours */}
        <g stroke="#53565e" strokeWidth="1.2" opacity="0.65" fill="none">
          <path d="M 280,0 Q 320,30 360,25 T 450,45 T 550,20 T 600,35" />
          <path d="M 270,15 Q 315,45 370,40 T 470,60 T 560,45 T 600,55" />
          <path d="M 260,35 Q 310,65 385,55 T 490,80 T 570,75 T 600,85" />
          <path d="M 255,55 Q 310,85 400,75 T 510,105 T 580,100 T 600,115" />
          <path d="M 250,75 Q 320,105 420,95 T 530,130 T 600,140" />
        </g>

        {/* Spiderweb / Radial Road Network Centered at (295, 230) */}
        <g stroke="#26282e" strokeWidth="1.6" opacity="0.9" fill="none">
          {/* Concentric rings */}
          <circle cx="295" cy="230" r="28" strokeWidth="1.8" />
          <circle cx="295" cy="230" r="58" strokeWidth="1.6" />
          <circle cx="295" cy="230" r="92" strokeWidth="1.6" />
          <circle cx="295" cy="230" r="130" strokeWidth="1.4" />
          <circle cx="295" cy="230" r="175" strokeWidth="1.2" />
          <circle cx="295" cy="230" r="225" strokeWidth="1.2" />

          {/* Radiating spoke highways */}
          <line x1="295" y1="230" x2="295" y2="420" strokeWidth="2.4" />
          <line x1="295" y1="230" x2="295" y2="0" strokeWidth="2.2" />
          <line x1="295" y1="230" x2="600" y2="230" strokeWidth="2.4" />
          <line x1="295" y1="230" x2="0" y2="230" strokeWidth="2.2" />
          <line x1="295" y1="230" x2="520" y2="420" strokeWidth="2" />
          <line x1="295" y1="230" x2="70" y2="420" strokeWidth="2" />
          <line x1="295" y1="230" x2="110" y2="40" strokeWidth="2" />
          <line x1="295" y1="230" x2="480" y2="45" strokeWidth="2" />
          <line x1="295" y1="230" x2="0" y2="120" strokeWidth="1.8" />
          <line x1="295" y1="230" x2="600" y2="140" strokeWidth="1.8" />
          <line x1="295" y1="230" x2="0" y2="340" strokeWidth="1.8" />
          <line x1="295" y1="230" x2="600" y2="320" strokeWidth="1.8" />

          {/* Secondary cross-streets and geometric grid segments */}
          <path d="M 180,140 L 410,140 L 410,320 L 180,320 Z" strokeWidth="1.4" />
          <path d="M 120,80 L 470,80 L 470,380 L 120,380 Z" strokeWidth="1.2" />
          <line x1="410" y1="140" x2="550" y2="140" strokeWidth="1.5" />
          <line x1="470" y1="200" x2="580" y2="200" strokeWidth="1.5" />
          <line x1="470" y1="280" x2="550" y2="280" strokeWidth="1.5" />
          <line x1="550" y1="140" x2="550" y2="340" strokeWidth="1.8" />
        </g>

        {/* Red Location Pin at (295, 230) */}
        <g transform="translate(283, 204)">
          <ellipse cx="12" cy="27" rx="6" ry="2.5" fill="#141416" opacity="0.45" />
          <path
            d="M12 0C6.5 0 2 4.5 2 10C2 17.5 12 28 12 28C12 28 22 17.5 22 10C22 4.5 17.5 0 12 0Z"
            fill="#e31b23"
          />
          <circle cx="12" cy="9.5" r="3.5" fill="#111114" />
        </g>
      </svg>

      {/* ── Overlay Location Information Card ────────────────────────────── */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 bg-[#0d0d10]/95 border border-white/[0.08] rounded-[6px] p-4 sm:p-5 shadow-2xl max-w-[calc(100%-2rem)] sm:max-w-[270px] text-left backdrop-blur-sm">
        <h3 className="text-white font-bold text-[14px] sm:text-[15px] tracking-tight">
          {studioConfig.name}
        </h3>
        <p className="text-[#a1a1aa] text-[11px] sm:text-[11.5px] leading-snug mt-1.5">
          {studioConfig.street},<br />
          {studioConfig.locality},<br />
          {studioConfig.city}, {studioConfig.state} - {studioConfig.postalCode}
        </p>
        <p className="text-[#e31b23] text-[10.5px] font-medium leading-snug mt-1">
          {studioConfig.landmark}
        </p>

        {/* Timings */}
        <div className="flex items-center gap-2 mt-3 text-[#d4d4d8] text-[11px]">
          <svg
            className="w-3.5 h-3.5 text-[#e31b23] flex-shrink-0"
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
        <div className="flex items-center gap-2 mt-1.5 text-[#d4d4d8] text-[11px]">
          <svg
            className="w-3.5 h-3.5 text-[#e31b23] flex-shrink-0"
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
          className="mt-4 w-full min-h-[42px] flex items-center justify-center bg-[#e31b23] hover:bg-[#c8171e] text-white text-[10.5px] font-bold tracking-[0.1em] uppercase py-2.5 px-3 rounded-[3px] text-center transition-colors shadow-sm cursor-pointer"
          id="get-directions-btn"
        >
          GET DIRECTIONS
        </a>
      </div>
    </div>
  );
};

export default LocationMapPanel;
