import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { SOLUTIONS } from '@/lib/data/solutions';

export const metadata = createMetadata({
  title: 'Solutions',
  description:
    'Tailored growth solutions for coaches, consultants, startups, D2C brands, personal brands, and local businesses.',
  path: '/solutions',
  keywords: ['coaching marketing', 'startup growth', 'D2C marketing agency', 'personal branding'],
});

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Solutions</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Growth tailored to <span className="text-gradient">your business</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              Every business is different. We build custom growth strategies for your industry, audience, and goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-20">
          {SOLUTIONS.map((solution) => (
            <Reveal key={solution.id}>
              <article id={solution.id} className="scroll-mt-28">
                <div className="card card-glow">
                  <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                      <h2 className="font-display text-3xl font-bold">{solution.title}</h2>
                      <p className="mt-2 text-lg text-[var(--accent)]">{solution.subtitle}</p>
                      <p className="mt-4 text-[var(--text-muted)] leading-relaxed">{solution.description}</p>
                      <Link href="/contact" className="btn btn-primary mt-8">
                        Discuss Your Goals →
                      </Link>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Common Challenges</h3>
                        <ul className="mt-3 space-y-2">
                          {solution.challenges.map((c) => (
                            <li key={c} className="text-sm text-[var(--text-muted)]">• {c}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Our Approach</h3>
                        <ul className="mt-3 space-y-2">
                          {solution.approach.map((a) => (
                            <li key={a} className="flex gap-2 text-sm text-[var(--text-muted)]">
                              <span className="text-[var(--accent)]">→</span> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Expected Outcomes</h3>
                        <ul className="mt-3 space-y-2">
                          {solution.outcomes.map((o) => (
                            <li key={o} className="flex gap-2 text-sm text-[var(--text-muted)]">
                              <span className="text-[var(--accent-gold)]">★</span> {o}
                            </li>
                          ))}
                        </ul>
                      </div>
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
