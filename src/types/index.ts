export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel: string;
}

export interface ServiceCategory {
  label: string;
}

export interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioVehicle {
  id: string;
  vehicle: string;
  service: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  vehicle: string;
  quote: string;
  rating: number;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  vehicleModel: string;
  requestedService: string;
  preferredDate: string;
  message: string;
}

export interface StudioLocationInfo {
  studioName: string;
  address: string;
  landmark?: string;
  cityCountry: string;
  hours: string;
  phone: string;
  directionsUrl: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  platform: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'youtube';
}
