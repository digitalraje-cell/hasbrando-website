import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Portfolio',
  description:
    'Explore HasBrando portfolio — branding, social media creatives, video editing, marketing campaigns, and website design.',
  path: '/portfolio',
  keywords: ['portfolio', 'branding work', 'creative agency portfolio'],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
