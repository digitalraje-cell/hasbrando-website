import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { SOLUTIONS } from '@/lib/data/solutions';

export const metadata = createMetadata({
  title: 'Solutions',
  description: 'Tailored branding and growth solutions for coaches, consultants, startups, D2C brands, and personal brands.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Solutions</p>
            <h1 className="page-hero__title">Built for your business</h1>
            <p className="page-hero__desc">
              Every engagement is tailored to your industry, audience, and ambitions — not adapted from a template.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container space-y-0">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.id}>
              <article id={solution.id} className="scroll-mt-28 border-b border-[var(--border)] py-20 first:pt-0 last:border-b-0">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                  <div>
                    <p className="section-label">{String(i + 1).padStart(2, '0')}</p>
                    <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight tracking-tight">{solution.title}</h2>
                    <p className="mt-3 text-lg text-[var(--text-muted)]">{solution.subtitle}</p>
                    <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-muted)]">{solution.description}</p>
                    <Link href="/contact" className="btn btn-primary mt-10">Discuss Your Goals</Link>
                  </div>
                  <div className="space-y-10">
                    <div>
                      <p className="service-detail__panel-title">Common Challenges</p>
                      <ul className="service-detail__list mt-4">
                        {solution.challenges.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="service-detail__panel-title">Our Approach</p>
                      <ul className="service-detail__list mt-4">
                        {solution.approach.map((a) => <li key={a}>{a}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="service-detail__panel-title">Expected Outcomes</p>
                      <ul className="service-detail__list mt-4">
                        {solution.outcomes.map((o) => <li key={o}>{o}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
