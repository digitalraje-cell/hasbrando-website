import type { ContactApiBody, ContactFormPayload } from './types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, maxLength);
}

export type ValidationResult =
  | { ok: true; data: ContactFormPayload }
  | { ok: false; error: string };

export function validateContactBody(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body.' };
  }

  const raw = body as ContactApiBody;

  if (sanitizeText(raw.fax, 200)) {
    return { ok: false, error: 'Submission rejected.' };
  }

  const name = sanitizeText(raw.name, 120);
  const email = sanitizeText(raw.email, 254).toLowerCase();
  const phone = sanitizeText(raw.phone, 40);
  const business = sanitizeText(raw.business, 160);
  const websiteUrl = sanitizeText(raw.websiteUrl, 300);
  const services = sanitizeText(raw.services, 120);
  const revenue = sanitizeText(raw.revenue, 80);
  const challenge = sanitizeText(raw.challenge, 200);
  const message = sanitizeText(raw.message, 4000);

  if (name.length < 2) {
    return { ok: false, error: 'Please enter your full name.' };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (phone.length < 6) {
    return { ok: false, error: 'Please enter a valid phone number.' };
  }
  if (challenge.length < 3) {
    return { ok: false, error: 'Please describe your biggest marketing challenge.' };
  }

  return {
    ok: true,
    data: { name, email, phone, business, websiteUrl, services, revenue, challenge, message },
  };
}
