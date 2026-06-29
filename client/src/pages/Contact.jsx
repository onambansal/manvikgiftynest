import { useState } from 'react';
import { BUSINESS, MESSAGES, telLink, mailLink, waLink } from '../config.js';


export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'done'
  const [error, setError] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const enquiryBody = () =>
    `${MESSAGES.contactGreeting}\n\n` +
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n` +

    `Phone: ${form.phone}\nMessage: ${form.message}`;

  const validate = () => {
    if (!form.name || !form.phone) {
      setError('Please provide your name and phone number.');
      return false;
    }
    setError('');
    return true;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(waLink(enquiryBody()), '_blank', 'noopener');
    setStatus('done');
    setForm({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = 'Gifting Enquiry from Website';
    window.location.href = `${mailLink()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      enquiryBody()
    )}`;
    setStatus('done');
    setForm({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Contact Us</span>
          <h1 className="page-hero__title">Let's plan your perfect gift</h1>
          <p className="page-hero__sub">
            Reach out for bulk orders, custom branding or any gifting requirement. We're based in
            {' '}{BUSINESS.city} and deliver {BUSINESS.serviceArea}.

          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h3>Get in touch directly</h3>

            <div className="contact-card">
              <span className="contact-card__label">Call / Mobile</span>
              {BUSINESS.phones.map((p) => (
                <a key={p} href={telLink(p)} className="contact-card__value">+91 {p}</a>
              ))}
            </div>

            <div className="contact-card">
              <span className="contact-card__label">WhatsApp</span>
              <a
                className="contact-card__value"
                href={waLink(MESSAGES.enquiry)}

                target="_blank"
                rel="noreferrer"
              >
                Chat with us instantly
              </a>
            </div>

            <div className="contact-card">
              <span className="contact-card__label">Email</span>
              <a className="contact-card__value" href={mailLink()}>{BUSINESS.email}</a>
            </div>

            <div className="contact-card">
              <span className="contact-card__label">Instagram</span>
              <a className="contact-card__value" href={BUSINESS.instagram} target="_blank" rel="noreferrer">
                {BUSINESS.instagramHandle}
              </a>

            </div>

            <div className="contact-card">
              <span className="contact-card__label">Location</span>
              <span className="contact-card__value">{BUSINESS.location}</span>
            </div>
          </div>

          <div className="contact-form-wrap">
            {status === 'done' ? (
              <div className="success-card">
                <div className="success-card__icon">✓</div>
                <h2>Almost there!</h2>
                <p>
                  Your message has been prepared in WhatsApp / email — just hit send and our team
                  will get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="inquiry" onSubmit={handleWhatsApp}>
                <h3>Send us a message</h3>
                <input name="name" placeholder="Your Name *" value={form.name} onChange={update} />
                <input name="company" placeholder="Company" value={form.company} onChange={update} />
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={update} />
                <input name="phone" placeholder="Phone *" value={form.phone} onChange={update} />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your gifting requirement…"
                  value={form.message}
                  onChange={update}
                />
                {error && <p className="form-error">{error}</p>}
                <button className="btn btn--wa full" type="submit">
                  Send via WhatsApp
                </button>
                <button className="btn btn--gold full" type="button" onClick={handleEmail}>
                  Send via Email
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
