import { createMetadata } from '@/lib/seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { PROCESS_STEPS, WHY_US } from '@/lib/data/stats';

export const metadata = createMetadata({
  title: 'About Us',
  description: 'Learn about HasBrando — a premium branding consultancy for ambitious founders and brands building market authority.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">About</p>
            <h1 className="page-hero__title">We build brands that lead</h1>
            <p className="page-hero__desc">
              HasBrando is a premium branding consultancy for founders and brands who refuse to compete on price.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container grid gap-20 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">Vision</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Set the standard for premium agency work
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-muted)]">
              To set the international standard for premium branding consultancy — where creative excellence and strategic rigor are never compromised.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-label">Mission</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Make every client the leader in their market
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-muted)]">
              To make every brand we serve the undeniable choice in their category — through positioning, creative, and acquisition systems worthy of their ambition.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <SectionHeading label="Philosophy" title="What defines our work" />
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="why-item">
                  <p className="why-item__num">{item.icon}</p>
                  <h3 className="why-item__title">{item.title}</h3>
                  <p className="why-item__desc">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container grid gap-20 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">Origin</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Great brands deserve great positioning
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-muted)]">
              HasBrando was founded on a conviction: too many exceptional brands remain invisible — not from lack of expertise, but from lack of positioning and creative systems worthy of their ambition.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--text-muted)]">
              We built a consultancy that combines the creative excellence of a world-class studio with the strategic depth of a premium advisory firm. Today, we partner with brands across 32 countries.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-label">Culture</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Small team. Outsized impact.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-muted)]">
              You work directly with the strategists and creatives doing the work — not account managers reading scripts.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--text-muted)]">
              We take on fewer clients so we can go deeper. Craftsmanship, transparency, and outcomes define everything we do.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <SectionHeading label="Approach" title="How we deliver results" align="center" className="mx-auto text-center" />
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div>
                  <p className="process-step__num">{step.step}</p>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.description}</p>
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
