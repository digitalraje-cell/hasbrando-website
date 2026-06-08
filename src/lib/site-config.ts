export const SITE = {
  name: 'HasBrando',
  tagline: 'Premium Branding Consultancy',
  description:
    'HasBrando is a premium branding consultancy helping founders and consultants build authority, trust and market positioning through strategic creative and performance systems.',
  url: 'https://hasbrando.com',
  email: 'support@hasbrando.com',
  bookStrategy: '/book-strategy',
  social: {
    instagram: 'https://instagram.com/hasbrando',
    linkedin: 'https://linkedin.com/company/hasbrando',
    twitter: 'https://x.com/hasbrando',
    youtube: 'https://youtube.com/@hasbrando',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
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
