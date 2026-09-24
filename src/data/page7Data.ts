import type { StudioLocationInfo } from '../types';
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
