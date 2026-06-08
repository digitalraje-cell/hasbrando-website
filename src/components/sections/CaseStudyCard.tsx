import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudy } from '@/lib/data/case-studies';

type Props = {
  study: CaseStudy;
  featured?: boolean;
};

export default function CaseStudyCard({ study, featured }: Props) {
  const content = (
    <>
      {study.image && (
        <div className={`case-card__visual ${featured ? 'case-card__visual--tall' : ''}`}>
          <Image
            src={study.image}
            alt={study.client}
            fill
            sizes={featured ? '(max-width: 1024px) 100vw, 33vw' : '(max-width: 1024px) 100vw, 50vw'}
            className="case-card__img"
          />
          <div className="case-card__visual-overlay" />
        </div>
      )}
      <div className="case-card__body">
        <div className="case-card__meta">
          <span className="case-card__industry">{study.industry}</span>
          <span className="case-card__client">{study.client}</span>
        </div>
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__summary">{study.summary}</p>

        {!featured && (
          <div className="case-card__story">
            <div>
              <p className="case-card__story-label">The Challenge</p>
              <p className="case-card__story-text">{study.challenge}</p>
            </div>
            <div>
              <p className="case-card__story-label">Our Approach</p>
              <p className="case-card__story-text">{study.solution}</p>
            </div>
          </div>
        )}

        <div className="case-card__metrics">
          {study.metrics.map((m) => (
            <div key={m.label} className="case-card__metric">
              <p className="case-card__metric-growth">{m.growth}</p>
              <p className="case-card__metric-label">{m.label}</p>
              <p className="case-card__metric-change">
                {m.before} → {m.after}
              </p>
            </div>
          ))}
        </div>

        {study.testimonial && (
          <blockquote className="case-card__quote">
            <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
            <footer>
              {study.testimonial.author}, {study.testimonial.role}
            </footer>
          </blockquote>
        )}
      </div>
    </>
  );

  if (featured) {
    return (
      <Link href="/work" className="case-card">
        {content}
      </Link>
    );
  }

  return <article className="case-card case-card--full">{content}</article>;
}
