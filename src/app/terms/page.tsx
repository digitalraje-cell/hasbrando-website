import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import { SITE } from '@/lib/site-config';

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'HasBrando terms of service — the terms governing use of our website and services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative max-w-3xl">
          <Reveal>
            <h1 className="font-display text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-4 text-[var(--text-muted)]">Last updated: June 1, 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl legal-content">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using {SITE.url}, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
          </p>

          <h2>Services</h2>
          <p>
            HasBrando provides creative growth, branding, marketing, and related agency services. Specific deliverables, timelines, and fees are defined in individual service agreements.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and design — is the property of HasBrando or its licensors and is protected by applicable intellectual property laws.
          </p>

          <h2>Client Work</h2>
          <p>
            Upon full payment, clients receive rights to deliverables as specified in their service agreement. HasBrando retains the right to display completed work in its portfolio unless otherwise agreed in writing.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            HasBrando shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability is limited to the amount paid for the specific service in question.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by applicable international commercial law. Disputes shall be resolved through good-faith negotiation before pursuing formal proceedings.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href={`mailto:${SITE.email}`} className="text-[var(--accent)]">{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
