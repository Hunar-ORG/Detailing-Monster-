import React from 'react';
import { ServiceLabel } from '../components/ui/ServicePrimitives';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessTimeline from '../components/ProcessTimeline';
import type { ProcessStepData } from '../components/ProcessTimeline';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ComparisonCardData {
  id: number;
  title: string;
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
}

const comparisonCards: ComparisonCardData[] = [
  {
    id: 1,
    title: 'Paint Correction',
    beforeSrc: '/before-swirls.jpg',
    afterSrc: '/after-mirror.jpg',
    beforeLabel: 'SWIRLS & HAZE',
    afterLabel: 'DEEP GLOSS',
  },
  {
    id: 2,
    title: 'Interior Restoration',
    beforeSrc: '/interior-before.jpg',
    afterSrc: '/interior-cockpit.jpg',
    beforeLabel: 'STAINED & DULL',
    afterLabel: 'CLEAN & REFINED',
  },
  {
    id: 3,
    title: 'Ceramic Coating',
    beforeSrc: '/ceramic-before.jpg',
    afterSrc: '/ceramic-after.jpg',
    beforeLabel: 'FLAT SURFACE',
    afterLabel: 'HYDROPHOBIC',
  },
];

const processSteps: ProcessStepData[] = [
  {
    number: '01',
    title: 'Inspect',
    description:
      "We analyze the vehicle's unique paint characteristics and current clearcoat depth under specialized inspection lights.",
  },
  {
    number: '02',
    title: 'Prepare',
    description:
      'Thorough chemical and mechanical decontamination, wash, and multi-stage claybar preparation of all surfaces.',
  },
  {
    number: '03',
    title: 'Correct',
    description:
      'Paint imperfections, swirls, and light scratches are meticulously machine leveled to unlock true optical clarity.',
  },
  {
    number: '04',
    title: 'Protect',
    description:
      'Application of industry-leading ceramic coatings or precision edge-wrapped paint protection film.',
  },
  {
    number: '05',
    title: 'Finish',
    description:
      'Final 100-point light tunnel inspection and quality control before we authorize the release of the vehicle.',
  },
];

// ─── Section 05 — Visual Shift ────────────────────────────────────────────────

export const VisualShiftSection: React.FC = () => (
  <section
    id="visual-shift"
    className="container-site py-20 lg:py-24 scroll-mt-16"
    aria-labelledby="visual-shift-heading"
  >
    {/* Backward compatible anchor alias */}
    <span id="gallery" className="scroll-mt-16" aria-hidden="true" />

    {/* ── Intro row ─────────────────────────────────────────────────────── */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-14">
      {/* Left: label + heading */}
      <div>
        <ServiceLabel>Visual Shift</ServiceLabel>
        <h2
          id="visual-shift-heading"
          className="text-[clamp(2rem,3.8vw,2.9rem)] font-bold text-white leading-[1.08] tracking-[-0.022em]"
        >
          The difference is in<br />
          the details.
        </h2>
      </div>

      {/* Right: description */}
      <div className="flex items-end">
        <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[380px]">
          Slide to examine the level of surgical precision executed on every
          vehicle that enters our cleanroom studio. No flaws survive.
        </p>
      </div>
    </div>

    {/* ── Comparison cards grid ─────────────────────────────────────────── */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {comparisonCards.map((card) => (
        <div key={card.id}>
          {/* Card title above the slider */}
          <p className="text-[13px] font-semibold text-[#f4f4f6] mb-3 tracking-[0.01em]">
            {card.title}
          </p>
          <BeforeAfterSlider
            beforeSrc={card.beforeSrc}
            afterSrc={card.afterSrc}
            beforeLabel={card.beforeLabel}
            afterLabel={card.afterLabel}
            alt={`${card.title} before and after comparison`}
          />
        </div>
      ))}
    </div>
  </section>
);

// ─── Section 06 — Engineered Method ──────────────────────────────────────────

export const EngineeredMethodSection: React.FC = () => (
  <section
    id="process"
    className="py-20 lg:py-28 border-t border-white/[0.06] scroll-mt-16"
    aria-labelledby="process-heading"
  >
    {/* ── Centered intro ──────────────────────────────────────────────── */}
    <div className="container-site text-center mb-14 lg:mb-16">
      {/* Micro label — centered */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="w-2.5 h-2.5 bg-[#e31b23] flex-shrink-0" aria-hidden="true" />
        <span className="text-[10.5px] font-semibold tracking-[0.18em] text-[#8a8a94] uppercase">
          Engineered Method
        </span>
      </div>

      <h2
        id="process-heading"
        className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-white leading-[1.08] tracking-[-0.025em] mb-5"
      >
        Precision at every stage.
      </h2>

      <p className="text-[14px] text-[#8a8a94] leading-[1.7] max-w-[520px] mx-auto">
        We don't rush. We follow a strict, multi-point scientific protocol to
        ensure your automotive asset leaves our facility in a flawless state.
      </p>
    </div>

    {/* ── Process timeline ────────────────────────────────────────────── */}
    <div className="container-site">
      <ProcessTimeline steps={processSteps} />
    </div>
  </section>
);

// ─── Embeddable content (no wrapper) — used by HomePage ─────────────────────
export const Page4Content: React.FC = () => (
  <>
    <VisualShiftSection />
    <EngineeredMethodSection />
  </>
);

// ─── Page 4 standalone route root ────────────────────────────────────────────
const Page4: React.FC = () => (
  <main className="pt-[52px]">
    <Page4Content />
  </main>
);

export default Page4;
