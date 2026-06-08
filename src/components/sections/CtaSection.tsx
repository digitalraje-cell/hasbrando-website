import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaSection({
  title = 'Ready to grow your brand?',
  subtitle = 'Book a free strategy call and discover how HasBrando can accelerate your growth.',
  primaryLabel = 'Book Strategy Call',
  primaryHref = '/book-strategy',
  secondaryLabel = 'View Case Studies',
  secondaryHref = '/case-studies',
}: CtaSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-card)] px-8 py-16 text-center md:px-16 md:py-20">
            <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
            <h2 className="font-display relative text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-[var(--text-muted)]">{subtitle}</p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={primaryHref} className="btn btn-primary btn-lg">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="btn btn-secondary btn-lg">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
