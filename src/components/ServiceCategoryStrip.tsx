import React from 'react';
import { serviceCategories } from '../data/siteData';

const ServiceCategoryStrip: React.FC = () => {
  return (
    <div className="container-site py-5 border-b border-white/[0.06]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">

        {/* Left: category labels */}
        <div className="flex flex-wrap items-center gap-x-0 gap-y-2">
          {serviceCategories.map((cat, index) => (
            <React.Fragment key={cat.label}>
              <span className="text-[10.5px] font-semibold tracking-[0.16em] text-text-secondary uppercase">
                {cat.label}
              </span>
              {index < serviceCategories.length - 1 && (
                <span
                  className="w-1 h-1 rounded-full bg-[#e31b23] mx-3 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right: since year */}
        <div className="flex flex-col items-start sm:items-end gap-0.5 flex-shrink-0">
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#e31b23] uppercase">
            SINCE 2018
          </span>
          <span className="text-[11.5px] text-text-secondary">
            Serving Automotive Enthusiasts in Karnataka
          </span>
        </div>

      </div>
    </div>
  );
};

export default ServiceCategoryStrip;
