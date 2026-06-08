import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { SERVICES } from '@/lib/data/services';
import { HOME_SERVICES } from '@/lib/data/home-services';

export const metadata = createMetadata({
  title: 'Services',
  description: 'Premium branding, performance marketing, social media, paid ads, funnel building, and more from HasBrando.',
  path: '/services',
  keywords: ['branding services', 'performance marketing', 'paid ads agency', 'funnel building'],
});

const outcomeMap = Object.fromEntries(HOME_SERVICES.map((s) => [s.id, s.outcome]));

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Services</p>
            <h1 className="page-hero__title">Capabilities built for market leaders</h1>
            <p className="page-hero__desc">
              From brand identity to performance systems — everything required to build, launch, and scale a premium business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id}>
              <article id={service.id} className="service-detail scroll-mt-28">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                  <div>
                    <p className="service-detail__num">{String(i + 1).padStart(2, '0')}</p>
                    <h2 className="service-detail__outcome">
                      {outcomeMap[service.id] ?? service.tagline}
                    </h2>
                    <p className="service-detail__category">{service.title}</p>
                    <p className="service-detail__desc">{service.description}</p>
                    <Link href="/contact" className="btn btn-primary mt-10">Start a Conversation</Link>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="service-detail__panel">
                      <p className="service-detail__panel-title">What You Gain</p>
                      <ul className="service-detail__list">
                        {service.benefits.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                      <div className="service-detail__panel">
                        <p className="service-detail__panel-title">Process</p>
                        <ul className="service-detail__list">
                          {service.process.map((p, j) => (
                            <li key={p}>{String(j + 1).padStart(2, '0')} — {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-detail__panel">
                        <p className="service-detail__panel-title">Deliverables</p>
                        <ul className="service-detail__list">
                          {service.deliverables.map((d) => <li key={d}>{d}</li>)}
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
