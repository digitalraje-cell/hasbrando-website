import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';

export const metadata = createMetadata({
  title: 'Book Strategy Call',
  description: 'Book a strategy call with HasBrando. Discuss your brand, positioning, and growth opportunities.',
  path: '/book-strategy',
});

export default function BookStrategyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Strategy Call</p>
            <h1 className="page-hero__title">Book your strategy call</h1>
            <p className="page-hero__desc">
              30 minutes with a senior strategist. Honest conversation about your brand and growth — no pitch deck required.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container grid gap-20 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl tracking-tight">What to expect</h2>
            <ul className="mt-8 space-y-5">
              {[
                'Deep dive into your business and ambitions',
                'Honest assessment of your current positioning',
                'Tailored recommendations for your market',
                'Clear next steps — whether we work together or not',
              ].map((item) => (
                <li key={item} className="text-[15px] leading-relaxed text-[var(--text-muted)]">
                  <span className="text-[var(--text)]">—</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-[var(--text-subtle)]">
              Can&apos;t find a time?{' '}
              <Link href="/contact" className="text-[var(--text)] underline-offset-4 hover:underline">Send us a message</Link>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="calendly-placeholder">
              <div>
                <p className="font-display text-xl">Calendly Integration</p>
                <p className="mt-3 text-sm text-[var(--text-muted)]">Replace with your Calendly embed:</p>
                <code className="mt-6 block rounded-xl bg-[var(--bg-subtle)] p-5 text-left text-xs text-[var(--text-muted)]">
                  {`<iframe src="https://calendly.com/your-link" width="100%" height="600" />`}
                </code>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
