export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Takeoffs360',
  url: 'https://takeoffs360.com',
  logo: 'https://takeoffs360.com/logo.png',
  description: 'Reliable construction quantity takeoffs for contractors and builders. Turn drawings into winning bids.',
  sameAs: [
    'https://www.facebook.com/takeoffs360',
    'https://www.linkedin.com/company/takeoffs360',
    'https://twitter.com/takeoffs360',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+1-267-718-3770',
    email: 'info@takeoffs360.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Takeoffs360 LLC, 325 Sentry Parkway E, STE 301 PMB 1061',
    addressLocality: 'Bluebell',
    addressRegion: 'PA',
    postalCode: '19422',
    addressCountry: 'US',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Takeoffs360',
  image: 'https://takeoffs360.com/logo.png',
  description: 'Construction quantity takeoff services for contractors and builders',
  url: 'https://takeoffs360.com',
  telephone: '+1-267-718-3770',
  email: 'info@takeoffs360.com',
  priceRange: '$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Takeoffs360 LLC, 325 Sentry Parkway E, STE 301 PMB 1061',
    addressLocality: 'Bluebell',
    addressRegion: 'PA',
    postalCode: '19422',
    addressCountry: 'US',
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Construction Quantity Takeoffs',
  description: 'Professional construction quantity takeoff services to help contractors and builders win more bids',
  provider: {
    '@type': 'Organization',
    name: 'Takeoffs360',
    url: 'https://takeoffs360.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'US',
  },
  serviceType: 'Construction Quantity Takeoff Services',
};
