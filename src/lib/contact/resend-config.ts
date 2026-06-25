import { Resend } from 'resend';

/** Verified sending domain in Resend — all outbound mail must use this domain. */
export const VERIFIED_EMAIL_DOMAIN = 'hashbrando.com';

export const DEFAULT_FROM_ADDRESS = 'support@hashbrando.com';
export const DEFAULT_FROM_EMAIL = `Hashbrando <${DEFAULT_FROM_ADDRESS}>`;
export const DEFAULT_CONTACT_TO_EMAIL = DEFAULT_FROM_ADDRESS;

/** Legacy/wrong domains that must never be used as Resend senders. */
const BLOCKED_SENDER_DOMAINS = ['hasbrando.com', 'resend.dev'];

function extractEmailAddress(from: string): string {
  const bracketMatch = from.match(/<([^>]+)>/);
  return (bracketMatch ? bracketMatch[1] : from).trim().toLowerCase();
}

function getEmailDomain(address: string): string {
  const at = address.lastIndexOf('@');
  return at === -1 ? '' : address.slice(at + 1);
}

function isHashbrandoSender(from: string): boolean {
  const address = extractEmailAddress(from);
  const domain = getEmailDomain(address);
  if (!domain || BLOCKED_SENDER_DOMAINS.includes(domain)) {
    return false;
  }
  return domain === VERIFIED_EMAIL_DOMAIN && address === DEFAULT_FROM_ADDRESS;
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
 * Returns the Resend `from` address.
 * Always `Hashbrando <support@hashbrando.com>` — env overrides are ignored
 * because a mis-set RESEND_FROM_EMAIL previously forced sends from the
 * unverified hasbrando.com domain.
 */
export function getFromEmail(): string {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();

  if (configured && !isHashbrandoSender(configured)) {
    console.warn(
      `[contact] Ignoring RESEND_FROM_EMAIL="${configured}" — using ${DEFAULT_FROM_EMAIL}`,
    );
  }

  return DEFAULT_FROM_EMAIL;
}

export function createResendClient(): Resend | null {
  const apiKey = getResendApiKey();
  if (!apiKey) return null;
  return new Resend(apiKey);
}
