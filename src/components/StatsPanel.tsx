import React from 'react';
import type { StatItem as StatItemType } from '../types';
import { stats } from '../data/siteData';

interface StatItemProps {
  stat: StatItemType;
  isLast: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ stat, isLast }) => (
  <div className={`flex-1 px-5 py-5 sm:px-7 sm:py-6 relative ${!isLast ? 'sm:border-r border-white/[0.07]' : ''}`}>
    <div className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-[#25D366] leading-none tracking-[-0.02em] mb-2">
      {stat.value}
    </div>
    <div className="text-[10.5px] font-semibold text-text-primary tracking-[0.18em] uppercase mb-1">
      {stat.label}
    </div>
    <div className="text-[12px] text-text-secondary leading-snug">
      {stat.subLabel}
    </div>
  </div>
);

const StatsPanel: React.FC = () => {
  return (
    <div className="container-site relative z-10 -mt-1 pb-0">
      <div className="border border-white/[0.08] rounded-[4px] bg-[#0D0D0F] overflow-hidden">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
