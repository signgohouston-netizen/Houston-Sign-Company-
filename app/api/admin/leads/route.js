import { cookies } from 'next/headers';
import { verifyToken, COOKIE_NAME } from '@/lib/admin-auth';
import { getLeads, updateLeadStatus, leadStats } from '@/lib/leads';
import { hasDb } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function authed() {
  return verifyToken(cookies().get(COOKIE_NAME)?.value);
}

function serialize(l) {
  return {
    id: l._id?.toString(),
    name: l.name || '',
    phone: l.phone || '',
    email: l.email || '',
    service: l.service || '',
    message: l.message || '',
    source: l.source || '',
    status: l.status || 'new',
    createdAt: l.createdAt ? new Date(l.createdAt).toISOString() : null,
  };
}

export async function GET() {
  if (!authed()) return Response.json({ ok: false }, { status: 401 });
  const leads = await getLeads();
  return Response.json({
    ok: true,
    dbConfigured: hasDb(),
    stats: (await leadStats()) || { total: 0, week: 0, open: 0 },
    leads: leads.map(serialize),
  });
}

export async function PATCH(req) {
  if (!authed()) return Response.json({ ok: false }, { status: 401 });
  let id, status;
  try {
    ({ id, status } = await req.json());
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  const res = await updateLeadStatus(id, status);
  return Response.json(res, { status: res.ok ? 200 : 400 });
}
