import React from 'react';
import { PrimaryButton } from './Button';

// ─── Micro service label ─────────────────────────────────────────────────────
interface ServiceLabelProps {
  children: React.ReactNode;
}
export const ServiceLabel: React.FC<ServiceLabelProps> = ({ children }) => (
  <div className="flex items-center gap-2 mb-6">
    <span className="w-2.5 h-2.5 bg-[#25D366] flex-shrink-0" aria-hidden="true" />
    <span className="text-[10.5px] font-semibold tracking-[0.18em] text-[#A1A1AA] uppercase">
      {children}
    </span>
  </div>
);

// ─── Primary CTA Button ──────────────────────────────────────────────────────
interface PrimaryCTAProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ href = '#reserve', children, className = '', id }) => (
  <PrimaryButton href={href} className={className} id={id}>
    {children}
  </PrimaryButton>
);

// ─── Feature item (compact row with red check) ───────────────────────────────
export interface FeatureItemData {
  title: string;
  description: string;
}
interface FeatureItemProps {
  feature: FeatureItemData;
}
export const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
  <div className="flex gap-3.5 items-start">
    {/* Check icon badge */}
    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#075E54]/20 border border-[#1A5C3A] rounded-[3px] mt-0.5">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
        <path d="M1 4L3.5 6.5L9 1" stroke="#25D366" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div>
      <p className="text-[13.5px] font-semibold text-[#FFFFFF] mb-0.5 leading-snug">{feature.title}</p>
      <p className="text-[12.5px] text-[#A1A1AA] leading-relaxed">{feature.description}</p>
    </div>
  </div>
);

interface FeatureListProps {
  features: FeatureItemData[];
}
export const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <div className="flex flex-col gap-4 mt-6 mb-8">
    {features.map((f) => (
      <FeatureItem key={f.title} feature={f} />
    ))}
  </div>
);

// ─── Specification card (small dark technical card) ──────────────────────────
export interface SpecCardData {
  value: string;
  label: string;
  description: string;
}
interface SpecificationCardProps {
  spec: SpecCardData;
}
export const SpecificationCard: React.FC<SpecificationCardProps> = ({ spec }) => (
  <div className="flex-1 bg-[#0D0D0F] border border-white/[0.08] rounded-[4px] px-4 py-4 min-w-0">
    <div className="text-[1.6rem] font-bold text-[#25D366] leading-none tracking-[-0.02em] mb-2">
      {spec.value}
    </div>
    <div className="text-[9.5px] font-bold tracking-[0.18em] text-[#FFFFFF] uppercase mb-1.5">
      {spec.label}
    </div>
    <div className="text-[11px] text-[#A1A1AA] leading-snug">
      {spec.description}
    </div>
  </div>
);

interface SpecificationGridProps {
  specs: SpecCardData[];
}
export const SpecificationGrid: React.FC<SpecificationGridProps> = ({ specs }) => (
  <div className="flex flex-col sm:flex-row gap-3 mt-6 mb-8">
    {specs.map((spec) => (
      <SpecificationCard key={spec.label} spec={spec} />
    ))}
  </div>
);
