import React from 'react';

export interface PPFZoneData {
  badge: string;
  title: string;
  description: string;
}

interface PPFZoneCardProps {
  zone: PPFZoneData;
}

const PPFZoneCard: React.FC<PPFZoneCardProps> = ({ zone }) => (
  <div className="flex items-center gap-4 bg-[#0D0D0F] border border-white/[0.08] rounded-[5px] px-4 py-4 hover:border-white/[0.14] transition-colors duration-300">
    {/* Green circular badge */}
    <div
      className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      <span className="text-[#050505] text-[12px] font-extrabold leading-none">
        {zone.badge}
      </span>
    </div>
    {/* Text */}
    <div className="min-w-0">
      <p className="text-[13.5px] font-semibold text-[#FFFFFF] leading-snug mb-0.5">
        {zone.title}
      </p>
      <p className="text-[12.5px] text-[#A1A1AA] leading-relaxed">
        {zone.description}
      </p>
    </div>
  </div>
);

interface PPFZoneListProps {
  zones: PPFZoneData[];
}

export const PPFZoneList: React.FC<PPFZoneListProps> = ({ zones }) => (
  <div className="flex flex-col gap-3">
    {zones.map((zone) => (
      <PPFZoneCard key={zone.badge} zone={zone} />
    ))}
  </div>
);

export default PPFZoneCard;
