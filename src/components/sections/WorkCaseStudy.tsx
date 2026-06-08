import Image from 'next/image';
import type { CaseStudy } from '@/lib/data/case-studies';

type Props = {
  study: CaseStudy;
  index: number;
};

const CHAPTERS = [
  { key: 'challenge', label: 'Challenge', field: 'challenge' as const },
  { key: 'strategy', label: 'Strategy', field: 'strategy' as const },
  { key: 'execution', label: 'Execution', field: 'execution' as const },
];

export default function WorkCaseStudy({ study, index }: Props) {
  const reversed = index % 2 === 1;

  return (
    <article className={`work-case ${reversed ? 'work-case--reversed' : ''}`}>
      {study.image && (
        <div className="work-case__visual">
          <Image
            src={study.image}
            alt={study.client}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="work-case__img"
          />
          <div className="work-case__visual-overlay" />
        </div>
      )}

      <div className="work-case__content">
        <div className="work-case__meta">
          <span className="work-case__industry">{study.industry}</span>
          <span className="work-case__client">{study.client}</span>
        </div>

        <h2 className="work-case__title">{study.title}</h2>

        <div className="work-case__narrative">
          {CHAPTERS.map((chapter, i) => (
            <div key={chapter.key} className="work-case__chapter">
              <span className="work-case__chapter-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="work-case__label">{chapter.label}</p>
                <p className="work-case__text">{study[chapter.field]}</p>
              </div>
            </div>
          ))}

          <div className="work-case__chapter work-case__chapter--outcome">
            <span className="work-case__chapter-num">04</span>
            <div>
              <p className="work-case__label">Outcome</p>
              <ul className="work-case__results">
                {study.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="work-case__metrics">
          {study.metrics.map((m) => (
            <div key={m.label} className="work-case__metric">
              <p className="work-case__metric-growth">{m.growth}</p>
              <p className="work-case__metric-label">{m.label}</p>
              <p className="work-case__metric-change">{m.before} → {m.after}</p>
            </div>
          ))}
        </div>

        {study.testimonial && (
          <blockquote className="work-case__quote">
            <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
            <footer>{study.testimonial.author}, {study.testimonial.role}</footer>
          </blockquote>
        )}
      </div>
    </article>
  );
}
