export type CaseStudyMetric = {
  label: string;
  before: string;
  after: string;
  growth: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: CaseStudyMetric[];
  services: string[];
  testimonial?: { quote: string; author: string; role: string };
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    slug: 'coaching-brand-transformation',
    client: 'Elevate Coaching',
    industry: 'Coaching',
    title: 'From invisible to fully booked in 90 days',
    summary:
      'A life coaching brand went from sporadic referrals to a consistent pipeline of premium clients through personal branding and funnel optimization.',
    challenge:
      'The client had strong expertise but no cohesive brand, inconsistent social presence, and relied entirely on word-of-mouth referrals.',
    solution:
      'We rebuilt their personal brand identity, launched a content system, created a high-converting discovery call funnel, and ran targeted Meta ads.',
    results: [
      'Fully booked coaching calendar within 90 days',
      'Raised program pricing by 40% with no drop in conversions',
      'Built an email list of 5,000+ engaged subscribers',
    ],
    metrics: [
      { label: 'Monthly Leads', before: '8', after: '47', growth: '+488%' },
      { label: 'Revenue', before: '$12K/mo', after: '$38K/mo', growth: '+217%' },
      { label: 'Social Engagement', before: '1.2%', after: '6.8%', growth: '+467%' },
    ],
    services: ['Personal Branding', 'Paid Ads', 'Funnel Building'],
    testimonial: {
      quote: 'HasBrando transformed how the market sees me. I went from chasing clients to choosing who I work with.',
      author: 'Sarah Mitchell',
      role: 'Founder, Elevate Coaching',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'd2c-skincare-launch',
    client: 'Lumière Skin',
    industry: 'D2C Beauty',
    title: 'Launch campaign that generated $180K in 60 days',
    summary:
      'A new D2C skincare brand needed a premium launch presence and performance marketing to hit aggressive first-quarter revenue targets.',
    challenge:
      'Zero brand awareness, no existing customer base, and a crowded premium skincare market with established competitors.',
    solution:
      'Full brand identity, UGC-driven ad creative, influencer seeding, and a multi-channel launch funnel across Meta and Google.',
    results: [
      '$180K revenue in first 60 days',
      '3.2x ROAS on paid social campaigns',
      '12K email subscribers from launch funnel',
    ],
    metrics: [
      { label: 'ROAS', before: '—', after: '3.2x', growth: 'Launch' },
      { label: 'Revenue', before: '$0', after: '$180K', growth: '60 days' },
      { label: 'Email List', before: '0', after: '12,000', growth: '+12K' },
    ],
    services: ['Branding', 'Paid Ads', 'Creative Design', 'Funnel Building'],
    featured: true,
  },
  {
    id: '3',
    slug: 'consulting-authority-build',
    client: 'Nexus Advisory',
    industry: 'Consulting',
    title: 'Built thought leadership that drives inbound deals',
    summary:
      'A management consulting firm needed to move beyond cold outreach and establish premium authority in their niche.',
    challenge:
      'Generic positioning, weak LinkedIn presence, and a sales team dependent on outbound prospecting with low response rates.',
    solution:
      'Strategic repositioning, LinkedIn content engine, case study development, and an inbound lead magnet funnel.',
    results: [
      '65% of new deals now come from inbound',
      'LinkedIn following grew from 800 to 24,000',
      'Average deal size increased by 55%',
    ],
    metrics: [
      { label: 'Inbound Deals', before: '15%', after: '65%', growth: '+333%' },
      { label: 'LinkedIn Followers', before: '800', after: '24K', growth: '+2900%' },
      { label: 'Avg Deal Size', before: '$18K', after: '$28K', growth: '+55%' },
    ],
    services: ['Branding', 'Content Marketing', 'Lead Generation'],
    featured: true,
  },
  {
    id: '4',
    slug: 'startup-gtm-acceleration',
    client: 'FlowStack',
    industry: 'SaaS Startup',
    title: 'Go-to-market that acquired 2,000 users in 45 days',
    summary:
      'An early-stage SaaS startup needed rapid user acquisition and a premium brand presence for their seed round.',
    challenge:
      'Unpolished brand, no marketing infrastructure, and pressure to show traction before fundraising deadline.',
    solution:
      'Brand refresh, product-led landing pages, content marketing, and performance campaigns across Google and LinkedIn.',
    results: [
      '2,000 signups in 45 days',
      'Successfully raised seed round',
      'CAC reduced by 38% through optimization',
    ],
    metrics: [
      { label: 'Signups', before: '120', after: '2,000', growth: '+1567%' },
      { label: 'CAC', before: '$47', after: '$29', growth: '-38%' },
      { label: 'Website Conv.', before: '1.8%', after: '5.4%', growth: '+200%' },
    ],
    services: ['Branding', 'Website Design', 'Performance Marketing'],
  },
];
