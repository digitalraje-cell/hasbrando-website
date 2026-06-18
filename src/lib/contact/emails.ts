import type { ContactFormPayload } from './types';
import { DEFAULT_FROM_EMAIL } from '@/lib/contact/resend-config';
import { SITE } from '@/lib/site-config';

const ACCENT = '#8B5CF6';
const GOLD = '#D4AF37';
const BG = '#050505';
const SURFACE = '#0E0E12';
const TEXT = '#F5F5F5';
const MUTED = '#94A3B8';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label: string, value: string): string {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);vertical-align:top;width:180px;color:${MUTED};font-size:13px;font-weight:600;">${escapeHtml(label)}</td>
      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:${TEXT};font-size:14px;line-height:1.6;">${escapeHtml(value)}</td>
    </tr>`;
}

function emailShell(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:${BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BG};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:${SURFACE};border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:28px 32px 20px;text-align:center;background:linear-gradient(180deg,#0a0a14 0%,${SURFACE} 100%);">
            <span style="font-size:24px;font-weight:700;color:${TEXT};letter-spacing:-0.03em;">Has<span style="background:linear-gradient(135deg,${ACCENT},${GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Brando</span></span>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 12px;">
            <h1 style="margin:0 0 8px;font-size:20px;font-weight:700;color:${TEXT};letter-spacing:-0.02em;">${escapeHtml(title)}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 32px;color:${TEXT};font-size:15px;line-height:1.7;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);color:${MUTED};font-size:12px;line-height:1.5;">
            © ${new Date().getFullYear()} HasBrando · Lifetop Academy · Premium Creative Growth Agency
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function buildLeadEmailHtml(data: ContactFormPayload, submittedAt: string): string {
  const table = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:8px;">
      ${row('Full Name', data.name)}
      ${row('Email', data.email)}
      ${row('Phone', data.phone)}
      ${row('Business Name', data.business || '—')}
      ${row('Website', data.websiteUrl || '—')}
      ${row('Services Interested In', data.services || '—')}
      ${row('Monthly Revenue', data.revenue || '—')}
      ${row('Biggest Challenge', data.challenge)}
      ${row('Message', data.message || '—')}
      ${row('Submitted', submittedAt)}
      ${row('Source', 'Contact Page')}
    </table>
    <p style="margin:24px 0 0;color:${MUTED};font-size:13px;">Reply directly to this lead at <a href="mailto:${escapeHtml(data.email)}" style="color:${ACCENT};">${escapeHtml(data.email)}</a></p>`;

  return emailShell('New contact form lead', table);
}

export function buildAutoReplyHtml(name: string): string {
  const firstName = escapeHtml(name.split(/\s+/)[0] || name);
  const bookUrl = `${SITE.url}${SITE.bookStrategy}`;
  const supportEmail = SITE.email;

  const body = `
    <p style="margin:0 0 16px;color:${TEXT};">Hi ${firstName},</p>
    <p style="margin:0 0 16px;color:${TEXT};">Thank you for reaching out to <strong style="color:${TEXT};">HasBrando</strong>.</p>
    <p style="margin:0 0 16px;color:${TEXT};">We&apos;ve received your inquiry and our team is reviewing your requirements. You can expect a response within <strong style="color:${ACCENT};">24 hours</strong>.</p>
    <p style="margin:0 0 16px;color:${TEXT};">Want to skip the wait? Book a strategy call directly and speak with one of our growth strategists.</p>
    <table role="presentation" cellspacing="0" cellpadding="0" style="margin:28px 0;">
      <tr>
        <td style="border-radius:10px;background:linear-gradient(135deg,${ACCENT},#6366F1);">
          <a href="${bookUrl}" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:700;color:#fff;text-decoration:none;border-radius:10px;">Book Strategy Call</a>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 24px;color:${MUTED};font-size:14px;">Email: <a href="mailto:${supportEmail}" style="color:${ACCENT};text-decoration:none;">${supportEmail}</a></p>
    <p style="margin:0;color:${MUTED};font-size:14px;">— Team HasBrando<br/>Premium Creative Growth Agency</p>`;

  return emailShell('Thanks for contacting HasBrando', body);
}

export const LEAD_SUBJECT = 'New HasBrando Lead — Contact Form';
export const AUTO_REPLY_SUBJECT = 'Thanks for contacting HasBrando — We received your request';

/** Default verified sender — use getFromEmail() at send time for env overrides. */
export const FROM_EMAIL = DEFAULT_FROM_EMAIL;
