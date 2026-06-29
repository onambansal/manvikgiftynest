import { BUSINESS, MESSAGES, waLink, telLink } from '../config.js';


export default function FloatingContacts() {
  return (
    <div className="floating">
      <a
        className="floating__btn floating__btn--wa"
        href={waLink(MESSAGES.general)}

        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.06 24l1.69-6.16a11.87 11.87 0 1 1 4.42 4.32L.06 24zM7.93 18.74c1.21.72 2.36 1.15 3.86 1.15a8.7 8.7 0 1 0-8.7-8.7c0 1.59.46 2.78 1.23 4.03l-.79 2.87 2.84-.74zm9.6-4.96c-.13-.22-.48-.35-1-.61-.52-.26-3.07-1.51-3.55-1.69-.48-.17-.83-.26-1.18.26-.35.52-1.35 1.69-1.65 2.04-.3.35-.61.39-1.13.13-.52-.26-2.2-.81-4.18-2.58-1.55-1.38-2.59-3.08-2.9-3.6-.3-.52-.03-.8.23-1.06.24-.23.52-.61.78-.91.26-.3.35-.52.52-.87.17-.35.09-.65-.04-.91-.13-.26-1.18-2.84-1.61-3.89-.43-1.02-.86-.88-1.18-.9l-1-.02c-.35 0-.91.13-1.39.65-.48.52-1.82 1.78-1.82 4.34 0 2.56 1.87 5.04 2.13 5.39.26.35 3.68 5.62 8.92 7.88 1.25.54 2.22.86 2.98 1.1 1.25.4 2.39.34 3.29.21.99-.15 3.07-1.26 3.5-2.47.43-1.21.43-2.25.3-2.47z" />
        </svg>
      </a>
      <a
        className="floating__btn floating__btn--call"
        href={telLink(BUSINESS.phones[0])}
        aria-label="Call"
        title="Call us"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z" />
        </svg>
      </a>
      <a
        className="floating__btn floating__btn--ig"
        href={BUSINESS.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Follow on Instagram"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}
