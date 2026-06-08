import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import { SITE } from '@/lib/site-config';

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'HasBrando terms of service.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container max-w-3xl">
          <Reveal>
            <h1 className="page-hero__title">Terms of Service</h1>
            <p className="page-hero__desc">Last updated: June 1, 2026</p>
          </Reveal>
        </div>
      </section>
      <section className="section section--light">
        <div className="container max-w-3xl legal-content">
          <h2>Agreement</h2>
          <p>By using {SITE.url}, you agree to these terms. If you disagree, please do not use our services.</p>
          <h2>Services</h2>
          <p>HasBrando provides branding, creative, and growth agency services. Deliverables and fees are defined in individual agreements.</p>
          <h2>Intellectual Property</h2>
          <p>All website content is property of HasBrando. Upon full payment, clients receive rights to deliverables per their service agreement.</p>
          <h2>Contact</h2>
          <p>Questions? Email <a href={`mailto:${SITE.email}`} className="text-[var(--text)] underline-offset-4 hover:underline">{SITE.email}</a></p>
        </div>
      </section>
    </>
  );
}
