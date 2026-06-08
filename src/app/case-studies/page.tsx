import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { CASE_STUDIES, type CaseStudy } from '@/lib/data/case-studies';

export const metadata = createMetadata({
  title: 'Case Studies',
  description:
    'See how HasBrando has helped coaches, D2C brands, consultants, and startups achieve measurable growth.',
  path: '/case-studies',
  keywords: ['case studies', 'marketing results', 'agency portfolio', 'ROI growth'],
});

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card card-glow">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[rgba(139,92,246,0.1)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
          {study.industry}
        </span>
        <span className="text-sm text-[var(--text-subtle)]">{study.client}</span>
      </div>

      <h2 className="mt-4 font-display text-2xl font-bold leading-snug">{study.title}</h2>
      <p className="mt-3 text-[var(--text-muted)]">{study.summary}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Challenge</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{study.challenge}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Solution</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{study.solution}</p>
        </div>
      </div>

      {/* Before / After Metrics */}
      <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="grid grid-cols-4 bg-[rgba(255,255,255,0.02)] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-subtle)]">
          <span>Metric</span>
          <span>Before</span>
          <span>After</span>
          <span>Growth</span>
        </div>
        {study.metrics.map((m) => (
          <div key={m.label} className="grid grid-cols-4 border-t border-[var(--border)] px-4 py-3 text-sm">
            <span className="text-[var(--text-muted)]">{m.label}</span>
            <span className="text-[var(--text-subtle)]">{m.before}</span>
            <span className="font-medium text-white">{m.after}</span>
            <span className="font-semibold text-[var(--accent)]">{m.growth}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.services.map((s) => (
          <span key={s} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">
            {s}
          </span>
        ))}
      </div>

      {study.testimonial && (
        <blockquote className="mt-8 border-l-2 border-[var(--accent)] pl-4">
          <p className="text-sm italic text-[var(--text-muted)]">&ldquo;{study.testimonial.quote}&rdquo;</p>
          <footer className="mt-2 text-sm">
            <strong className="text-white">{study.testimonial.author}</strong>
            <span className="text-[var(--text-subtle)]"> — {study.testimonial.role}</span>
          </footer>
        </blockquote>
      )}
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Case Studies</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Results that <span className="text-gradient">matter</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              Real growth stories with measurable outcomes — revenue, leads, engagement, and brand impact.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-16">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.05}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
