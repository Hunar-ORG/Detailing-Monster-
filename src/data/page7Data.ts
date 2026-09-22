import type { StudioLocationInfo, FAQItemData } from '../types';
import { studioConfig } from './studioConfig';

export const studioLocation: StudioLocationInfo = {
  studioName: studioConfig.name,
  address: studioConfig.address,
  landmark: studioConfig.landmark,
  cityCountry: studioConfig.cityCountry,
  hours: studioConfig.hours,
  phone: studioConfig.phone,
  directionsUrl: studioConfig.directionsUrl,
};

export const studioFacility = {
  title: studioConfig.facilityTitle,
  description: studioConfig.facilityDescription,
  image: studioConfig.facilityImage,
};

export const faqList: FAQItemData[] = [
  {
    id: 'faq-1',
    question: 'How long does detailing take?',
    answer:
      'A basic detailing service takes 1–2 days. Multi-stage paint corrections and complex edge-wrapped paint protection film installations typically require 3–5 days in our climate-controlled room.',
  },
  {
    id: 'faq-2',
    question: 'How often should I ceramic coat my car?',
    answer:
      'Professional-grade ceramic coatings typically last between 2 to 5 years depending on the coating formula and ongoing care. We recommend an annual maintenance wash and decontamination inspection to maintain optimal hydrophobic protection and gloss.',
  },
  {
    id: 'faq-3',
    question: 'Is paint correction safe for my vehicle?',
    answer:
      'Yes, when executed with precision. We measure clearcoat thickness using digital ultrasonic gauges before touching any surface, removing only microscopic clearcoat depth (typically 1–3 microns) to safely eliminate defects without compromising factory integrity.',
  },
  {
    id: 'faq-4',
    question: 'How long does PPF last?',
    answer:
      'Our premium self-healing paint protection films come with an industry-standard 10-year manufacturer warranty against yellowing, cracking, and bubbling. The elastomeric polyurethane topcoat automatically heals minor swirl marks when exposed to heat.',
  },
  {
    id: 'faq-5',
    question: 'Can you detail luxury and performance cars?',
    answer:
      'Exotics, supercars, and high-end collector vehicles represent the majority of our daily studio work. Our cleanroom facility features specialized low-profile hydraulic lifts, soft-water filtration, and full facility insurance tailored specifically for ultra-high-value vehicles.',
  },
  {
    id: 'faq-6',
    question: 'Do I need to book in advance?',
    answer:
      'Yes. To maintain strict quality protocols and zero-dust cleanroom standards, we only accept a limited number of vehicles per week. We recommend reserving your slot 1–2 weeks in advance, especially for multi-stage correction and full PPF wraps.',
  },
];
