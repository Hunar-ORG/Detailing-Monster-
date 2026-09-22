export interface BusinessLocationConfig {
  name: string;
  brandName: string;
  street: string;
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  countryCode: string;
  landmark: string;
  address: string;
  formattedDisplayAddress: string;
  shortLocation: string;
}

export interface StudioConfig extends BusinessLocationConfig {
  cityCountry: string;
  phone: string;
  email: string;
  hours: string;
  directionsUrl: string;
  facilityTitle: string;
  facilityDescription: string;
  facilityImage: string;
}

export const businessConfig: BusinessLocationConfig = {
  name: 'DETAILING MONSTER Studio',
  brandName: 'DETAILING MONSTER',
  street: '4th Main, Maruthi Temple Road',
  locality: 'Saraswathipuram',
  city: 'Mysuru',
  state: 'Karnataka',
  postalCode: '570009',
  country: 'India',
  countryCode: 'IN',
  landmark: 'Near the Central Library',
  address: '4th Main, Maruthi Temple Road, Saraswathipuram, Mysuru, Karnataka - 570009',
  formattedDisplayAddress:
    '4th Main, Maruthi Temple Road, Saraswathipuram, Mysuru, Karnataka - 570009 (Near the Central Library)',
  shortLocation: 'Mysuru, Karnataka',
};

export const studioConfig: StudioConfig = {
  ...businessConfig,
  cityCountry: 'Mysuru, Karnataka - 570009',
  phone: '+91 99452 28752',
  email: 'studio@detailingmonster.com',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  directionsUrl:
    'https://maps.google.com/?q=4th+Main,+Maruthi+Temple+Road,+Saraswathipuram,+Mysuru,+Karnataka+570009',
  facilityTitle: 'Cleanroom Detailing Lab',
  facilityDescription:
    'Equipped with precision lighting array and heavy-duty dust scrubber system.',
  facilityImage: '/studio-facility.jpg',
};
