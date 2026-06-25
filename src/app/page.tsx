import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import HeroSection from '@/components/sections/HeroSection';
import IndustriesCarousel from '@/components/sections/IndustriesCarousel';
import CaseStudyCard from '@/components/sections/CaseStudyCard';
import CtaSection from '@/components/sections/CtaSection';
import Accordion from '@/components/ui/Accordion';
import { GROWTH_SOLUTIONS } from '@/lib/data/growth-solutions';
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
            label="Solutions"
            title="Authority Creates Demand"
            subtitle="Strategic capabilities for brands that refuse to blend in — positioning, creative, and acquisition as one cohesive system."
            align="center"
            className="mx-auto text-center"
          />
          <div className="services-grid">
            {GROWTH_SOLUTIONS.slice(0, 8).map((service, i) => (
              <Reveal key={service.id} delay={i * 0.03}>
                <Link href={`/solutions#${service.id}`} className="service-row">
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
            <Link href="/solutions" className="btn btn-secondary">Explore Solutions</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <SectionHeading
            label="Why Hashbrando"
            title="A consultancy, not a vendor"
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
            label="Featured Work"
            title="Premium Brands Win Attention"
            subtitle="Selected partnerships where positioning, creative and systems changed how the market responds."
            align="center"
            className="mx-auto text-center"
          />
          <div className="cases-grid">
            {featuredCases.map((study, i) => (
              <Reveal key={study.id} delay={i * 0.1}>
                <CaseStudyCard study={study} featured />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 text-center">
            <Link href="/work" className="btn btn-secondary">View All Work</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <SectionHeading
            label="Process"
            title="How we partner"
            subtitle="A deliberate framework — from discovery to sustained market presence."
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
            subtitle="Founders and brands who invested in positioning — and never looked back."
            align="center"
            className="mx-auto text-center"
          />
          <div className="testimonials-grid">
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

      <section className="section section--subtle">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              label="FAQ"
              title="Questions, answered"
              subtitle="Straightforward answers for brands considering a strategic partnership."
              align="center"
              className="mx-auto text-center"
            />
            <Reveal><Accordion items={FAQS.slice(0, 5)} /></Reveal>
            <Reveal className="mt-12 text-center">
              <Link href="/faq" className="text-sm font-medium text-[var(--text-muted)] no-underline hover:text-[var(--text)]">
                View all questions →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
