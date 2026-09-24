import React from 'react';
import AppointmentForm from './AppointmentForm';

const ReservationSection: React.FC = () => {
  return (
    <section
      id="reserve"
      className="bg-[#111113] border-t border-white/[0.06] py-20 lg:py-24 scroll-mt-16"
      aria-labelledby="reservation-heading"
    >
      {/* Backward compatible anchor alias */}
      <span id="appointment" className="scroll-mt-16" aria-hidden="true" />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── Left Column: Intro & Benefits ────────────────────────────── */}
          <div className="lg:col-span-5">
            {/* Micro label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#25D366] flex-shrink-0" aria-hidden="true" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#A1A1AA] uppercase">
                RESERVE YOUR DETAIL
              </span>
            </div>

            {/* Main heading — 2 lines */}
            <h2
              id="reservation-heading"
              className="text-[clamp(2.1rem,3.8vw,3.1rem)] font-bold text-white tracking-[-0.025em] leading-[1.08] mb-4"
            >
              Your car deserves<br />
              better.
            </h2>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] text-[#A1A1AA] leading-[1.7] max-w-[420px] mb-8">
              Tell us about your machine and we will build a custom correction or
              protection plan. Slots are limited to maintain our strict quality timelines.
            </p>

            {/* Benefit Items */}
            <div className="space-y-3.5">
              {/* Benefit 1 */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border border-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-[13px] sm:text-[13.5px] text-[#d4d4d8] font-medium">
                  Flexible scheduling to fit your calendar
                </span>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border border-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[13px] sm:text-[13.5px] text-[#d4d4d8] font-medium">
                  Fully insured, climate-controlled camera-monitored facility
                </span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Appointment Form Panel ─────────────────────── */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
