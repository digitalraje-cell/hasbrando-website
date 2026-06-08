type LogLevel = 'info' | 'warn' | 'error';

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

export function logError(message: string, error?: unknown, meta?: Record<string, unknown>) {
  if (error && typeof error === 'object') {
    const err = error as { name?: string; message?: string; statusCode?: number };
    prefix('error', message, {
      ...meta,
      errorName: err.name,
      errorMessage: err.message,
      statusCode: err.statusCode,
      raw: JSON.stringify(error),
    });
  } else if (error !== undefined) {
    prefix('error', message, { ...meta, error: String(error) });
  } else {
    prefix('error', message, meta);
  }
}
