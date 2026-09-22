import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  footerServices,
  footerCompany,
  footerContact,
  footerSocials,
} from '../data/page8Data';

const SocialIcon: React.FC<{ icon: 'instagram' | 'facebook' | 'youtube' }> = ({
  icon,
}) => {
  if (icon === 'instagram') {
    return (
      <svg
        className="w-3.5 h-3.5 text-[#8a8a94] group-hover:text-white transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (icon === 'facebook') {
    return (
      <svg
        className="w-3.5 h-3.5 text-[#8a8a94] group-hover:text-white transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  return (
    <svg
      className="w-3.5 h-3.5 text-[#8a8a94] group-hover:text-white transition-colors"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
};

const Footer: React.FC = () => {
  const location = useLocation();

  const renderLink = (href: string, label: string) => {
    const isAnchor = href.startsWith('#');
    const fullHref = isAnchor && location.pathname !== '/' ? `/${href}` : href;

    if (isAnchor && location.pathname === '/') {
      return (
        <a
          href={href}
          className="text-[13px] text-[#8a8a94] hover:text-white transition-colors block"
        >
          {label}
        </a>
      );
    }

    return (
      <Link
        to={fullHref}
        className="text-[13px] text-[#8a8a94] hover:text-white transition-colors block"
      >
        {label}
      </Link>
    );
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#09090b] pt-16 sm:pt-20 pb-12">
      <div className="container-site">
        {/* ── 5-Column Desktop Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 text-left">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-1.5" aria-label="DETAILING MONSTER home">
              <span className="text-[15px] font-bold tracking-[0.04em] text-white">DETAILING</span>
              <span className="text-[15px] font-bold tracking-[0.04em] text-[#e31b23]">MONSTER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] ml-0.5" />
            </Link>
            <p className="text-[12.5px] text-[#8a8a94] leading-[1.7] max-w-[260px] mt-4">
              Precision care for exceptional cars. We are Karnataka’s elite choice for paint
              correction, ceramic coatings, self-healing PPF, and detailed cabin restorations.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-white uppercase mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.label}>{renderLink(link.href, link.label)}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-white uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2.5">
              {footerCompany.map((link) => (
                <li key={link.label}>{renderLink(link.href, link.label)}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-white uppercase mb-4">
              CONTACT
            </h3>
            <div className="space-y-2.5 text-[13px] text-[#8a8a94]">
              <p>{footerContact.address}</p>
              {footerContact.landmark && (
                <p className="text-[#a1a1aa] text-[12px] -mt-1">({footerContact.landmark})</p>
              )}
              <p>
                <a
                  href={`tel:${footerContact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {footerContact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footerContact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {footerContact.email}
                </a>
              </p>
              <p className="pt-1">
                {renderLink(footerContact.bookingHref, footerContact.bookingLabel)}
              </p>
            </div>
          </div>

          {/* Column 5 — Follow Us */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-white uppercase mb-4">
              FOLLOW US
            </h3>
            <ul className="space-y-2.5">
              {footerSocials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[13px] text-[#8a8a94] hover:text-white transition-colors group"
                  >
                    <SocialIcon icon={social.icon} />
                    <span>{social.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Footer Bottom Divider ────────────────────────────────────────── */}
        <div className="border-b border-white/[0.06] mt-16" />
      </div>
    </footer>
  );
};

export default Footer;
