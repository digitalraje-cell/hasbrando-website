import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import { SITE } from '@/lib/site-config';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'HasBrando privacy policy.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container max-w-3xl">
          <Reveal>
            <h1 className="page-hero__title">Privacy Policy</h1>
            <p className="page-hero__desc">Last updated: June 1, 2026</p>
          </Reveal>
        </div>
      </section>
      <section className="section section--light">
        <div className="container max-w-3xl legal-content">
          <h2>Introduction</h2>
          <p>HasBrando operates {SITE.url}. This policy explains how we collect, use, and protect your information.</p>
          <h2>Information We Collect</h2>
          <ul>
            <li>Personal information via contact forms (name, email, phone, business details)</li>
            <li>Usage data including pages visited and time on site</li>
            <li>Cookies for analytics and functionality</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries and provide services</li>
            <li>To send confirmations and follow-up communications</li>
            <li>To improve our website and services</li>
          </ul>
          <h2>Contact</h2>
          <p>Questions? Email <a href={`mailto:${SITE.email}`} className="text-[var(--text)] underline-offset-4 hover:underline">{SITE.email}</a></p>
        </div>
      </section>
    </>
  );
}
