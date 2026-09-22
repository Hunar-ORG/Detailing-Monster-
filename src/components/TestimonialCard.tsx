import React from 'react';
import type { TestimonialItem } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

const StarRating: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 text-[#e31b23]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#101013] border border-white/[0.07] rounded-[10px] p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.14] transition-all duration-300 min-h-[260px]">
      {/* 5 red outlined stars */}
      <div>
        <StarRating count={testimonial.rating} />
        {/* Quote */}
        <p className="text-[#d4d4d8] text-[13.5px] sm:text-[14px] leading-[1.65] mt-5">
          {testimonial.quote}
        </p>
      </div>

      {/* Customer metadata */}
      <div className="mt-8 pt-2">
        <h4 className="text-white font-bold text-[14px] sm:text-[15px] tracking-[0.01em]">
          {testimonial.name}
        </h4>
        <p className="text-[#8a8a94] text-[12px] sm:text-[12.5px] mt-0.5">
          {testimonial.vehicle}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
