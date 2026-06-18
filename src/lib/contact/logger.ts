type LogLevel = 'info' | 'warn' | 'error';

type ResendErrorShape = {
  name?: string;
  message?: string;
  statusCode?: number | null;
};

type ResendSendResult = {
  data?: { id?: string } | null;
  error?: ResendErrorShape | null;
  headers?: Record<string, string> | null;
};

function prefix(level: LogLevel, message: string, meta?: Record<string, unknown>) {
  const tag = `[contact] ${message}`;
  if (meta && Object.keys(meta).length > 0) {
    console[level](tag, meta);
  } else {
    console[level](tag);
  }
}

export function logInfo(message: string, meta?: Record<string, unknown>) {
  prefix('info', message, meta);
}

export function logWarn(message: string, meta?: Record<string, unknown>) {
  prefix('warn', message, meta);
}

export function formatResendError(error: unknown): Record<string, unknown> {
  if (!error || typeof error !== 'object') {
    return { error: error === undefined ? 'unknown' : String(error) };
  }

  const err = error as ResendErrorShape;
  return {
    resendErrorName: err.name ?? null,
    resendErrorMessage: err.message ?? null,
    resendStatusCode: err.statusCode ?? null,
    resendErrorJson: JSON.stringify(error),
  };
}

export function logError(message: string, error?: unknown, meta?: Record<string, unknown>) {
  if (error !== undefined) {
    prefix('error', message, { ...meta, ...formatResendError(error) });
  } else {
    prefix('error', message, meta);
  }
}

export function logResendSend(
  label: string,
  request: {
    submissionId: string;
    from: string;
    to: string[];
    subject: string;
    replyTo?: string;
  },
  result: ResendSendResult,
) {
  const baseMeta = {
    submissionId: request.submissionId,
    from: request.from,
    to: request.to.join(', '),
    subject: request.subject,
    replyTo: request.replyTo ?? null,
    resendId: result.data?.id ?? null,
    resendHeaders: result.headers ? JSON.stringify(result.headers) : null,
    resendDataJson: result.data ? JSON.stringify(result.data) : null,
    resendFullResponse: JSON.stringify({ data: result.data, error: result.error }),
  };

  if (result.error) {
    logError(`${label} failed (Resend)`, result.error, baseMeta);
    return;
  }

  logInfo(`${label} succeeded (Resend)`, baseMeta);
}
