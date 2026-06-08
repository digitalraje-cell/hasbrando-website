'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { HERO_STATS, TRUST_LOGOS } from '@/lib/data/stats';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=1500&q=85&auto=format&fit=crop';

export default function HeroSection() {
  return (
    <>
      <section className="hero-dark min-h-[100svh] pt-[var(--header-h)]">
        <div className="container relative grid items-center gap-20 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <p className="hero-eyebrow">Premium Branding & Growth</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="hero-headline">
                Build a Brand
                <br />
                People Remember.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="hero-subheadline">
                We help ambitious founders and brands build market authority, premium positioning, and growth systems that command attention — and revenue.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/book-strategy" className="btn btn-on-dark btn-lg">
                  Book Strategy Call
                </Link>
                <Link href="/case-studies" className="btn btn-secondary-on-dark btn-lg">
                  View Our Work
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-stats">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="hero-stat">
                    <p className="hero-stat__value">{stat.value}</p>
                    <p className="hero-stat__label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative hidden lg:block">
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Premium creative workspace"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 45vw"
                className="hero-visual__img"
              />
              <div className="hero-visual__overlay" />
              <div className="hero-visual__caption">
                <p className="hero-visual__text">
                  Authority. Growth.
                  <br />
                  Market Leadership.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container">
          <p className="trust-bar__label">Trusted by ambitious brands worldwide</p>
          <div className="trust-bar__logos">
            {TRUST_LOGOS.map((logo) => (
              <span key={logo} className="trust-logo">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
