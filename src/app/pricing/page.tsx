import { createMetadata, faqJsonLd } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/sections/PageHero';
import PricingSection from '@/components/sections/PricingSection';
import Accordion from '@/components/ui/Accordion';
import CtaSection from '@/components/sections/CtaSection';
import { PRICING_FAQS } from '@/lib/data/engagement-models';

export const metadata = createMetadata({
  title: 'Pricing',
  description:
    'Strategic engagement models for ambitious founders, consultants, personal brands and premium businesses. Partnerships from $1,500/month.',
  path: '/pricing',
  keywords: [
    'branding consultancy pricing',
    'brand strategy retainer',
    'premium marketing partnership',
    'growth partner agency',
  ],
});

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...PRICING_FAQS])) }}
      />

      <PageHero
        label="Engagement Models"
        title={
          <>
            Strategic Partnerships
            <br />
            Built for Growth
          </>
        }
        description="Flexible engagement models for ambitious founders, consultants, personal brands and premium businesses."
      />

      <PricingSection />

      <section className="section section--light">
        <div className="container max-w-3xl">
          <SectionHeading
            label="Questions"
            title="Before you commit"
            subtitle="Straightforward answers for brands evaluating a strategic partnership."
            align="center"
            className="mb-16 lg:mb-20"
          />
          <Reveal>
            <Accordion items={[...PRICING_FAQS]} />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
