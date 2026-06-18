'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import { PinIcon, PhoneIcon, MailIcon, ClockIcon } from '@/lib/icons';

const services = [
  'Indoor Signs', 'Outdoor Signs', 'Vehicle Wraps',
  'Banners & Vinyl', 'Trade Show Displays', 'Other / Not Sure',
];

export default function Contact() {
  const [note, setNote] = useState({ msg: '', ok: false });
  const [sending, setSending] = useState(false);

  function mailto(d) {
    const subject = encodeURIComponent(`Quote Request — ${d.service} (${d.name})`);
    const body = encodeURIComponent(
      `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nService: ${d.service}\n\nDetails:\n${d.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),
    };

    if (!d.name || !d.phone || !d.email) {
      setNote({ msg: 'Please fill in your name, phone, and email.', ok: false });
      return;
    }

    // Use Formspree if configured; otherwise fall back to the visitor's email app.
    if (!site.formspreeId) {
      mailto(d);
      setNote({ msg: `Opening your email app… or call us at ${site.phone}.`, ok: true });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('bad status');
      setNote({ msg: "Thank you! Your request has been sent — we'll be in touch shortly.", ok: true });
      form.reset();
    } catch {
      mailto(d);
      setNote({ msg: `Opening your email app to send the request… or call ${site.phone}.`, ok: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-head__tag">Get In Touch</span>
          <h2>Request Your Free Quote</h2>
          <p>Tell us about your project and we&apos;ll get back to you fast. Prefer to talk? Give us a call — we&apos;re happy to help.</p>

          <ul className="contact__list">
            <li>
              <PinIcon />
              <div>
                <strong>Address</strong>
                <a href={`https://maps.google.com/?q=${site.mapQuery}`} target="_blank" rel="noopener noreferrer">{site.address}</a>
              </div>
            </li>
            <li>
              <PhoneIcon />
              <div><strong>Phone</strong><a href={site.phoneHref}>{site.phone}</a></div>
            </li>
            <li>
              <MailIcon />
              <div><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></div>
            </li>
            <li>
              <ClockIcon />
              <div><strong>Hours</strong><span>{site.hours}</span></div>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service">
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Project Details</label>
            <textarea id="message" name="message" rows={4} />
          </div>
          <button type="submit" className="btn btn--primary btn--block" disabled={sending}>
            {sending ? 'Sending…' : 'Send My Request'}
          </button>
          {note.msg && <p className={`form-note${note.ok ? ' ok' : ''}`}>{note.msg}</p>}
        </form>
      </div>

      <div className="map">
        <iframe
          title="Sign Go Location"
          src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
