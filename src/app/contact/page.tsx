import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/site-config';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with HasBrando. Tell us about your business and growth goals.',
  path: '/contact',
  keywords: ['contact HasBrando', 'marketing agency contact', 'book consultation'],
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Contact</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Let&apos;s talk <span className="text-gradient">growth</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold">Start your growth journey</h2>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                Tell us about your business, goals, and biggest marketing challenges. Our strategists will review your inquiry and respond within 24 hours with tailored recommendations.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Free strategy recommendations',
                  'No obligation, no hard sell',
                  'Response within 24 hours',
                  'Direct access to senior strategists',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--text-muted)]">
                    <span className="text-[var(--accent)]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-[var(--border)] p-6">
                <p className="text-sm text-[var(--text-subtle)]">Prefer email?</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 text-lg font-medium text-white no-underline hover:text-[var(--accent)]"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
