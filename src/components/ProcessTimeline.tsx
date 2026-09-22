import React from 'react';

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepProps {
  step: ProcessStepData;
  isLast: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, isLast }) => (
  <div className="flex flex-col flex-1 min-w-0">
    {/* ── Number circle + connector line ─────────────────────────────── */}
    <div className="flex items-center mb-5">
      {/* Circle node */}
      <div
        className="w-9 h-9 flex-shrink-0 rounded-full border-2 border-[#e31b23] bg-[#09090b] flex items-center justify-center z-10"
        aria-hidden="true"
      >
        <span className="text-[11px] font-bold text-white tracking-[0.06em]">
          {step.number}
        </span>
      </div>

      {/* Connecting line to next step */}
      {!isLast && (
        <div className="flex-1 h-px ml-0 relative overflow-hidden">
          {/* Base line */}
          <div className="absolute inset-0 bg-white/[0.1]" />
          {/* Red accent portion */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[#e31b23]/60" />
        </div>
      )}
    </div>

    {/* ── Step text ──────────────────────────────────────────────────── */}
    <div className="pr-4 lg:pr-6">
      <h3 className="text-[14.5px] font-semibold text-[#f4f4f6] mb-2 leading-snug">
        {step.title}
      </h3>
      <p className="text-[12.5px] text-[#8a8a94] leading-[1.65]">
        {step.description}
      </p>
    </div>
  </div>
);

// ── Mobile vertical step ─────────────────────────────────────────────────────

const ProcessStepMobile: React.FC<ProcessStepProps> = ({ step, isLast }) => (
  <div className="flex gap-4">
    {/* Left: circle + vertical connector */}
    <div className="flex flex-col items-center flex-shrink-0">
      <div className="w-9 h-9 rounded-full border-2 border-[#e31b23] bg-[#09090b] flex items-center justify-center z-10">
        <span className="text-[11px] font-bold text-white tracking-[0.06em]">
          {step.number}
        </span>
      </div>
      {!isLast && (
        <div className="flex-1 w-px bg-[#e31b23]/40 mt-2 min-h-[40px]" />
      )}
    </div>

    {/* Right: text */}
    <div className="pb-8">
      <h3 className="text-[14.5px] font-semibold text-[#f4f4f6] mb-1.5 leading-snug">
        {step.title}
      </h3>
      <p className="text-[13px] text-[#8a8a94] leading-[1.65]">
        {step.description}
      </p>
    </div>
  </div>
);

// ── Public component ─────────────────────────────────────────────────────────

interface ProcessTimelineProps {
  steps: ProcessStepData[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => (
  <>
    {/* Desktop: horizontal */}
    <div className="hidden md:flex items-start w-full">
      {steps.map((step, i) => (
        <ProcessStep key={step.number} step={step} isLast={i === steps.length - 1} />
      ))}
    </div>

    {/* Mobile: vertical */}
    <div className="flex flex-col md:hidden">
      {steps.map((step, i) => (
        <ProcessStepMobile key={step.number} step={step} isLast={i === steps.length - 1} />
      ))}
    </div>
  </>
);

export default ProcessTimeline;
