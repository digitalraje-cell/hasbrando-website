const DEFAULT_WINDOW_MS = 60 * 60 * 1000;
const DEFAULT_MAX_REQUESTS = 50;

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

function getConfig() {
  const disabled = process.env.CONTACT_RATE_LIMIT_DISABLED === 'true';
  const max = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? DEFAULT_MAX_REQUESTS);
  const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? DEFAULT_WINDOW_MS);
  return {
    disabled,
    max: Number.isFinite(max) && max > 0 ? max : DEFAULT_MAX_REQUESTS,
    windowMs: Number.isFinite(windowMs) && windowMs > 0 ? windowMs : DEFAULT_WINDOW_MS,
  };
}

export function isRateLimited(key: string): boolean {
  const { disabled, max, windowMs } = getConfig();
  if (disabled) return false;

  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= max) {
    return true;
  }

  entry.count += 1;
  return false;
}

export function getClientIp(forwardedFor: string | null, realIp: string | null): string {
  const fromForwarded = forwardedFor?.split(',')[0]?.trim();
  return fromForwarded || realIp || 'unknown';
}
