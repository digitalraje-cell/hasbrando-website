export type GrowthSolution = {
  id: string;
  outcome: string;
  title: string;
  description: string;
  focus: string[];
};

export const GROWTH_SOLUTIONS: GrowthSolution[] = [
  {
    id: 'branding',
    outcome: 'Build a Brand People Remember',
    title: 'Branding',
    description: 'Strategic identity systems that position you as the premium choice — visual, verbal, and experiential.',
    focus: ['Positioning & messaging', 'Visual identity systems', 'Brand guidelines', 'Market differentiation'],
  },
  {
    id: 'performance-marketing',
    outcome: 'Growth Measured in Revenue',
    title: 'Performance Marketing',
    description: 'Acquisition systems engineered for revenue at every stage — from first impression to conversion.',
    focus: ['Channel strategy', 'Attribution clarity', 'Conversion architecture', 'Scale playbooks'],
  },
  {
    id: 'social-media-marketing',
    outcome: 'Build Attention That Converts',
    title: 'Social Media Marketing',
    description: 'Platform-native content that builds authority, engagement, and commercial demand.',
    focus: ['Content strategy', 'Community growth', 'Platform creative', 'Social-to-sales systems'],
  },
  {
    id: 'video-editing',
    outcome: 'Cinematic Content That Sells',
    title: 'Video Editing',
    description: 'Premium film and motion for ads, social, and brand storytelling that commands attention.',
    focus: ['Short-form ads', 'Brand films', 'Motion graphics', 'Platform-native formats'],
  },
  {
    id: 'content-creation',
    outcome: 'Authority Through Content',
    title: 'Content Creation',
    description: 'Editorial-grade content that positions you as the definitive voice in your space.',
    focus: ['Thought leadership', 'SEO content', 'Newsletter systems', 'Content repurposing'],
  },
  {
    id: 'personal-branding',
    outcome: 'Your Reputation, Amplified',
    title: 'Personal Branding',
    description: 'Complete personal brand ecosystems for founders, coaches, and industry experts.',
    focus: ['Executive positioning', 'Profile optimization', 'Authority content', 'Visibility campaigns'],
  },
  {
    id: 'paid-ads',
    outcome: 'Performance Campaign Systems',
    title: 'Paid Ads',
    description: 'High-converting paid media across Meta, Google, and LinkedIn — built on creative excellence.',
    focus: ['Creative testing', 'Audience targeting', 'Retargeting flows', 'ROAS optimization'],
  },
  {
    id: 'creative-design',
    outcome: 'Creative That Commands Attention',
    title: 'Creative Design',
    description: 'Premium visual assets for campaigns, social, and brand touchpoints that stop the scroll.',
    focus: ['Ad creatives', 'Campaign visuals', 'Social graphics', 'Presentation design'],
  },
  {
    id: 'lead-generation',
    outcome: 'Predictable Customer Acquisition',
    title: 'Lead Generation',
    description: 'Systematic pipelines that fill your calendar with qualified, ready-to-buy prospects.',
    focus: ['ICP targeting', 'Lead magnets', 'Outreach systems', 'Pipeline automation'],
  },
  {
    id: 'website-design',
    outcome: 'Digital Presence That Converts',
    title: 'Website Design',
    description: 'Conversion-focused websites that position your brand as premium and drive action.',
    focus: ['UX & conversion design', 'Mobile-first builds', 'SEO foundations', 'Analytics integration'],
  },
  {
    id: 'funnel-building',
    outcome: 'Systems That Sell While You Sleep',
    title: 'Funnel Building',
    description: 'End-to-end sales architectures from first touch to close — automated and optimized.',
    focus: ['Landing pages', 'Email sequences', 'Checkout flows', 'Funnel analytics'],
  },
  {
    id: 'marketing-automation',
    outcome: 'Scale Without Adding Headcount',
    title: 'Marketing Automation',
    description: 'Intelligent systems that nurture demand, recover opportunity, and compound market momentum.',
    focus: ['CRM integration', 'Nurture sequences', 'Trigger-based flows', 'Lifecycle automation'],
  },
];
