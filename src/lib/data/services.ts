export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
  icon: string;
};

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding',
    tagline: 'Build a brand people remember',
    description:
      'Strategic brand identity systems that position you as the premium choice in your market — from visual identity to voice and messaging.',
    benefits: [
      'Distinct positioning in crowded markets',
      'Cohesive visual and verbal identity',
      'Premium perception that justifies higher pricing',
      'Brand guidelines for consistent execution',
    ],
    process: ['Discovery & audit', 'Strategy & positioning', 'Identity design', 'Brand rollout'],
    deliverables: ['Logo suite', 'Brand guidelines', 'Color & typography system', 'Messaging framework'],
    icon: '◆',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    tagline: 'Growth measured in revenue',
    description:
      'Data-driven campaigns engineered for ROI — we optimize every touchpoint from first click to conversion.',
    benefits: [
      'Predictable, scalable acquisition',
      'Full-funnel attribution clarity',
      'Continuous A/B testing and optimization',
      'Lower CAC, higher LTV',
    ],
    process: ['Audit & analytics setup', 'Channel strategy', 'Campaign launch', 'Scale & optimize'],
    deliverables: ['Campaign architecture', 'Creative assets', 'Performance dashboards', 'Monthly growth reports'],
    icon: '▲',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    tagline: 'Turn followers into fans',
    description:
      'Platform-native content strategies that build authority, engagement, and demand across Instagram, LinkedIn, TikTok, and more.',
    benefits: [
      'Consistent, on-brand content calendar',
      'Community growth and engagement',
      'Platform-specific creative excellence',
      'Social proof that drives conversions',
    ],
    process: ['Audience research', 'Content strategy', 'Production & publishing', 'Analytics & iteration'],
    deliverables: ['Content calendar', 'Creative templates', 'Engagement reports', 'Growth playbooks'],
    icon: '◎',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    tagline: 'Cinematic content that converts',
    description:
      'Premium video production and editing for ads, social, YouTube, and brand films that capture attention and drive action.',
    benefits: [
      'Scroll-stopping short-form content',
      'Professional long-form storytelling',
      'Platform-optimized formats',
      'Faster turnaround without sacrificing quality',
    ],
    process: ['Brief & scripting', 'Footage review', 'Edit & motion graphics', 'Delivery & revisions'],
    deliverables: ['Edited videos', 'Thumbnail designs', 'Caption files', 'Format variations'],
    icon: '▶',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    tagline: 'Content that builds authority',
    description:
      'Strategic content across blogs, newsletters, scripts, and social that positions you as the go-to expert in your space.',
    benefits: [
      'SEO-optimized long-form content',
      'Thought leadership positioning',
      'Repurposable content systems',
      'Consistent publishing cadence',
    ],
    process: ['Topic research', 'Content planning', 'Creation & editing', 'Distribution strategy'],
    deliverables: ['Blog articles', 'Newsletter copy', 'Social captions', 'Content library'],
    icon: '✦',
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    tagline: 'Your reputation, amplified',
    description:
      'End-to-end personal brand systems for founders, coaches, and experts who want to become the recognized authority in their niche.',
    benefits: [
      'Clear positioning and narrative',
      'Premium visual presence',
      'Content that reflects your expertise',
      'Inbound opportunities on autopilot',
    ],
    process: ['Brand audit', 'Positioning workshop', 'Visual & content build', 'Launch & amplify'],
    deliverables: ['Personal brand kit', 'Profile optimization', 'Content strategy', 'Launch campaign'],
    icon: '★',
  },
  {
    id: 'paid-ads',
    title: 'Paid Ads',
    tagline: 'Ads that pay for themselves',
    description:
      'High-converting paid media across Meta, Google, LinkedIn, and YouTube — built on creative excellence and ruthless optimization.',
    benefits: [
      'Lower cost per acquisition',
      'Creative testing at scale',
      'Retargeting that recovers lost revenue',
      'Transparent reporting and insights',
    ],
    process: ['Account audit', 'Creative development', 'Campaign structure', 'Optimize & scale'],
    deliverables: ['Ad creatives', 'Campaign setup', 'Audience targeting', 'Weekly performance reports'],
    icon: '◉',
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    tagline: 'Design that demands attention',
    description:
      'Premium creative assets for ads, social, presentations, and campaigns — designed to stop the scroll and drive clicks.',
    benefits: [
      'On-brand creative at speed',
      'Multi-format asset production',
      'A/B test-ready variations',
      'Consistent premium aesthetic',
    ],
    process: ['Creative brief', 'Concept development', 'Design production', 'Asset delivery'],
    deliverables: ['Ad creatives', 'Social graphics', 'Presentation decks', 'Design templates'],
    icon: '◇',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    tagline: 'Pipeline on demand',
    description:
      'Systematic lead generation engines that fill your calendar with qualified prospects ready to buy.',
    benefits: [
      'Predictable lead flow',
      'Qualified prospect targeting',
      'Multi-channel outreach systems',
      'CRM integration and automation',
    ],
    process: ['ICP definition', 'Offer & funnel design', 'Channel activation', 'Optimize conversion'],
    deliverables: ['Lead magnets', 'Landing pages', 'Outreach sequences', 'Pipeline dashboards'],
    icon: '→',
  },
  {
    id: 'website-design',
    title: 'Website Design',
    tagline: 'Websites that win clients',
    description:
      'Conversion-focused website design and development that positions your brand as premium and turns visitors into leads.',
    benefits: [
      'Premium, trust-building design',
      'Mobile-first responsive experience',
      'Fast loading and SEO-ready',
      'Conversion-optimized layouts',
    ],
    process: ['Discovery & wireframes', 'Visual design', 'Development', 'Launch & optimize'],
    deliverables: ['Custom website', 'Mobile optimization', 'SEO setup', 'Analytics integration'],
    icon: '□',
  },
  {
    id: 'funnel-building',
    title: 'Funnel Building',
    tagline: 'Systems that sell while you sleep',
    description:
      'End-to-end sales funnels from awareness to close — landing pages, email sequences, and automation that convert.',
    benefits: [
      'Automated nurture sequences',
      'Higher conversion rates',
      'Clear customer journey mapping',
      'Scalable revenue systems',
    ],
    process: ['Funnel mapping', 'Asset creation', 'Tech integration', 'Testing & optimization'],
    deliverables: ['Landing pages', 'Email sequences', 'Checkout flows', 'Funnel analytics'],
    icon: '▼',
  },
];
