'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/lib/data/portfolio';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="portfolio-filters">
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

      <div className="portfolio-editorial">
        {filtered.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <article className={`portfolio-editorial__item portfolio-editorial__item--${(i % 3) + 1}`}>
              <div className="portfolio-editorial__visual">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="portfolio-editorial__img"
                />
                <div className="portfolio-editorial__overlay">
                  <p className="portfolio-editorial__category">{item.category.replace('-', ' ')}</p>
                  <h3 className="portfolio-editorial__title">{item.title}</h3>
                  <p className="portfolio-editorial__desc">{item.description}</p>
                  <div className="portfolio-editorial__tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="portfolio-editorial__footer">
                <span className="portfolio-editorial__client">{item.client}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
