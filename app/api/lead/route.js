import { insertLead } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Optional: also email the lead via Formspree (same service as before).
async function notify(lead) {
  const id = process.env.SIGNGO_FORMSPREE_ID;
  if (!id) return false;
  try {
    const res = await fetch(`https://formspree.io/f/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New lead — ${lead.name || 'Website visitor'}`,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        service: lead.service,
        message: lead.message,
        source: lead.source,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  const lead = {
    name: body.name,
    phone: body.phone,
    email: body.email,
    service: body.service,
    message: body.message,
    source: body.source || 'contact form',
  };

  if (!lead.name || (!lead.phone && !lead.email)) {
    return Response.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  const saved = await insertLead(lead);
  const emailed = await notify(lead);

  // Success if we stored it or emailed it.
  return Response.json({ ok: saved.ok || emailed, stored: saved.ok, emailed });
}
