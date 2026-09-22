import React from 'react';
import { ServiceLabel, FeatureList, PrimaryCTA } from '../components/ui/ServicePrimitives';
import type { FeatureItemData } from '../components/ui/ServicePrimitives';
import PPFProtectionDiagram from '../components/PPFProtectionDiagram';
import { PPFZoneList } from '../components/PPFZoneCard';
import type { PPFZoneData } from '../components/PPFZoneCard';

// ─── Data ────────────────────────────────────────────────────────────────────

const interiorFeatures: FeatureItemData[] = [
  {
    title: 'Alcantara & Leather Feeding',
    description:
      'Deep pH-balanced cleaning followed by premium essential oil conditioning.',
  },
  {
    title: 'Hot Extraction Cleaning',
    description:
      'Pressure steam flushing of deep carpet fibers to remove micro-particulates.',
  },
  {
    title: 'Tactile Surface Cleansing',
    description:
      'Zero-residue brush dusting of intricate dashboard vents and controls.',
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

export const InteriorDetailingSection: React.FC = () => (
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
        <ServiceLabel>03 · Interior Detailing</ServiceLabel>

        <h2
          id="interior-heading"
          className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold text-white leading-[1.08] tracking-[-0.022em] mb-5"
        >
          Inside deserves the<br />
          same attention.
        </h2>

        <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[400px]">
          Beyond clean surfaces, we deliver cockpit preservation. We treat fine
          leathers, performance textiles, and tactile materials with specialized
          dry steam.
        </p>

        <FeatureList features={interiorFeatures} />

        <div>
          <PrimaryCTA href="#reserve" id="restore-interior-btn">
            RESTORE YOUR INTERIOR
          </PrimaryCTA>
        </div>
      </div>

      {/* ── RIGHT: Interior image ───────────────────────────────────────── */}
      <div className="order-first lg:order-last">
        <div className="rounded-[8px] overflow-hidden border border-white/[0.08]">
          <img
            src="/interior-cockpit.jpg"
            alt="Premium sports car interior showing steering wheel, digital instrument cluster and center console"
            className="w-full h-[300px] sm:h-[360px] lg:h-[440px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

    </div>
  </section>
);

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
