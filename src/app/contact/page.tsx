import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/site-config';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with HasBrando. Tell us about your brand and market ambitions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Contact</p>
            <h1 className="page-hero__title">Start the conversation</h1>
            <p className="page-hero__desc">
              Tell us about your brand, your market, and where you want to go. We respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container grid gap-20 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl tracking-tight">Let&apos;s explore what&apos;s possible</h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--text-muted)]">
                Share your ambitions and challenges. Our strategists will review your inquiry and respond with thoughtful recommendations — no hard sell, no automated sequences.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  'Personalized strategy recommendations',
                  'Direct access to senior strategists',
                  'Response within 24 hours',
                  'No obligation to proceed',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-[var(--text-muted)]">
                    <span className="text-[var(--text)]">—</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 border-t border-[var(--border)] pt-10">
                <p className="text-sm text-[var(--text-subtle)]">Prefer email?</p>
                <a href={`mailto:${SITE.email}`} className="mt-2 block text-xl font-display text-[var(--text)] no-underline hover:opacity-70">
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
