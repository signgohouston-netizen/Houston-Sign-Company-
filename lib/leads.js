import { getDb } from './db';

const MAX = 4000;
function s(v) {
  return typeof v === 'string' ? v.slice(0, MAX) : '';
}

// Normalize an incoming lead to a safe, consistent shape.
function clean(data = {}) {
  return {
    name: s(data.name),
    phone: s(data.phone),
    email: s(data.email),
    service: s(data.service),
    message: s(data.message),
    source: s(data.source) || 'website',
  };
}

export async function insertLead(data) {
  const db = await getDb();
  if (!db) return { ok: false, reason: 'no_db' };
  const doc = { ...clean(data), status: 'new', createdAt: new Date() };
  const res = await db.collection('leads').insertOne(doc);
  return { ok: true, id: res.insertedId };
}

export async function getLeads({ limit = 1000 } = {}) {
  const db = await getDb();
  if (!db) return [];
  return db.collection('leads').find({}).sort({ createdAt: -1 }).limit(limit).toArray();
}

export async function updateLeadStatus(id, status) {
  const db = await getDb();
  if (!db) return { ok: false };
  const allowed = ['new', 'contacted', 'quoted', 'won', 'closed'];
  if (!allowed.includes(status)) return { ok: false, reason: 'bad_status' };
  const { ObjectId } = await import('mongodb');
  let _id;
  try {
    _id = new ObjectId(id);
  } catch {
    return { ok: false, reason: 'bad_id' };
  }
  await db.collection('leads').updateOne({ _id }, { $set: { status, updatedAt: new Date() } });
  return { ok: true };
}

export async function leadStats() {
  const db = await getDb();
  if (!db) return null;
  const col = db.collection('leads');
  const total = await col.countDocuments();
  const isoWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const week = await col.countDocuments({ createdAt: { $gte: isoWeekAgo } });
  const open = await col.countDocuments({ status: { $in: ['new', 'contacted', 'quoted'] } });
  return { total, week, open };
}
