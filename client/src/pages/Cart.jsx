import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { waLink, mailLink, MESSAGES } from '../config.js';


export default function Cart() {
  const { items, removeItem, setQty, total, clear } = useCart();
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'done'
  const [error, setError] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildSummary = () =>
    items.map((i) => `• ${i.name} × ${i.qty}${i.price ? ` (₹${i.price})` : ''}`).join('\n');

  const enquiryBody = () =>
    `${MESSAGES.cartGreeting}\n${buildSummary()}\n\n` +

    `Estimated Total: ₹${Number(total).toLocaleString('en-IN')}\n\n` +
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n` +
    `Phone: ${form.phone}\nMessage: ${form.message}`;

  const validate = () => {
    if (!form.name || !form.phone) {
      setError('Please provide at least your name and phone number.');
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
    clear();
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = 'Gifting Enquiry from Website';
    window.location.href = `${mailLink()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      enquiryBody()
    )}`;
    setStatus('done');
    clear();
  };

  if (status === 'done') {
    return (
      <section className="section">
        <div className="container narrow center">
          <div className="success-card">
            <div className="success-card__icon">✓</div>
            <h2>Thank you for your enquiry!</h2>
            <p>
              Your enquiry has been prepared in WhatsApp / email — just hit send. Our team will get
              back to you shortly with a tailored quote.
            </p>
            <div className="cta-row center">
              <a className="btn btn--gold" href={waLink(MESSAGES.afterSubmit)} target="_blank" rel="noreferrer">

                Message on WhatsApp
              </a>
              <Link to="/products" className="btn btn--ghost">Continue Browsing</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero page-hero--sm">
        <div className="container">
          <span className="eyebrow eyebrow--light">Your Cart</span>
          <h1 className="page-hero__title">Review &amp; send your enquiry</h1>
          <p className="page-hero__sub">
            No online payment needed — send your enquiry via WhatsApp or email and we'll prepare a
            tailored quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cart-layout">
          <div className="cart-items">
            {items.length === 0 ? (
              <div className="empty">
                <p>Your cart is empty.</p>
                <Link to="/products" className="btn btn--gold">Browse Products</Link>
              </div>
            ) : (
              items.map((i) => (
                <div className="cart-row" key={i.id}>
                  <img src={i.image} alt={i.name} />
                  <div className="cart-row__info">
                    <h4>{i.name}</h4>
                    <span className="cart-row__cat">{i.category}</span>
                    {i.price ? (
                      <span className="cart-row__price">₹{Number(i.price).toLocaleString('en-IN')}</span>
                    ) : (
                      <span className="cart-row__price">On Request</span>
                    )}
                  </div>
                  <div className="cart-row__qty">
                    <button onClick={() => setQty(i.id, i.qty - 1)}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)}>+</button>
                  </div>
                  <button className="cart-row__remove" onClick={() => removeItem(i.id)} aria-label="Remove">
                    ×
                  </button>
                </div>
              ))
            )}

            {items.length > 0 && (
              <div className="cart-total">
                <span>Estimated Total</span>
                <strong>₹{Number(total).toLocaleString('en-IN')}</strong>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <form className="inquiry" onSubmit={handleWhatsApp}>
              <h3>Send Enquiry</h3>
              <p className="inquiry__hint">Fill in your details, then send via WhatsApp or email.</p>
              <input name="name" placeholder="Your Name *" value={form.name} onChange={update} />
              <input name="company" placeholder="Company" value={form.company} onChange={update} />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={update} />
              <input name="phone" placeholder="Phone *" value={form.phone} onChange={update} />
              <textarea
                name="message"
                rows="3"
                placeholder="Any specific requirements, quantities or customization?"
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
      </section>
    </>
  );
}
