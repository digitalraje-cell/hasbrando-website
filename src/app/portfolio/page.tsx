'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/data/portfolio';

const GRADIENTS = [
  'from-[#8B5CF6]/20 to-[#6366F1]/10',
  'from-[#6366F1]/20 to-[#D4AF37]/10',
  'from-[#D4AF37]/20 to-[#8B5CF6]/10',
  'from-[#8B5CF6]/15 to-[#D4AF37]/15',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Portfolio</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Work we&apos;re <span className="text-gradient">proud of</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              A curated selection of branding, creative, campaigns, and digital experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <article className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] transition hover:border-[var(--border-hover)]">
                  <div
                    className={`flex h-48 items-center justify-center bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}
                  >
                    <span className="font-display text-4xl font-bold text-white/20 transition group-hover:text-white/40">
                      {item.client.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[var(--text-subtle)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
