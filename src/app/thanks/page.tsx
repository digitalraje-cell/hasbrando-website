import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';

export const metadata = createMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting HasBrando. We will be in touch shortly.',
  path: '/thanks',
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <Reveal className="text-center">
        <div className="contact-form-success-icon mx-auto" aria-hidden>✓</div>
        <h1 className="mt-8 font-display text-3xl font-bold">You&apos;re all set!</h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--text-muted)]">
          We&apos;ve received your message and sent a confirmation to your email. Our team will review your inquiry and respond within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/book-strategy" className="btn btn-primary">
            Book Strategy Call
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
