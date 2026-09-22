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
  { label: 'INTERIOR DETAILING' },
];

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    icon: 'paint-correction',
    title: 'Paint Correction',
    description: 'Machine leveling to erase defects and unlock mirror clarity.',
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
    title: 'Interior Restoration',
    description: 'Deep leather feeding and tactile surface rejuvenation.',
  },
];
