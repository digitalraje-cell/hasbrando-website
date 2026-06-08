import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaSection from '@/components/sections/CtaSection';
import WorkCaseStudy from '@/components/sections/WorkCaseStudy';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import { CASE_STUDIES } from '@/lib/data/case-studies';

export const metadata = createMetadata({
  title: 'Work',
  description:
    'Brand transformations from HasBrando — challenge, strategy, execution and outcome for premium founders and consultants.',
  path: '/work',
  keywords: ['branding case studies', 'brand transformation', 'premium agency work'],
});

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Work</p>
            <h1 className="page-hero__title">Work That Builds Brands</h1>
            <p className="page-hero__desc">
              Transformations in positioning, creative and market perception — told with clarity, not hype.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light" id="case-studies">
        <div className="container">
          <SectionHeading
            label="Case Studies"
            title="Brand transformations"
            subtitle="Challenge, strategy, execution and outcome — the narrative behind each partnership."
            align="center"
            className="mx-auto text-center"
          />
        </div>

        <div className="container space-y-28 lg:space-y-36">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.05}>
              <WorkCaseStudy study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--subtle" id="portfolio">
        <div className="container">
          <SectionHeading
            label="Visual Craft"
            title="Creative across every touchpoint"
            subtitle="Identity, campaigns, content and digital — the craft behind the strategy."
            align="center"
            className="mx-auto text-center"
          />
        </div>

        <div className="container">
          <PortfolioGrid />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
