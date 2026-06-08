import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  AUTO_REPLY_SUBJECT,
  buildAutoReplyHtml,
  buildLeadEmailHtml,
  FROM_EMAIL,
  LEAD_SUBJECT,
} from '@/lib/contact/emails';
import { logError, logInfo, logWarn } from '@/lib/contact/logger';
import { getClientIp, isRateLimited } from '@/lib/contact/rate-limit';
import { appendLeadToGoogleSheet } from '@/lib/contact/sheets';
import { sendTelegramLeadAlert } from '@/lib/contact/telegram';
import { validateContactBody } from '@/lib/contact/validate';

export const runtime = 'nodejs';

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  const submissionId = randomUUID();

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'support@hasbrando.com';

    if (!apiKey) {
      logError('RESEND_API_KEY is not configured');
      return jsonError('Email service is not configured. Please try again later.', 503);
    }

    const ip = getClientIp(
      request.headers.get('x-forwarded-for'),
      request.headers.get('x-real-ip'),
    );

    if (isRateLimited(ip)) {
      logWarn('Rate limit hit', { ip });
      return jsonError('Too many submissions. Please wait a few minutes and try again.', 429);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return jsonError('Invalid JSON payload.', 400);
    }

    const validated = validateContactBody(body);
    if (!validated.ok) {
      return jsonError(validated.error, 400);
    }

    const data = validated.data;
    const submittedAt = new Date().toISOString();
    const submittedAtDisplay = new Date(submittedAt).toUTCString();
    const resend = new Resend(apiKey);

    logInfo('Processing contact submission', { submissionId, email: data.email, ip });

    const leadResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [toEmail],
      replyTo: data.email,
      subject: LEAD_SUBJECT,
      html: buildLeadEmailHtml(data, submittedAtDisplay),
    });

    if (leadResult.error) {
      logError('Lead email failed (Resend)', leadResult.error);
      return jsonError(
        'Unable to send your message. Please try again or email support@hasbrando.com.',
        502,
      );
    }

    logInfo('Lead email sent', {
      submissionId,
      resendId: leadResult.data?.id,
      to: toEmail,
    });

    const [confirmationResult, sheetsResult, telegramResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [data.email],
        subject: AUTO_REPLY_SUBJECT,
        html: buildAutoReplyHtml(data.name),
      }),
      appendLeadToGoogleSheet({ submittedAt, submissionId, data }),
      sendTelegramLeadAlert(data),
    ]);

    if (confirmationResult.status === 'fulfilled') {
      const autoReply = confirmationResult.value;
      if (autoReply.error) {
        logError('Confirmation email failed (Resend)', autoReply.error);
      } else {
        logInfo('Confirmation email sent', {
          submissionId,
          resendId: autoReply.data?.id,
          to: data.email,
        });
      }
    } else {
      logError('Confirmation email error', confirmationResult.reason, { submissionId });
    }

    if (sheetsResult.status === 'fulfilled') {
      if (!sheetsResult.value) {
        logWarn('Google Sheets not saved', { submissionId });
      }
    } else {
      logError('Google Sheets error', sheetsResult.reason, { submissionId });
    }

    if (telegramResult.status === 'fulfilled') {
      if (!telegramResult.value) {
        logWarn('Telegram alert not sent', { submissionId });
      }
    } else {
      logError('Telegram error', telegramResult.reason, { submissionId });
    }

    logInfo('Contact submission completed', { submissionId, email: data.email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    logError('Unexpected contact API error', err, { submissionId });
    return jsonError('Something went wrong. Please try again later.', 500);
  }
}
