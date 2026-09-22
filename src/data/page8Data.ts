import type { FooterLinkItem, SocialLinkItem } from '../types';
import { studioConfig } from './studioConfig';

export const footerServices: FooterLinkItem[] = [
  { label: 'Paint Correction', href: '#paint-correction' },
  { label: 'Ceramic Coating', href: '#ceramic-coating' },
  { label: 'PPF Protection', href: '#ppf' },
  { label: 'Interior Detailing', href: '#detailing' },
  { label: 'Precision Detailing', href: '#services' },
];

export const footerCompany: FooterLinkItem[] = [
  { label: 'About Studio', href: '#standard' },
  { label: 'Our Process', href: '#process' },
  { label: 'Portfolio Gallery', href: '#portfolio' },
  { label: 'Client Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const footerContact = {
  address: studioConfig.address,
  landmark: studioConfig.landmark,
  phone: studioConfig.phone,
  email: studioConfig.email,
  bookingLabel: 'Book Appointment',
  bookingHref: '#reserve',
};

export const footerSocials: SocialLinkItem[] = [
  { platform: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { platform: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { platform: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];
