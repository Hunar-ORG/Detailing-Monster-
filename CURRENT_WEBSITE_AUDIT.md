# CURRENT WEBSITE — COMPLETE DISCOVERY, AUDIT & INVENTORY REPORT
**Project:** DETAILING MONSTER (Automotive Detailing & Surface Protection Studio)  
**Location:** Saraswathipuram, Mysuru, Karnataka, India  
**Audit Date:** September 2026  
**Auditor Roles:** Senior Frontend Architect, React + TypeScript Engineer, UI/UX Engineer, Responsive Design Engineer, SEO Engineer, Accessibility Engineer, Performance Engineer, Code Reviewer, QA Engineer, Technical Documentation Engineer  
**Audit Mode:** READ-ONLY / ZERO-MODIFICATION DISCOVERY (Codebase remains 100% unaltered)

---

## 1. Executive Summary

This document provides a comprehensive, forensic, code-level discovery, audit, and inventory of the current **DETAILING MONSTER** website repository.

### High-Level Summary
- **Website Purpose:** Premium luxury automotive detailing, paint correction, ceramic coating, paint protection film (PPF), and cabin restoration studio website.
- **Core Technology Stack:** Vite 8.3.0, React 19.2.8, TypeScript 6.0.2, TailwindCSS 3.4.19, React Router DOM 7.18.4.
- **Architecture Model:** Hybrid SPA (Single-Page Application). The main entry page (`/`) renders a continuous 13-section long-scroll experience with sticky header and global footer. Concurrently, 15 individual sub-routes exist in `App.tsx` mapping to modular standalone views.
- **Total Major Sections:** 13 visual story sections + 1 Sticky Global Header + 1 Global 5-Column Footer (15 section components in total).
- **Reusable Components:** 29 component files in `src/components/` and `src/components/ui/`.
- **Current Brand Information:** Fully migrated in `src/` to **DETAILING MONSTER** (Studio: *DETAILING MONSTER Studio*).
- **Current Location Information:** `4th Main, Maruthi Temple Road, Saraswathipuram, Mysuru, Karnataka - 570009` (Landmark: *Near the Central Library*). Contact phone: `+91 99452 28752`. Contact email: `studio@detailingmonster.com`.
- **Integrations:**
  - **Google Maps:** Outbound query link (`https://maps.google.com/?q=...`) from the directions button.
  - **Phone / Tel:** Direct `tel:` scheme links in the header, mobile drawer, location card, and footer.
  - **Mailto:** Direct `mailto:` link in the footer.
  - **Backend / API / CRM / Email:** **NONE**. The appointment form relies on a simulated frontend mock (`appointmentService.ts`) with a 600ms artificial timeout. **No real data is stored or transmitted.**
- **Pricing Status:** **COMPLETELY EXCLUDED**. There are zero pricing cards, packages, or dollar/rupee figures in any active visible page, navigation, component, or data file. The only occurrence of "price" in the active source tree is `"priceRange": "$$$$"` in the JSON-LD schema inside `index.html`.
- **Appointment Form Functionality:** Pure frontend mock simulation. Generates local `DM-######` reference numbers in memory and displays a confirmation state. Submissions are destroyed upon page refresh.
- **Biggest Technical Risks Identified:**
  1. *Form Data Black Hole:* The reservation form does not submit to any backend API, webhook, email server, or WhatsApp link. Lead capture is currently non-functional in production.
  2. *Stale Production Artifacts in `dist/`:* The `dist/` directory contains an old compiled build containing references to the previous template identity (*Blackline Auto*, *Islamabad*, *Pakistan*). If deployed from `dist/` without running `npm run build`, old template data would be served.
  3. *Heavy Image Payload:* ~8.2 MB of uncompressed JPEG assets served directly from `/public` without modern WebP/AVIF formats or responsive image `srcset` tags.
  4. *Dependency Mismatch:* `@types/react-router-dom` v5.3.3 is errantly installed under `dependencies` in `package.json` while `react-router-dom` v7.18.4 is the active router.
- **Biggest Missing Client Information:** Real customer reviews, genuine studio/portfolio vehicle photography, verification of claimed statistics ("Since 2025", "500+ vehicles", "98% satisfaction"), live social media URLs, official business email domain verification, and backend lead delivery destination (email/WhatsApp/CRM).

---

## 2. Technology Stack

| Category | Technology / Specification | Version | Notes / Location |
| :--- | :--- | :--- | :--- |
| **Project Name** | `monster` | `0.0.0` | Defined in `package.json` |
| **Runtime / Core** | React | `^19.2.8` | `react`, `react-dom` in `package.json` |
| **Language** | TypeScript | `~6.0.2` | Target: `es2023`, strict linting enabled |
| **Build Tool / Bundler** | Vite | `^8.3.0` | Uses `@vitejs/plugin-react` (`^6.1.1`) via Oxc |
| **Package Manager** | npm | Lockfile v3 | Verified via `package-lock.json` |
| **Routing Architecture** | React Router DOM | `^7.18.4` | `BrowserRouter`, `Routes`, `Route`, `Outlet` in `src/App.tsx` |
| **Styling Framework** | Tailwind CSS | `^3.4.19` | PostCSS `^8.5.28`, Autoprefixer `^10.6.1` |
| **Custom CSS** | Vanilla CSS Layers | — | `src/index.css` (`@layer base`, `@layer utilities`) |
| **Typography** | Plus Jakarta Sans | 400, 500, 600, 700, 800 | Loaded via Google Fonts preconnect in `index.html` |
| **Icons** | Custom Inline SVGs | — | Zero external icon packages; SVGs coded in TSX |
| **UI Components** | Handcrafted / Bespoke | — | Zero external component UI libraries (no Radix, MUI, Lucide) |
| **Animations** | Pure CSS & Transitions | — | CSS transitions + `fadeIn` keyframe in `tailwind.config.js` |
| **Forms Handling** | Controlled React State | — | `useState` in `AppointmentForm.tsx`; no React Hook Form / Formik |
| **Data Validation** | Custom Regex / JS Logic | — | Native JS validations in `src/components/AppointmentForm.tsx` |
| **State Management** | Local Component State | — | `useState`, `useRef`, `useCallback`, `useEffect` |
| **Linting System** | Oxlint | `^1.81.0` | Configured in `.oxlintrc.json` |
| **Image Handling** | Native `<img>` | — | Native lazy loading (`loading="lazy"`, `decoding="async"`) |
| **SEO Implementation** | Static HTML Tags + JSON-LD | — | In `index.html` (LocalBusiness / AutomotiveBusiness schema) |
| **Analytics** | None | — | No tracking scripts detected |
| **API / Backend** | Mock Client-Side Service | — | `src/services/appointmentService.ts` |
| **Environment Config** | None | — | No `.env` files; no `import.meta.env` keys used |

---

## 3. Project Structure

### Root Directory
```text
c:\Users\Abdul Jabbar\Desktop\Monster\
├── .gitignore
├── .oxlintrc.json
├── .vscode/
│   └── extensions.json
├── dist/                               <-- STALE COMPILED BUILD (Contains old Blackline build)
│   ├── assets/
│   ├── index.html
│   ├── robots.txt
│   └── sitemap.xml
├── index.html                          <-- Master Single Page entry & SEO/JSON-LD metadata
├── node_modules/
├── package.json
├── package-lock.json
├── postcss.config.js
├── public/                             <-- Static media & web crawler assets
│   ├── after-mirror.jpg
│   ├── before-swirls.jpg
│   ├── ceramic-after.jpg
│   ├── ceramic-before.jpg
│   ├── ceramic-water.jpg
│   ├── favicon.svg
│   ├── final-cta-bg.jpg
│   ├── hero-car.jpg
│   ├── interior-before.jpg
│   ├── interior-cockpit.jpg
│   ├── paint-correction-hood.jpg
│   ├── portfolio-amg.jpg
│   ├── portfolio-bmwm4.jpg
│   ├── portfolio-ferrari.jpg
│   ├── portfolio-lamborghini.jpg
│   ├── portfolio-porsche.jpg
│   ├── portfolio-rangerover.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── studio-facility.jpg
├── README.md
├── src/
│   ├── App.tsx                         <-- Root routing tree
│   ├── main.tsx                        <-- Application mounting entry point
│   ├── index.css                       <-- Design tokens, base resets & utility layers
│   ├── assets/                         <-- Unused/dormant assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/                     <-- Reusable UI & section components
│   │   ├── ui/
│   │   │   ├── Button.tsx              <-- PrimaryButton & SecondaryButton primitives
│   │   │   └── ServicePrimitives.tsx   <-- ServiceLabel, FeatureList, SpecGrid, PrimaryCTA
│   │   ├── AppointmentForm.tsx         <-- 7-field booking form with validation
│   │   ├── BeforeAfterGallery.tsx      <-- Static side-by-side comparison strip
│   │   ├── BeforeAfterSlider.tsx       <-- Interactive clip-path drag comparison slider
│   │   ├── FAQSection.tsx              <-- Accordion with single-open toggle state
│   │   ├── FinalCTA.tsx                <-- Cinematic full-width background closing banner
│   │   ├── Footer.tsx                  <-- 5-column responsive footer
│   │   ├── Header.tsx                  <-- Fixed sticky header with mobile drawer
│   │   ├── HeroSection.tsx             <-- LCP hero banner with background imagery
│   │   ├── Layout.tsx                  <-- Master layout wrapper (Header + Outlet + Footer)
│   │   ├── LocationMapPanel.tsx        <-- Dark SVG map illustration with overlay card
│   │   ├── PortfolioCard.tsx           <-- Hover-zoom vehicle project card
│   │   ├── PortfolioSection.tsx        <-- 6-item portfolio showcase grid
│   │   ├── PPFProtectionDiagram.tsx    <-- Car side profile schematic with zone legend
│   │   ├── PPFZoneCard.tsx             <-- Badge-identified zone defense card
│   │   ├── ProcessTimeline.tsx         <-- 5-step horizontal/vertical responsive pipeline
│   │   ├── ReservationSection.tsx      <-- Dark graphite booking section wrapper
│   │   ├── ServiceCard.tsx             <-- Overview service card with SVG badge
│   │   ├── ServiceCategoryStrip.tsx    <-- Horizontal category ticker & since badge
│   │   ├── ServiceIcon.tsx             <-- Inline SVG icon switcher
│   │   ├── ServicesSection.tsx         <-- 4-column service overview grid
│   │   ├── StandardCard.tsx            <-- Operational principle card
│   │   ├── StandardSection.tsx         <-- 4-pillar brand standard section
│   │   ├── StatsPanel.tsx              <-- 3-metric statistical banner
│   │   ├── StudioAccessSection.tsx     <-- Studio visit section with map & photo
│   │   ├── StudioImagePanel.tsx        <-- Studio facility photograph with gradient overlay
│   │   ├── TestimonialCard.tsx         <-- 5-star review quote card
│   │   └── TestimonialsSection.tsx     <-- 3-column customer review section
│   ├── data/                           <-- Static content & configuration repositories
│   │   ├── page5Data.ts                <-- Standard principles & portfolio vehicles
│   │   ├── page6Data.ts                <-- Customer testimonials & form service options
│   │   ├── page7Data.ts                <-- Studio location info, facility info & FAQ items
│   │   ├── page8Data.ts                <-- Footer links, contact info & social channels
│   │   ├── siteData.ts                 <-- Nav links, stats, service categories & cards
│   │   └── studioConfig.ts             <-- Central business location & studio config
│   ├── pages/                          <-- Page view controllers
│   │   ├── HomePage.tsx                <-- Aggregated master scroll page
│   │   ├── Page3.tsx                   <-- Interior Detailing & PPF standalone view
│   │   ├── Page4.tsx                   <-- Visual Shift & Engineered Method standalone view
│   │   ├── Page5.tsx                   <-- The Standard & Our Portfolio standalone view
│   │   ├── Page6.tsx                   <-- Testimonials & Reservation standalone view
│   │   ├── Page7.tsx                   <-- Studio Access & FAQ standalone view
│   │   ├── Page8.tsx                   <-- Final CTA standalone view
│   │   └── ServiceShowcasePage.tsx     <-- Paint Correction & Ceramic Coating standalone view
│   ├── services/
│   │   └── appointmentService.ts       <-- Mock submission service layer
│   └── types/
│       └── index.ts                    <-- Global TypeScript interfaces & data contracts
├── tailwind.config.js                  <-- Custom theme extensions, palette & keyframes
├── tsconfig.app.json                   <-- Browser TypeScript compilation rules
├── tsconfig.json                       <-- Project references hub
├── tsconfig.node.json                  <-- Node/Vite tooling TypeScript configuration
└── vite.config.ts                      <-- Vite configuration with React plugin
```

---

## 4. Page / Section Map

The primary landing page (`src/pages/HomePage.tsx`) orchestrates all 13 major sections in a strict, continuous narrative flow:

```
[Sticky Header] (Header.tsx)
      │
      ▼
[Hero Section] (HeroSection.tsx) ────────────────────────── id="hero"
      │
      ▼
[Stats Panel] (StatsPanel.tsx)
      │
      ▼
[Service Category Strip] (ServiceCategoryStrip.tsx)
      │
      ▼
[Services Overview] (ServicesSection.tsx) ──────────────── id="services"
      │
      ▼
[Section 01: Paint Correction] (ServiceShowcasePage.tsx) ── id="paint-correction"
      │
      ▼
[Section 02: Ceramic Coating] (ServiceShowcasePage.tsx) ─── id="ceramic-coating"
      │
      ▼
[Section 03: Interior Detailing] (Page3.tsx) ────────────── id="interior-detailing" (alias #detailing)
      │
      ▼
[Section 04: Paint Protection Film] (Page3.tsx) ─────────── id="ppf" (alias #paint-protection)
      │
      ▼
[Section 05: Visual Shift] (Page4.tsx) ──────────────────── id="visual-shift" (alias #gallery)
      │
      ▼
[Section 06: Engineered Method] (Page4.tsx) ─────────────── id="process"
      │
      ▼
[Section 07: The Standard] (Page5.tsx) ──────────────────── id="standard" (alias #about)
      │
      ▼
[Section 08: Our Portfolio] (Page5.tsx) ─────────────────── id="portfolio"
      │
      ▼
[Section 09: Testimonials] (Page6.tsx) ──────────────────── id="testimonials"
      │
      ▼
[Section 10: Reserve Your Detail] (ReservationSection.tsx) ─ id="reserve" (alias #appointment)
      │
      ▼
[Section 11: Studio Access] (StudioAccessSection.tsx) ───── id="studio" (alias #location)
      │
      ▼
[Section 12: Common Inquiries / FAQ] (FAQSection.tsx) ───── id="faq"
      │
      ▼
[Section 13: Final CTA] (FinalCTA.tsx) ──────────────────── id="final-cta"
      │
      ▼
[Global Footer] (Footer.tsx)
```

### Detailed Section-by-Section Breakdown

| # | Section Name | Component / File | Approximate Purpose | Desktop Layout | Mobile Layout | Anchor ID | Data Source |
| :- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **00** | **Header** | `src/components/Header.tsx` | Site navigation, brand anchor, fast contact & booking trigger | Fixed 52px bar, horizontal links, location badge, CTA | Fixed 52px bar, hamburger button, animated full-screen drawer | — | `siteData.ts`, `studioConfig.ts` |
| **01** | **Hero Section** | `src/components/HeroSection.tsx` | First impression, value proposition, immediate conversion CTA | Full-bleed background image with left-gradient, left-aligned text | Center/left text, stacked action buttons | `hero` | Hardcoded in component |
| **02** | **Stats Panel** | `src/components/StatsPanel.tsx` | Instant numerical social proof & operational scale | 3 horizontal split cards with subtle vertical dividers | 3 vertically stacked cards with horizontal dividers | — | `stats` in `siteData.ts` |
| **03** | **Category Strip** | `src/components/ServiceCategoryStrip.tsx` | Broad capability overview & studio heritage badge | Horizontal ticker with red bullet separators + right badge | Wrapped tags with left-aligned badge | — | `siteData.ts` & component |
| **04** | **Services Overview** | `src/components/ServicesSection.tsx` | High-level summary of core service offerings | 2-column header + 4-column card grid | 1-column header + 1 or 2-column grid | `services` | `serviceCards` in `siteData.ts` |
| **05** | **Paint Correction** | `src/pages/ServiceShowcasePage.tsx` | Deep dive into multi-stage machine polishing | 2-column: Left text & features, Right image stack | 1-column: Stacked text then image stack | `paint-correction` | `paintFeatures` in component |
| **06** | **Ceramic Coating** | `src/pages/ServiceShowcasePage.tsx` | Deep dive into quartz composite coatings | 2-column: Left image, Right text & 3 spec cards | 1-column: Stacked image then text & specs | `ceramic-coating` | `ceramicSpecs` in component |
| **07** | **Interior Detailing** | `src/pages/Page3.tsx` | Deep dive into leather, fabric, & cockpit restoration | 2-column: Left text & features, Right interior photo | 1-column: Image displayed first, then text & features | `interior-detailing` | `interiorFeatures` in component |
| **08** | **PPF** | `src/pages/Page3.tsx` | Paint protection film explanation & impact zones | 2-column: Top header, Bottom left SVG diagram, Right zone list | 1-column: Header, diagram, stacked zone cards | `ppf` | `ppfZones` in component |
| **09** | **Visual Shift** | `src/pages/Page4.tsx` | Interactive before/after transformation proof | 2-column intro + 3-column interactive slider grid | 1-column intro + 3 stacked sliders | `visual-shift` | `comparisonCards` in component |
| **10** | **Engineered Method** | `src/pages/Page4.tsx` | 5-step quality-controlled workflow timeline | Centered header + 5-step horizontal connected pipeline | Centered header + vertical connected timeline | `process` | `processSteps` in component |
| **11** | **The Standard** | `src/pages/Page5.tsx` | 4 operational pillars & quality philosophy | Centered header + 4-column metric card grid | Centered header + 1 or 2-column card grid | `standard` | `standardPrinciples` in `page5Data.ts` |
| **12** | **Our Portfolio** | `src/pages/Page5.tsx` | Visual gallery of completed luxury/exotic vehicle projects | 2-column header + 3x2 grid (6 vehicle cards) | 1-column header + 1 or 2-column card grid | `portfolio` | `portfolioVehicles` in `page5Data.ts` |
| **13** | **Testimonials** | `src/pages/Page6.tsx` | Client reviews, star ratings & vehicle ownership proof | Centered header + 3-column testimonial card grid | Centered header + 1 or 2-column card grid | `testimonials` | `testimonials` in `page6Data.ts` |
| **14** | **Reserve Your Detail** | `src/components/ReservationSection.tsx` | Primary lead generation & appointment booking engine | 12-col grid: 5-col benefits text, 7-col interactive form panel | 1-column: Intro & benefits stacked on top of form panel | `reserve` | `serviceOptions` in `page6Data.ts` |
| **15** | **Studio Access** | `src/components/StudioAccessSection.tsx` | Physical facility credibility, location & map navigation | 2-column header + 2 visual panels (Map SVG + Photo) | 1-column header + stacked Map & Photo panels | `studio` | `studioConfig.ts` & component |
| **16** | **Common Inquiries** | `src/components/FAQSection.tsx` | Objection handling & technical customer FAQs | Centered header + max-w-3xl accordion list (item 1 open) | Centered header + full-width mobile accordion | `faq` | `faqList` in `page7Data.ts` |
| **17** | **Final CTA** | `src/components/FinalCTA.tsx` | High-impact closing call to action over cinematic imagery | Centered text with 2 horizontal action buttons | Centered text with stacked full-width action buttons | `final-cta` | Hardcoded in component |
| **18** | **Footer** | `src/components/Footer.tsx` | Complete site navigation, contact coordinates & socials | 5 columns: Brand, Services, Company, Contact, Socials | Stacks to 2 columns on tablet, 1 column on mobile | — | `page8Data.ts` & `studioConfig.ts` |

---

## 5. Complete Content Inventory

### Visible Text & Copy Directory

#### Header (`src/components/Header.tsx`)
- Logo: `DETAILING MONSTER` (Red accent dot)
- Desktop Nav Links: `Services`, `Paint Protection`, `Detailing`, `Gallery`, `Process`, `About`
- Location Pill: `Mysuru, Karnataka`
- Action Button: `BOOK APPOINTMENT`
- Mobile Drawer Elements:
  - Phone: `+91 99452 28752 (Studio Line)`
  - Address: `4th Main, Maruthi Temple Road, Saraswathipuram, Mysuru, Karnataka - 570009`
  - Drawer Button: `BOOK APPOINTMENT`

#### Hero Section (`src/components/HeroSection.tsx`)
- Micro Label: `PREMIUM AUTOMOTIVE DETAILING`
- Headline: `Precision Care for Exceptional Cars`
- Description: `Professional detailing and paint protection engineered to preserve the finish, character, and value of your vehicle in Mysuru.`
- Primary Button: `BOOK YOUR DETAIL` (Links to `#reserve`)
- Secondary Button: `EXPLORE SERVICES` (Links to `#services`)

#### Stats Panel (`src/components/StatsPanel.tsx` & `src/data/siteData.ts`)
- Stat 1: Value `500+`, Label `VEHICLES DETAILED`, Sub-label `Supercars & Classics`
- Stat 2: Value `98%`, Label `SATISFACTION`, Sub-label `Five-Star Detailing Reviews`
- Stat 3: Value `7+`, Label `YEARS EXPERTISE`, Sub-label `Master Certified Detailing Team`

#### Service Category Strip (`src/components/ServiceCategoryStrip.tsx` & `src/data/siteData.ts`)
- Categories: `PAINT CORRECTION` · `CERAMIC COATING` · `PPF` · `INTERIOR DETAILING`
- Heritage Badge: `SINCE 2025` — `Serving Automotive Enthusiasts in Karnataka`

#### Services Overview (`src/components/ServicesSection.tsx` & `src/data/siteData.ts`)
- Section Label: `OUR SERVICES`
- Headline: `Every surface. Every detail. No compromise.`
- Description: `From precision paint correction to advanced composite coatings, every process is executed inside our climate-controlled studio with dedicated lighting.`
- Card 1: `Paint Correction` — `Machine leveling to erase defects and unlock mirror clarity.`
- Card 2: `Ceramic Protection` — `Ultra-hard glass coats offering extreme water repelling.`
- Card 3: `PPF Install` — `Premium self-healing shields against physical impacts.`
- Card 4: `Interior Restoration` — `Deep leather feeding and tactile surface rejuvenation.`

#### Section 01: Paint Correction (`src/pages/ServiceShowcasePage.tsx`)
- Section Label: `01 · Paint Correction`
- Headline: `Restore the finish. Reveal the paint.`
- Description: `Erasing swirls, oxidation, light scratches, and surface imperfections. Our multi-stage machine polishing process restores deep optical clarity.`
- Features:
  1. `Paint Depth Inspection` — `Ultrasonic measurement to protect clearcoat thickness borders.`
  2. `Multi-Stage Leveling` — `Eradicates deep defects down to a flawless mirror plane.`
  3. `Optical Refinement` — `Micro-finishing polishes to maximize gloss spectrum.`
- Button: `EXPLORE CORRECTION` (Links to `#reserve`)
- Image Badges: `Untouched Swirls` vs `Mirror Finish`

#### Section 02: Ceramic Coating (`src/pages/ServiceShowcasePage.tsx`)
- Section Label: `02 · Ceramic Coating`
- Headline: `Protection that performs.`
- Description: `An incredibly durable inorganic quartz shell that bonds at a molecular scale. It locks in depth, prevents environmental etching, and makes maintenance washing effortless.`
- Spec Cards:
  1. `9H+` — `Hardness Matrix` — `Extreme physical resistance`
  2. `110°` — `Beading Angle` — `Superhydrophobic run-off`
  3. `5 YR` — `Guaranteed Shell` — `Durable chemical barrier`
- Button: `EXPLORE CERAMIC COATING` (Links to `#reserve`)

#### Section 03: Interior Detailing (`src/pages/Page3.tsx`)
- Section Label: `03 · Interior Detailing`
- Headline: `Inside deserves the same attention.`
- Description: `Beyond clean surfaces, we deliver cockpit preservation. We treat fine leathers, performance textiles, and tactile materials with specialized dry steam.`
- Features:
  1. `Alcantara & Leather Feeding` — `Deep pH-balanced cleaning followed by premium essential oil conditioning.`
  2. `Hot Extraction Cleaning` — `Pressure steam flushing of deep carpet fibers to remove micro-particulates.`
  3. `Tactile Surface Cleansing` — `Zero-residue brush dusting of intricate dashboard vents and controls.`
- Button: `RESTORE YOUR INTERIOR` (Links to `#reserve`)

#### Section 04: Paint Protection Film (`src/pages/Page3.tsx`)
- Section Label: `04 · Paint Protection Film`
- Headline: `Invisible protection. Serious defense.`
- Description: `Premium self-healing polyurethane shields precision-templated for an exact edge-wrapped finish. Completely invisible, highly impact-resistant.`
- Zones:
  - Zone A: `Front Impact Zone` — `Bumper, full hood, and fenders receiving direct debris.`
  - Zone B: `Side Mirrors & Pillars` — `High-exposure vertical sections vulnerable to bugs and chips.`
  - Zone C: `Lower Rocker Panels` — `Defense against wheel-arch rock slinging.`
- Button: `EXPLORE PPF OPTIONS` (Links to `#reserve`)

#### Section 05: Visual Shift (`src/pages/Page4.tsx`)
- Section Label: `Visual Shift`
- Headline: `The difference is in the details.`
- Description: `Slide to examine the level of surgical precision executed on every vehicle that enters our cleanroom studio. No flaws survive.`
- Slider 1: `Paint Correction` (Labels: `SWIRLS & HAZE` / `DEEP GLOSS`)
- Slider 2: `Interior Restoration` (Labels: `STAINED & DULL` / `CLEAN & REFINED`)
- Slider 3: `Ceramic Coating` (Labels: `FLAT SURFACE` / `HYDROPHOBIC`)

#### Section 06: Engineered Method (`src/pages/Page4.tsx`)
- Section Label: `Engineered Method`
- Headline: `Precision at every stage.`
- Description: `We don't rush. We follow a strict, multi-point scientific protocol to ensure your automotive asset leaves our facility in a flawless state.`
- Steps:
  1. `01 Inspect` — `We analyze the vehicle's unique paint characteristics and current clearcoat depth under specialized inspection lights.`
  2. `02 Prepare` — `Thorough chemical and mechanical decontamination, wash, and multi-stage claybar preparation of all surfaces.`
  3. `03 Correct` — `Paint imperfections, swirls, and light scratches are meticulously machine leveled to unlock true optical clarity.`
  4. `04 Protect` — `Application of industry-leading ceramic coatings or precision edge-wrapped paint protection film.`
  5. `05 Finish` — `Final 100-point light tunnel inspection and quality control before we authorize the release of the vehicle.`

#### Section 07: The Standard (`src/pages/Page5.tsx` & `src/data/page5Data.ts`)
- Section Label: `THE STANDARD`
- Headline: `Exceptional cars deserve exceptional care.`
- Description: `At DETAILING MONSTER, detailing is not just a cleaning service. It's a high-level craft performed by dedicated specialists with zero room for error.`
- Principle 01: `Surgical Precision` — `Every surface, crevice, and paint millimeter is inspected, measured, and treated individually for uncompromising results.`
- Principle 02: `Expert Crew` — `Certified technicians trained in advanced paint leveling, wet-sanding, and micro-precision composite application.`
- Principle 03: `Elite Formulations` — `We source only professional-grade coatings, paint protection films, and ultra-safe high-lubricity detailing compounds.`
- Principle 04: `Obsessive Focus` — `We target the microscopic details that most operations completely overlook. Perfect is our starting baseline.`

#### Section 08: Our Portfolio (`src/pages/Page5.tsx` & `src/data/page5Data.ts`)
- Section Label: `OUR PORTFOLIO`
- Headline: `Cars we’ve had the privilege to perfect.`
- Description: `A showcase of exotic machinery, high-performance daily drivers, and precious collector classics treated to the ultimate DETAILING MONSTER detailing standard.`
- Item 1: `Porsche 911 GT3 RS` — `Multi-Stage Correction • Ceramic Coating`
- Item 2: `Range Rover Autobiography` — `Full Exterior Self-Healing PPF Wrap`
- Item 3: `Mercedes-AMG GT Black Series` — `Track Prep PPF + Advanced Wheel Coating`
- Item 4: `BMW M4 Competition` — `Paint Correction + 5-Year Dual Quartz Coating`
- Item 5: `Ferrari F8 Tributo` — `Interior Cockpit Restoration + Leather Feeding`
- Item 6: `Lamborghini Huracán Evo` — `Full Correction + Hydrophobic Glass Coating`

#### Section 09: Testimonials (`src/pages/Page6.tsx` & `src/data/page6Data.ts`)
- Section Label: `TESTIMONIALS`
- Headline: `Trusted by people who care about their cars.`
- Review 1: `Daniel R.` (Porsche 911 Owner) — 5 Stars — *“The paint looked better than the day I bought the car. Swirls and light defects are completely gone, replaced by a deep optical depth I didn't think was possible. The attention to detail is unmatched.”*
- Review 2: `Michael T.` (Range Rover Owner) — 5 Stars — *“DETAILING MONSTER treated my autobiography like it was their own prized asset. The PPF wrapping is completely seamless—literally invisible. Excellent customer service and communication from the team.”*
- Review 3: `Ahmed K.` (Mercedes-AMG Owner) — 5 Stars — *“Professional, certified, and genuinely passionate. They mapped my entire paint thickness with an ultrasonic gauge before starting correction. Highly technical, master-level detailing service.”*

#### Section 10: Reserve Your Detail (`src/components/ReservationSection.tsx` & `src/components/AppointmentForm.tsx`)
- Section Label: `RESERVE YOUR DETAIL`
- Headline: `Your car deserves better.`
- Description: `Tell us about your machine and we will build a custom correction or protection plan. Slots are limited to maintain our strict quality timelines.`
- Trust Points:
  - `Flexible scheduling to fit your calendar`
  - `Fully insured, climate-controlled camera-monitored facility`
- Form Fields & Labels:
  - Label: `FULL NAME *` | Placeholder: `e.g. James Holloway`
  - Label: `EMAIL ADDRESS *` | Placeholder: `e.g. james@lumen.com`
  - Label: `PHONE NUMBER *` | Placeholder: `e.g. +91 99452 28752`
  - Label: `VEHICLE MODEL *` | Placeholder: `e.g. Porsche 911 GT3 (2026)`
  - Label: `REQUESTED SERVICE *` | Dropdown: 5 options
  - Label: `PREFERRED DATE *` | Native HTML date picker (min: current date)
  - Label: `MESSAGE / SPECIFIC VEHICLE REQUIREMENTS (OPTIONAL)` | Placeholder: `Detail any clearcoat oxidation, matte film wraps, custom wheels, or areas of concern...`
- Submit Button: `REQUEST APPOINTMENT` (Loading text: `SUBMITTING REQUEST...`)
- Validation Messages:
  - *Full name is required. / Name must be at least 2 characters.*
  - *Email address is required. / Please provide a valid email address.*
  - *Phone number is required. / Please provide a valid phone number (e.g. +91 99452 28752).*
  - *Vehicle model is required (e.g. Porsche 911 GT3).*
  - *Please choose a requested service.*
  - *Please select a preferred date. / Appointment date cannot be in the past.*
  - *Unable to submit your reservation request. Please check your connection and try again.*
- Confirmation Screen:
  - Headline: `Appointment Request Received`
  - Ref: `REF: DM-######`
  - Message: `Thank you, [Name]. Our master technician will inspect your vehicle specifications and reach out within 12 hours with a preliminary slot proposal and clearcoat inspection protocol.`
  - Reset Link: `Submit Another Request`

#### Section 11: Studio Access (`src/components/StudioAccessSection.tsx` & `src/data/studioConfig.ts`)
- Section Label: `STUDIO ACCESS`
- Headline: `Visit DETAILING MONSTER.`
- Description: `Located in Saraswathipuram, Mysuru, near the Central Library. Our dust-free facility is open to registered appointments and walk-in consultations.`
- Map Card Details:
  - Studio Name: `DETAILING MONSTER Studio`
  - Address: `4th Main, Maruthi Temple Road, Saraswathipuram, Mysuru, Karnataka - 570009`
  - Landmark: `Near the Central Library`
  - Hours: `Mon - Sat: 9:00 AM - 7:00 PM`
  - Phone: `+91 99452 28752`
  - Button: `GET DIRECTIONS`
- Facility Photo Card:
  - Title: `Cleanroom Detailing Lab`
  - Description: `Equipped with precision lighting array and heavy-duty dust scrubber system.`

#### Section 12: Common Inquiries (`src/components/FAQSection.tsx` & `src/data/page7Data.ts`)
- Section Label: `COMMON INQUIRIES`
- Headline: `Everything you need to know.`
- 6 Questions & Answers (See Section 16 for complete verbatim FAQ list).

#### Section 13: Final CTA (`src/components/FinalCTA.tsx`)
- Micro Label: `UNCOMPROMISING RESULTS`
- Headline: `Make your car look unforgettable.`
- Subtitle: `Precision detailing. Premium protection. Obsessive attention to detail.`
- Primary Button: `BOOK YOUR APPOINTMENT` (Links to `#reserve`)
- Secondary Button: `EXPLORE SERVICES` (Links to `#services`)

#### Footer (`src/components/Footer.tsx` & `src/data/page8Data.ts`)
- Brand Bio: `Precision care for exceptional cars. We are Karnataka’s elite choice for paint correction, ceramic coatings, self-healing PPF, and detailed cabin restorations.`
- Service Column: `Paint Correction`, `Ceramic Coating`, `PPF Protection`, `Interior Detailing`, `Precision Detailing`
- Company Column: `About Studio`, `Our Process`, `Portfolio Gallery`, `Client Reviews`, `FAQ`
- Contact Column: Address, Landmark, Phone `+91 99452 28752`, Email `studio@detailingmonster.com`, `Book Appointment`
- Social Channels: `Instagram`, `Facebook`, `YouTube`

---

## 6. Brand & Business Information Audit

A rigorous global search of the entire project repository was performed to discover all active and historic business identity references.

### Exact Status of Brand & Location Data

| Item | Found in Active Source (`src/`, `index.html`) | Old Template Values Detected? | Classification |
| :--- | :--- | :--- | :--- |
| **Company / Brand Name** | `DETAILING MONSTER` | None in `src/` (Found in stale `dist/`) | **CURRENT CLIENT DATA** |
| **Studio Facility Name** | `DETAILING MONSTER Studio` | None in `src/` | **CURRENT CLIENT DATA** |
| **Address Line 1** | `4th Main, Maruthi Temple Road` | None in `src/` | **CURRENT CLIENT DATA** |
| **Locality / Neighborhood** | `Saraswathipuram` | None in `src/` | **CURRENT CLIENT DATA** |
| **City** | `Mysuru` (or `Mysore`) | None in `src/` | **CURRENT CLIENT DATA** |
| **State** | `Karnataka` | None in `src/` | **CURRENT CLIENT DATA** |
| **Postal Code** | `570009` | None in `src/` | **CURRENT CLIENT DATA** |
| **Country** | `India` (`IN`) | None in `src/` | **CURRENT CLIENT DATA** |
| **Landmark** | `Near the Central Library` | None in `src/` | **CURRENT CLIENT DATA** |
| **Primary Phone** | `+91 99452 28752` / `+91 9945228752` | None in `src/` | **CURRENT CLIENT DATA** |
| **WhatsApp Number** | Not explicitly configured; telephone used | None in `src/` | **UNKNOWN / NEEDS CLIENT INPUT** |
| **Official Business Email** | `studio@detailingmonster.com` | None in `src/` | **PLACEHOLDER / UNVERIFIED** |
| **Operating Hours** | `Mon - Sat: 9:00 AM - 7:00 PM` | None in `src/` | **TEMPLATE DATA / UNVERIFIED** |
| **Directions URL** | `https://maps.google.com/?q=4th+Main,+Maruthi+Temple+Road...` | None in `src/` | **CURRENT CLIENT DATA (Query Link)** |
| **Google Business Profile CID** | Not linked; query search fallback | None in `src/` | **UNKNOWN / NEEDS CLIENT INPUT** |
| **JSON-LD Schema** | Correctly references `DETAILING MONSTER` & Mysuru | None in `src/` | **CURRENT CLIENT DATA** |

### Old Template References Discovered
- **Target Terms Searched:** `Blackline`, `BLACKLINE`, `Blackline Auto`, `BLACKLINE AUTO`, `Islamabad`, `Pakistan`, `Sector G-10`, `Industrial Area`, `Sector I-9/3`, `+92 300 8559911`, `blacklineauto.com`.
- **Finding:**
  - **In Active Code (`src/`, `public/`, `index.html`): ZERO OCCURRENCES.** All active source files have been 100% migrated to DETAILING MONSTER and Mysuru, Karnataka.
  - **In Build Output (`dist/`): CRITICAL FINDING.** The `dist/` directory contains pre-compiled bundle files (`dist/index.html`, `dist/robots.txt`, `dist/sitemap.xml`, `dist/assets/index-BPJuJcgT.js`) that **STILL CONTAIN OLD BLACKLINE AUTO AND ISLAMABAD STRINGS**.
  - *Explanation:* The user previously updated the source code, but `npm run build` has not been executed since the brand update was applied.

---

## 7. Template vs Client Content Classification

| Business / Marketing Content Item | Current Text / Claim | Source Location | Classification | Needs Client Verification? |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Name** | `DETAILING MONSTER` | `studioConfig.ts`, `Header.tsx` | Client-specific | Verified |
| **Physical Address** | `4th Main, Maruthi Temple Road, Saraswathipuram, Mysuru - 570009` | `studioConfig.ts` | Client-specific | Verified |
| **Landmark** | `Near the Central Library` | `studioConfig.ts` | Client-specific | Verified |
| **Phone Number** | `+91 99452 28752` | `studioConfig.ts`, `Header.tsx` | Client-specific | Verified |
| **Official Email** | `studio@detailingmonster.com` | `studioConfig.ts`, `Footer.tsx` | Placeholder / Proposed | **YES** (Confirm if active) |
| **Business Hours** | `Mon - Sat: 9:00 AM - 7:00 PM` | `studioConfig.ts` | Template / Demo | **YES** (Confirm operational hours) |
| **Founded Year** | `SINCE 2025` | `ServiceCategoryStrip.tsx` | Template / Demo | **YES** (Confirm year established) |
| **Vehicles Count** | `500+ VEHICLES DETAILED` | `siteData.ts` | Template / Demo | **YES** (Confirm accuracy) |
| **Satisfaction Metric** | `98% SATISFACTION` | `siteData.ts` | Template / Demo | **YES** (Confirm claim or adjust) |
| **Years of Expertise** | `7+ YEARS EXPERTISE` | `siteData.ts` | Template / Demo | **YES** (Confirm accuracy) |
| **Coating Specs** | `9H+ Hardness`, `110° Beading`, `5 YR Guaranteed Shell` | `ServiceShowcasePage.tsx` | Template / Vendor specs | **YES** (Confirm products used) |
| **PPF Warranty Claim** | `10-year manufacturer warranty` | `page7Data.ts` (FAQ #4) | Template / Vendor specs | **YES** (Confirm PPF manufacturer) |
| **Paint Depth Metric** | `removing only microscopic... (1–3 microns)` | `page7Data.ts` (FAQ #3) | Technical industry claim | **YES** (Technician approval) |
| **Customer Testimonials** | Daniel R. (Porsche), Michael T. (Range Rover), Ahmed K. (AMG) | `page6Data.ts` | Template / Demo reviews | **YES** (Must replace with real reviews) |
| **Portfolio Vehicles** | GT3 RS, Range Rover, AMG GT, M4, F8, Huracán | `page5Data.ts` | Template / Demo projects | **YES** (Provide real client cars) |
| **Social Links** | `instagram.com`, `facebook.com`, `youtube.com` | `page8Data.ts` | Placeholder root URLs | **YES** (Provide real usernames/handles) |
| **Studio Image** | `/studio-facility.jpg` | `public/studio-facility.jpg` | Stock / Demo photo | **YES** (Provide photo of Mysuru lab) |
| **Hero Image** | `/hero-car.jpg` | `public/hero-car.jpg` | Stock photo | **YES** (Confirm if approved) |

---

## 8. Navigation Audit

### Primary Header Navigation Links

| Navigation Label | Href Destination | Target Route / Anchor | Behavior on Desktop | Behavior on Mobile Drawer | Broken? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Logo** | `/` | Home top (`window.scrollTo(0,0)`) | Active | Active | Functional |
| **Services** | `#services` | Section `id="services"` | Smooth scroll to overview | Smooth scroll & closes drawer | Functional |
| **Paint Protection** | `#paint-protection` | Anchor alias in PPF section | Smooth scroll to PPF section | Smooth scroll & closes drawer | Functional |
| **Detailing** | `#detailing` | Anchor alias in Interior section | Smooth scroll to Interior section | Smooth scroll & closes drawer | Functional |
| **Gallery** | `#portfolio` | Section `id="portfolio"` | Smooth scroll to portfolio | Smooth scroll & closes drawer | Functional |
| **Process** | `#process` | Section `id="process"` | Smooth scroll to engineered method | Smooth scroll & closes drawer | Functional |
| **About** | `#standard` | Section `id="standard"` | Smooth scroll to The Standard | Smooth scroll & closes drawer | Functional |
| **Header CTA** | `#reserve` | Section `id="reserve"` | Smooth scroll to appointment form | Smooth scroll & closes drawer | Functional |
| **Mobile Tel Link** | `tel:+919945228752` | Native OS phone dialer | Hidden | Direct 1-tap call | Functional |

### Footer Navigation Links

| Category | Label | Href Destination | Notes |
| :--- | :--- | :--- | :--- |
| **Services** | `Paint Correction` | `#paint-correction` | Anchor jump to Section 01 |
| **Services** | `Ceramic Coating` | `#ceramic-coating` | Anchor jump to Section 02 |
| **Services** | `PPF Protection` | `#ppf` | Anchor jump to Section 04 |
| **Services** | `Interior Detailing` | `#detailing` | Anchor jump to Section 03 |
| **Services** | `Precision Detailing` | `#services` | Anchor jump to Services Overview |
| **Company** | `About Studio` | `#standard` | Anchor jump to Section 07 |
| **Company** | `Our Process` | `#process` | Anchor jump to Section 06 |
| **Company** | `Portfolio Gallery` | `#portfolio` | Anchor jump to Section 08 |
| **Company** | `Client Reviews` | `#testimonials` | Anchor jump to Section 09 |
| **Company** | `FAQ` | `#faq` | Anchor jump to Section 12 |
| **Contact** | Phone | `tel:+919945228752` | Native dialer link |
| **Contact** | Email | `mailto:studio@detailingmonster.com` | Native email client link |
| **Contact** | `Book Appointment` | `#reserve` | Anchor jump to Section 10 |
| **Social** | `Instagram` | `https://instagram.com` | External root URL (Placeholder) |
| **Social** | `Facebook` | `https://facebook.com` | External root URL (Placeholder) |
| **Social** | `YouTube` | `https://youtube.com` | External root URL (Placeholder) |

*Link Integrity Evaluation:* All internal hash anchor links properly map to existing element IDs or alias spans on `HomePage`. If clicked from sub-routes (e.g. `/services`), the `Header` and `Footer` components prepend `/#` ensuring backward cross-route navigation.

---

## 9. Component Inventory

| Component Name | File Path | Primary Purpose | Reusable? | Data-Driven? | Hardcoded Elements |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`Header`** | `src/components/Header.tsx` | Fixed sticky navigation & drawer | No (Layout) | Partial (`siteData.ts`, `studioConfig.ts`) | Desktop layout, labels |
| **`PrimaryButton`** | `src/components/ui/Button.tsx` | Primary action red button | **Yes** | Driven by props (`href`, `to`, `onClick`) | Styling & hover tokens |
| **`SecondaryButton`** | `src/components/ui/Button.tsx` | Secondary ghost button | **Yes** | Driven by props | Styling & hover tokens |
| **`ServiceLabel`** | `src/components/ui/ServicePrimitives.tsx` | Micro section header with red square | **Yes** | Driven by children | Typography, micro dot |
| **`PrimaryCTA`** | `src/components/ui/ServicePrimitives.tsx` | Section bottom call-to-action button | **Yes** | Driven by props | Default href `#reserve` |
| **`FeatureList`** | `src/components/ui/ServicePrimitives.tsx` | Renders bullet list with red SVG checks | **Yes** | Driven by `FeatureItemData[]` | Checkmark icon styling |
| **`SpecificationGrid`** | `src/components/ui/ServicePrimitives.tsx` | 3-box technical specification row | **Yes** | Driven by `SpecCardData[]` | Card styling & fonts |
| **`HeroSection`** | `src/components/HeroSection.tsx` | Cinematic hero intro banner | No | No (Hardcoded in TSX) | Headings, copy, background |
| **`StatsPanel`** | `src/components/StatsPanel.tsx` | 3-column stats bar | **Yes** | Driven by `stats` in `siteData.ts` | Layout borders & red styling |
| **`ServiceCategoryStrip`**| `src/components/ServiceCategoryStrip.tsx`| Category tag strip | No | Partial (`siteData.ts`) | "SINCE 2025", "Karnataka" |
| **`ServicesSection`** | `src/components/ServicesSection.tsx` | 4-card service overview | No | Partial (`siteData.ts`) | Intro heading & paragraph |
| **`ServiceCard`** | `src/components/ServiceCard.tsx` | Individual service card | **Yes** | Driven by `card` prop | Card background & border |
| **`ServiceIcon`** | `src/components/ServiceIcon.tsx` | SVG icon selector | **Yes** | Driven by `type` prop | SVG paths & red accent color |
| **`BeforeAfterGallery`** | `src/components/BeforeAfterGallery.tsx` | Flush static before/after strip | **Yes** | Driven by image props & labels | Border & badge positions |
| **`BeforeAfterSlider`** | `src/components/BeforeAfterSlider.tsx` | Interactive touch/mouse comparison slider | **Yes** | Driven by props (`beforeSrc`, `afterSrc`, etc.) | Drag calculations & clip-path |
| **`PPFProtectionDiagram`**| `src/components/PPFProtectionDiagram.tsx`| Car side profile schematic with legend | No | No (Inline SVG) | SVG geometry & legend text |
| **`PPFZoneCard`** | `src/components/PPFZoneCard.tsx` | Badge-indexed defense zone card | **Yes** | Driven by `zone` prop | Badge colors & typography |
| **`ProcessTimeline`** | `src/components/ProcessTimeline.tsx` | Responsive 5-step numbered timeline | **Yes** | Driven by `steps` prop | Node numbers & connector lines |
| **`StandardSection`** | `src/components/StandardSection.tsx` | 4 operational principles section | No | Partial (`page5Data.ts`) | Headline & supporting copy |
| **`StandardCard`** | `src/components/StandardCard.tsx` | Principle card with red number & dash | **Yes** | Driven by `principle` prop | Card dimensions & styling |
| **`PortfolioSection`** | `src/components/PortfolioSection.tsx` | 6-card vehicle showcase | No | Partial (`page5Data.ts`) | Headline & intro text |
| **`PortfolioCard`** | `src/components/PortfolioCard.tsx` | Vehicle photo with dark gradient overlay | **Yes** | Driven by `vehicle` prop | Aspect ratios & typography |
| **`TestimonialsSection`**| `src/components/TestimonialsSection.tsx` | Customer review container | No | Partial (`page6Data.ts`) | Section headline |
| **`TestimonialCard`** | `src/components/TestimonialCard.tsx` | Star rating & review quote card | **Yes** | Driven by `testimonial` prop | 5 red star SVGs |
| **`ReservationSection`**| `src/components/ReservationSection.tsx` | Dark graphite booking layout | No | No (Static wrapper) | Headlines & benefit items |
| **`AppointmentForm`** | `src/components/AppointmentForm.tsx` | 7-field booking form with validation | **Yes** | Partial (`page6Data.ts` options) | Validation regex, messages |
| **`StudioAccessSection`**| `src/components/StudioAccessSection.tsx`| Map & studio photo section | No | No (Static wrapper) | Section heading & intro |
| **`LocationMapPanel`** | `src/components/LocationMapPanel.tsx` | Minimalist dark SVG road map + card | No | Partial (`studioConfig.ts`) | SVG vector road network |
| **`StudioImagePanel`** | `src/components/StudioImagePanel.tsx` | Studio cleanroom photo panel | No | Partial (`studioConfig.ts`) | Overlay typography & layout |
| **`FAQSection`** | `src/components/FAQSection.tsx` | Single-open accordion list | No | Partial (`page7Data.ts`) | Heading & accordion logic |
| **`FinalCTA`** | `src/components/FinalCTA.tsx` | Uncompromising results closing banner | No | No (Hardcoded in TSX) | Background, headings, copy |
| **`Footer`** | `src/components/Footer.tsx` | 5-column responsive footer | No (Layout) | Partial (`page8Data.ts`, `studioConfig.ts`)| Brand summary paragraph |
| **`Layout`** | `src/components/Layout.tsx` | Top-level routing layout wrapper | No (Layout) | No | Background `#09090b` |

---

## 10. Data Architecture

The project organizes its structured data in `src/data/`:

```
src/data/
├── studioConfig.ts    <-- Single source of truth for business identity & location
├── siteData.ts        <-- Global navigation links, hero stats, and overview service cards
├── page5Data.ts       <-- Operational principles (Standard) and portfolio vehicles
├── page6Data.ts       <-- Customer testimonials and appointment dropdown options
├── page7Data.ts       <-- Studio location projection, facility summary & FAQ questions
└── page8Data.ts       <-- Footer navigation columns, contact endpoints & social URLs
```

### Centralization Analysis
- **Well Centralized:**
  - Business address, telephone, landmark, and coordinates are neatly centralized in `studioConfig.ts`.
  - Service cards, stats, and navigation links are located in `siteData.ts`.
  - FAQs and testimonials are centralized in `page7Data.ts` and `page6Data.ts`.
- **Duplicated / Bypassed Centralization:**
  - `HeroSection.tsx` hardcodes `"in Mysuru"` directly in JSX.
  - `ServiceCategoryStrip.tsx` hardcodes `"SINCE 2025"` and `"Serving Automotive Enthusiasts in Karnataka"`.
  - `StudioAccessSection.tsx` hardcodes `"Located in Saraswathipuram, Mysuru, near the Central Library"`.
  - `Footer.tsx` hardcodes `"We are Karnataka’s elite choice..."` directly in JSX.
  - `index.html` hardcodes business name, telephone, address, and JSON-LD independently from `studioConfig.ts`.

---

## 11. Image & Asset Inventory

All user-facing production images reside in `/public` and are loaded via root-relative paths.

| Filename | Disk Size | Location | Used In Component | Role / Purpose | Alt Text Present? | Likely Origin | Replacement Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `hero-car.jpg` | 525.8 KB | `public/hero-car.jpg` | `HeroSection.tsx` | Hero background | Yes (`aria-label`) | Stock Photo | Low (Looks cinematic) |
| `paint-correction-hood.jpg` | 535.5 KB | `public/paint-correction-hood.jpg` | `ServiceShowcasePage.tsx` | Section 01 main image | Yes (`alt`) | Stock Photo | Medium |
| `before-swirls.jpg` | 701.0 KB | `public/before-swirls.jpg` | `BeforeAfterGallery`, `Page4` | Defect comparison (Before) | Yes (`alt`) | Stock Photo | Low (Effective demo) |
| `after-mirror.jpg` | 662.9 KB | `public/after-mirror.jpg` | `BeforeAfterGallery`, `Page4` | Defect comparison (After) | Yes (`alt`) | Stock Photo | Low (Effective demo) |
| `ceramic-water.jpg` | 780.5 KB | `public/ceramic-water.jpg` | `ServiceShowcasePage.tsx` | Section 02 main image | Yes (`alt`) | Stock Photo | Low (High quality beads) |
| `interior-cockpit.jpg` | 716.5 KB | `public/interior-cockpit.jpg` | `Page3.tsx`, `Page4` | Section 03 main image | Yes (`alt`) | Stock Photo | Medium |
| `interior-before.jpg` | 820.5 KB | `public/interior-before.jpg` | `Page4.tsx` | Visual Shift slider (Before) | Yes (`alt`) | Stock Photo | Low |
| `ceramic-before.jpg` | 743.5 KB | `public/ceramic-before.jpg` | `Page4.tsx` | Visual Shift slider (Before) | Yes (`alt`) | Stock Photo | Low |
| `ceramic-after.jpg` | 828.6 KB | `public/ceramic-after.jpg` | `Page4.tsx` | Visual Shift slider (After) | Yes (`alt`) | Stock Photo | Low |
| `portfolio-porsche.jpg` | 616.7 KB | `public/portfolio-porsche.jpg` | `PortfolioCard.tsx` | Portfolio item 1 | Yes (`alt`) | Stock Photo | **High** (Needs client car) |
| `portfolio-rangerover.jpg` | 680.1 KB | `public/portfolio-rangerover.jpg`| `PortfolioCard.tsx` | Portfolio item 2 | Yes (`alt`) | Stock Photo | **High** (Needs client car) |
| `portfolio-amg.jpg` | 659.6 KB | `public/portfolio-amg.jpg` | `PortfolioCard.tsx` | Portfolio item 3 | Yes (`alt`) | Stock Photo | **High** (Needs client car) |
| `portfolio-bmwm4.jpg` | 669.5 KB | `public/portfolio-bmwm4.jpg` | `PortfolioCard.tsx` | Portfolio item 4 | Yes (`alt`) | Stock Photo | **High** (Needs client car) |
| `portfolio-ferrari.jpg` | 6.3 KB | `public/portfolio-ferrari.jpg` | `PortfolioCard.tsx` | Portfolio item 5 | Yes (`alt`) | Low-res sample | **High** (Low resolution) |
| `portfolio-lamborghini.jpg`| 6.1 KB | `public/portfolio-lamborghini.jpg`| `PortfolioCard.tsx` | Portfolio item 6 | Yes (`alt`) | Low-res sample | **High** (Low resolution) |
| `studio-facility.jpg` | 5.8 KB | `public/studio-facility.jpg` | `StudioImagePanel.tsx` | Studio facility photo | Yes (`alt`) | Low-res sample | **CRITICAL** (Needs real shop) |
| `final-cta-bg.jpg` | 14.3 KB | `public/final-cta-bg.jpg` | `FinalCTA.tsx` | Final CTA background | Yes (`alt`) | Low-res sample | Medium |
| `favicon.svg` | 351 B | `public/favicon.svg` | `index.html` | Browser tab favicon | N/A (SVG) | Generic 4-box icon | Medium (Needs brand logo) |

### Dead / Unused Assets
- `src/assets/hero.png` (13.0 KB) — Unreferenced by any component.
- `src/assets/react.svg` (4.1 KB) — Vite starter icon; unreferenced.
- `src/assets/vite.svg` (8.7 KB) — Vite starter icon; unreferenced.

---

## 12. Responsive / Mobile Audit

### Viewport Behavior Analysis

| Viewport Width | Screen Category | Layout & Component Behavior | Potential Risks / Observations |
| :--- | :--- | :--- | :--- |
| **320px** | Ultra-compact (iPhone SE 1st gen) | Container padding drops to `1.25rem` (`20px`). Typography clamps gracefully down to ~2rem on headlines. Navigation hamburger remains 44x44px. Form inputs use 16px font to prevent Safari zoom. | Location overlay card inside `LocationMapPanel` takes full width minus 2rem padding; compact text fit. |
| **360px – 390px** | Standard Mobile (Galaxy S, iPhone 12–15) | Single-column stacking across all sections. 5-step process timeline renders vertically with connected red line. Before/after sliders maintain proportional height (`paddingBottom: 140%`). | Smooth layout; buttons span full width for easy touch ergonomics. |
| **414px – 480px** | Large Mobile (iPhone Plus/Max, Pixel) | Full-width cards with ample margin breathing room. Hero text fits comfortably on 2 lines. Form fields stack in a single column. | Zero horizontal overflow detected. |
| **768px** | Tablet Portrait (iPad Mini/Air) | Stats panel switches to horizontal split (`sm:flex-row`). Service cards and portfolio cards switch to 2-column grid (`sm:grid-cols-2`). Appointment form splits into 2-column input grid. | Header remains in mobile drawer mode (collapses at `< 1024px`). |
| **1024px** | Tablet Landscape / Small Laptop | Header switches to full horizontal desktop navigation bar (`lg:flex`). Section 01, 02, 03, 04, and Studio Access switch to 2-column side-by-side layouts (`lg:grid-cols-2`). | Breakpoint transition is clean; touch targets remain spacious. |
| **1280px** | Standard Desktop | `container-site` hits its max width constraint of `1280px` with `2rem` side padding. 4-column service cards and 5-column footer render at designated proportions. | Approved desktop design matches reference geometry. |
| **1440px – 1920px** | Wide Desktop / 4K Displays | Section content remains centered with clean lateral dark margins (`bg-[#09090b]`). Hero and Final CTA background photos stretch edge-to-edge. | Visual hierarchy remains stable without awkward stretching. |

---

## 13. Desktop Design System

The desktop design system follows an automotive luxury cleanroom aesthetic:

### Color Palette Tokens (Configured in `tailwind.config.js`)
- **Page Background (`page-bg`):** `#09090b` (Deep obsidian / zinc 950)
- **Primary Surface (`surface`):** `#0f0f12` (Elevated dark card background)
- **Secondary Surface (`surface-2`):** `#131317` (Graphite reservation background)
- **Subtle Borders (`border-subtle`):** `rgba(255, 255, 255, 0.07)`
- **Mid Borders (`border-mid`):** `rgba(255, 255, 255, 0.1)`
- **Accent Primary (`accent-red`):** `#e31b23` (High-octane vivid red)
- **Accent Hover (`accent-red-hover`):** `#c8171e` (Deepened red)
- **Text Primary (`text-primary`):** `#f4f4f6` (Near-white / zinc 50)
- **Text Secondary (`text-secondary`):** `#8a8a94` (Muted technical slate)
- **Text Muted (`text-muted`):** `#5a5a64` (Darker supporting gray)

### Typography & Hierarchy
- **Primary Font Family:** `'Plus Jakarta Sans', Inter, system-ui, sans-serif`
- **Micro Labels:** `text-[10.5px]` or `11px`, `tracking-[0.18em]` to `0.2em`, uppercase, `font-semibold`, prefixed with a `w-2 h-2` or `w-2.5 h-2.5` red square (`#e31b23`).
- **Main Section Headings (H2):** `text-[clamp(1.9rem,3.8vw,2.9rem)]`, `font-bold`, `text-white`, `tracking-[-0.022em]`, `leading-[1.08]`.
- **Card Headings (H3):** `text-[14.5px]` to `text-[16px]`, `font-semibold` / `font-bold`, `text-white`.
- **Body & Descriptions:** `text-[13.5px]` to `text-[14px]`, `text-[#8a8a94]`, `leading-[1.65]` to `1.7`.

### Geometry & Component Tokens
- **Container Width:** `max-w-[1280px]` with `px-8` (desktop) and `px-5` (mobile).
- **Border Radii:**
  - Micro tags / badges: `rounded-[2px]` to `rounded-[3px]`
  - Standard cards: `rounded-[4px]` to `rounded-[6px]`
  - Large photographic panels: `rounded-[8px]` to `rounded-[10px]`
- **Section Dividers:** `border-t border-white/[0.06]` with `mb-16 lg:mb-24`.
- **Button Primitives:**
  - Primary: Solid `#e31b23`, white text, `text-[11px]`, `tracking-[0.12em]`, uppercase, `rounded-[3px]`, `px-6 py-3`.
  - Secondary: Transparent, `border border-white/20`, white text, `px-6 py-3`.

---

## 14. Interaction Audit

| Interactive Element | Location | Trigger | State Managed | Implementation Details | Dependencies |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sticky Header Blur** | `Header.tsx` | Window scroll > 10px | `scrolled` (boolean) | Toggles `bg-[#09090b]/98` and `backdrop-blur-md` | React `useEffect` |
| **Mobile Navigation Drawer** | `Header.tsx` | Click hamburger button | `menuOpen` (boolean) | Locks `document.body.style.overflow`, transitions opacity | React `useState` |
| **Before/After Split Slider** | `BeforeAfterSlider.tsx` | Pointer down, drag, or touch | `position` (0–100%) | Real-time `clip-path: inset(0 (100-pos)% 0 0)` with pointer capture | Custom PointerEvents |
| **Slider Keyboard Control** | `BeforeAfterSlider.tsx` | ArrowLeft / ArrowRight | `position` (+/- 2%) | Accessible `role="slider"` with `tabIndex={0}` | `onKeyDown` handler |
| **FAQ Accordion** | `FAQSection.tsx` | Click question button | `openId` (string or null)| Toggles answer visibility; transforms indicator `+` to `−` | React `useState` |
| **Portfolio Image Zoom** | `PortfolioCard.tsx` | Mouse hover | CSS hover state | `group-hover:scale-[1.025]` with 700ms ease-out transition | Tailwind transition |
| **Appointment Form Inputs** | `AppointmentForm.tsx` | Input typing / change | `formData` object | Controlled form inputs with instant error clearance | React `useState` |
| **Appointment Submission** | `AppointmentForm.tsx` | Form submit event | `isSubmitting`, `submittedRef` | Triggers 600ms latency simulation, displays reference ID | `appointmentService` |
| **Get Directions Outbound** | `LocationMapPanel.tsx` | Button click | N/A | Opens Google Maps search URL in new browser tab | Native anchor `target="_blank"` |
| **Direct Call Button** | Header & Footer | Click / tap | N/A | Launches device dialer with `tel:+919945228752` | Native `tel:` protocol |

---

## 15. Appointment Form Audit

### Comprehensive Field Matrix

| Field Name | Type | Label | Placeholder | Default | Validation Rule | Error Message |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `fullName` | `text` | `FULL NAME *` | `e.g. James Holloway` | `""` | Non-empty, min 2 chars | *Full name is required.* / *Name must be at least 2 characters.* |
| `email` | `email` | `EMAIL ADDRESS *` | `e.g. james@lumen.com` | `""` | Non-empty, standard email regex | *Email address is required.* / *Please provide a valid email address.* |
| `phone` | `tel` | `PHONE NUMBER *` | `e.g. +91 99452 28752` | `""` | Non-empty, 7–15 digits regex | *Phone number is required.* / *Please provide a valid phone number (e.g. +91 99452 28752).* |
| `vehicleModel` | `text` | `VEHICLE MODEL *` | `e.g. Porsche 911 GT3 (2026)` | `""` | Non-empty string | *Vehicle model is required (e.g. Porsche 911 GT3).* |
| `requestedService`| `select`| `REQUESTED SERVICE *` | (Dropdown options) | `serviceOptions[0]` | Must match one of 5 preset options | *Please choose a requested service.* |
| `preferredDate` | `date` | `PREFERRED DATE *` | (Native picker) | `""` | Non-empty, >= current date | *Please select a preferred date.* / *Appointment date cannot be in the past.* |
| `message` | `textarea`| `MESSAGE / SPECIFIC VEHICLE REQUIREMENTS (OPTIONAL)` | `Detail any clearcoat oxidation...` | `""` | Optional | None |

### Available Dropdown Options
1. `Paint Correction + Ceramic Coating`
2. `Full Exterior Self-Healing PPF Wrap`
3. `Track Prep PPF + Advanced Wheel Coating`
4. `Interior Cockpit Restoration + Leather Feeding`
5. `Comprehensive Master Detailing Service`

### Submission Pipeline & Technical Reality
- **Submission Destination:** `src/services/appointmentService.ts`
- **Execution Mechanism:**
  ```typescript
  await new Promise((resolve) => setTimeout(resolve, 600));
  const referenceId = `DM-${Math.floor(100000 + Math.random() * 900000)}`;
  return { success: true, message: 'Appointment request received successfully.', referenceId };
  ```
- **Backend / API Connection:** **NONE**.
- **Email Forwarding (SendGrid, Resend, Nodemailer, etc.):** **NONE**.
- **WhatsApp API / Webhook:** **NONE**.
- **Database / Sheet Persistence:** **NONE**.
- **Conclusion:** The form is an aesthetic, highly polished **FRONTEND SIMULATION ONLY**.

---

## 16. FAQ Audit

All 6 FAQs are defined in `src/data/page7Data.ts` and rendered by `src/components/FAQSection.tsx`.

| # | Question | Verbatim Answer | Default State | Template or Client-Specific? |
| :- | :--- | :--- | :--- | :--- |
| **01** | *How long does detailing take?* | `A basic detailing service takes 1–2 days. Multi-stage paint corrections and complex edge-wrapped paint protection film installations typically require 3–5 days in our climate-controlled room.` | **OPEN** | Template / General industry timeline |
| **02** | *How often should I ceramic coat my car?* | `Professional-grade ceramic coatings typically last between 2 to 5 years depending on the coating formula and ongoing care. We recommend an annual maintenance wash and decontamination inspection to maintain optimal hydrophobic protection and gloss.` | Closed | Template / General industry recommendation |
| **03** | *Is paint correction safe for my vehicle?* | `Yes, when executed with precision. We measure clearcoat thickness using digital ultrasonic gauges before touching any surface, removing only microscopic clearcoat depth (typically 1–3 microns) to safely eliminate defects without compromising factory integrity.` | Closed | Technical claim (Requires technician signoff) |
| **04** | *How long does PPF last?* | `Our premium self-healing paint protection films come with an industry-standard 10-year manufacturer warranty against yellowing, cracking, and bubbling. The elastomeric polyurethane topcoat automatically heals minor swirl marks when exposed to heat.` | Closed | Vendor claim (Requires specific film brand verification) |
| **05** | *Can you detail luxury and performance cars?* | `Exotics, supercars, and high-end collector vehicles represent the majority of our daily studio work. Our cleanroom facility features specialized low-profile hydraulic lifts, soft-water filtration, and full facility insurance tailored specifically for ultra-high-value vehicles.` | Closed | High-value claim (Requires verification of studio equipment) |
| **06** | *Do I need to book in advance?* | `Yes. To maintain strict quality protocols and zero-dust cleanroom standards, we only accept a limited number of vehicles per week. We recommend reserving your slot 1–2 weeks in advance, especially for multi-stage correction and full PPF wraps.` | Closed | Template booking policy |

---

## 17. Testimonial Audit

Defined in `src/data/page6Data.ts` and rendered by `src/components/TestimonialCard.tsx`.

| Reviewer Name | Vehicle Owned | Rating | Verbatim Review Quote | Authenticity Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **Daniel R.** | *Porsche 911 Owner* | 5 Stars | *“The paint looked better than the day I bought the car. Swirls and light defects are completely gone, replaced by a deep optical depth I didn't think was possible. The attention to detail is unmatched.”* | **TEMPLATE / DEMO DATA** |
| **Michael T.** | *Range Rover Owner* | 5 Stars | *“DETAILING MONSTER treated my autobiography like it was their own prized asset. The PPF wrapping is completely seamless—literally invisible. Excellent customer service and communication from the team.”* | **TEMPLATE / DEMO DATA** |
| **Ahmed K.** | *Mercedes-AMG Owner* | 5 Stars | *“Professional, certified, and genuinely passionate. They mapped my entire paint thickness with an ultrasonic gauge before starting correction. Highly technical, master-level detailing service.”* | **TEMPLATE / DEMO DATA** |

*Recommendation:* Replace all three with genuine Google Business Profile reviews or direct quotes from actual customers in Mysuru/Karnataka.

---

## 18. Portfolio Audit

Defined in `src/data/page5Data.ts` and rendered by `src/components/PortfolioCard.tsx`.

| ID | Vehicle Title | Associated Service | Local Image Path | Image Source Type | Authenticity Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `porsche` | *Porsche 911 GT3 RS* | Multi-Stage Correction • Ceramic Coating | `/portfolio-porsche.jpg` | High-res stock photography | Template / Demo Car |
| `rangerover` | *Range Rover Autobiography* | Full Exterior Self-Healing PPF Wrap | `/portfolio-rangerover.jpg` | High-res stock photography | Template / Demo Car |
| `amg` | *Mercedes-AMG GT Black Series* | Track Prep PPF + Advanced Wheel Coating | `/portfolio-amg.jpg` | High-res stock photography | Template / Demo Car |
| `bmw` | *BMW M4 Competition* | Paint Correction + 5-Year Dual Quartz Coating | `/portfolio-bmwm4.jpg` | High-res stock photography | Template / Demo Car |
| `ferrari` | *Ferrari F8 Tributo* | Interior Cockpit Restoration + Leather Feeding| `/portfolio-ferrari.jpg` | Low-res sample asset (6.3 KB) | Template / Demo Car |
| `lamborghini` | *Lamborghini Huracán Evo* | Full Correction + Hydrophobic Glass Coating | `/portfolio-lamborghini.jpg` | Low-res sample asset (6.1 KB) | Template / Demo Car |

---

## 19. Service Audit & Technical Claims

### Complete Service Offerings Matrix

| Service Title | Primary Section | Core Technical Features | Performance Claims & Metrics | Status & Client Verification Required |
| :--- | :--- | :--- | :--- | :--- |
| **Paint Correction** | Section 01 | Ultrasonic thickness measurement, multi-stage machine leveling, optical refinement polishing | *“Restores deep optical clarity”, “Removes 1–3 microns”* | Standard professional practice; confirm tools used |
| **Ceramic Coating** | Section 02 | Inorganic quartz composite molecular bonding | **`9H+ Hardness Matrix`**, **`110° Beading Angle`**, **`5 YR Guaranteed Shell`** | **CRITICAL:** Confirm exact coating brand (e.g. Gtechniq, CarPro, IGL, Ceramic Pro) and warranty validity |
| **Interior Detailing** | Section 03 | Alcantara feeding, pH-balanced leather conditioning, hot extraction, dry steam | *“Cockpit preservation”, “Zero-residue brush dusting”* | Standard professional practice; confirm leather products |
| **Paint Protection Film** | Section 04 | Precision computer pre-cut templates, edge-wrapped installation, elastomeric topcoat | **`Self-healing with heat`**, **`10-Year Manufacturer Warranty`** | **CRITICAL:** Confirm PPF film brand (e.g. XPEL, SunTek, Stek, Garware) and official warranty duration |

---

## 20. SEO Audit

### Metadata Inspection (`index.html`)
- **Title Tag:** `<title>DETAILING MONSTER — Premium Automotive Detailing in Mysuru</title>` (59 characters — Optimal).
- **Meta Description:** `DETAILING MONSTER provides elite multi-stage paint correction, ceramic coatings, precision self-healing PPF, and detailed cabin restorations for exceptional cars in Mysuru, Karnataka.` (185 characters — Slightly long, recommends 155–160 chars).
- **Meta Keywords:** `car detailing mysuru, ceramic coating karnataka, paint correction, PPF install, supercar detailing, DETAILING MONSTER, saraswathipuram` (Present).
- **Canonical URL:** `<link rel="canonical" href="https://detailingmonster.com" />` (Configured).
- **Theme Color:** `<meta name="theme-color" content="#09090b" />` (Configured).
- **OpenGraph Tags:**
  - `og:type`: `website`
  - `og:url`: `https://detailingmonster.com`
  - `og:title`: `DETAILING MONSTER — Precision Care for Exceptional Cars`
  - `og:description`: `Professional detailing and paint protection engineered to preserve the finish, character, and value of your vehicle.`
  - `og:image`: `/hero-car.jpg` (Relative path; should ideally be absolute `https://detailingmonster.com/hero-car.jpg` for social scrapers).
- **Twitter Card Tags:**
  - `twitter:card`: `summary_large_image`
  - `twitter:title`, `description`, `image`, `url` (Configured).
- **Robots Directives:**
  - `public/robots.txt`:
    ```text
    User-agent: *
    Allow: /

    Sitemap: https://detailingmonster.com/sitemap.xml
    ```
- **Sitemap XML:** `public/sitemap.xml` exists, listing `https://detailingmonster.com/`.
- **Heading Hierarchy:**
  - `<h1>`: 1 per page (`Precision Care for Exceptional Cars` in `HeroSection.tsx`).
  - `<h2>`: Every major section employs a single `<h2>` with semantic IDs and `aria-labelledby`.
  - `<h3>`: Used for cards, steps, and sub-items.

---

## 21. Local SEO Audit

### Structured Data (JSON-LD) in `index.html`
```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "DETAILING MONSTER",
  "image": "https://detailingmonster.com/hero-car.jpg",
  "description": "Precision automotive detailing, multi-stage paint correction, ceramic coatings, and self-healing PPF in Mysuru, Karnataka.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4th Main, Maruthi Temple Road, Saraswathipuram",
    "addressLocality": "Mysuru",
    "addressRegion": "Karnataka",
    "postalCode": "570009",
    "addressCountry": "IN"
  },
  "telephone": "+91 9945228752",
  "openingHours": "Mo-Sa 09:00-19:00",
  "priceRange": "$$$$"
}
```

### Missing Local SEO Opportunities
- **Exact Coordinates:** `geo` latitude/longitude coordinates are not yet present in the schema.
- **Google Business Profile URL:** The Directions button links to a general Google Maps search query rather than a verified Google Maps CID or Place ID.
- **Service Area:** `areaServed` is not declared in the schema (e.g., Mysuru, Nanjangud, Mandya, Bengaluru).

---

## 22. Accessibility Audit (WCAG 2.1 AA Evaluation)

| Checkpoint | Status | Implementation Finding |
| :--- | :--- | :--- |
| **Semantic HTML** | **Pass** | Semantic `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>` tags utilized. |
| **Single H1 Tag** | **Pass** | Single `<h1>` in `HeroSection.tsx`. |
| **Accessible Touch Targets** | **Pass** | Buttons, hamburger icon (44x44px), and form inputs exceed minimum 44x44px requirements. |
| **Prefers-Reduced-Motion** | **Pass** | Dedicated CSS rule in `src/index.css` disables smooth scrolling and animations when requested by OS. |
| **Keyboard Operability** | **Pass** | Comparison slider responds to ArrowLeft / ArrowRight; FAQ toggles via Enter/Space; focus-visible rings present. |
| **Color Contrast** | **Pass** | Near-white text (`#f4f4f6`) on black (`#09090b`) gives a 16.5:1 contrast ratio. Red buttons (`#e31b23`) with white text give 4.6:1 (meets AA standard for bold text). |
| **Form Accessibility** | **Pass** | Inputs have matching `<label htmlFor="...">`, `aria-invalid`, `aria-describedby` pointing to error IDs. |
| **Screen Reader Text** | **Pass** | Decorative SVGs are marked `aria-hidden="true"`; visual badges have descriptive text. |

---

## 23. Performance Audit

### Identified Performance Strengths
- **LCP Preload:** `<link rel="preload" as="image" href="/hero-car.jpg" type="image/jpeg" />` in `index.html` prevents hero load delay.
- **Font Preconnect:** Google Fonts domain preconnected (`fonts.googleapis.com` & `fonts.gstatic.com`).
- **Native Image Deferral:** Sub-fold images use `loading="lazy"` and `decoding="async"`.
- **Zero Heavy JavaScript Dependencies:** Zero bloated runtime libraries (no GSAP, Three.js, Framer Motion, or UI libraries).

### Performance Bottlenecks & Gaps
1. **Uncompressed JPEG Images:** The `/public` directory holds ~8.2 MB of images. Several images are 700KB–830KB each. There are no WebP or AVIF variants.
2. **Missing `srcset` / `sizes`:** Mobile devices download the exact same high-resolution 1920px image files as desktop displays.
3. **Low-Resolution Assets:** `portfolio-ferrari.jpg` (6.3 KB), `portfolio-lamborghini.jpg` (6.1 KB), and `studio-facility.jpg` (5.8 KB) are heavily compressed, causing visual pixelation on retina screens.

---

## 24. Security & Configuration Audit

- **Environment Secrets:** Searched entire project for `.env`, `VITE_`, `API_KEY`, `SECRET`, `PASSWORD`. **No secrets or private API keys detected.**
- **External Links Security:** Outbound links (`LocationMapPanel.tsx`, `Footer.tsx`) correctly specify `rel="noopener noreferrer"` with `target="_blank"`.
- **Dangerous HTML Injection:** Zero occurrences of `dangerouslySetInnerHTML` in application code. Only one controlled static script tag exists in `index.html` for JSON-LD.
- **Client Form Vulnerabilities:** `AppointmentForm.tsx` performs sanitization and length bounds checking before dispatching data.

---

## 25. Dependency Audit

### Production Dependencies (`package.json`)
```json
"dependencies": {
  "@types/react-router-dom": "^5.3.3",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-router-dom": "^7.18.4"
}
```
*Anomaly:* `@types/react-router-dom: ^5.3.3` is installed as a production dependency and targets v5, while `react-router-dom: ^7.18.4` includes its own internal TypeScript types.

### Dev Dependencies (`package.json`)
```json
"devDependencies": {
  "@types/node": "^24.13.3",
  "@types/react": "^19.2.18",
  "@types/react-dom": "^19.2.7",
  "@vitejs/plugin-react": "^6.1.1",
  "autoprefixer": "^10.6.1",
  "oxlint": "^1.81.0",
  "postcss": "^8.5.28",
  "tailwindcss": "^3.4.19",
  "typescript": "~6.0.2",
  "vite": "^8.3.0"
}
```

---

## 26. Routing Audit

The project operates as a **Hybrid SPA**:
- The main user flow is a unified single-page scroll at `/`.
- Sub-routes exist in `App.tsx` for modular access:

| Route Path | Component Rendered | Associated Sections | Reachable from Nav? | Reachable from Footer? |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `HomePage` | All sections 01–13 + Header + Footer | Yes (Logo) | Yes (Logo) |
| `/services` | `ServiceShowcasePage` | Section 01 (Paint Correction) + Section 02 (Ceramic) | Via direct URL | Via direct URL |
| `/paint-protection`| `ServiceShowcasePage` | Section 01 + Section 02 (Route alias) | Via direct URL | Via direct URL |
| `/detailing` | `Page3` | Section 03 (Interior) + Section 04 (PPF) | Via direct URL | Via direct URL |
| `/gallery` | `Page4` | Section 05 (Visual Shift) + Section 06 (Process) | Via direct URL | Via direct URL |
| `/process` | `Page4` | Section 05 + Section 06 (Route alias) | Via direct URL | Via direct URL |
| `/portfolio` | `Page5` | Section 07 (The Standard) + Section 08 (Portfolio) | Via direct URL | Via direct URL |
| `/standard` | `Page5` | Section 07 + Section 08 (Route alias) | Via direct URL | Via direct URL |
| `/page5` | `Page5` | Section 07 + Section 08 (Dev route) | No | No |
| `/reserve` | `Page6` | Section 09 (Testimonials) + Section 10 (Reserve Form)| Via direct URL | Via direct URL |
| `/testimonials`| `Page6` | Section 09 + Section 10 (Route alias) | Via direct URL | Via direct URL |
| `/contact` | `Page6` | Section 09 + Section 10 (Route alias) | Via direct URL | Via direct URL |
| `/page6` | `Page6` | Section 09 + Section 10 (Dev route) | No | No |
| `/location` | `Page7` | Section 11 (Studio Access) + Section 12 (FAQ) | Via direct URL | Via direct URL |
| `/faq` | `Page7` | Section 11 + Section 12 (Route alias) | Via direct URL | Via direct URL |
| `/about` | `Page7` | Section 11 + Section 12 (Route alias) | Via direct URL | Via direct URL |
| `/page7` | `Page7` | Section 11 + Section 12 (Dev route) | No | No |
| `/cta` | `Page8` | Section 13 (Final CTA) | Via direct URL | Via direct URL |
| `/page8` | `Page8` | Section 13 (Dev route) | No | No |

*Note on Sub-routes:* The header navigation uses hash anchors (`#services`, `#portfolio`, etc.). If a user is on `/services`, clicking `#portfolio` correctly routes to `/#portfolio` due to logic inside `Header.tsx`.

---

## 27. Hardcoded Content Audit

| Content Item | Stored Location | Priority for Centralization |
| :--- | :--- | :--- |
| **City Name ("in Mysuru")** | `src/components/HeroSection.tsx` (Line 53) | **HIGH** |
| **Heritage Badge ("SINCE 2025", "in Karnataka")** | `src/components/ServiceCategoryStrip.tsx` (Lines 29, 32) | **HIGH** |
| **Facility Description Text** | `src/components/StudioAccessSection.tsx` (Line 36) | **HIGH** |
| **Footer Brand Description** | `src/components/Footer.tsx` (Line 105) | **HIGH** |
| **Hero Headline & Description** | `src/components/HeroSection.tsx` (Lines 46–54) | **MEDIUM** |
| **Final CTA Headline & Description** | `src/components/FinalCTA.tsx` (Lines 41–51) | **MEDIUM** |
| **Service Section 01 & 02 Feature Arrays**| `src/pages/ServiceShowcasePage.tsx` (Lines 14–33) | **MEDIUM** |
| **Interior & PPF Feature Arrays** | `src/pages/Page3.tsx` (Lines 10–44) | **MEDIUM** |
| **Visual Shift Slider Cards & Process Steps**| `src/pages/Page4.tsx` (Lines 18–76) | **MEDIUM** |

---

## 28. Template-to-Client Migration Map

| Current Content Element | Current Source | Status | Needs Client Input? | Recommended Future Replacement |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Name** | `studioConfig.ts` | Approved | No | Keep `DETAILING MONSTER` |
| **Street Address** | `studioConfig.ts` | Approved | No | Keep `4th Main, Maruthi Temple Road...` |
| **Phone Number** | `studioConfig.ts` | Approved | No | Keep `+91 99452 28752` |
| **Email Address** | `studioConfig.ts` | Placeholder | **YES** | Official client email (e.g. `info@detailingmonster.com`) |
| **Operating Hours** | `studioConfig.ts` | Unverified | **YES** | Official operating schedule |
| **Hero Image** | `public/hero-car.jpg` | Stock Photo | Optional | High-res studio shot of customer vehicle |
| **Stats (500+, 98%, 7+)** | `siteData.ts` | Unverified | **YES** | Real numbers or adjust to verifiable copy |
| **Since 2025 Badge** | `ServiceCategoryStrip.tsx` | Unverified | **YES** | Actual founding year of Detailing Monster |
| **Ceramic Specs (9H, 110°, 5YR)**| `ServiceShowcasePage.tsx` | Vendor claim | **YES** | Exact specifications of coatings applied |
| **PPF Warranty (10 YR)** | `page7Data.ts` | Vendor claim | **YES** | Exact manufacturer warranty terms |
| **Testimonials (Daniel, Michael, Ahmed)**| `page6Data.ts` | Demo data | **YES** | 3 authentic reviews from real clients |
| **Portfolio Items (6 vehicles)**| `page5Data.ts` | Stock photos | **YES** | Real photos of cars detailed at the studio |
| **Studio Facility Image** | `public/studio-facility.jpg`| Low-res sample | **YES** | High-res photograph of Saraswathipuram workshop |
| **Appointment Form Destination**| `appointmentService.ts` | Mock only | **YES** | Real email recipient or WhatsApp redirection |
| **Social Links** | `page8Data.ts` | Placeholder roots| **YES** | Live Instagram, Facebook, and YouTube links |
| **Google Maps Pin** | `studioConfig.ts` | Query URL | **YES** | Exact Google Business Profile Place/CID URL |

---

## 29. Client Information Required (Actionable Checklist)

The following checklist must be provided to the client to transform this website into a legally compliant, authentic production asset:

### 1. Business Coordinates & Verification
- [ ] **Official Email:** Is `studio@detailingmonster.com` registered and active, or should inquiries go to another address (e.g. Gmail / business domain)?
- [ ] **WhatsApp Business Number:** Provide the WhatsApp phone number to enable direct instant chat lead generation.
- [ ] **Operating Hours:** Confirm exact opening hours (currently stated as `Mon - Sat: 9:00 AM - 7:00 PM; Closed Sunday`).
- [ ] **Founding Year:** Confirm the actual year the business was established (currently stated as `SINCE 2025`).
- [ ] **Google Business Profile Link:** Provide the direct Google Maps CID or Share link for the Saraswathipuram location.

### 2. Services, Products & Warranties
- [ ] **Ceramic Coating Brands & Specs:** Which ceramic coatings are officially installed (e.g. Gtechniq, CarPro, IGL, System X)? What exact hardness and warranty durations (e.g. 2-Year, 3-Year, 5-Year) are officially promised?
- [ ] **PPF Brands & Warranties:** Which paint protection films are offered (e.g. XPEL Ultimate Plus, Stek DynoShield, Garware, Llumar)? What is the official warranty duration?
- [ ] **Service Packages:** Are there specific named detailing packages the client wants listed in the appointment form dropdown?

### 3. Proof, Social Proof & Media
- [ ] **3 Real Customer Reviews:** Provide 3 authentic customer reviews (Customer Name, Vehicle Model, and Review Quote).
- [ ] **6 Portfolio Projects:** Provide high-resolution photographs of 6 actual vehicles detailed at the studio, along with the make/model and the service performed on each.
- [ ] **1 Facility Photograph:** Provide a clean, high-resolution photograph of the actual detailing bay / cleanroom in Saraswathipuram to replace the 5.8 KB placeholder.
- [ ] **Social Media Profiles:** Provide live URLs for the studio's official Instagram, Facebook, and YouTube channels.

### 4. Appointment Form Routing
- [ ] **Lead Destination:** When a customer clicks "REQUEST APPOINTMENT", where should their information be delivered?
  - *Option A:* Send directly to client email via Resend/SendGrid/Formspree.
  - *Option B:* Automatically format a WhatsApp message and open WhatsApp with pre-filled customer details.
  - *Option C:* Connect to an internal CRM or Google Sheets webhook.

---

## 30. Technical Debt Register

| Severity | Issue Description | Location | Impact |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | **Appointment Form Submits to Nowhere** | `src/services/appointmentService.ts` | 100% of customer booking attempts are lost. The client receives no inquiries. |
| **CRITICAL** | **Stale `dist/` Contains Old Blackline Build** | `dist/` directory | If the repository is deployed via standard static host pointing to `dist/`, the old template brand and Pakistan address will be published. |
| **HIGH** | **Large Uncompressed Image Assets (~8.2 MB)** | `public/*.jpg` | Heavy data payload, slow initial paint on mobile 4G/3G connections. |
| **HIGH** | **Mismatched Type Dependency** | `package.json` (`@types/react-router-dom`) | Obsolete v5 types package in production dependencies alongside v7 router. |
| **HIGH** | **Pixelated Low-Resolution Assets** | `portfolio-ferrari.jpg`, `portfolio-lamborghini.jpg`, `studio-facility.jpg` | 5KB–6KB images look blurry on modern mobile and retina screens. |
| **MEDIUM** | **Hardcoded Location Strings Bypassing Config** | `HeroSection.tsx`, `ServiceCategoryStrip.tsx`, `Footer.tsx` | Future location changes will require editing multiple JSX files instead of one config file. |
| **MEDIUM** | **Generic Root Social Links** | `src/data/page8Data.ts` | Clicking social icons leads to `instagram.com` home rather than client profiles. |
| **LOW** | **Dead / Unused Assets in Source Tree** | `src/assets/hero.png`, `react.svg`, `vite.svg` | Unnecessary repository clutter. |
| **LOW** | **Redundant Dev Routes Exposed** | `App.tsx` (`/page5`, `/page6`, `/page7`, `/page8`) | Exposes raw developmental page numbers alongside semantic URL routes. |

---

## 31. Risk Register

| # | Risk Item | Location | Why It Matters | Severity | Recommended Future Action (DO NOT IMPLEMENT NOW) |
| :- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | **Customer Lead Loss** | `appointmentService.ts` | Users fill the form expecting a callback; no email or webhook is sent. | **CRITICAL** | Integrate Email API (Resend/SendGrid) or WhatsApp direct dispatch. |
| **R-02** | **Accidental Re-Deployment of Old Template** | `dist/` folder | Deploying without re-running `npm run build` serves old Blackline Auto data. | **CRITICAL** | Run `npm run build` or add `dist` to `.gitignore`. |
| **R-03** | **Consumer Protection / False Advertising Claims** | `siteData.ts`, `page7Data.ts` | Making specific claims ("500+ cars", "Since 2025", "10-Year Warranty") without proof can lead to legal/reputational risks. | **HIGH** | Obtain written client confirmation for all metrics and warranties. |
| **R-04** | **Mobile Data / Bounce Rate Risk** | `public/*.jpg` | Loading 8.2MB on cellular data increases bounce rate and reduces Google PageSpeed score. | **HIGH** | Convert images to WebP/AVIF format and generate responsive `srcset` resolutions. |
| **R-05** | **Social Link Disconnection** | `page8Data.ts` | Footer social icons navigate away from the site to platform homepages instead of the studio's page. | **MEDIUM** | Update URLs to verified studio social handles. |

---

## 32. Verification of "DO NOT MODIFY" Rule

Before concluding this audit, the filesystem was thoroughly verified to confirm that:
- [x] Zero source code files in `src/` were edited, refactored, or renamed.
- [x] Zero CSS stylesheets (`index.css` or inline styles) were altered.
- [x] Zero HTML files (`index.html`) were modified.
- [x] Zero image or media assets were added, deleted, or compressed.
- [x] Zero dependencies were installed, updated, or removed from `package.json`.
- [x] The dev server continues running unhindered on `http://localhost:5175/`.
- [x] **This operation was 100% READ-ONLY documentation.**
