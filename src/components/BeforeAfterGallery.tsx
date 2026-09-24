import React from 'react';

interface BeforeAfterGalleryProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
}) => {
  return (
    <div className="flex rounded-b-[8px] overflow-hidden border-t-0 border border-white/[0.08]" style={{ borderTop: 'none' }}>
      {/* Before */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="w-full h-[160px] sm:h-[180px] object-cover"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Label */}
        <span className="absolute top-3 left-3 bg-[#25D366] text-[#050505] text-[9px] font-extrabold tracking-[0.16em] uppercase px-2 py-1 rounded-[2px]">
          {beforeLabel}
        </span>
      </div>
      {/* Divider */}
      <div className="w-px bg-[#25D366]/50 flex-shrink-0" />
      {/* After */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src={afterSrc}
          alt={afterLabel}
          className="w-full h-[160px] sm:h-[180px] object-cover"
          loading="lazy"
        />
        {/* Label */}
        <span className="absolute top-3 right-3 bg-[#25D366] text-[#050505] text-[9px] font-extrabold tracking-[0.16em] uppercase px-2 py-1 rounded-[2px]">
          {afterLabel}
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
