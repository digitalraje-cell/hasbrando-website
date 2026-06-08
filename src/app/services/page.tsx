import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { SERVICES } from '@/lib/data/services';

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Premium branding, performance marketing, social media, paid ads, funnel building, and more — full-stack growth services from HasBrando.',
  path: '/services',
  keywords: ['branding services', 'performance marketing', 'paid ads agency', 'funnel building'],
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Services</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Full-stack growth, <span className="text-gradient">one partner</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              From brand identity to performance campaigns — everything you need to build, launch, and scale a premium business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-24">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id}>
              <article id={service.id} className="scroll-mt-28">
                <div className="grid gap-12 lg:grid-cols-2">
                  <div>
                    <span className="text-3xl text-[var(--accent)]">{service.icon}</span>
                    <h2 className="mt-4 font-display text-3xl font-bold">{service.title}</h2>
                    <p className="mt-2 text-lg text-[var(--accent)]">{service.tagline}</p>
                    <p className="mt-4 text-[var(--text-muted)] leading-relaxed">{service.description}</p>
                    <Link href="/contact" className="btn btn-primary mt-8">
                      Get Started →
                    </Link>
                  </div>
                  <div className="space-y-8">
                    <div className="card">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Benefits</h3>
                      <ul className="mt-4 space-y-3">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex gap-3 text-sm text-[var(--text-muted)]">
                            <span className="text-[var(--accent)]">✓</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="card">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Process</h3>
                        <ol className="mt-4 space-y-2">
                          {service.process.map((p, j) => (
                            <li key={p} className="text-sm text-[var(--text-muted)]">
                              <span className="text-[var(--accent)]">{String(j + 1).padStart(2, '0')}</span> {p}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="card">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Deliverables</h3>
                        <ul className="mt-4 space-y-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="text-sm text-[var(--text-muted)]">• {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {i < SERVICES.length - 1 && <hr className="mt-24 border-[var(--border)]" />}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
