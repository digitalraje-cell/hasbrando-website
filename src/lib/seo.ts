import type { Metadata } from 'next';
import { SITE } from './site-config';

const OG_IMAGE = '/og-image.png';
const THEME_COLOR = '#0a0a0a';

type SEOInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  /** Pass true for the homepage — title is used as-is */
  isHome?: boolean;
};

export const BRAND_ICONS: Metadata['icons'] = {
  icon: [
    { url: '/favicon.ico', sizes: 'any' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: THEME_COLOR }],
};

export function formatPageTitle(title: string, isHome = false): string {
  if (isHome) return title;
  return `${title} — ${SITE.name}`;
}

export function createMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
  isHome = false,
}: SEOInput): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = formatPageTitle(title, isHome);
  const imageUrl = `${SITE.url}${OG_IMAGE}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    manifest: '/site.webmanifest',
    themeColor: THEME_COLOR,
    icons: BRAND_ICONS,
    appleWebApp: {
      capable: true,
      title: SITE.name,
      statusBarStyle: 'black-translucent',
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Build a Brand People Remember`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: {
        url: imageUrl,
        alt: `${SITE.name} — Build a Brand People Remember`,
      },
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/android-chrome-512x512.png`,
    description: SITE.description,
    email: SITE.email,
    sameAs: Object.values(SITE.social),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@type': 'Organization', name: SITE.name },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
