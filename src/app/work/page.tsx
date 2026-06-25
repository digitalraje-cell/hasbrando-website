import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/sections/PageHero';
import CtaSection from '@/components/sections/CtaSection';
import WorkCaseStudy from '@/components/sections/WorkCaseStudy';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import { CASE_STUDIES } from '@/lib/data/case-studies';

export const metadata = createMetadata({
  title: 'Work',
  description:
    'Brand transformations from Hashbrando — challenge, strategy, execution and outcome for premium founders and consultants.',
  path: '/work',
  keywords: ['branding case studies', 'brand transformation', 'premium agency work'],
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Work That Builds Brands"
        description="Transformations in positioning, creative and market perception — told with clarity, not hype."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=1800&q=90&auto=format&fit=crop"
      />

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
