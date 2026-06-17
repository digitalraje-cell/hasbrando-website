import { createMetadata, faqJsonLd } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import Accordion from '@/components/ui/Accordion';
import CtaSection from '@/components/sections/CtaSection';
import { FAQS } from '@/lib/data/faqs';

export const metadata = createMetadata({
  title: 'FAQ',
  description: 'Frequently asked questions about HasBrando engagements, process, and strategic partnerships.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <PageHero
        label="FAQ"
        title="Questions Worth Asking"
        description="Straightforward answers for brands considering a strategic partnership."
        image={null}
      />
      <section className="section section--light">
        <div className="container max-w-3xl">
          <Reveal><Accordion items={FAQS} /></Reveal>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
