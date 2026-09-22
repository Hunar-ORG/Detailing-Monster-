import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import { studioConfig } from '../data/studioConfig';
import { PrimaryButton } from './ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const renderNavLink = (link: { label: string; href: string }, isMobile = false) => {
    const isAnchor = link.href.startsWith('#');
    const fullHref = isAnchor && location.pathname !== '/' ? `/${link.href}` : link.href;

    const baseClass = isMobile
      ? 'text-[15px] font-medium text-[#8a8a94] hover:text-[#f4f4f6] transition-colors py-3 border-b border-white/[0.05] block'
      : 'text-[12.5px] font-medium transition-colors duration-200 tracking-[0.02em] text-[#8a8a94] hover:text-[#f4f4f6]';

    if (isAnchor && location.pathname === '/') {
      return (
        <a
          key={link.label}
          href={link.href}
          onClick={handleLinkClick}
          className={baseClass}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        to={fullHref}
        onClick={handleLinkClick}
        className={baseClass}
      >
        {link.label}
      </Link>
    );
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#09090b]/98 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-[#09090b]/90 backdrop-blur-sm'
        } border-b border-white/[0.06]`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[52px]">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            aria-label="DETAILING MONSTER home"
          >
            <span className="text-[15px] font-bold tracking-[0.04em] text-white">DETAILING</span>
            <span className="text-[15px] font-bold tracking-[0.04em] text-[#e31b23]">MONSTER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] ml-0.5 flex-shrink-0" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#8a8a94]">
              <svg
                width="11"
                height="13"
                viewBox="0 0 12 14"
                fill="none"
                className="flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M6 0C3.794 0 2 1.794 2 4c0 3.5 4 9 4 9s4-5.5 4-9c0-2.206-1.794-4-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-[12px] font-medium tracking-[0.01em]">{studioConfig.shortLocation}</span>
            </div>
            {location.pathname === '/' ? (
              <PrimaryButton href="#reserve" id="header-book-btn">
                BOOK APPOINTMENT
              </PrimaryButton>
            ) : (
              <PrimaryButton to="/#reserve" id="header-book-btn">
                BOOK APPOINTMENT
              </PrimaryButton>
            )}
          </div>

          {/* Mobile menu button — 44x44px accessible touch target */}
          <button
            className="lg:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-[5px] z-50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e31b23] rounded-[3px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#f4f4f6] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#f4f4f6] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#f4f4f6] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer with scroll support for short screens */}
      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-0 top-[52px] bg-[#09090b] overflow-y-auto max-h-[calc(100vh-52px)] transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden={!menuOpen}
      >
        <nav className="container-site py-6 sm:py-8 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => renderNavLink(link, true))}
          <div className="mt-6 pt-3 flex flex-col gap-3.5 border-t border-white/[0.08]">
            {/* Quick Click-to-Call for Mobile Users */}
            <a
              href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 text-[#f4f4f6] hover:text-white transition-colors py-1.5"
            >
              <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#e31b23] flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-[13px] font-medium">{studioConfig.phone} (Studio Line)</span>
            </a>

            <div className="flex items-start gap-2 text-[#8a8a94] py-0.5">
              <svg
                width="11"
                height="13"
                viewBox="0 0 12 14"
                fill="none"
                className="flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <path
                  d="M6 0C3.794 0 2 1.794 2 4c0 3.5 4 9 4 9s4-5.5 4-9c0-2.206-1.794-4-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-[13px] leading-snug">{studioConfig.address}</span>
            </div>

            {location.pathname === '/' ? (
              <a
                href="#reserve"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-[#e31b23] hover:bg-[#c8171e] text-white text-[12px] font-bold tracking-[0.1em] uppercase rounded-[3px] transition-colors mt-2"
              >
                BOOK APPOINTMENT
              </a>
            ) : (
              <Link
                to="/#reserve"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-[#e31b23] hover:bg-[#c8171e] text-white text-[12px] font-bold tracking-[0.1em] uppercase rounded-[3px] transition-colors mt-2"
              >
                BOOK APPOINTMENT
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
