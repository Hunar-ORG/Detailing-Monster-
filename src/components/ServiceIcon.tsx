import React from 'react';

interface ServiceIconProps {
  type: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ type }) => {
  const iconClass = "w-5 h-5 text-[#25D366]";

  switch (type) {
    case 'paint-correction':
      return (
        <img
          src="/paint.png"
          alt="Paint Correction"
          className="h-[30px] sm:h-[32px] w-auto object-contain select-none"
          loading="lazy"
        />
      );
    case 'ceramic-protection':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Water drop / hydrophobic shield */}
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6c0 0-4 3.5-4 6.5a4 4 0 0 0 8 0C16 9.5 12 6 12 6z" />
        </svg>
      );
    case 'ppf':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Layered stacked shield / film layers */}
          <rect x="4" y="8" width="16" height="10" rx="1" />
          <rect x="6" y="5" width="12" height="3" rx="1" />
          <path d="M8 14h8M8 17h5" />
        </svg>
      );
    case 'interior':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Steering wheel */}
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 3v7M5.727 16.5l5.5-3.1M18.273 16.5l-5.5-3.1" />
        </svg>
      );
    default:
      return null;
  }
};

export default ServiceIcon;
