import React, { useState } from 'react';
import { faqList } from '../data/page7Data';

const FAQSection: React.FC = () => {
  // First item open by default per requirements
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="container-site py-20 lg:py-24 border-t border-white/[0.06] scroll-mt-16"
      aria-labelledby="faq-heading"
    >
      {/* ── Centered Header ─────────────────────────────────────────────── */}
      <div className="text-center mb-12 sm:mb-14 max-w-4xl mx-auto">
        {/* Micro label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#e31b23] flex-shrink-0" aria-hidden="true" />
          <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#8a8a94] uppercase">
            COMMON INQUIRIES
          </span>
        </div>

        {/* Main heading — single line on desktop */}
        <h2
          id="faq-heading"
          className="text-[clamp(1.85rem,3.4vw,2.75rem)] font-bold text-white tracking-[-0.025em] leading-[1.12] md:whitespace-nowrap"
        >
          Everything you need to know.
        </h2>
      </div>

      {/* ── Accordion List Container ────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto">
        {faqList.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`border-b transition-colors duration-200 ${isOpen ? 'border-red-900/40' : 'border-white/[0.08]'
                }`}
            >
              {/* Question Toggle Button */}
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e31b23] cursor-pointer"
              >
                <span
                  className={`text-[15px] sm:text-[16px] transition-colors duration-200 tracking-[0.01em] ${isOpen
                      ? 'text-[#e31b23] font-semibold'
                      : 'text-white font-medium group-hover:text-neutral-200'
                    }`}
                >
                  {item.question}
                </span>

                {/* + / − Indicator */}
                <span
                  className={`text-[20px] font-light leading-none select-none flex-shrink-0 transition-colors ${isOpen
                      ? 'text-[#e31b23]'
                      : 'text-[#8a8a94] group-hover:text-white'
                    }`}
                  aria-hidden="true"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={item.id}
                  className="pb-6 pr-6 text-[13.5px] sm:text-[14px] text-[#8a8a94] leading-[1.7] animate-fadeIn"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
