export type Solution = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  approach: string[];
  outcomes: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    id: 'coaches',
    title: 'Coaches',
    subtitle: 'Fill your calendar with ideal clients',
    description:
      'We help coaches build premium personal brands, launch high-converting funnels, and generate a steady stream of qualified discovery calls.',
    challenges: [
      'Inconsistent lead flow between launches',
      'Difficulty standing out in a saturated market',
      'Content creation taking too much time',
      'Low conversion from social to booked calls',
    ],
    approach: [
      'Personal brand positioning and visual identity',
      'Content systems for authority building',
      'Paid ads and organic funnels for lead gen',
      'Landing pages optimized for discovery calls',
    ],
    outcomes: [
      '3–5x increase in qualified leads',
      'Premium positioning that supports higher ticket pricing',
      'Automated nurture sequences',
      'Consistent monthly revenue growth',
    ],
  },
  {
    id: 'consultants',
    title: 'Consultants',
    subtitle: 'Become the obvious choice',
    description:
      'Strategic branding and thought leadership systems that position consultants as the premium expert clients seek out.',
    challenges: [
      'Commoditized positioning in competitive niches',
      'Reliance on referrals alone',
      'Weak online presence and credibility signals',
      'Long sales cycles without nurture systems',
    ],
    approach: [
      'Authority-building content strategy',
      'LinkedIn and professional platform optimization',
      'Case study and social proof development',
      'Inbound lead generation funnels',
    ],
    outcomes: [
      'Inbound inquiries from ideal clients',
      'Shorter sales cycles with pre-qualified leads',
      'Premium fee positioning',
      'Recognized thought leadership',
    ],
  },
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Launch with momentum',
    description:
      'From brand identity to go-to-market campaigns — we help startups build market presence and acquire customers fast.',
    challenges: [
      'No established brand recognition',
      'Limited marketing budget with high expectations',
      'Need for rapid user acquisition',
      'Unclear messaging and positioning',
    ],
    approach: [
      'Brand foundation and messaging framework',
      'Launch campaign strategy and execution',
      'Performance marketing for early traction',
      'Growth experiments and iteration',
    ],
    outcomes: [
      'Strong market entry with clear positioning',
      'Early customer acquisition at efficient CAC',
      'Investor-ready brand presence',
      'Scalable growth foundation',
    ],
  },
  {
    id: 'local-businesses',
    title: 'Local Businesses',
    subtitle: 'Dominate your local market',
    description:
      'Local SEO, social presence, and targeted ads that drive foot traffic, calls, and appointments for service-based businesses.',
    challenges: [
      'Invisible online compared to competitors',
      'Inconsistent review and reputation management',
      'Wasted ad spend without targeting',
      'No system for capturing and nurturing leads',
    ],
    approach: [
      'Google Business and local SEO optimization',
      'Geo-targeted paid advertising',
      'Social proof and review generation',
      'Lead capture and follow-up automation',
    ],
    outcomes: [
      'Top local search visibility',
      'Steady stream of local inquiries',
      'Higher review ratings and trust',
      'Measurable ROI on marketing spend',
    ],
  },
  {
    id: 'd2c-brands',
    title: 'D2C Brands',
    subtitle: 'Scale profitably',
    description:
      'Full-funnel creative and performance marketing for D2C brands ready to scale revenue without sacrificing margins.',
    challenges: [
      'Rising CAC across paid channels',
      'Creative fatigue limiting ad performance',
      'Low repeat purchase rates',
      'Inconsistent brand experience across touchpoints',
    ],
    approach: [
      'Creative testing at scale for paid social',
      'Retention and email marketing systems',
      'UGC and influencer content strategies',
      'Landing page and checkout optimization',
    ],
    outcomes: [
      'Improved ROAS and lower CAC',
      'Higher AOV and repeat purchase rate',
      'Scalable creative production pipeline',
      'Strong brand community and loyalty',
    ],
  },
  {
    id: 'personal-brands',
    title: 'Personal Brands',
    subtitle: 'Build influence that converts',
    description:
      'Complete personal brand ecosystems for creators, experts, and entrepreneurs who want to monetize their expertise.',
    challenges: [
      'Audience without monetization strategy',
      'Inconsistent content and visual presence',
      'Difficulty converting followers to customers',
      'No premium positioning or offer structure',
    ],
    approach: [
      'Personal brand strategy and visual identity',
      'Content pillars and publishing systems',
      'Offer development and funnel design',
      'Paid amplification and partnership outreach',
    ],
    outcomes: [
      'Recognized authority in your niche',
      'Multiple revenue streams from your brand',
      'Engaged, loyal community',
      'Inbound opportunities and partnerships',
    ],
  },
];
