import type { StandardPrinciple, PortfolioVehicle } from '../types';

export const standardPrinciples: StandardPrinciple[] = [
  {
    id: '01',
    number: '01',
    title: 'Surgical Precision',
    description:
      'Every surface, crevice, and paint millimeter is inspected, measured, and treated individually for uncompromising results.',
  },
  {
    id: '02',
    number: '02',
    title: 'Expert Crew',
    description:
      'Certified technicians trained in advanced paint leveling, wet-sanding, and micro-precision composite application.',
  },
  {
    id: '03',
    number: '03',
    title: 'Elite Formulations',
    description:
      'We source only professional-grade coatings, paint protection films, and ultra-safe high-lubricity detailing compounds.',
  },
  {
    id: '04',
    number: '04',
    title: 'Obsessive Focus',
    description:
      'We target the microscopic details that most operations completely overlook. Perfect is our starting baseline.',
  },
];

export const portfolioVehicles: PortfolioVehicle[] = [
  {
    id: 'porsche',
    vehicle: 'Porsche 911 GT3 RS',
    service: 'Multi-Stage Correction • Ceramic Coating',
    image: '/portfolio-porsche.jpg',
  },
  {
    id: 'rangerover',
    vehicle: 'Range Rover Autobiography',
    service: 'Full Exterior Self-Healing PPF Wrap',
    image: '/portfolio-rangerover.jpg',
  },
  {
    id: 'amg',
    vehicle: 'Mercedes-AMG GT Black Series',
    service: 'Track Prep PPF + Advanced Wheel Coating',
    image: '/portfolio-amg.jpg',
  },
  {
    id: 'bmw',
    vehicle: 'BMW M4 Competition',
    service: 'Paint Correction + 5-Year Dual Quartz Coating',
    image: '/portfolio-bmwm4.jpg',
  },
  {
    id: 'ferrari',
    vehicle: 'Ferrari F8 Tributo',
    service: 'Interior Cockpit Restoration + Leather Feeding',
    image: '/portfolio-ferrari.jpg',
  },
  {
    id: 'lamborghini',
    vehicle: 'Lamborghini Huracán Evo',
    service: 'Full Correction + Hydrophobic Glass Coating',
    image: '/portfolio-lamborghini.jpg',
  },
];
