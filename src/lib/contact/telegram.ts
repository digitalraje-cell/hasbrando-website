import type { ContactFormPayload } from './types';
import { logError, logInfo } from './logger';

function escapeTelegram(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function buildTelegramMessage(data: ContactFormPayload): string {
  return [
    '🚀 <b>New HasBrando Lead</b>',
    '',
    `👤 <b>Name:</b> ${escapeTelegram(data.name)}`,
    `📧 <b>Email:</b> ${escapeTelegram(data.email)}`,
    `📱 <b>Phone:</b> ${escapeTelegram(data.phone)}`,
    `🏢 <b>Business:</b> ${escapeTelegram(data.business || '—')}`,
    `🌐 <b>Website:</b> ${escapeTelegram(data.websiteUrl || '—')}`,
    `🛠 <b>Services:</b> ${escapeTelegram(data.services || '—')}`,
    `💰 <b>Revenue:</b> ${escapeTelegram(data.revenue || '—')}`,
    '',
    '🎯 <b>Challenge:</b>',
    escapeTelegram(data.challenge),
    '',
    '📝 <b>Message:</b>',
    escapeTelegram(data.message || '—'),
  ].join('\n');
}

export async function sendTelegramLeadAlert(data: ContactFormPayload): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    logInfo('Telegram alert skipped — bot not configured');
    return false;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: buildTelegramMessage(data),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const json = (await res.json()) as { ok?: boolean; description?: string };

    if (!res.ok || !json.ok) {
      logError('Telegram alert failed', undefined, {
        status: res.status,
        description: json.description,
      });
      return false;
    }

    logInfo('Telegram alert sent', { chatId, email: data.email });
    return true;
  } catch (err) {
    logError('Telegram alert error', err, { email: data.email });
    return false;
  }
}
