import React, { useState, useCallback } from 'react';
import { ServiceLabel, FeatureList, PrimaryCTA } from '../components/ui/ServicePrimitives';
import type { FeatureItemData } from '../components/ui/ServicePrimitives';
import PPFProtectionDiagram from '../components/PPFProtectionDiagram';
import { PPFZoneList } from '../components/PPFZoneCard';
import type { PPFZoneData } from '../components/PPFZoneCard';

// ─── Data ────────────────────────────────────────────────────────────────────

const interiorFeatures: FeatureItemData[] = [
  {
    title: 'Full-Body PPF Protection',
    description:
      'High-quality paint protection film designed to shield vulnerable painted surfaces from everyday road damage.',
  },
  {
    title: 'Self-Healing Protection',
    description:
      'Advanced self-healing film helps reduce the appearance of light scratches and swirl marks while maintaining a clean finish.',
  },
  {
    title: 'Stone Chip & Impact Defense',
    description:
      'Creates a protective barrier against stone chips, road debris, scratches, and other everyday paint damage.',
  },
];

const ppfZones: PPFZoneData[] = [
  {
    badge: 'A',
    title: 'Front Impact Zone',
    description: 'Bumper, full hood, and fenders receiving direct debris.',
  },
  {
    badge: 'B',
    title: 'Side Mirrors & Pillars',
    description: 'High-exposure vertical sections vulnerable to bugs and chips.',
  },
  {
    badge: 'C',
    title: 'Lower Rocker Panels',
    description: 'Defense against wheel-arch rock slinging.',
  },
];

// ─── Section 03: Interior Detailing ──────────────────────────────────────────

export const InteriorDetailingSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(prev => !prev);
    }
  }, []);

  return (
    <section
      id="interior-detailing"
      className="container-site py-20 lg:py-24 scroll-mt-16"
      aria-labelledby="interior-heading"
    >
      {/* Backward compatible anchor alias */}
      <span id="detailing" className="scroll-mt-16" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* ── LEFT: Text ─────────────────────────────────────────────────── */}
        <div className="flex flex-col">
          <ServiceLabel>03 · Paint Protection</ServiceLabel>

          <h2
            id="interior-heading"
            className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold text-white leading-[1.08] tracking-[-0.022em] mb-5"
          >
            Protection that keeps your<br />
            paint looking new.
          </h2>

          <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[400px]">
            Premium paint protection engineered to preserve your vehicle's finish.
            Our PPF solutions help defend against road debris, scratches, stone
            chips, and everyday wear while maintaining the original look of your paint.
          </p>

          <FeatureList features={interiorFeatures} />

          <div>
            <PrimaryCTA href="#ppf" id="protect-paint-btn">
              PROTECT YOUR PAINT
            </PrimaryCTA>
          </div>
        </div>

        {/* ── RIGHT: Interior image with 3D flip ──────────────────────────── */}
        <div className="order-first lg:order-last">
          {/* Perspective wrapper */}
          <div
            className="interior-flip-scene rounded-[8px]"
            style={{ perspective: '1000px' }}
          >
            {/* The card that flips */}
            <div
              className={`interior-flip-card${isFlipped ? ' interior-flip-card--flipped' : ''}`}
              onClick={handleFlip}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
              aria-pressed={isFlipped}
              aria-label={isFlipped ? 'Show after interior — click to flip back' : 'Show before interior — click to flip'}
              style={{
                position: 'relative',
                width: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                cursor: 'pointer',
                outline: 'none',
                borderRadius: '8px',
              }}
            >
              {/* ── FRONT face: after (cockpit) ── */}
              <div
                className="interior-flip-face interior-flip-face--front"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <img
                  src="/interior-cockpit.jpg"
                  alt="Premium sports car interior showing steering wheel, digital instrument cluster and center console"
                  className="w-full h-[300px] sm:h-[360px] lg:h-[440px] object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* ── BACK face: before ── */}
              <div
                className="interior-flip-face interior-flip-face--back"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <img
                  src="/interior-before.jpg"
                  alt="Interior before detailing treatment — showing original condition"
                  className="w-full h-[300px] sm:h-[360px] lg:h-[440px] object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Flip hint badge */}
            <div
              className="interior-flip-hint"
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '6px',
                padding: '5px 10px',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.05em',
                pointerEvents: 'none',
                userSelect: 'none',
                transition: 'opacity 0.3s',
              }}
            >
              {isFlipped ? '← AFTER' : 'TAP TO FLIP →'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// ─── Section 04: Paint Protection Film ───────────────────────────────────────

export const PPFSection: React.FC = () => (
  <section
    id="ppf"
    className="container-site pb-24 lg:pb-28 scroll-mt-16"
    aria-labelledby="ppf-heading"
  >
    {/* Backward compatible anchor alias */}
    <span id="paint-protection" className="scroll-mt-16" aria-hidden="true" />

    {/* Subtle separator */}
    <div className="border-t border-white/[0.06] mb-16 lg:mb-20" />

    {/* ── Top row: heading left / description right ─────────────────── */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-12 lg:mb-14 items-end">
      {/* Left: label + heading */}
      <div>
        <ServiceLabel>04 · Paint Protection Film</ServiceLabel>
        <h2
          id="ppf-heading"
          className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold text-white leading-[1.08] tracking-[-0.022em]"
        >
          Invisible protection.<br />
          Serious defense.
        </h2>
      </div>

      {/* Right: description — vertically aligned toward bottom */}
      <div className="flex items-end">
        <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[380px]">
          Premium self-healing polyurethane shields precision-templated for an
          exact edge-wrapped finish. Completely invisible, highly impact-resistant.
        </p>
      </div>
    </div>

    {/* ── Bottom row: diagram left / zone cards right ─────────────────── */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

      {/* Left: Protection diagram */}
      <div>
        <PPFProtectionDiagram />
      </div>

      {/* Right: Zone cards + CTA */}
      <div className="flex flex-col gap-6 justify-between h-full">
        <PPFZoneList zones={ppfZones} />
        <div>
          <PrimaryCTA href="#reserve" id="explore-ppf-btn" className="mt-2">
            EXPLORE PPF OPTIONS
          </PrimaryCTA>
        </div>
      </div>

    </div>
  </section>
);

// ─── Embeddable content (no wrapper) — used by HomePage ─────────────────────
export const Page3Content: React.FC = () => (
  <>
    <InteriorDetailingSection />
    <PPFSection />
  </>
);

// ─── Page 3 standalone route root ────────────────────────────────────────────
const Page3: React.FC = () => (
  <main className="pt-[52px]">
    <Page3Content />
  </main>
);

export default Page3;
