import type { ReactNode } from 'react';
import { SOCIAL_LINKS, type SocialPlatform } from '@/lib/site-config';

/** Per-icon optical tuning — scale & nudge for equal perceived weight */
const OPTICAL: Record<SocialPlatform, { scale: number; x: number; y: number }> = {
  linkedin: { scale: 1.1, x: 0, y: 0.5 },
  instagram: { scale: 1.02, x: 0, y: 0 },
  youtube: { scale: 0.94, x: 0, y: 0.5 },
  x: { scale: 0.8, x: 0, y: 0 },
  facebook: { scale: 1.06, x: 0.5, y: 0 },
};

const STROKE = 1.75;

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const { scale, x, y } = OPTICAL[platform];

  const paths: Record<SocialPlatform, ReactNode> = {
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-11h4v2" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    instagram: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
    youtube: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
    x: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  };

  return (
    <span
      className={`social-icon social-icon--${platform}`}
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      }}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[platform]}
      </svg>
    </span>
  );
}

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.ariaLabel}
        >
          <SocialIcon platform={link.id} />
        </a>
      ))}
    </div>
  );
}
