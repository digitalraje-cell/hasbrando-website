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
  title = 'Ready to build a brand that wins?',
  subtitle = 'Book a strategy call. No pitch deck — just an honest conversation about your brand, your market, and what\'s possible.',
  primaryLabel = 'Book Strategy Call',
  primaryHref = '/book-strategy',
  secondaryLabel = 'View Our Work',
  secondaryHref = '/case-studies',
}: CtaSectionProps) {
  return (
    <section className="cta-dark">
      <div className="container text-center">
        <Reveal>
          <h2 className="cta-dark__title">{title}</h2>
          <p className="cta-dark__subtitle">{subtitle}</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryHref} className="btn btn-on-dark btn-lg">{primaryLabel}</Link>
            <Link href={secondaryHref} className="btn btn-secondary-on-dark btn-lg">{secondaryLabel}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
