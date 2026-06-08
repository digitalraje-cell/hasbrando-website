'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Select from '@/components/ui/Select';
import { GROWTH_SOLUTIONS } from '@/lib/data/growth-solutions';

const REVENUE_OPTIONS = [
  'Under $10K/month',
  '$10K – $50K/month',
  '$50K – $200K/month',
  '$200K+/month',
  'Prefer not to say',
];

const SERVICE_OPTIONS = GROWTH_SOLUTIONS.map((s) => s.outcome);

function LoadingSpinner() {
  return (
    <svg className="contact-form-spinner" viewBox="0 0 24 24" fill="none" aria-hidden width="18" height="18">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [services, setServices] = useState('');
  const [revenue, setRevenue] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;

    setErrorMessage('');
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      business: String(fd.get('business') ?? ''),
      websiteUrl: String(fd.get('websiteUrl') ?? ''),
      services,
      revenue,
      challenge: String(fd.get('challenge') ?? ''),
      message: String(fd.get('message') ?? ''),
      fax: String(fd.get('fax') ?? ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? 'Unable to send your message. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('sent');
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form-success" role="status">
        <div className="contact-form-success-icon" aria-hidden>✓</div>
        <h3>Thank you — we&apos;ve received your message.</h3>
        <p>
          Our team is reviewing your inquiry and will respond within 24 hours. A confirmation has been sent to your email.
        </p>
        <Link href="/thanks" className="btn btn-primary">
          Continue →
        </Link>
      </div>
    );
  }

  return (
    <form className="relative" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="fax">Fax</label>
        <input id="fax" name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mb-8">
        <p className="contact-form-section-label">Contact details</p>
        <div className="contact-form-grid">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Jane Smith" autoComplete="name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="jane@company.com" autoComplete="email" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required placeholder="+1 555 000 0000" autoComplete="tel" />
          </div>
          <div className="form-field">
            <label htmlFor="business">Business Name</label>
            <input id="business" name="business" type="text" placeholder="Your company" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="contact-form-section-label">Business context</p>
        <div className="contact-form-grid">
          <div className="form-field">
            <label htmlFor="websiteUrl">Website</label>
            <input id="websiteUrl" name="websiteUrl" type="url" placeholder="https://yourcompany.com" />
          </div>
          <div className="form-field">
            <label htmlFor="services-select">Solutions Interested In</label>
            <Select
              id="services-select"
              value={services}
              onValueChange={setServices}
              placeholder="Select a service"
              options={SERVICE_OPTIONS.map((o) => ({ value: o, label: o }))}
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="revenue-select">
              Monthly Revenue <span className="form-optional">Optional</span>
            </label>
            <Select
              id="revenue-select"
              value={revenue}
              onValueChange={setRevenue}
              placeholder="Select range"
              options={REVENUE_OPTIONS.map((o) => ({ value: o, label: o }))}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="contact-form-section-label">Your goals</p>
        <div className="contact-form-grid">
          <div className="form-field form-field-full">
            <label htmlFor="challenge">Biggest Marketing Challenge</label>
            <input
              id="challenge"
              name="challenge"
              type="text"
              required
              placeholder="e.g. Weak positioning, invisible brand, inconsistent demand"
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="message">
              Message <span className="form-optional">Optional</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your business, goals, and timeline…"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg w-full sm:w-auto"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? (
          <>
            <LoadingSpinner />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>

      {status === 'error' && errorMessage && (
        <p className="contact-form-note" role="alert">{errorMessage}</p>
      )}

      <p className="mt-4 text-sm text-[var(--text-subtle)]">
        No spam. Human strategists only — we respond within 24 hours.
      </p>
    </form>
  );
}
