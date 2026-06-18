import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import {
  AUTO_REPLY_SUBJECT,
  buildAutoReplyHtml,
  buildLeadEmailHtml,
  LEAD_SUBJECT,
} from '@/lib/contact/emails';
import { logError, logInfo, logResendSend, logWarn } from '@/lib/contact/logger';
import { getClientIp, isRateLimited } from '@/lib/contact/rate-limit';
import {
  createResendClient,
  getContactToEmail,
  getFromEmail,
  getResendApiKey,
} from '@/lib/contact/resend-config';
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
    const apiKey = getResendApiKey();
    const fromEmail = getFromEmail();
    const toEmail = getContactToEmail();

    if (!apiKey) {
      logError('RESEND_API_KEY is not configured', undefined, {
        submissionId,
        hasEnvVar: Boolean(process.env.RESEND_API_KEY),
        envVarLength: process.env.RESEND_API_KEY?.length ?? 0,
      });
      return jsonError('Email service is not configured. Please try again later.', 503);
    }

    logInfo('Resend configuration loaded', {
      submissionId,
      fromEmail,
      toEmail,
      apiKeyPresent: true,
      apiKeyPrefix: apiKey.slice(0, 6),
    });

    const ip = getClientIp(
      request.headers.get('x-forwarded-for'),
      request.headers.get('x-real-ip'),
    );

    if (isRateLimited(ip)) {
      logWarn('Rate limit hit', { ip, submissionId });
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
    const resend = createResendClient();

    if (!resend) {
      logError('Resend client could not be created', undefined, { submissionId });
      return jsonError('Email service is not configured. Please try again later.', 503);
    }

    logInfo('Processing contact submission', { submissionId, email: data.email, ip });

    const leadRequest = {
      submissionId,
      from: fromEmail,
      to: [toEmail],
      subject: LEAD_SUBJECT,
      replyTo: data.email,
    };

    const leadResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: LEAD_SUBJECT,
      html: buildLeadEmailHtml(data, submittedAtDisplay),
    });

    logResendSend('Lead email', leadRequest, leadResult);

    if (leadResult.error) {
      return jsonError(
        'Unable to send your message. Please try again or email support@hasbrando.com.',
        502,
      );
    }

    const autoReplyRequest = {
      submissionId,
      from: fromEmail,
      to: [data.email],
      subject: AUTO_REPLY_SUBJECT,
    };

    const [confirmationResult, sheetsResult, telegramResult] = await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: [data.email],
        subject: AUTO_REPLY_SUBJECT,
        html: buildAutoReplyHtml(data.name),
      }),
      appendLeadToGoogleSheet({ submittedAt, submissionId, data }),
      sendTelegramLeadAlert(data),
    ]);

    if (confirmationResult.status === 'fulfilled') {
      logResendSend('Confirmation email', autoReplyRequest, confirmationResult.value);
    } else {
      logError('Confirmation email threw', confirmationResult.reason, autoReplyRequest);
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
