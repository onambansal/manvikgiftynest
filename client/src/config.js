// ============================================================
//  SINGLE SOURCE OF TRUTH — edit business info here only.
//  Every page/component reads from this file, so updating a
//  value below updates it across the entire website.
// ============================================================
export const BUSINESS = {
  name: 'Manvik Gifty Nest',
  tagline: 'Premium Corporate Gifting Solutions',
  navSubtitle: 'Corporate Gifting', // small text under the logo in the navbar
  phones: ['9711930930', '8826533939'],
  whatsapp: '919711930930', // country code + number, no +
  email: 'manvikgiftynest@gmail.com',
  instagram: 'https://www.instagram.com/manvikgiftynest?igsh=aDc1OHNzZ3p1YW43',
  instagramHandle: '@manvikgiftynest',
  city: 'Delhi',
  serviceArea: 'Pan India',
  country: 'India',
};

// Derived / convenience strings (kept here so copy stays consistent).
export const BUSINESS_DERIVED = {
  // e.g. "Delhi, India · Serving Pan India"
  location: `${BUSINESS.city}, ${BUSINESS.country} · Serving ${BUSINESS.serviceArea}`,
  // e.g. "Delhi · Pan India Delivery"
  locationShort: `${BUSINESS.city} · ${BUSINESS.serviceArea} Delivery`,
  // SEO/meta
  metaTitle: `${BUSINESS.name} — ${BUSINESS.tagline}`,
  metaDescription: `${BUSINESS.name} — Premier corporate gifting company. Personalized corporate, employee and promotional gifts. Based in ${BUSINESS.city}, serving ${BUSINESS.serviceArea}.`,
};

// Backwards-compatible export (previously `BUSINESS.location` was used directly).
BUSINESS.location = BUSINESS_DERIVED.location;

export const CATEGORIES = ['Corporate', 'Employee', 'Promotional'];

// Pre-filled WhatsApp/email messages — all reference the business name once.
export const MESSAGES = {
  general: `Hello ${BUSINESS.name}, I would like to enquire about gifting.`,
  enquiry: `Hello ${BUSINESS.name}, I would like to enquire.`,
  footer: `Hello ${BUSINESS.name}, I have an enquiry.`,
  afterSubmit: `Hi, I just sent an enquiry from your website.`,
  // greeting used to build the detailed cart/contact enquiry body
  cartGreeting: `Hello ${BUSINESS.name}! I'd like to enquire about:`,
  contactGreeting: `Hello ${BUSINESS.name}, I'd like to enquire.`,
};

export const waLink = (text = '') =>
  `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const telLink = (num) => `tel:+91${num}`;
export const mailLink = () => `mailto:${BUSINESS.email}`;

// Apply config-driven document title + meta description at runtime.
// (index.html is static and cannot import this file, so we set it here.)
export function applyDocumentMeta() {
  if (typeof document === 'undefined') return;
  document.title = BUSINESS_DERIVED.metaTitle;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', BUSINESS_DERIVED.metaDescription);
}
