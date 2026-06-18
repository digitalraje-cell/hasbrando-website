import { Resend } from 'resend';

/** Verified sending domain in Resend — all outbound mail must use this domain. */
export const VERIFIED_EMAIL_DOMAIN = 'hasbrando.com';

export const DEFAULT_FROM_ADDRESS = 'support@hasbrando.com';
export const DEFAULT_FROM_EMAIL = `HasBrando <${DEFAULT_FROM_ADDRESS}>`;
export const DEFAULT_CONTACT_TO_EMAIL = DEFAULT_FROM_ADDRESS;

const BLOCKED_SENDER_PATTERNS = ['onboarding@resend.dev', '@resend.dev'];

function extractEmailAddress(from: string): string {
  const bracketMatch = from.match(/<([^>]+)>/);
  return (bracketMatch ? bracketMatch[1] : from).trim().toLowerCase();
}

function isVerifiedSender(from: string): boolean {
  const address = extractEmailAddress(from);
  if (BLOCKED_SENDER_PATTERNS.some((pattern) => address.includes(pattern))) {
    return false;
  }
  return address.endsWith(`@${VERIFIED_EMAIL_DOMAIN}`);
}

function formatFromAddress(email: string): string {
  const normalized = email.trim();
  if (normalized.includes('<')) return normalized;
  return `HasBrando <${normalized}>`;
}

export function getResendApiKey(): string | undefined {
  const key = process.env.RESEND_API_KEY?.trim();
  return key || undefined;
}

export function getContactToEmail(): string {
  const configured = process.env.CONTACT_TO_EMAIL?.trim();
  if (configured) return configured;
  return DEFAULT_CONTACT_TO_EMAIL;
}

/**
 * Returns the Resend `from` address. Always uses a verified hasbrando.com sender.
 * Falls back from onboarding@resend.dev or other invalid env values.
 */
export function getFromEmail(): string {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();

  if (!configured) {
    return DEFAULT_FROM_EMAIL;
  }

  if (!isVerifiedSender(configured)) {
    console.warn(
      `[contact] RESEND_FROM_EMAIL "${configured}" is not a verified ${VERIFIED_EMAIL_DOMAIN} sender; using ${DEFAULT_FROM_EMAIL}`,
    );
    return DEFAULT_FROM_EMAIL;
  }

  return formatFromAddress(configured);
}

export function createResendClient(): Resend | null {
  const apiKey = getResendApiKey();
  if (!apiKey) return null;
  return new Resend(apiKey);
}
