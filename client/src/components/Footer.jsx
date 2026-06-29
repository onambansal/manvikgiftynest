import { Link } from 'react-router-dom';
import { BUSINESS, BUSINESS_DERIVED, MESSAGES, telLink, mailLink, waLink } from '../config.js';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="brand brand--footer">
            <span className="brand__mark">M</span>
            <span className="brand__name">{BUSINESS.name}</span>
          </div>
          <p className="footer__tagline">
            Thoughtful, personalized and high-quality gifting solutions that strengthen corporate
            relationships and delight teams.
          </p>
          <p className="footer__loc">{BUSINESS.location}</p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/gallery">Past Designs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Categories</h4>
          <Link to="/products">Corporate Gifting</Link>
          <Link to="/products">Employee Gifting</Link>
          <Link to="/products">Promotional Products</Link>
        </div>

        <div className="footer__col">
          <h4>Get in Touch</h4>
          {BUSINESS.phones.map((p) => (
            <a key={p} href={telLink(p)}>
              +91 {p}
            </a>
          ))}
          <a href={mailLink()}>{BUSINESS.email}</a>
          <a href={waLink(MESSAGES.footer)} target="_blank" rel="noreferrer">

            WhatsApp Us
          </a>
          <a href={BUSINESS.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span>{BUSINESS_DERIVED.locationShort}</span>

        </div>
      </div>
    </footer>
  );
}
