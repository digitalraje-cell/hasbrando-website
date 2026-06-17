import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import type { LegalDocument as LegalDocumentData } from '@/lib/data/legal-types';

type LegalDocumentProps = {
  document: LegalDocumentData;
};

export default function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <section className="section section--light legal-page">
      <div className="container legal-layout">
        <Reveal className="legal-toc">
          <p className="legal-toc__label">Contents</p>
          <nav aria-label="Table of contents">
            <ol className="legal-toc__list">
              {document.sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="legal-toc__link">
                    <span className="legal-toc__num">{String(i + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={0.06} className="legal-body">
          <p className="legal-intro">{document.intro}</p>

          {document.sections.map((section) => (
            <article key={section.id} id={section.id} className="legal-section">
              <h2 className="legal-section__title">{section.title}</h2>
              <div className="legal-section__content">
                {section.blocks.map((block, i) => {
                  if (block.type === 'p') {
                    return <p key={i}>{block.text}</p>;
                  }
                  return (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </article>
          ))}

          <div className="legal-footer-note">
            <p>
              Questions about this document? Contact us at{' '}
              <Link href="mailto:support@hasbrando.com">support@hasbrando.com</Link>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
