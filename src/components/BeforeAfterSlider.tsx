import React, { useState, useRef, useCallback } from 'react';

export interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  /** Aspect ratio for the image container. Defaults to 10/14 */
  aspectRatio?: number;
  alt?: string;
}

/**
 * BeforeAfterSlider
 *
 * Premium interactive comparison slider.
 * Uses CSS clip-path on the before image for pixel-perfect clipping.
 * Supports pointer capture for unified mouse & touch drag without blocking vertical page scroll.
 */
const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  aspectRatio = 10 / 14,
  alt = 'Before and after comparison',
}) => {
  const [position, setPosition] = useState(50); // 0–100 %
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(clamp(((clientX - left) / width) * 100, 2, 98));
  }, []);

  // ── Unified Pointer Events (Mouse, Touch, Pen) ───────────────────────────
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback for older environments
    }
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }
  };

  // ── Keyboard Navigation (Accessibility) ───────────────────────────────────
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => clamp(p - 2, 2, 98));
    if (e.key === 'ArrowRight') setPosition((p) => clamp(p + 2, 2, 98));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-[6px] cursor-col-resize select-none touch-pan-y border border-white/[0.08] bg-[#0d0d10]"
      style={{ paddingBottom: `${aspectRatio * 100}%` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* ── After image — full size, underneath ───────────────────────── */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      {/* ── Before image — clipped from right via clip-path ───────────── */}
      <img
        src={beforeSrc}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      {/* ── Vertical red divider line ─────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 w-px bg-[#e31b23] pointer-events-none"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        {/* Extended Touch Hit Area (44x44px invisible wrapper around visible handle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center pointer-events-auto cursor-col-resize">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e31b23] border-2 border-white/40 flex items-center justify-center shadow-lg shadow-black/50">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
              <path d="M1 4h3M6 4h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 2L1 4l2 2M7 2l2 2-2 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Before label — bottom-left ─────────────────────────────────── */}
      <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-[#e31b23] text-white text-[8.5px] sm:text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded-[2px] pointer-events-none shadow-sm">
        {beforeLabel}
      </span>

      {/* ── After label — bottom-right ────────────────────────────────── */}
      <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#e31b23] text-white text-[8.5px] sm:text-[9px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded-[2px] pointer-events-none shadow-sm">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
