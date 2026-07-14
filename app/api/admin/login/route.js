import { cookies } from 'next/headers';
import { checkPassword, makeToken, COOKIE_NAME, COOKIE_MAX_AGE } from '@/lib/admin-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let password = '';
  try {
    ({ password } = await req.json());
  } catch {
    /* ignore */
  }

  // Small delay to blunt brute-forcing.
  await new Promise((r) => setTimeout(r, 400));

  if (!checkPassword(password)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  cookies().set(COOKIE_NAME, makeToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });

  return Response.json({ ok: true });
}
