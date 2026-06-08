'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import { INDUSTRY_PERSONAS, type IndustryPersona } from '@/lib/data/industries-data';

const SCROLL_SPEED = 0.045;
const RESUME_DELAY_MS = 2000;
const NAV_DURATION_MS = 620;
const CARD_GAP = 20;

function easePremium(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function IndustryCard({ industry, priority }: { industry: IndustryPersona; priority?: boolean }) {
  return (
    <article className="industry-card" role="listitem">
      <div className="industry-card__media">
        <Image
          src={industry.image}
          alt={`${industry.label} — professional`}
          fill
          sizes="(max-width: 640px) 85vw, 380px"
          priority={priority}
          className="industry-card__img"
        />
        <div className="industry-card__overlay" aria-hidden />
      </div>
      <div className="industry-card__content">
        <p className="industry-card__label">{industry.label}</p>
        <h3 className="industry-card__title">{industry.title}</h3>
        <p className="industry-card__copy">{industry.copy}</p>
      </div>
    </article>
  );
}

export default function IndustriesCarousel() {
  const innerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isManualPausedRef = useRef(false);
  const isNavigatingRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number>(0);
  const navRafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const reduceMotionRef = useRef(false);

  const applyTransform = useCallback(() => {
    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  const measureLoop = useCallback(() => {
    if (innerRef.current) {
      halfWidthRef.current = innerRef.current.scrollWidth / 2;
    }
  }, []);

  const normalizeOffset = useCallback(() => {
    const half = halfWidthRef.current;
    if (half <= 0) return;
    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
  }, []);

  const scheduleResume = useCallback(() => {
    isManualPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isManualPausedRef.current = false;
    }, RESUME_DELAY_MS);
  }, []);

  const getStep = useCallback(() => {
    const card = innerRef.current?.querySelector<HTMLElement>('.industry-card');
    return (card?.offsetWidth ?? 380) + CARD_GAP;
  }, []);

  const animateTo = useCallback(
    (targetOffset: number) => {
      if (navRafRef.current) cancelAnimationFrame(navRafRef.current);
      isNavigatingRef.current = true;
      scheduleResume();

      const startOffset = offsetRef.current;
      const startTime = performance.now();
      const duration = reduceMotionRef.current ? 280 : NAV_DURATION_MS;

      const run = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        offsetRef.current = startOffset + (targetOffset - startOffset) * easePremium(progress);
        applyTransform();

        if (progress < 1) {
          navRafRef.current = requestAnimationFrame(run);
        } else {
          normalizeOffset();
          applyTransform();
          isNavigatingRef.current = false;
        }
      };

      navRafRef.current = requestAnimationFrame(run);
    },
    [applyTransform, normalizeOffset, scheduleResume],
  );

  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      const step = getStep();
      animateTo(offsetRef.current + (direction === 'left' ? step : -step));
    },
    [animateTo, getStep],
  );

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    measureLoop();

    const onResize = () => {
      measureLoop();
      applyTransform();
    };
    window.addEventListener('resize', onResize);

    const tick = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = Math.min(time - lastTimeRef.current, 32);
      lastTimeRef.current = time;

      const paused =
        reduceMotionRef.current ||
        isHoveredRef.current ||
        isManualPausedRef.current ||
        isNavigatingRef.current;

      if (!paused && halfWidthRef.current > 0) {
        offsetRef.current -= SCROLL_SPEED * delta;
        if (Math.abs(offsetRef.current) >= halfWidthRef.current) {
          offsetRef.current += halfWidthRef.current;
        }
        applyTransform();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(navRafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [applyTransform, measureLoop]);

  const duplicated = [...INDUSTRY_PERSONAS, ...INDUSTRY_PERSONAS];

  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <div className="industries-header">
          <Reveal>
            <p className="section-label">Who We Serve</p>
            <h2 className="section-title">Built for ambitious<br />leaders & brands</h2>
            <p className="section-subtitle">
              Premium branding and growth systems for businesses that refuse to compete on price.
            </p>
          </Reveal>
          <div className="industries-nav hidden-mobile">
            <button type="button" className="industries-nav-btn" aria-label="Scroll left" onClick={() => scroll('left')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="industries-nav-btn" aria-label="Scroll right" onClick={() => scroll('right')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="industries-carousel-wrap"
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onTouchStart={scheduleResume}
      >
        <div className="industries-fade industries-fade--left" aria-hidden />
        <div className="industries-fade industries-fade--right" aria-hidden />
        <div className="industries-track-viewport">
          <div className="industries-track-inner" ref={innerRef} role="list">
            {duplicated.map((industry, i) => (
              <IndustryCard key={`${industry.slug}-${i}`} industry={industry} priority={i < 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
