'use client';

import { motion } from 'framer-motion';

export default function HeroAnimation() {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center md:h-[400px]" aria-hidden>
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        className="absolute h-48 w-48 rounded-full border border-[rgba(139,92,246,0.2)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute h-64 w-64 rounded-full border border-[rgba(99,102,241,0.15)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute h-80 w-80 rounded-full border border-[rgba(212,175,55,0.1)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] via-[#6366F1] to-[#D4AF37] shadow-[0_0_60px_rgba(139,92,246,0.4)]"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-display text-3xl font-bold text-white">H</span>
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-[var(--accent)]"
          style={{
            top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 6)}%`,
            left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 6)}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}
