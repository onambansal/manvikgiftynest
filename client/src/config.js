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
  // Live site URL (no trailing slash) — used for canonical + Open Graph + sitemap.
  siteUrl: 'https://manvikgiftynest-re.vercel.app',
  // Social share image (place a 1200x630 image at client/public/og-image.jpg).
  ogImage: '/og-image.jpg',
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

// Local fallback image (avoids dead external placeholder hosts).
export const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="#f3eee2"/><text x="50%" y="50%" font-family="Georgia,serif" font-size="34" fill="#c9a24b" text-anchor="middle" dominant-baseline="middle">Manvik Gift</text></svg>`
  );


// Absolute URL helper for canonical / OG tags.
export const absoluteUrl = (path = '/') =>
  `${BUSINESS.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

// Apply config-driven document title + meta description at runtime.
// (Fallback for any page that doesn't render the <Seo> component.)
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

// JSON-LD structured data for a LocalBusiness (helps Google rich results).

export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: BUSINESS_DERIVED.metaDescription,
  url: BUSINESS.siteUrl,
  email: BUSINESS.email,
  image: absoluteUrl(BUSINESS.ogImage),
  telephone: BUSINESS.phones.map((p) => `+91${p}`),
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressCountry: BUSINESS.country,
  },
  areaServed: BUSINESS.serviceArea,
  sameAs: [BUSINESS.instagram],
});


