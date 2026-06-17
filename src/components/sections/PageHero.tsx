'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1800&q=90&auto=format&fit=crop';

type PageHeroProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  image?: string | null;
  children?: React.ReactNode;
};

export default function PageHero({
  label,
  title,
  description,
  image = DEFAULT_IMAGE,
  children,
}: PageHeroProps) {
  return (
    <section className="hero-dark hero-dark--page">
      <div className="hero-grain" aria-hidden />
      <div className="hero-inner hero-inner--page">
        <div className="hero-content hero-content--page">
          <Reveal>
            <p className="hero-eyebrow">{label}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="hero-headline hero-headline--page">{title}</h1>
          </Reveal>
          {description && (
            <Reveal delay={0.12}>
              <p className="hero-subheadline">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.18}>
              <div className="hero-page-extra">{children}</div>
            </Reveal>
          )}
        </div>

        {image && (
          <Reveal delay={0.1} className="hero-visual-wrap hero-visual-wrap--page hidden lg:block">
            <motion.div
              className="hero-visual hero-visual--page"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="45vw"
                className="hero-visual__img"
                priority
              />
              <div className="hero-visual__overlay" />
            </motion.div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
