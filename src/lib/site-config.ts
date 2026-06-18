export const SITE = {
  name: 'HasBrando',
  tagline: 'Premium Branding Consultancy',
  description:
    'HasBrando is a premium branding consultancy helping founders and consultants build authority, trust and market positioning through strategic creative and performance systems.',
  url: 'https://hasbrando.com',
  email: 'support@hashbrando.com',
  phone: '+91 91157 21519',
  phoneTel: '+919115721519',
  whatsapp: 'https://wa.me/919115721519',
  bookStrategy: '/book-strategy',
  lifetopAcademy: {
    name: 'Lifetop Academy',
    tagline: 'Trusted education & business ecosystem',
    hours: {
      days: 'Mon–Sat',
      time: '10:00 AM – 7:00 PM IST',
    },
    address: {
      org: 'Lifetop Academy',
      lines: ['L2 B/68', 'Mohan Garden', 'Uttam Nagar', 'New Delhi 110059', 'India'],
    },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=L2+B%2F68+Mohan+Garden+Uttam+Nagar+New+Delhi+110059+India',
  },
  address: {
    street: 'L2 B/68, Mohan Garden, Uttam Nagar',
    city: 'New Delhi',
    postal: '110059',
    country: 'IN',
  },
  social: {
    instagram: 'https://instagram.com/hasbrando',
    linkedin: 'https://linkedin.com/company/hasbrando',
    x: 'https://x.com/hasbrando',
    // TODO: Replace with official HasBrando Facebook URL when the page is live
    facebook: 'https://facebook.com/hasbrando',
    youtube: 'https://youtube.com/@hasbrando',
  },
} as const;

export type SocialPlatform = keyof typeof SITE.social;

export const SOCIAL_LINKS: ReadonlyArray<{
  id: SocialPlatform;
  href: string;
  ariaLabel: string;
}> = [
  { id: 'linkedin', href: SITE.social.linkedin, ariaLabel: 'Visit HasBrando on LinkedIn' },
  { id: 'instagram', href: SITE.social.instagram, ariaLabel: 'Visit HasBrando on Instagram' },
  { id: 'youtube', href: SITE.social.youtube, ariaLabel: 'Visit HasBrando on YouTube' },
  { id: 'x', href: SITE.social.x, ariaLabel: 'Visit HasBrando on X' },
  { id: 'facebook', href: SITE.social.facebook, ariaLabel: 'Visit HasBrando on Facebook' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const RESOURCE_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
] as const;

export const FOOTER_LINKS = {
  solutions: [
    { label: 'Branding', href: '/solutions#branding' },
    { label: 'Performance Marketing', href: '/solutions#performance-marketing' },
    { label: 'Paid Ads', href: '/solutions#paid-ads' },
    { label: 'Lead Generation', href: '/solutions#lead-generation' },
    { label: 'Funnel Building', href: '/solutions#funnel-building' },
    { label: 'Marketing Automation', href: '/solutions#marketing-automation' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Book Strategy Call', href: '/book-strategy' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
} as const;
