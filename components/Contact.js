"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { services, site } from "@/content/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () =>
    [
      `Hi ${site.owner}, I'd like to enquire about a shoot.`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      form.date && `Date: ${form.date}`,
      form.message && `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener");
  };

  const sendEmail = () => {
    const subject = `Shoot enquiry${form.service ? ` — ${form.service}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildMessage()
    )}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <Reveal>
            <p className="eyebrow">Let's talk</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2 contact__title">
              Have a date in <em>mind?</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Tell us about your event and we'll get back with availability and packages. We travel all over Chennai.
            </p>
          </Reveal>

          <Reveal delay={240} className="contact__cards">
            <a href={`tel:+91${site.phone}`} className="contact__card">
              <span className="label">Call</span>
              <strong>{site.phoneDisplay}</strong>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="label">WhatsApp</span>
              <strong>Chat with us</strong>
            </a>
            <a href={`mailto:${site.email}`} className="contact__card contact__card--wide">
              <span className="label">Email</span>
              <strong>{site.email}</strong>
            </a>
            <div className="contact__card contact__card--wide">
              <span className="label">Studio</span>
              <strong>{site.address}</strong>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="contact__form-wrap">
          <form className="form" onSubmit={sendWhatsApp}>
            <div className="field">
              <input id="name" required placeholder=" " value={form.name} onChange={update("name")} />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="field">
              <input
                id="phone"
                type="tel"
                required
                placeholder=" "
                value={form.phone}
                onChange={update("phone")}
              />
              <label htmlFor="phone">Phone number</label>
            </div>
            <div className="form__row">
              <div className="field">
                <select id="service" required value={form.service} onChange={update("service")}>
                  <option value="" disabled hidden />
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
                <label htmlFor="service">Service</label>
              </div>
              <div className="field">
                <input id="date" type="date" placeholder=" " value={form.date} onChange={update("date")} />
                <label htmlFor="date" className="is-fixed">
                  Event date
                </label>
              </div>
            </div>
            <div className="field">
              <textarea
                id="message"
                rows={4}
                placeholder=" "
                value={form.message}
                onChange={update("message")}
              />
              <label htmlFor="message">Venue, timings, anything else…</label>
            </div>
            <div className="form__actions">
              <button type="submit" className="btn">
                Send on WhatsApp
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
              <button type="button" className="btn btn--ghost" onClick={sendEmail}>
                Send by email
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
