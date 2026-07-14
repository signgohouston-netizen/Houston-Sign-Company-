'use client';

import { useState, useEffect, useCallback } from 'react';

const STATUSES = ['new', 'contacted', 'quoted', 'won', 'closed'];

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [data, setData] = useState({ leads: [], stats: { total: 0, week: 0, open: 0 }, dbConfigured: true });
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [q, setQ] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/admin/leads/', { cache: 'no-store' });
    if (res.status === 401) {
      setAuthed(false);
      setChecking(false);
      setLoading(false);
      return;
    }
    const d = await res.json();
    setData(d);
    setAuthed(true);
    setChecking(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e) {
    e.preventDefault();
    setLoginErr('');
    setLoggingIn(true);
    const res = await fetch('/api/admin/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    setLoggingIn(false);
    if (res.ok) {
      setPassword('');
      load();
    } else {
      setLoginErr('Incorrect password.');
    }
  }

  async function logout() {
    await fetch('/api/admin/logout/', { method: 'POST' });
    setAuthed(false);
  }

  async function setStatus(id, status) {
    setData((d) => ({ ...d, leads: d.leads.map((l) => (l.id === id ? { ...l, status } : l)) }));
    await fetch('/api/admin/leads/', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
  }

  if (checking) {
    return <div className="admin admin--center"><p className="admin__muted">Loading…</p></div>;
  }

  if (!authed) {
    return (
      <div className="admin admin--center">
        <form className="admin__login" onSubmit={login}>
          <h1>Sign Go Admin</h1>
          <p className="admin__muted">Enter your password to view leads.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
          />
          {loginErr && <p className="admin__err">{loginErr}</p>}
          <button type="submit" className="btn btn--primary btn--block" disabled={loggingIn}>
            {loggingIn ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }

  const leads = data.leads
    .filter((l) => filter === 'all' || l.status === filter)
    .filter((l) => {
      if (!q) return true;
      const s = `${l.name} ${l.phone} ${l.email} ${l.service} ${l.message} ${l.source}`.toLowerCase();
      return s.includes(q.toLowerCase());
    });

  return (
    <div className="admin">
      <div className="admin__bar">
        <div>
          <h1>Leads Dashboard</h1>
          <p className="admin__muted">Contact form &amp; AI assistant submissions</p>
        </div>
        <div className="admin__baractions">
          <button className="btn btn--blue" onClick={load} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh'}</button>
          <button className="btn btn--ghost btn--dark" onClick={logout}>Log out</button>
        </div>
      </div>

      {!data.dbConfigured && (
        <div className="admin__warn">
          MongoDB is not connected yet. Set <code>MONGODB_URI</code> in your environment to start
          storing and viewing leads here.
        </div>
      )}

      <div className="admin__stats">
        <div className="astat"><strong>{data.stats.total}</strong><span>Total leads</span></div>
        <div className="astat"><strong>{data.stats.week}</strong><span>This week</span></div>
        <div className="astat"><strong>{data.stats.open}</strong><span>Open</span></div>
      </div>

      <div className="admin__filters">
        <input className="admin__search" placeholder="Search leads…" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="admin__chips">
          {['all', ...STATUSES].map((s) => (
            <button key={s} className={`achip${filter === s ? ' active' : ''}`} onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>
      </div>

      <div className="admin__tablewrap">
        {leads.length === 0 ? (
          <p className="admin__muted admin__empty">No leads to show yet.</p>
        ) : (
          <table className="admin__table">
            <thead>
              <tr><th>Date</th><th>Name</th><th>Contact</th><th>Service</th><th>Message</th><th>Source</th><th>Status</th></tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id}>
                  <td className="nowrap">{fmtDate(l.createdAt)}</td>
                  <td>{l.name}</td>
                  <td>
                    {l.phone && <a href={`tel:${l.phone}`}>{l.phone}</a>}
                    {l.phone && l.email && <br />}
                    {l.email && <a href={`mailto:${l.email}`}>{l.email}</a>}
                  </td>
                  <td>{l.service}</td>
                  <td className="admin__msg">{l.message}</td>
                  <td><span className="asrc">{l.source}</span></td>
                  <td>
                    <select className={`astatus astatus--${l.status}`} value={l.status} onChange={(e) => setStatus(l.id, e.target.value)}>
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
