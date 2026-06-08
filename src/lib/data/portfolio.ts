export type PortfolioItem = {
  id: string;
  title: string;
  category: 'branding' | 'social' | 'video' | 'campaigns' | 'websites';
  client: string;
  description: string;
  tags: string[];
  image: string;
};

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Branding' },
  { id: 'social', label: 'Social Creatives' },
  { id: 'video', label: 'Video' },
  { id: 'campaigns', label: 'Ad Creatives' },
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
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=1000&q=80&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Lumière Skin Launch',
    category: 'campaigns',
    client: 'Lumière Skin',
    description: 'Multi-channel launch campaign for a premium D2C skincare brand.',
    tags: ['Paid Ads', 'UGC', 'Launch Funnel'],
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&q=80&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Nexus Advisory LinkedIn',
    category: 'social',
    client: 'Nexus Advisory',
    description: 'Thought leadership content system for a management consulting firm.',
    tags: ['LinkedIn', 'Content Strategy', 'Authority'],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=1000&q=80&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'FlowStack Product Film',
    category: 'video',
    client: 'FlowStack',
    description: 'Product demo and brand film for a SaaS startup.',
    tags: ['Video Editing', 'Motion Graphics', 'Product Demo'],
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&q=80&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Apex Fitness Social',
    category: 'social',
    client: 'Apex Fitness',
    description: 'Instagram and TikTok content system for a fitness brand.',
    tags: ['Instagram', 'TikTok', 'Reels'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&q=80&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Meridian Legal Website',
    category: 'websites',
    client: 'Meridian Legal',
    description: 'Premium website design for a boutique law consultancy.',
    tags: ['Web Design', 'Conversion', 'SEO'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&q=80&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Vantage Capital Brand',
    category: 'branding',
    client: 'Vantage Capital',
    description: 'Brand identity for an emerging investment advisory firm.',
    tags: ['Logo', 'Stationery', 'Pitch Deck'],
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=1000&q=80&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'GlowBar Campaign',
    category: 'campaigns',
    client: 'GlowBar',
    description: 'Performance marketing campaign for a wellness D2C brand.',
    tags: ['Meta Ads', 'Creative Testing', 'ROAS'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&q=80&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Dr. Patel Personal Brand',
    category: 'branding',
    client: 'Dr. Raj Patel',
    description: 'Personal branding for a healthcare entrepreneur and speaker.',
    tags: ['Personal Brand', 'Speaking', 'Authority'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&q=80&auto=format&fit=crop',
  },
];
