import type { Metadata } from 'next';
import { SITE } from './site-config';

type SEOInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: SEOInput): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === '' || path === '/' ? title : `${title} | ${SITE.name}`;
  const imageUrl = `${SITE.url}/og-image.svg`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${SITE.name} — ${title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
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
    logo: `${SITE.url}/logo.svg`,
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
