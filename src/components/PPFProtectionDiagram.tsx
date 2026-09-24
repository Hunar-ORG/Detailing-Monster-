import React from 'react';

/**
 * PPFProtectionDiagram
 *
 * A minimal dark technical schematic panel showing a subtle car side-profile
 * silhouette outline with a zone legend. Intentionally low-contrast and
 * restrained — not a colorful infographic.
 */
const PPFProtectionDiagram: React.FC = () => (
  <div
    className="relative w-full bg-[#0d0d10] border border-white/[0.08] rounded-[8px] overflow-hidden min-h-[260px] sm:min-h-[320px]"
    aria-label="PPF protection zone diagram — side profile schematic"
    role="img"
  >
    {/* SVG car silhouette — minimal low-contrast technical outline */}
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 pb-10">
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[480px] opacity-[0.28]"
        aria-hidden="true"
      >
        {/* Car body outline — one continuous path, minimal detail */}
        <path
          d="
            M 60 140
            L 60 120
            Q 65 100 90 88
            L 160 72
            Q 195 54 250 50
            L 340 50
            Q 380 50 415 62
            L 470 82
            Q 510 92 530 110
            L 545 125
            L 545 140
            Z
          "
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Windshield */}
        <path
          d="M 165 72 L 200 52 L 280 50 L 260 72 Z"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        {/* Rear glass */}
        <path
          d="M 330 50 L 370 51 L 400 68 L 345 72 Z"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        {/* Roofline */}
        <path
          d="M 160 72 L 260 72 L 345 72 L 400 68"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        {/* Front wheel arch */}
        <circle cx="130" cy="140" r="26" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="130" cy="140" r="14" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4" />
        {/* Rear wheel arch */}
        <circle cx="450" cy="140" r="26" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="450" cy="140" r="14" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4" />
        {/* Ground line */}
        <line x1="60" y1="166" x2="545" y2="166" stroke="white" strokeWidth="0.6" opacity="0.2" />
        {/* Front bumper detail */}
        <path d="M 60 120 Q 55 128 56 140 L 56 145" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Rear bumper detail */}
        <path d="M 545 125 Q 549 132 548 140 L 548 145" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Door line */}
        <path d="M 175 140 L 175 80 M 330 140 L 330 76" stroke="white" strokeWidth="0.7" fill="none" opacity="0.25" />
        {/* Side mirror */}
        <rect x="152" y="82" width="10" height="6" rx="1" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5" />
      </svg>
    </div>

    {/* Legend — bottom-left, subtle and technical */}
    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 flex flex-wrap items-center gap-3 sm:gap-5">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 bg-[#25D366] rounded-[1px] flex-shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-medium tracking-[0.1em] text-[#A1A1AA] uppercase">
          Zone A (Critical)
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 bg-[#128C7E] rounded-[1px] flex-shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-medium tracking-[0.1em] text-[#A1A1AA] uppercase">
          Zone B (High Impact)
        </span>
      </div>
    </div>
  </div>
);

export default PPFProtectionDiagram;
