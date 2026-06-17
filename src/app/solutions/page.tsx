import Image from 'next/image';
import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/sections/PageHero';
import CtaSection from '@/components/sections/CtaSection';
import { BUSINESS_SEGMENTS } from '@/lib/data/business-segments';
import { GROWTH_SOLUTIONS } from '@/lib/data/growth-solutions';

export const metadata = createMetadata({
  title: 'Solutions',
  description:
    'Growth, branding, authority and customer acquisition solutions for founders, coaches, consultants, startups, D2C brands, and premium businesses.',
  path: '/solutions',
  keywords: ['branding solutions', 'growth agency', 'customer acquisition', 'brand authority'],
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Solutions Built for Authority & Growth"
        description="Branding, authority, and acquisition systems for brands building lasting trust and market position."
      />

      <section className="section section--subtle" id="by-business">
        <div className="container">
          <SectionHeading
            label="By Business Type"
            title="Built for leaders who refuse to compete on price"
            subtitle="Every engagement starts with your market, your audience, and the outcomes that matter most to your business."
          />
        </div>

        <div className="segment-grid">
          {BUSINESS_SEGMENTS.map((segment, i) => (
            <Reveal key={segment.id} delay={i * 0.04}>
              <article className="segment-card" id={segment.id}>
                <div className="segment-card__visual">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="segment-card__img"
                  />
                  <div className="segment-card__overlay" />
                </div>
                <div className="segment-card__body">
                  <p className="segment-card__tagline">{segment.tagline}</p>
                  <h3 className="segment-card__title">{segment.title}</h3>

                  <div className="segment-card__sections">
                    <div>
                      <p className="segment-card__label">Biggest Challenge</p>
                      <p className="segment-card__text">{segment.challenge}</p>
                    </div>
                    <div>
                      <p className="segment-card__label">Our Approach</p>
                      <p className="segment-card__text">{segment.help}</p>
                    </div>
                    <div>
                      <p className="segment-card__label">Outcomes</p>
                      <ul className="segment-card__outcomes">
                        {segment.outcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact" className="segment-card__cta">
                    Discuss Your Goals →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--light" id="growth-solutions">
        <div className="container">
          <SectionHeading
            label="Growth Solutions"
            title="Strategic capabilities, outcome-driven"
            subtitle="We don't sell services — we solve positioning and demand problems. Every capability is framed around what it delivers for your market."
            align="center"
            className="mx-auto text-center"
          />

          <div className="services-grid">
            {GROWTH_SOLUTIONS.map((solution, i) => (
              <Reveal key={solution.id} delay={i * 0.03}>
                <article id={solution.id} className="service-row">
                  <span className="service-row__index">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="service-row__outcome">{solution.outcome}</h3>
                  <div className="service-row__meta">
                    <p className="service-row__title">{solution.title}</p>
                    <p>{solution.description}</p>
                    <div className="growth-solution__focus">
                      {solution.focus.map((f) => (
                        <span key={f} className="growth-solution__tag">{f}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="service-row__arrow" aria-label={`Discuss ${solution.outcome}`}>
                    →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <Link href="/book-strategy" className="btn btn-primary">Book Strategy Call</Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
