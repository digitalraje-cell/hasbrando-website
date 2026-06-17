import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
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

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = createMetadata({
  title: `${SITE.name} — Premium Branding Consultancy`,
  description: SITE.description,
  path: '/',
  isHome: true,
  keywords: [
    'premium branding consultancy',
    'brand positioning agency',
    'luxury branding',
    'personal branding',
    'brand strategy',
    'creative agency',
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} h-full`}>
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
