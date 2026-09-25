import type { NavLink, StatItem, ServiceCard, ServiceCategory } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Paint Protection', href: '#paint-protection' },
  { label: 'Detailing', href: '#detailing' },
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#standard' },
];

export const stats: StatItem[] = [
  {
    value: '500+',
    label: 'VEHICLES DETAILED',
    subLabel: 'Supercars & Classics',
  },
  {
    value: '98%',
    label: 'SATISFACTION',
    subLabel: 'Five-Star Detailing Reviews',
  },
  {
    value: '7+',
    label: 'YEARS EXPERTISE',
    subLabel: 'Master Certified Detailing Team',
  },
];

export const serviceCategories: ServiceCategory[] = [
  { label: 'PAINT CORRECTION' },
  { label: 'CERAMIC COATING' },
  { label: 'PPF' },
  { label: 'PAINT PROTECTION' },
];

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    icon: 'paint-correction',
    title: 'Paint Protection Film',
    description: 'Advanced self-healing film designed to protect your paint while preserving its finish.',
  },
  {
    id: 2,
    icon: 'ceramic-protection',
    title: 'Ceramic Protection',
    description: 'Ultra-hard glass coats offering extreme water repelling.',
  },
  {
    id: 3,
    icon: 'ppf',
    title: 'PPF Install',
    description: 'Premium self-healing shields against physical impacts.',
  },
  {
    id: 4,
    icon: 'interior',
    title: 'PPF Installation',
    description: 'Precision-installed protection against scratches, stone chips, and road debris.',
  },
];
