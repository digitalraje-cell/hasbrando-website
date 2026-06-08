export type BusinessSegment = {
  id: string;
  title: string;
  tagline: string;
  challenge: string;
  help: string;
  outcomes: string[];
  image: string;
};

export const BUSINESS_SEGMENTS: BusinessSegment[] = [
  {
    id: 'founders-ceos',
    title: 'Founders & CEOs',
    tagline: 'Lead markets, not follow them',
    challenge: 'Strong product, weak market perception — investors and customers don\'t yet see you as the category leader.',
    help: 'We build premium brand positioning, executive visibility, and growth systems that signal authority at every touchpoint.',
    outcomes: ['Investor-ready brand presence', 'Category leadership perception', 'Inbound partnership opportunities', 'Scalable acquisition infrastructure'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&h=1100&q=85&auto=format&fit=crop&crop=faces',
  },
  {
    id: 'coaches',
    title: 'Coaches',
    tagline: 'Fill your calendar with ideal clients',
    challenge: 'Expertise without visibility — inconsistent leads and difficulty commanding premium fees in a saturated market.',
    help: 'Personal brand systems, authority content, and conversion funnels that turn your expertise into a steady pipeline of discovery calls.',
    outcomes: ['3–5x increase in qualified leads', 'Premium pricing with no conversion drop', 'Fully booked calendar', 'Automated nurture sequences'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=1100&q=85&auto=format&fit=crop&crop=faces',
  },
  {
    id: 'consultants',
    title: 'Consultants',
    tagline: 'Become the obvious choice',
    challenge: 'Commoditized positioning and over-reliance on referrals — long sales cycles with no inbound engine.',
    help: 'Thought leadership positioning, LinkedIn authority systems, and inbound funnels that attract ideal clients to you.',
    outcomes: ['65%+ deals from inbound', 'Shorter sales cycles', 'Premium fee positioning', 'Recognized niche authority'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=1100&q=85&auto=format&fit=crop&crop=faces',
  },
  {
    id: 'startups',
    title: 'Startups',
    tagline: 'Launch with momentum',
    challenge: 'No brand recognition, unclear messaging, and pressure to show traction before the next funding milestone.',
    help: 'Brand foundation, go-to-market strategy, and performance campaigns that acquire users and impress investors fast.',
    outcomes: ['Strong market entry positioning', 'Efficient early customer acquisition', 'Investor-ready presence', 'Scalable growth foundation'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=1100&q=85&auto=format&fit=crop',
  },
  {
    id: 'd2c-brands',
    title: 'D2C Brands',
    tagline: 'Scale profitably',
    challenge: 'Rising acquisition costs, creative fatigue, and inconsistent brand experience across every customer touchpoint.',
    help: 'Full-funnel creative, performance marketing, and retention systems built to grow revenue without eroding margins.',
    outcomes: ['Improved ROAS and lower CAC', 'Higher AOV and repeat rate', 'Scalable creative pipeline', 'Loyal brand community'],
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&h=1100&q=85&auto=format&fit=crop',
  },
  {
    id: 'personal-brands',
    title: 'Personal Brands',
    tagline: 'Influence that converts',
    challenge: 'Audience without monetization — followers who don\'t buy and no clear premium positioning.',
    help: 'Complete personal brand ecosystems: positioning, content systems, offer architecture, and amplification.',
    outcomes: ['Recognized niche authority', 'Multiple revenue streams', 'Engaged loyal community', 'Inbound opportunities'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=1100&q=85&auto=format&fit=crop&crop=faces',
  },
  {
    id: 'doctors-clinics',
    title: 'Doctors & Clinics',
    tagline: 'Trusted practice growth',
    challenge: 'Clinical excellence hidden behind weak digital presence — patients choosing competitors with stronger brands.',
    help: 'Premium practice positioning, reputation systems, and patient acquisition funnels that build trust before the first visit.',
    outcomes: ['Premium practice perception', 'Steady new patient flow', 'Strong online reputation', 'Higher-value service uptake'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&h=1100&q=85&auto=format&fit=crop&crop=faces',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    tagline: 'Win high-value clients',
    challenge: 'Commodity agent positioning in a market where trust and personal brand determine who gets the listing.',
    help: 'Authority branding, premium listing marketing, and lead systems that position you as the agent clients seek out.',
    outcomes: ['Premium listing wins', 'Consistent qualified inquiries', 'Strong referral network', 'Market authority status'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=1100&q=85&auto=format&fit=crop',
  },
  {
    id: 'education-brands',
    title: 'Education Brands',
    tagline: 'Knowledge commerce at scale',
    challenge: 'Great curriculum, weak brand — students enroll with competitors who look more credible and premium online.',
    help: 'Education brand positioning, enrollment funnels, and content systems that build trust and drive consistent sign-ups.',
    outcomes: ['Premium course positioning', 'Higher enrollment conversion', 'Strong student community', 'Scalable launch systems'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=1100&q=85&auto=format&fit=crop',
  },
  {
    id: 'premium-local',
    title: 'Premium Local Businesses',
    tagline: 'Lead your local market',
    challenge: 'Invisible online next to competitors — wasted ad spend and no system for capturing local demand.',
    help: 'Local authority branding, geo-targeted acquisition, and reputation systems that make you the obvious local choice.',
    outcomes: ['Top local search visibility', 'Steady local inquiries', 'Higher review ratings', 'Measurable marketing ROI'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=1100&q=85&auto=format&fit=crop&crop=faces',
  },
];
