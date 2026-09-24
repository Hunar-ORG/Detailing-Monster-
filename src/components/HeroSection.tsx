import React from 'react';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import { WHATSAPP_BOOKING_URL } from '../utils/whatsapp';

/* ─────────────────────────────────────────────────────────────
   INLINE SVG ICONS  (line-style, green, no external dependency)
   ───────────────────────────────────────────────────────────── */

/** Shield icon — Paint Protection Film */
const IconShield: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#25D366"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/** Hexagon icon — Graphene Coating (molecular/graphene feel) */
const IconHexagon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#25D366"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]"
  >
    <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
    {/* inner crosshair to suggest graphene lattice */}
    <line x1="12" y1="2"  x2="12" y2="22" />
    <line x1="2"  y1="7"  x2="22" y2="17" />
    <line x1="22" y1="7"  x2="2"  y2="17" />
  </svg>
);

/** Layers icon — Ceramic Coating */
const IconLayers: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#25D366"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]"
  >
    <polygon points="12 2 22 8.5 12 15 2 8.5" />
    <polyline points="2 15 12 21.5 22 15" />
    <polyline points="2 11.5 12 18 22 11.5" />
  </svg>
);

/* ─── Service feature row data ────────────────────────────── */
interface FeatureDef {
  id: string;
  Icon: React.FC;
  title: string;
  desc: string;
}
const heroFeatures: FeatureDef[] = [
  {
    id: 'ppf',
    Icon: IconShield,
    title: 'Paint Protection Film',
    desc: 'Self-healing shields against impacts',
  },
  {
    id: 'graphene',
    Icon: IconHexagon,
    title: 'Graphene Coating',
    desc: 'Ultra-hard graphene matrix protection',
  },
  {
    id: 'ceramic',
    Icon: IconLayers,
    title: 'Ceramic Coating',
    desc: 'Extreme hydrophobic glass coat',
  },
];

/* ─── One feature item ────────────────────────────────────── */
interface FeatureItemProps {
  feature: FeatureDef;
}
const FeatureItem: React.FC<FeatureItemProps> = ({ feature: { Icon, title, desc } }) => (
  <div className="flex items-center sm:items-start gap-1 min-[360px]:gap-1.5 sm:gap-3 flex-1 sm:flex-initial min-w-0">
    {/* icon: centered with title on mobile, top-aligned on desktop */}
    <div className="sm:mt-[1px] flex-shrink-0 flex items-center justify-center">
      <Icon />
    </div>
    <div className="min-w-0">
      <div className="text-[9px] min-[360px]:text-[10px] min-[400px]:text-[11px] sm:text-[12.5px] font-semibold text-white tracking-[0.01em] sm:tracking-[0.03em] leading-tight sm:leading-snug">
        {title}
      </div>
      <div className="hidden sm:block text-[11.5px] text-[#C8C8D0] leading-snug mt-0.5">{desc}</div>
    </div>
  </div>
);

/* ─── Hero CTA buttons ────────────────────────────────────── */
const HeroCTA: React.FC = () => (
  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-4 sm:mt-6">
    <PrimaryButton
      href={WHATSAPP_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      id="hero-book-btn"
      className="w-full sm:w-auto"
    >
      BOOK NOW
    </PrimaryButton>
    <SecondaryButton href="#services" id="hero-explore-btn" className="w-full sm:w-auto">
      OUR SERVICES
    </SecondaryButton>
  </div>
);

/* ─── Main HeroSection ────────────────────────────────────── */
const HeroSection: React.FC = () => {
  return (
    /*
     * ARCHITECTURE
     * ─────────────────────────────────────────────────────────────────────────
     * <section>  position:relative, 100vw wide, 100svh tall
     *
     * BACKGROUND IMAGES (two layers, one visible at a time):
     *   ├── Desktop BG  [hidden on mobile, shown sm+]  → Hero.png
     *   └── Mobile  BG  [shown on mobile, hidden sm+]  → responsive_hero.png
     *
     * OVERLAY GRADIENTS (two layers):
     *   ├── Desktop gradient  [hidden on mobile] — left-to-right cinematic dark
     *   └── Mobile  gradient  [shown on mobile]  — bottom-up for text legibility
     *
     * CONTENT LAYER:
     *   ├── Desktop: flex-spacer pushes content below the DETAILING MONSTER artwork
     *   └── Mobile:  justify-end anchors content to the bottom of the image;
     *                --mobile-hero-content-offset-y fine-tunes the exact position
     *
     * The desktop design is COMPLETELY UNCHANGED — every desktop-only element
     * uses `sm:` prefix or is hidden with `hidden sm:block` on mobile.
     * ─────────────────────────────────────────────────────────────────────────
     */
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: '100svh', height: '100svh' }}
      aria-label="Hero — Detailing Monster automotive studio"
    >

      {/* ══════════════════════════════════════════════════════════
          DESKTOP BACKGROUND — Hero.png
          Visible on sm+ (≥ 640px). Hidden on mobile.
          Desktop design is entirely untouched.
          ══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: 'url(/Hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        role="img"
        aria-label="Detailing Monster automotive studio with BMW and cinematic lighting"
      />

      {/* ══════════════════════════════════════════════════════════
          MOBILE BACKGROUND — responsive_hero.png
          Visible on mobile (< 640px). Hidden on sm+.
          ══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat block sm:hidden"
        style={{
          backgroundImage: 'url(/responsive_hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        role="img"
        aria-label="Detailing Monster automotive studio — mobile view"
      />

      {/* ══════════════════════════════════════════════════════════
          DESKTOP OVERLAY GRADIENTS  (hidden on mobile)
          ══════════════════════════════════════════════════════════ */}

      {/* Layer 1: Cinematic left-to-right gradient */}
      {/*
       * Strongest at left edge, fades transparent before BMW.
       * Does NOT cover title artwork or right side.
       */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.60) 18%, rgba(0,0,0,0.38) 34%, rgba(0,0,0,0.14) 52%, transparent 68%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Very subtle lower-left blur (2px — almost imperceptible) */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          top: '40vh',
          left: 0,
          width: '48%',
          bottom: 0,
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          background: 'transparent',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%), linear-gradient(to right, black 0%, black 55%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%), linear-gradient(to right, black 0%, black 55%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════
          MOBILE OVERLAY GRADIENT  (shown on mobile only)
          Bottom-up dark gradient to ensure text legibility over
          whatever is in the lower part of responsive_hero.png.
          ══════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none block sm:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.20) 60%, transparent 85%)',
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════
          CONTENT LAYER
          Desktop: flex-spacer positions content below the artwork.
          Mobile:  justify-end positions content at the bottom via
                   --mobile-hero-content-offset-y CSS variable.
          ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col h-full pt-[52px]">

        {/*
         * DESKTOP-ONLY SPACER
         * Pushes content below the DETAILING MONSTER artwork.
         * hidden on mobile so the mobile layout uses justify-end instead.
         *
         * At 1920×945 viewport: 46vh ≈ 435px → content starts ~435px down.
         * Tweak --hero-content-offset-y on .hero-content-container in DevTools.
         */}
        <div
          className="hidden sm:block"
          style={{ flex: '0 0 clamp(200px, 46vh, 460px)' }}
          aria-hidden="true"
        />

        {/*
         * MOBILE SPACER — grows to push .hero-content-container to the bottom.
         * On mobile we use flex-grow so the content anchors near the bottom of
         * the image, then --mobile-hero-content-offset-y nudges it up/down.
         */}
        <div className="block sm:hidden flex-grow" aria-hidden="true" />

        {/*
         * ── hero-content-container ──────────────────────────────────────────
         * Contains ALL hero content (desktop + mobile share the same elements).
         *
         * DESKTOP vertical tuning : --hero-content-offset-y  (default 0px)
         * MOBILE  vertical tuning : --mobile-hero-content-offset-y (default 0px)
         *
         * In DevTools, select .hero-content-container and edit the relevant
         * variable:
         *   Positive → moves content DOWN
         *   Negative → moves content UP
         *
         * The transform uses the correct variable per breakpoint via media query
         * inside the style attribute — both are always defined so there's no
         * undefined-variable flash.
         * ────────────────────────────────────────────────────────────────────
         */}
        <div
          className="hero-content-container container-site px-3.5 min-[360px]:px-4 sm:px-8 pb-3.5 min-[360px]:pb-5 sm:pb-14"
          style={{
            ['--hero-content-offset-y' as string]: '0px',
            transform: 'translateY(var(--hero-content-offset-y))',
          }}
        >
          {/*
           * ── mobile-hero-content ──────────────────────────────────────────
           * Single dedicated container wrapping ALL mobile hero content.
           * In Chrome DevTools: Inspect Element → select .mobile-hero-content
           * and adjust `top: -35px` to move the entire content group up/down.
           * ─────────────────────────────────────────────────────────────────
           */}
          <div className="mobile-hero-content">
            {/* ── Micro label ──────────────────────────────────────── */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] bg-[#25D366] rotate-45 flex-shrink-0" aria-hidden="true" />
              <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.2em] sm:tracking-[0.22em] uppercase text-white">
                PREMIUM AUTO CARE
              </span>
            </div>

            {/* Large DETAILING MONSTER title is inside Hero.png — no HTML duplicate */}

            {/* ── Service line ─────────────────────────────────────── */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-2 sm:mb-4">
              {['PPF', 'GRAPHENE COATING', 'CERAMIC COATING'].map((s, i, arr) => (
                <React.Fragment key={s}>
                  <span
                    className="text-[9.5px] min-[360px]:text-[10.5px] font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase"
                    style={{ color: i === 0 ? '#25D366' : '#E4E4E7' }}
                  >
                    {s}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] rounded-full bg-[#25D366] flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* ── Supporting description ───────────────────────────── */}
            <p
              className="text-[12.5px] min-[360px]:text-[13px] sm:text-[14px] font-medium leading-[1.5] sm:leading-[1.7] text-white"
              style={{ maxWidth: '400px' }}
            >
              Professional detailing and paint protection engineered to preserve
              the finish, character, and value of your vehicle in Mysuru.
            </p>

            {/* ── CTA buttons ──────────────────────────────────────── */}
            <HeroCTA />

            {/* ── Service feature row (with icons) ─────────────────── */}
            {/*
             * On mobile: single horizontal row, compact gap, descriptions hidden.
             * On desktop: horizontal row (sm:flex-row), larger gap, descriptions visible.
             */}
            <div
              className="flex flex-row justify-between sm:justify-start items-center sm:items-start gap-1 min-[360px]:gap-2 sm:gap-8 mt-3 min-[360px]:mt-3.5 sm:mt-8 w-full"
              style={{ maxWidth: '580px' }}
            >
              {heroFeatures.map((f) => (
                <FeatureItem key={f.id} feature={f} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/*
       * MOBILE: .mobile-hero-content controls vertical positioning on mobile.
       * Adaptive across viewport heights using clamp():
       * - Shorter phones (~650px) → ~ -41px (tightens gap slightly)
       * - Baseline phones (~750-800px) → ~ -35px (preserves current baseline)
       * - Taller phones (~900px) → ~ -27px (allows slightly more spacing)
       * Easily selectable in DevTools → tweak `top` directly.
       */}
      <style>{`
        @media (max-width: 639px) {
          .mobile-hero-content {
            position: relative;
            top: -35px;
            top: clamp(-46px, calc(-74px + 5svh), -26px);
          }
        }
        @media (min-width: 640px) {
          .mobile-hero-content {
            position: static;
            top: auto;
          }
        }
      `}</style>

    </section>
  );
};

export default HeroSection;
