import { createMetadata } from '@/lib/seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { PROCESS_STEPS, WHY_US } from '@/lib/data/stats';

export const metadata = createMetadata({
  title: 'About Us',
  description:
    'Learn about HasBrando — a premium creative growth agency helping founders, coaches, and brands scale internationally.',
  path: '/about',
  keywords: ['about HasBrando', 'creative agency', 'growth agency team'],
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">About HasBrando</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              We build brands that <span className="text-gradient">win</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              HasBrando is a premium creative growth agency for founders, coaches, consultants, and brands who refuse to compete on price. We combine world-class creative with performance marketing to deliver measurable growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
              To become the most trusted creative growth partner for ambitious businesses worldwide — setting the standard for what premium agency work looks like in the digital age.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
              To help every client we serve build a brand so compelling and a growth system so effective that they become the undeniable leader in their market.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--bg-elevated)]">
        <div className="container">
          <SectionHeading label="Why Choose Us" title="What sets us apart" />
          <div className="grid gap-8 md:grid-cols-2">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card">
                  <span className="font-display text-sm font-bold text-[var(--accent)]">{item.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">Founder Story</p>
            <h2 className="section-title">Built from a belief that great brands deserve great growth</h2>
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              HasBrando was founded on a simple observation: too many talented founders and businesses were invisible — not because they lacked expertise, but because they lacked the brand and growth systems to match their ambition.
            </p>
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
              We set out to build an agency that combines the creative excellence of a top design studio with the data-driven rigor of a performance marketing team. Today, we partner with clients across 32+ countries to turn that vision into revenue.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-label">Team Culture</p>
            <h2 className="section-title">Small team, outsized impact</h2>
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              We operate as a tight-knit team of strategists, designers, and growth marketers who care deeply about outcomes. No account managers reading scripts — you work directly with the people doing the work.
            </p>
            <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
              Our culture is built on craftsmanship, transparency, and an obsession with results. We take on fewer clients so we can go deeper and deliver more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--bg-elevated)]">
        <div className="container">
          <SectionHeading
            label="Approach"
            title="Results-driven, always"
            subtitle="Every engagement follows our proven four-step framework."
            align="center"
            className="mx-auto text-center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-4xl font-bold text-gradient">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
