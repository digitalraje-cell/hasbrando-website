import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';

export const metadata = createMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting HasBrando.',
  path: '/thanks',
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <section className="section section--light flex min-h-[60vh] items-center">
      <Reveal className="container text-center">
        <div className="contact-form-success-icon mx-auto" aria-hidden>✓</div>
        <h1 className="mt-10 font-display text-4xl">You&apos;re all set</h1>
        <p className="mx-auto mt-5 max-w-md text-[var(--text-muted)]">
          We&apos;ve received your message and sent a confirmation to your email. Our team will respond within 24 hours.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/book-strategy" className="btn btn-primary">Book Strategy Call</Link>
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </Reveal>
    </section>
  );
}
