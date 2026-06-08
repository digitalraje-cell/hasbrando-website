import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import HeroAnimation from '@/components/sections/HeroAnimation';
import CtaSection from '@/components/sections/CtaSection';
import Accordion from '@/components/ui/Accordion';
import { SERVICES } from '@/lib/data/services';
import { CASE_STUDIES } from '@/lib/data/case-studies';
import { FAQS } from '@/lib/data/faqs';
import {
  HERO_STATS,
  TRUST_LOGOS,
  WHY_US,
  PROCESS_STEPS,
  INDUSTRIES,
  TESTIMONIALS,
} from '@/lib/data/stats';

export default function HomePage() {
  const featuredCases = CASE_STUDIES.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden pt-[var(--header-h)]">
        <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden />
        <div className="hero-glow -top-32 right-0" aria-hidden />

        <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-32">
          <div>
            <Reveal>
              <p className="section-label">Premium Creative Growth Agency</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
                Brand Smarter.
                <br />
                <span className="text-gradient">Grow Faster.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--text-muted)]">
                Branding, Performance Marketing & Creative Growth for Ambitious Businesses.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/book-strategy" className="btn btn-primary btn-lg">
                  Book Strategy Call
                </Link>
                <Link href="/case-studies" className="btn btn-secondary btn-lg">
                  View Case Studies
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="stat-value">{stat.value}</p>
                    <p className="mt-1 text-sm text-[var(--text-subtle)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <HeroAnimation />
          </Reveal>
        </div>

        {/* Trust bar */}
        <div className="border-t border-[var(--border)] py-8">
          <div className="container">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--text-subtle)]">
              Trusted by ambitious brands worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {TRUST_LOGOS.map((logo) => (
                <span key={logo} className="text-sm font-semibold tracking-wide text-[var(--text-subtle)] opacity-60">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[var(--bg-elevated)]">
        <div className="container">
          <SectionHeading
            label="Services"
            title="Everything you need to grow"
            subtitle="Full-stack creative and growth services designed for premium brands that refuse to settle."
            align="center"
            className="mx-auto text-center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.id} delay={i * 0.05}>
                <Link href={`/services#${service.id}`} className="card card-glow block no-underline text-inherit">
                  <span className="text-2xl text-[var(--accent)]">{service.icon}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{service.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/services" className="btn btn-secondary">
              View All Services →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why HasBrando */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Why HasBrando"
            title="Built for brands that demand more"
            subtitle="We combine premium creative with performance marketing rigor — so every dollar works harder."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card">
                  <span className="font-display text-sm font-bold text-[var(--accent)]">{item.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--bg-elevated)]">
        <div className="container">
          <SectionHeading
            label="Results"
            title="Growth stories that speak"
            subtitle="Real outcomes for real businesses — measured in revenue, leads, and brand impact."
            align="center"
            className="mx-auto text-center"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredCases.map((study, i) => (
              <Reveal key={study.id} delay={i * 0.1}>
                <Link href="/case-studies" className="card card-glow block no-underline text-inherit">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {study.industry}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{study.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{study.summary}</p>
                  <div className="mt-6 flex gap-6">
                    {study.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="stat-value text-2xl">{m.growth}</p>
                        <p className="text-xs text-[var(--text-subtle)]">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/case-studies" className="btn btn-secondary">
              All Case Studies →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Industries"
            title="We serve ambitious businesses across sectors"
            align="center"
            className="mx-auto text-center"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry} delay={i * 0.03}>
                <span className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--text-muted)]">
                  {industry}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--bg-elevated)]">
        <div className="container">
          <SectionHeading
            label="Process"
            title="How we work"
            subtitle="A proven four-step framework that turns strategy into measurable growth."
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

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Testimonials"
            title="What our clients say"
            align="center"
            className="mx-auto text-center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.1}>
                <blockquote className="card">
                  <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-6">
                    <p className="font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-[var(--text-subtle)]">{t.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--bg-elevated)]">
        <div className="container max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Common questions"
            align="center"
            className="mx-auto text-center"
          />
          <Reveal>
            <Accordion items={FAQS.slice(0, 5)} />
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link href="/faq" className="text-sm text-[var(--accent)] no-underline hover:underline">
              View all FAQs →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
