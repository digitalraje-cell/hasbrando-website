export const SITE = {
  name: 'HasBrando',
  tagline: 'Premium Creative Growth Agency',
  description:
    'HasBrando is a premium creative growth agency specializing in branding, performance marketing, content, and lead generation for ambitious founders and businesses worldwide.',
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
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/case-studies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: 'Branding', href: '/services#branding' },
    { label: 'Performance Marketing', href: '/services#performance-marketing' },
    { label: 'Social Media', href: '/services#social-media-marketing' },
    { label: 'Paid Ads', href: '/services#paid-ads' },
    { label: 'Funnel Building', href: '/services#funnel-building' },
    { label: 'Website Design', href: '/services#website-design' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Book Strategy Call', href: '/book-strategy' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;
