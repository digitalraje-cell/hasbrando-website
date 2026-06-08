import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';

export const metadata = createMetadata({
  title: 'Book Strategy Call',
  description:
    'Book a free strategy call with HasBrando. Discuss your brand, marketing goals, and growth opportunities.',
  path: '/book-strategy',
  keywords: ['book strategy call', 'free consultation', 'marketing strategy'],
});

export default function BookStrategyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Strategy Call</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Book your free <span className="text-gradient">strategy call</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              30 minutes with a senior growth strategist. No pitch deck — just honest advice on how to grow your brand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">What to expect</h2>
            <ul className="mt-6 space-y-4">
              {[
                'Deep dive into your business and goals',
                'Honest assessment of your current marketing',
                'Tailored growth recommendations',
                'Clear next steps — whether you work with us or not',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[var(--text-muted)]">
                  <span className="text-[var(--accent)]">✓</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[var(--text-subtle)]">
              Can&apos;t find a time?{' '}
              <Link href="/contact" className="text-[var(--accent)] no-underline hover:underline">
                Send us a message
              </Link>{' '}
              instead.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="calendly-placeholder">
              <div>
                <p className="font-display text-xl font-semibold text-white">Calendly Integration</p>
                <p className="mt-2 text-sm">
                  Replace this placeholder with your Calendly embed:
                </p>
                <code className="mt-4 block rounded-lg bg-[var(--bg)] p-4 text-left text-xs text-[var(--text-muted)]">
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
