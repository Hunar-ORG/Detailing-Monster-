import React, { useState } from 'react';
import { serviceOptions } from '../data/page6Data';
import type { AppointmentFormData } from '../types';
import { PrimaryButton } from './ui/Button';
import { WHATSAPP_BOOKING_URL } from '../utils/whatsapp';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  vehicleModel?: string;
  requestedService?: string;
  preferredDate?: string;
  general?: string;
}

const AppointmentForm: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    vehicleModel: '',
    requestedService: serviceOptions[0] || 'Paint Correction + Ceramic Coating',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const isSubmitting = false;
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WHATSAPP_BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      vehicleModel: '',
      requestedService: serviceOptions[0] || 'Paint Correction + Ceramic Coating',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#0D0D0F] border border-white/[0.08] rounded-[10px] p-5 sm:p-8 lg:p-9 shadow-2xl">
      {submittedRef ? (
        <div className="py-10 text-center" role="status" aria-live="polite">
          <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#1A5C3A] text-[#25D366] flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Appointment Request Received</h3>
          <p className="text-[12px] font-mono text-[#25D366] uppercase tracking-widest mb-3">
            REF: {submittedRef}
          </p>
          <p className="text-[#8a8a94] text-[13.5px] max-w-md mx-auto leading-relaxed mb-6">
            Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Our
            master technician will inspect your vehicle specifications and reach out within 12 hours
            with a preliminary slot proposal and clearcoat inspection protocol.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="text-[11.5px] font-bold text-[#25D366] hover:underline uppercase tracking-wider cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {errors.general && (
            <div className="mb-5 p-3 rounded-[3px] bg-red-950/40 border border-red-800/60 text-red-300 text-xs">
              {errors.general}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                FULL NAME *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. James Holloway"
                disabled={isSubmitting}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full bg-[#111113] border rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] min-h-[44px] text-white placeholder:text-[#52525b] focus:outline-none transition-colors ${errors.fullName
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/[0.08] focus:border-[#25D366]'
                  }`}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-[11px] text-red-400 mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. james@lumen.com"
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full bg-[#111113] border rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] min-h-[44px] text-white placeholder:text-[#52525b] focus:outline-none transition-colors ${errors.email
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/[0.08] focus:border-[#25D366]'
                  }`}
              />
              {errors.email && (
                <p id="email-error" className="text-[11px] text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 99452 28752"
                disabled={isSubmitting}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full bg-[#111113] border rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] min-h-[44px] text-white placeholder:text-[#52525b] focus:outline-none transition-colors ${errors.phone
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/[0.08] focus:border-[#25D366]'
                  }`}
              />
              {errors.phone && (
                <p id="phone-error" className="text-[11px] text-red-400 mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Vehicle Model */}
            <div>
              <label
                htmlFor="vehicleModel"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                VEHICLE MODEL *
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                required
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder="e.g. Porsche 911 GT3 (2026)"
                disabled={isSubmitting}
                aria-invalid={!!errors.vehicleModel}
                aria-describedby={errors.vehicleModel ? 'vehicleModel-error' : undefined}
                className={`w-full bg-[#111113] border rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] min-h-[44px] text-white placeholder:text-[#52525b] focus:outline-none transition-colors ${errors.vehicleModel
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/[0.08] focus:border-[#25D366]'
                  }`}
              />
              {errors.vehicleModel && (
                <p id="vehicleModel-error" className="text-[11px] text-red-400 mt-1">
                  {errors.vehicleModel}
                </p>
              )}
            </div>

            {/* Requested Service */}
            <div>
              <label
                htmlFor="requestedService"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                REQUESTED SERVICE *
              </label>
              <div className="relative">
                <select
                  id="requestedService"
                  name="requestedService"
                  value={formData.requestedService}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-[#111113] border border-white/[0.08] rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] min-h-[44px] text-white focus:outline-none focus:border-[#25D366] transition-colors cursor-pointer appearance-none pr-8"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#111113] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#8a8a94]">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                PREFERRED DATE *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                min={todayStr}
                required
                value={formData.preferredDate}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={!!errors.preferredDate}
                aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
                className={`w-full bg-[#111113] border rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] min-h-[44px] text-white focus:outline-none transition-colors [color-scheme:dark] ${errors.preferredDate
                    ? 'border-red-500/80 focus:border-red-500'
                    : 'border-white/[0.08] focus:border-[#25D366]'
                  }`}
              />
              {errors.preferredDate && (
                <p id="preferredDate-error" className="text-[11px] text-red-400 mt-1">
                  {errors.preferredDate}
                </p>
              )}
            </div>

            {/* Message / Vehicle Requirements */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-[#a1a1aa] uppercase mb-2"
              >
                MESSAGE / SPECIFIC VEHICLE REQUIREMENTS (OPTIONAL)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Detail any clearcoat oxidation, matte film wraps, custom wheels, or areas of concern..."
                className="w-full bg-[#111113] border border-white/[0.08] rounded-[3px] px-3.5 py-2.5 text-[16px] sm:text-[13px] text-white placeholder:text-[#52525b] focus:outline-none focus:border-[#25D366] transition-colors resize-none"
              />
            </div>
          </div>

          {/* Footer & Submit Button */}
          <div className="mt-6 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[11px] text-[#71717a] max-w-[300px] leading-relaxed">
              * We will respond with a preliminary thickness report and slot proposal within 12 hours.
            </p>
            <PrimaryButton
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="submit-appointment-btn"
              className="w-full sm:w-auto min-h-[44px] flex-shrink-0"
            >
              REQUEST APPOINTMENT
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
