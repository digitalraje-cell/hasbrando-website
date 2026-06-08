import { createMetadata, faqJsonLd } from '@/lib/seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Accordion from '@/components/ui/Accordion';
import CtaSection from '@/components/sections/CtaSection';
import { FAQS } from '@/lib/data/faqs';

export const metadata = createMetadata({
  title: 'FAQ',
  description: 'Frequently asked questions about HasBrando services, process, and engagement.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">FAQ</p>
            <h1 className="page-hero__title">Questions, answered</h1>
          </Reveal>
        </div>
      </section>
      <section className="section section--light">
        <div className="container max-w-3xl">
          <SectionHeading title="Everything you need to know" subtitle="Can't find what you're looking for? We're happy to help." align="center" className="mx-auto text-center" />
          <Reveal><Accordion items={FAQS} /></Reveal>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
