import React from 'react';
import HeroSection from '../components/HeroSection';

import ServiceCategoryStrip from '../components/ServiceCategoryStrip';
import ServicesSection from '../components/ServicesSection';
import { ServiceShowcaseContent } from './ServiceShowcasePage';
import { Page3Content } from './Page3';
import { Page4Content } from './Page4';
import { Page5Content } from './Page5';
import { Page6Content } from './Page6';
import { Page7Content } from './Page7';
import { Page8Content } from './Page8';

/**
 * HomePage — renders all page sections in one long scrollable view.
 * Each page's content is also independently accessible via its own route.
 */
const HomePage: React.FC = () => (
  <main>
    {/* ── Page 1 ─────────────────────────────────── */}
    {/* HeroSection has pt-[52px] built in to clear the fixed header */}
    <HeroSection />

    <ServiceCategoryStrip />
    <ServicesSection />

    {/* ── Page 2: Paint Correction + Ceramic Coating ─ */}
    <ServiceShowcaseContent />

    {/* ── Page 3: Interior Detailing + PPF ─────────── */}
    <Page3Content />

    {/* ── Page 4: Visual Shift + Engineered Method ──── */}
    <Page4Content />

    {/* ── Page 5: Our Portfolio ───────────────────── */}
    <Page5Content />

    {/* ── Page 6: Testimonials + Reserve Your Detail ─ */}
    <Page6Content />

    {/* ── Page 7: Studio Access ─────────────────────── */}
    <Page7Content />

    {/* ── Page 8: Final CTA ────────────────────────── */}
    <Page8Content />
  </main>
);

export default HomePage;
