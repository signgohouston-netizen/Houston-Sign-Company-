'use client';

import { useState, useRef, useEffect } from 'react';
import { site } from '@/lib/site';

const GREETING =
  "Hi! I'm the Sign Go assistant 👋 Ask me anything about signs, LED displays, vehicle wraps, pricing, or service areas — or tell me about your project and I'll get the details to our team for a free quote.";

const SUGGESTIONS = [
  'I need a quote for a storefront sign',
  'Do you make full-color LED signs?',
  'Do you serve Katy, TX?',
  'How does the process work?',
];

export default function ChatAssistant() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, loading]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Only send role + content (the API ignores anything else).
        body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.content })) }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      if (data.sent) setSent(true);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: `Sorry — something went wrong. Please call us at ${site.phone}.` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="chat">
      <div className="chat__head">
        <span className="chat__dot" />
        <div>
          <strong>Sign Go Assistant</strong>
          <span className="chat__status">Online • typically replies in seconds</span>
        </div>
      </div>

      <div className="chat__log" ref={logRef}>
        {messages.map((m, i) => (
          <div key={i} className={`msg msg--${m.role}`}>
            {m.content.split('\n').map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        ))}

        {loading && (
          <div className="msg msg--assistant">
            <span className="typing"><span /><span /><span /></span>
          </div>
        )}

        {sent && (
          <div className="chat__sent">✓ Your details were sent to the Sign Go team — we&apos;ll be in touch soon!</div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="chat__chips">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" className="chip" onClick={() => send(s)}>{s}</button>
          ))}
        </div>
      )}

      <div className="chat__input">
        <textarea
          rows={1}
          value={input}
          placeholder="Type your message…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={loading}
        />
        <button type="button" className="btn btn--primary" onClick={() => send()} disabled={loading || !input.trim()}>
          Send
        </button>
      </div>
      <p className="chat__note">Prefer to talk? Call <a href={site.phoneHref}>{site.phone}</a> — Mon–Fri 9am–6pm.</p>
    </div>
  );
}
