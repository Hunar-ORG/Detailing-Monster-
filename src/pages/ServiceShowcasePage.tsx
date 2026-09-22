import React from 'react';
import {
  ServiceLabel,
  FeatureList,
  SpecificationGrid,
  PrimaryCTA,
  type FeatureItemData,
  type SpecCardData,
} from '../components/ui/ServicePrimitives';
import BeforeAfterGallery from '../components/BeforeAfterGallery';

// ─── Data ────────────────────────────────────────────────────────────────────

const paintFeatures: FeatureItemData[] = [
  {
    title: 'Paint Depth Inspection',
    description: 'Ultrasonic measurement to protect clearcoat thickness borders.',
  },
  {
    title: 'Multi-Stage Leveling',
    description: 'Eradicates deep defects down to a flawless mirror plane.',
  },
  {
    title: 'Optical Refinement',
    description: 'Micro-finishing polishes to maximize gloss spectrum.',
  },
];

const ceramicSpecs: SpecCardData[] = [
  { value: '9H+', label: 'Hardness Matrix', description: 'Extreme physical resistance' },
  { value: '110°', label: 'Beading Angle', description: 'Superhydrophobic run-off' },
  { value: '5 YR', label: 'Guaranteed Shell', description: 'Durable chemical barrier' },
];

// ─── Section 01: Paint Correction ────────────────────────────────────────────

export const PaintCorrectionSection: React.FC = () => (
  <section
    id="paint-correction"
    className="container-site py-20 lg:py-24 scroll-mt-16"
    aria-labelledby="paint-correction-heading"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

      {/* ── LEFT: Text ─────────────────────────────────────────────────── */}
      <div className="flex flex-col">
        <ServiceLabel>01 · Paint Correction</ServiceLabel>

        <h2
          id="paint-correction-heading"
          className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold text-white leading-[1.08] tracking-[-0.022em] mb-5"
        >
          Restore the finish.<br />
          Reveal the paint.
        </h2>

        <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[400px]">
          Erasing swirls, oxidation, light scratches, and surface imperfections.
          Our multi-stage machine polishing process restores deep optical clarity.
        </p>

        <FeatureList features={paintFeatures} />

        <div>
          <PrimaryCTA href="#reserve" id="explore-correction-btn">
            EXPLORE CORRECTION
          </PrimaryCTA>
        </div>
      </div>

      {/* ── RIGHT: Image stack ─────────────────────────────────────────── */}
      <div className="flex flex-col">
        {/* Main image */}
        <div className="rounded-t-[8px] overflow-hidden border border-b-0 border-white/[0.08]">
          <img
            src="/paint-correction-hood.jpg"
            alt="Perfectly polished deep red car hood with studio light reflections"
            className="w-full h-[280px] sm:h-[320px] lg:h-[340px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Before / After strip — flush below the main image */}
        <BeforeAfterGallery
          beforeSrc="/before-swirls.jpg"
          afterSrc="/after-mirror.jpg"
          beforeLabel="Untouched Swirls"
          afterLabel="Mirror Finish"
        />
      </div>

    </div>
  </section>
);

// ─── Section 02: Ceramic Coating ─────────────────────────────────────────────

export const CeramicCoatingSection: React.FC = () => (
  <section
    id="ceramic-coating"
    className="container-site pb-24 lg:pb-28 scroll-mt-16"
    aria-labelledby="ceramic-heading"
  >
    {/* Full-bleed visual separator */}
    <div className="border-t border-white/[0.06] mb-20 lg:mb-24" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

      {/* ── LEFT: Image ────────────────────────────────────────────────── */}
      <div className="order-1 lg:order-1">
        <div className="rounded-[10px] overflow-hidden border border-white/[0.08]">
          <img
            src="/ceramic-water.jpg"
            alt="Dark car paint surface covered with spherical water beads demonstrating ceramic coating hydrophobic effect"
            className="w-full h-[340px] sm:h-[400px] lg:h-[420px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* ── RIGHT: Text ────────────────────────────────────────────────── */}
      <div className="order-2 lg:order-2 flex flex-col">
        <ServiceLabel>02 · Ceramic Coating</ServiceLabel>

        <h2
          id="ceramic-heading"
          className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold text-white leading-[1.08] tracking-[-0.022em] mb-5"
        >
          Protection that performs.
        </h2>

        <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[400px]">
          An incredibly durable inorganic quartz shell that bonds at a molecular scale.
          It locks in depth, prevents environmental etching, and makes maintenance washing
          effortless.
        </p>

        <SpecificationGrid specs={ceramicSpecs} />

        <div>
          <PrimaryCTA href="#reserve" id="explore-ceramic-btn">
            EXPLORE CERAMIC COATING
          </PrimaryCTA>
        </div>
      </div>

    </div>
  </section>
);

// ─── Embeddable content (no wrapper) — used by HomePage ─────────────────────
export const ServiceShowcaseContent: React.FC = () => (
  <>
    <PaintCorrectionSection />
    <CeramicCoatingSection />
  </>
);

// ─── Page 2 standalone route root ────────────────────────────────────────────
const ServiceShowcasePage: React.FC = () => (
  <main className="pt-[52px]">
    <ServiceShowcaseContent />
  </main>
);

export default ServiceShowcasePage;
