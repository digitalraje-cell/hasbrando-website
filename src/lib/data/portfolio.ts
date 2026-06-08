export type PortfolioItem = {
  id: string;
  title: string;
  category: 'branding' | 'social' | 'video' | 'campaigns' | 'websites';
  client: string;
  description: string;
  tags: string[];
};

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Branding' },
  { id: 'social', label: 'Social Media' },
  { id: 'video', label: 'Video' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'websites', label: 'Websites' },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elevate Coaching Rebrand',
    category: 'branding',
    client: 'Elevate Coaching',
    description: 'Complete personal brand identity for a premium life coaching practice.',
    tags: ['Logo', 'Brand Guidelines', 'Visual Identity'],
  },
  {
    id: '2',
    title: 'Lumière Skin Launch',
    category: 'campaigns',
    client: 'Lumière Skin',
    description: 'Multi-channel launch campaign for a premium D2C skincare brand.',
    tags: ['Paid Ads', 'UGC', 'Launch Funnel'],
  },
  {
    id: '3',
    title: 'Nexus Advisory LinkedIn',
    category: 'social',
    client: 'Nexus Advisory',
    description: 'Thought leadership content system for a management consulting firm.',
    tags: ['LinkedIn', 'Content Strategy', 'Authority'],
  },
  {
    id: '4',
    title: 'FlowStack Product Film',
    category: 'video',
    client: 'FlowStack',
    description: 'Product demo and brand film for a SaaS startup.',
    tags: ['Video Editing', 'Motion Graphics', 'Product Demo'],
  },
  {
    id: '5',
    title: 'Apex Fitness Social',
    category: 'social',
    client: 'Apex Fitness',
    description: 'Instagram and TikTok content system for a fitness brand.',
    tags: ['Instagram', 'TikTok', 'Reels'],
  },
  {
    id: '6',
    title: 'Meridian Legal Website',
    category: 'websites',
    client: 'Meridian Legal',
    description: 'Premium website design for a boutique law consultancy.',
    tags: ['Web Design', 'Conversion', 'SEO'],
  },
  {
    id: '7',
    title: 'Vantage Capital Brand',
    category: 'branding',
    client: 'Vantage Capital',
    description: 'Brand identity for an emerging investment advisory firm.',
    tags: ['Logo', 'Stationery', 'Pitch Deck'],
  },
  {
    id: '8',
    title: 'GlowBar Campaign',
    category: 'campaigns',
    client: 'GlowBar',
    description: 'Performance marketing campaign for a wellness D2C brand.',
    tags: ['Meta Ads', 'Creative Testing', 'ROAS'],
  },
  {
    id: '9',
    title: 'Dr. Patel Personal Brand',
    category: 'branding',
    client: 'Dr. Raj Patel',
    description: 'Personal branding for a healthcare entrepreneur and speaker.',
    tags: ['Personal Brand', 'Speaking', 'Authority'],
  },
];
