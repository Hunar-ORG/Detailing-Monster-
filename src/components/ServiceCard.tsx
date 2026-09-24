import React from 'react';
import type { ServiceCard as ServiceCardType } from '../types';

interface ServiceCardProps {
  card: ServiceCardType;
}

const serviceCardIcons: Record<string, { src: string; alt: string; className?: string }> = {
  'paint-correction': { src: '/paint.png', alt: 'Paint Correction' },
  'ceramic-protection': { src: '/ceramic.png', alt: 'Ceramic Protection' },
  'ppf': { src: '/cuttter_emoji.png', alt: 'PPF Install', className: 'ppf-install-icon' },
  'interior': { src: '/vaccum.png', alt: 'Interior Restoration' },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const iconData = serviceCardIcons[card.icon];

  return (
    <article className="flex flex-col justify-between bg-[#0D0D0F] border border-white/[0.08] rounded-[6px] p-7 sm:p-8 lg:p-7 xl:p-8 min-h-[250px] sm:min-h-[270px] lg:min-h-[295px] xl:min-h-[310px] hover:border-white/[0.16] transition-all duration-300">
      {/* Icon */}
      {iconData && (
        <img
          src={iconData.src}
          alt={iconData.alt}
          className={`h-[125px] w-auto max-w-full object-contain object-left select-none self-start ${iconData.className || ''}`}
          loading="lazy"
        />
      )}

      {/* Content */}
      <div className="mt-8 sm:mt-10 lg:mt-8">
        <h3 className="text-[15px] sm:text-[16px] font-semibold text-white mb-2.5 leading-snug">
          {card.title}
        </h3>
        <p className="text-[13px] sm:text-[13.5px] text-[#A1A1AA] leading-[1.65]">
          {card.description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
