import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import { SITE } from '@/lib/site-config';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'HasBrando privacy policy — how we collect, use, and protect your information.',
  path: '/privacy',
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative max-w-3xl">
          <Reveal>
            <h1 className="font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-4 text-[var(--text-muted)]">Last updated: June 1, 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl legal-content">
          <h2>Introduction</h2>
          <p>
            HasBrando (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates {SITE.url}. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal information you provide (name, email, phone, business details) via contact forms</li>
            <li>Usage data including IP address, browser type, pages visited, and time spent</li>
            <li>Cookies and similar tracking technologies for analytics and site functionality</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide our services</li>
            <li>To send confirmations and follow-up communications</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with trusted service providers (email delivery, analytics, cloud storage) who assist in operating our business, subject to confidentiality agreements.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at {SITE.email} to exercise these rights.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this Privacy Policy, contact us at{' '}
            <a href={`mailto:${SITE.email}`} className="text-[var(--accent)]">{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
