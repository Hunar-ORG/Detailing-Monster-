import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServiceShowcasePage from './pages/ServiceShowcasePage';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        {/* Page 1 — Home */}
        <Route index element={<HomePage />} />

        {/* Page 2 — Paint Correction + Ceramic Coating */}
        <Route path="services" element={<ServiceShowcasePage />} />
        <Route path="paint-protection" element={<ServiceShowcasePage />} />

        {/* Page 3 — Interior Detailing + PPF */}
        <Route path="detailing" element={<Page3 />} />

        {/* Page 4 — Visual Shift (gallery/sliders) + Engineered Method (process) */}
        <Route path="gallery" element={<Page4 />} />
        <Route path="process" element={<Page4 />} />

        {/* Page 5 — The Standard + Our Portfolio */}
        <Route path="portfolio" element={<Page5 />} />
        <Route path="standard" element={<Page5 />} />
        <Route path="page5" element={<Page5 />} />

        {/* Page 6 — Testimonials + Reserve Your Detail */}
        <Route path="reserve" element={<Page6 />} />
        <Route path="testimonials" element={<Page6 />} />
        <Route path="contact" element={<Page6 />} />
        <Route path="page6" element={<Page6 />} />

        {/* Page 7 — Studio Access + Common Inquiries */}
        <Route path="location" element={<Page7 />} />
        <Route path="faq" element={<Page7 />} />
        <Route path="about" element={<Page7 />} />
        <Route path="page7" element={<Page7 />} />

        {/* Page 8 — Final CTA */}
        <Route path="cta" element={<Page8 />} />
        <Route path="page8" element={<Page8 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
