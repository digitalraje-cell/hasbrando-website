export type BillingPeriod = 'monthly' | 'yearly';

export type PricingTier = {
  id: string;
  name: string;
  description: string;
  audience: string;
  monthlyPrice: number;
  yearlyMonthlyPrice?: number;
  yearlyCustom?: boolean;
  deliverablesLabel: string;
  deliverables: string[];
  targetsLabel: string;
  targets: string[];
  idealFor: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  availabilityLabel?: string;
  exclusivityNote?: string;
};

export const YEARLY_DISCOUNT_PERCENT = 15;

export const CORE_PRICING_TIERS: PricingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    description: 'Strategic positioning and authority systems for leaders building market presence.',
    audience: 'Founders, coaches & consultants',
    monthlyPrice: 1500,
    yearlyMonthlyPrice: 1275,
    deliverablesLabel: 'What You Get',
    deliverables: [
      'Brand positioning strategy',
      'Personal brand direction',
      'Content strategy roadmap',
      'Monthly creative direction',
      'Organic growth strategy',
      'Authority-building framework',
      'Messaging refinement',
      '2 monthly strategy calls',
      'Monthly growth review',
      'Premium consulting support',
    ],
    targetsLabel: '90-Day Targets',
    targets: [
      '500K–1M+ visibility target (90d)',
      '1–5 qualified inquiries target/month',
      'Stronger authority positioning',
      'Clearer personal brand presence',
      'Higher content reach potential',
    ],
    idealFor: 'Founders, consultants, coaches',
    cta: 'Book Discovery Call',
    ctaHref: '/book-strategy',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    description: 'Integrated brand, marketing and conversion systems for brands ready to scale.',
    audience: 'Growing brands',
    monthlyPrice: 3500,
    yearlyMonthlyPrice: 2975,
    deliverablesLabel: 'What You Get',
    deliverables: [
      'Full brand positioning system',
      'Paid ads strategy',
      'Performance marketing execution',
      'Funnel optimization',
      'Lead generation systems',
      'Creative campaign direction',
      'Social media growth framework',
      'Content systems',
      'Weekly growth calls',
      'Strategic reporting',
      'Conversion optimization',
      'Priority consulting support',
    ],
    targetsLabel: '90-Day Targets',
    targets: [
      '1M–3M+ visibility target (90d)',
      '3–10 qualified appointments target/month',
      'Stronger inbound lead flow',
      'Improved authority positioning',
      'Higher content reach potential',
    ],
    idealFor: 'Growing brands pursuing measurable scale',
    cta: 'Book Strategy Call',
    ctaHref: '/book-strategy',
    featured: true,
    badge: 'Most Popular',
  },
];

export const VIP_PRICING_TIER: PricingTier = {
  id: 'category-leader',
  name: 'Category Leader',
  description: 'Private growth partnership for premium brands pursuing category leadership.',
  audience: 'Premium brands scaling aggressively',
  monthlyPrice: 7500,
  yearlyCustom: true,
  deliverablesLabel: 'Private Growth Partnership',
  deliverables: [
    'Full-stack brand authority system',
    'Dedicated strategic advisory',
    'Performance scaling systems',
    'Creative production support',
    'Video content systems',
    'Premium paid growth strategy',
    'Funnel architecture',
    'Marketing automation',
    'Priority execution support',
    'Founder positioning strategy',
    'Team collaboration',
    'Fast-track consulting access',
  ],
  targetsLabel: '90-Day Targets',
  targets: [
    '3M–10M+ visibility target (90d)',
    '10–25 qualified appointments target/month',
    'Category-level authority positioning',
    'Scaled inbound lead pipeline',
    'Premium market perception',
  ],
  idealFor: 'Select premium brands with aggressive growth ambitions',
  cta: 'Apply To Work Together',
  ctaHref: '/contact',
  availabilityLabel: 'Limited Availability',
  exclusivityNote: 'Only available for select premium brands.',
};

export function formatTierPrice(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}

export const PRICING_FAQS = [
  {
    question: 'What is included?',
    answer:
      'Each engagement covers a defined scope of strategic brand work, creative execution, and growth systems — aligned to your tier. We begin with discovery to map deliverables to your outcomes, then operate on a clear retainer with milestones, reporting, and direct access to our strategists.',
  },
  {
    question: 'Do you work internationally?',
    answer:
      'Yes. Hashbrando partners with founders and brands across North America, Europe, the Middle East, Asia, and Australia. Our team operates across time zones, and all pricing is quoted in USD for international clarity.',
  },
  {
    question: 'Is there a minimum engagement period?',
    answer:
      'We recommend a three-month minimum to allow positioning, creative, and acquisition systems to take effect. Most clients continue well beyond that as the partnership deepens and results compound.',
  },
  {
    question: 'Can plans be customized?',
    answer:
      'Yes. While our engagement models provide a clear starting point, every partnership is tailored during discovery. Category Leader and bespoke engagements are fully scoped to your market, team, and growth objectives.',
  },
  {
    question: 'Do you work with personal brands?',
    answer:
      'Absolutely. Many of our clients are founders, coaches, consultants, and executives building authority in their category. We treat your reputation as a strategic asset — not a social media afterthought.',
  },
  {
    question: 'Is this done-for-you or consulting?',
    answer:
      'Both, depending on tier. Foundation leans strategic consulting with creative direction. Growth Partner adds hands-on execution across marketing, creative, and funnels. Category Leader is a full-stack partnership with dedicated production and priority execution.',
  },
] as const;
