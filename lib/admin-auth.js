import crypto from 'crypto';

export const COOKIE_NAME = 'sg_admin';
const SECRET = process.env.ADMIN_SESSION_SECRET || 'dev-only-secret-set-ADMIN_SESSION_SECRET';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// Constant-time compare of the submitted password against ADMIN_PASSWORD.
export function checkPassword(input) {
  const pw = process.env.ADMIN_PASSWORD || '';
  if (!pw) return false; // no password configured -> deny
  const a = Buffer.from(String(input || ''));
  const b = Buffer.from(pw);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

// Create a signed session token: "admin.<ts>.<hmac>"
export function makeToken() {
  const payload = `admin.${Date.now()}`;
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== 'string') return false;
  const idx = token.lastIndexOf('.');
  if (idx < 0) return false;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  if (!payload.startsWith('admin.')) return false;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  const ts = Number(payload.split('.')[1]);
  if (!ts || Date.now() - ts > MAX_AGE_MS) return false;
  return true;
}

export const COOKIE_MAX_AGE = MAX_AGE_MS / 1000;
