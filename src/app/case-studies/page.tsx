import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import CaseStudyCard from '@/components/sections/CaseStudyCard';
import CtaSection from '@/components/sections/CtaSection';
import { CASE_STUDIES } from '@/lib/data/case-studies';

export const metadata = createMetadata({
  title: 'Case Studies',
  description: 'See how HasBrando has helped coaches, D2C brands, consultants, and startups achieve measurable growth.',
  path: '/case-studies',
  keywords: ['case studies', 'marketing results', 'agency portfolio', 'ROI growth'],
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Case Studies</p>
            <h1 className="page-hero__title">Work that moves markets</h1>
            <p className="page-hero__desc">
              Growth stories from brands we&apos;ve partnered with — told through transformation, not dashboards.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container space-y-12">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.05}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
