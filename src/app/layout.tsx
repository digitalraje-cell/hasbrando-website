import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createMetadata, organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site-config';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = createMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  keywords: [
    'creative growth agency',
    'branding agency',
    'performance marketing',
    'social media marketing',
    'lead generation',
    'funnel building',
    'personal branding',
    'paid ads',
    'website design',
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
