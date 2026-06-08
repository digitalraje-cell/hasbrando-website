'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import CtaSection from '@/components/sections/CtaSection';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/data/portfolio';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Portfolio</p>
            <h1 className="page-hero__title">Work we&apos;re proud of</h1>
            <p className="page-hero__desc">A curated selection of branding, creative, campaigns, and digital experiences.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="mb-16 flex flex-wrap gap-3">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button key={cat.id} type="button" className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`} onClick={() => setActiveCategory(cat.id)}>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <article className="portfolio-item">
                  <div className="flex h-56 items-center justify-center bg-[var(--bg-subtle)]">
                    <span className="font-display text-5xl text-[var(--text-subtle)] opacity-25">{item.client.charAt(0)}</span>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-subtle)]">{item.category.replace('-', ' ')}</p>
                    <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[var(--text-subtle)]">{tag}</span>
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
