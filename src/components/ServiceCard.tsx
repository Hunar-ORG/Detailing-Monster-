import React from 'react';
import type { ServiceCard as ServiceCardType } from '../types';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  card: ServiceCardType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  return (
    <article className="flex flex-col gap-5 bg-[#0f0f12] border border-white/[0.08] rounded-[5px] p-6 hover:border-white/[0.14] transition-colors duration-300">
      {/* Icon badge */}
      <div className="w-10 h-10 flex items-center justify-center bg-[#e31b23]/10 border border-[#e31b23]/20 rounded-[4px] flex-shrink-0">
        <ServiceIcon type={card.icon} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[14.5px] font-semibold text-text-primary mb-2 leading-snug">
          {card.title}
        </h3>
        <p className="text-[13px] text-text-secondary leading-[1.6]">
          {card.description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
