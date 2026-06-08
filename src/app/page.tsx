import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import HeroSection from '@/components/sections/HeroSection';
import IndustriesCarousel from '@/components/sections/IndustriesCarousel';
import CaseStudyCard from '@/components/sections/CaseStudyCard';
import CtaSection from '@/components/sections/CtaSection';
import Accordion from '@/components/ui/Accordion';
import { HOME_SERVICES } from '@/lib/data/home-services';
import { CASE_STUDIES } from '@/lib/data/case-studies';
import { FAQS } from '@/lib/data/faqs';
import { WHY_US, PROCESS_STEPS, TESTIMONIALS } from '@/lib/data/stats';

export default function HomePage() {
  const featuredCases = CASE_STUDIES.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label="Capabilities"
            title="What we build for ambitious brands"
            subtitle="Every engagement is outcome-driven — designed to elevate your market position and accelerate growth."
            align="center"
            className="mx-auto text-center"
          />
          <div className="services-grid">
            {HOME_SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.03}>
                <Link href={`/services#${service.id}`} className="service-row">
                  <span className="service-row__index">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="service-row__outcome">{service.outcome}</h3>
                  <div className="service-row__meta">
                    <p className="service-row__title">{service.title}</p>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-row__arrow" aria-hidden>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 text-center">
            <Link href="/services" className="btn btn-secondary">Explore All Services</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label="Why HasBrando"
            title="Your growth partner, not another vendor"
            subtitle="We take on fewer clients to deliver the strategic depth and creative excellence your brand deserves."
          />
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

      <IndustriesCarousel />

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label="Selected Work"
            title="Transformations we're proud of"
            subtitle="Real outcomes from real partnerships — measured in revenue, authority, and market position."
            align="center"
            className="mx-auto text-center"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredCases.map((study, i) => (
              <Reveal key={study.id} delay={i * 0.1}>
                <CaseStudyCard study={study} featured />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 text-center">
            <Link href="/case-studies" className="btn btn-secondary">View All Case Studies</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <SectionHeading
            label="Process"
            title="How we partner with you"
            subtitle="A deliberate framework that transforms brand strategy into measurable market growth."
            align="center"
            className="mx-auto text-center"
          />
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

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label="Client Stories"
            title="Leaders who chose excellence"
            align="center"
            className="mx-auto text-center"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.1}>
                <blockquote className="testimonial-card">
                  <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="testimonial-card__author">
                    <Image src={t.image} alt={t.author} width={56} height={56} className="testimonial-card__avatar" />
                    <div>
                      <p className="testimonial-card__name">{t.author}</p>
                      <p className="testimonial-card__role">{t.role}</p>
                      <p className="testimonial-card__company">{t.company}</p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container max-w-3xl">
          <SectionHeading label="FAQ" title="Questions, answered" align="center" className="mx-auto text-center" />
          <Reveal><Accordion items={FAQS.slice(0, 5)} /></Reveal>
          <Reveal className="mt-12 text-center">
            <Link href="/faq" className="text-sm font-medium text-[var(--text-muted)] no-underline hover:text-[var(--text)]">
              View all questions →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
