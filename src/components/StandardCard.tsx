import React from 'react';
import type { StandardPrinciple } from '../types';

interface StandardCardProps {
  principle: StandardPrinciple;
}

const StandardCard: React.FC<StandardCardProps> = ({ principle }) => {
  return (
    <div className="bg-[#111114] border border-white/[0.07] rounded-[10px] p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.14] transition-all duration-300 min-h-[220px]">
      {/* Top row: Red number + Red accent dash */}
      <div className="flex items-start justify-between">
        <span className="text-[26px] sm:text-[30px] font-bold text-[#e31b23] tracking-tight leading-none">
          {principle.number}
        </span>
        <span
          className="w-4 h-[2px] bg-[#e31b23] mt-2 rounded-full flex-shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* Content block */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-white font-bold text-[15px] sm:text-[16px] tracking-[0.01em] mb-2 leading-snug">
          {principle.title}
        </h3>
        <p className="text-[#8a8a94] text-[13px] sm:text-[13.5px] leading-[1.65]">
          {principle.description}
        </p>
      </div>
    </div>
  );
};

export default StandardCard;
