import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showSecondary?: boolean;
};

export default function CtaSection({
  title = 'Ready to Build a Brand People Remember?',
  subtitle = 'Let\'s discuss how Hashbrando can position your brand for authority, trust and long-term growth.',
  primaryLabel = 'Book Strategy Call',
  primaryHref = '/book-strategy',
  secondaryLabel = 'View Work',
  secondaryHref = '/work',
  showSecondary = false,
}: CtaSectionProps) {
  return (
    <section className="cta-dark section-full">
      <Reveal className="cta-dark__inner">
        <h2 className="cta-dark__title">
          {title === 'Ready to Build a Brand People Remember?' ? (
            <>Ready to Build a Brand<br />People Remember?</>
          ) : (
            title
          )}
        </h2>
        <p className="cta-dark__subtitle">{subtitle}</p>
        <div className={`cta-dark__actions ${showSecondary ? 'cta-dark__actions--dual' : ''}`}>
          <Link href={primaryHref} className="btn btn-on-dark btn-lg">{primaryLabel}</Link>
          {showSecondary && (
            <Link href={secondaryHref} className="btn btn-secondary-on-dark btn-lg">{secondaryLabel}</Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
