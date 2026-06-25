export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'premium-branding-why-it-matters',
    title: 'Why Premium Branding Is Your Highest-ROI Investment',
    excerpt:
      'The difference between brands that charge premium prices and those that compete on cost often comes down to one thing: perception.',
    category: 'Branding',
    date: '2026-05-15',
    readTime: '6 min',
    author: 'Hashbrando Team',
  },
  {
    slug: 'performance-marketing-playbook-2026',
    title: 'The 2026 Performance Marketing Playbook',
    excerpt:
      'What is working right now across Meta, Google, and LinkedIn — and how to build campaigns that scale profitably.',
    category: 'Performance Marketing',
    date: '2026-05-08',
    readTime: '8 min',
    author: 'Hashbrando Team',
  },
  {
    slug: 'personal-brand-coaches',
    title: 'How Coaches Can Build a Personal Brand That Sells',
    excerpt:
      'A step-by-step framework for coaches who want to move from invisible to in-demand without spending all day on content.',
    category: 'Personal Branding',
    date: '2026-04-28',
    readTime: '7 min',
    author: 'Hashbrando Team',
  },
  {
    slug: 'funnel-optimization-guide',
    title: 'Funnel Optimization: 5 Leaks Killing Your Conversions',
    excerpt:
      'Most funnels lose 60–80% of potential customers at predictable points. Here is how to find and fix those leaks.',
    category: 'Funnel Building',
    date: '2026-04-18',
    readTime: '5 min',
    author: 'Hashbrando Team',
  },
  {
    slug: 'content-marketing-authority',
    title: 'Content Marketing for Authority: Less Noise, More Impact',
    excerpt:
      'Why publishing more content is not the answer — and what strategic content systems actually look like.',
    category: 'Content Marketing',
    date: '2026-04-05',
    readTime: '6 min',
    author: 'Hashbrando Team',
  },
  {
    slug: 'paid-ads-creative-testing',
    title: 'Creative Testing: The Secret to Scaling Paid Ads',
    excerpt:
      'How top D2C brands use systematic creative testing to lower CAC and scale ad spend profitably.',
    category: 'Paid Ads',
    date: '2026-03-22',
    readTime: '7 min',
    author: 'Hashbrando Team',
  },
];
