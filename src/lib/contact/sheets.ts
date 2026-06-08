import { JWT } from 'google-auth-library';
import type { ContactFormPayload } from './types';
import { logError, logInfo, logWarn } from './logger';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export type SheetLeadRow = {
  submittedAt: string;
  submissionId: string;
  data: ContactFormPayload;
};

function getSheetsConfig() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? 'Leads';

  if (!clientEmail || !privateKey || !spreadsheetId) {
    return null;
  }

  return { clientEmail, privateKey, spreadsheetId, sheetName };
}

async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const auth = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });
  const response = await auth.getAccessToken();
  const token = typeof response === 'string' ? response : response?.token;
  if (!token) throw new Error('Failed to obtain Google access token');
  return token;
}

function buildRow({ submittedAt, submissionId, data }: SheetLeadRow): string[] {
  return [
    submittedAt,
    data.name,
    data.email,
    data.phone,
    data.business || '',
    data.websiteUrl || '',
    data.services || '',
    data.revenue || '',
    data.challenge,
    data.message || '',
    'Contact Page',
    submissionId,
  ];
}

async function isDuplicateSubmission(
  accessToken: string,
  spreadsheetId: string,
  sheetName: string,
  submissionId: string,
): Promise<boolean> {
  const range = encodeURIComponent(`${sheetName}!L:L`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?majorDimension=COLUMNS`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) return false;

  const json = (await res.json()) as { values?: string[][] };
  const ids = json.values?.[0] ?? [];
  return ids.includes(submissionId);
}

export async function appendLeadToGoogleSheet(row: SheetLeadRow): Promise<boolean> {
  const config = getSheetsConfig();
  if (!config) {
    logInfo('Google Sheets skipped — credentials not configured');
    return false;
  }

  const { clientEmail, privateKey, spreadsheetId, sheetName } = config;

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);

    const duplicate = await isDuplicateSubmission(accessToken, spreadsheetId, sheetName, row.submissionId);
    if (duplicate) {
      logWarn('Google Sheets skipped — duplicate submission id', { submissionId: row.submissionId });
      return false;
    }

    const range = encodeURIComponent(`${sheetName}!A:L`);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [buildRow(row)] }),
    });

    if (!res.ok) {
      const body = await res.text();
      logError('Google Sheets append failed', undefined, { status: res.status, body });
      return false;
    }

    logInfo('Google Sheet row saved', {
      spreadsheetId,
      sheetName,
      submissionId: row.submissionId,
      email: row.data.email,
    });
    return true;
  } catch (err) {
    logError('Google Sheets error', err, { submissionId: row.submissionId });
    return false;
  }
}

export const SHEETS_HEADER_ROW = [
  'Submitted At',
  'Full Name',
  'Email',
  'Phone',
  'Business Name',
  'Website',
  'Services Interested In',
  'Monthly Revenue',
  'Biggest Challenge',
  'Message',
  'Source',
  'Submission ID',
] as const;
