import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/lib/admin-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST() {
  cookies().set(COOKIE_NAME, '', { httpOnly: true, path: '/', maxAge: 0 });
  return Response.json({ ok: true });
}
