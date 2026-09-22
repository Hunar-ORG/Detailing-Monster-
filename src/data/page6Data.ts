import type { TestimonialItem } from '../types';

export const testimonials: TestimonialItem[] = [
  {
    id: 'daniel-r',
    name: 'Daniel R.',
    vehicle: 'Porsche 911 Owner',
    rating: 5,
    quote:
      '“The paint looked better than the day I bought the car. Swirls and light defects are completely gone, replaced by a deep optical depth I didn\'t think was possible. The attention to detail is unmatched.”',
  },
  {
    id: 'michael-t',
    name: 'Michael T.',
    vehicle: 'Range Rover Owner',
    rating: 5,
    quote:
      '“DETAILING MONSTER treated my autobiography like it was their own prized asset. The PPF wrapping is completely seamless—literally invisible. Excellent customer service and communication from the team.”',
  },
  {
    id: 'ahmed-k',
    name: 'Ahmed K.',
    vehicle: 'Mercedes-AMG Owner',
    rating: 5,
    quote:
      '“Professional, certified, and genuinely passionate. They mapped my entire paint thickness with an ultrasonic gauge before starting correction. Highly technical, master-level detailing service.”',
  },
];

export const serviceOptions = [
  'Paint Correction + Ceramic Coating',
  'Full Exterior Self-Healing PPF Wrap',
  'Track Prep PPF + Advanced Wheel Coating',
  'Interior Cockpit Restoration + Leather Feeding',
  'Comprehensive Master Detailing Service',
];
