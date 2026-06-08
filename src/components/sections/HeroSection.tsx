'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { HERO_STATS, TRUST_LOGOS } from '@/lib/data/stats';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&h=2200&q=90&auto=format&fit=crop';

export default function HeroSection() {
  return (
    <>
      <section className="hero-dark">
        <div className="hero-grain" aria-hidden />
        <div className="hero-inner">
          <div className="hero-content">
            <Reveal>
              <p className="hero-eyebrow">Premium Branding Consultancy</p>
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
                We help founders, consultants and ambitious brands build authority, trust and scalable growth through premium branding and performance systems.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="hero-actions">
                <Link href="/book-strategy" className="btn btn-on-dark btn-lg">
                  Book Strategy Call
                </Link>
                <Link href="/work" className="btn btn-secondary-on-dark btn-lg">
                  View Work
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

          <Reveal delay={0.1} className="hero-visual-wrap hidden lg:block">
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Premium architectural interior"
                fill
                priority
                sizes="55vw"
                className="hero-visual__img"
              />
              <div className="hero-visual__overlay" />
            </motion.div>
          </Reveal>
        </div>
      </section>

      <div className="trust-bar section-full">
        <div className="container">
          <p className="trust-bar__label">
            Trusted by ambitious founders, consultants and growth-focused brands
          </p>
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
