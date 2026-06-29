// ============================================================================
//  CATALOGUE DATA  (no backend / database)
// ----------------------------------------------------------------------------
//  HOW TO UPDATE:
//  1. Put your photos in   client/public/images/
//  2. Reference them below as  image: '/images/your-file.jpg'
//  3. Edit name / description / category / price / featured
//  4. Save, then `npm run build` (or just redeploy)
//
//  category  -> 'Corporate' | 'Employee' | 'Promotional'
//  price     -> a number (e.g. 1499)  OR  null  to show "On Request"
//  featured  -> 1 = show on Home page "Featured" section, 0 = don't
//
//  NOTE: The image filenames below are PLACEHOLDERS. Upload matching photos
//        to client/public/images/ (see the README there), or rename freely
//        and update the matching `image:` line.
// ============================================================================

const PLACEHOLDER = '/images/placeholder.svg';

export const PRODUCTS = [
  // ---------------------------- Corporate ----------------------------
  {
    id: 1,
    name: 'Executive Welcome Kit',
    description:
      'Premium leather diary, metal pen and insulated bottle in a custom branded box. Perfect for client onboarding.',
    category: 'Corporate',
    price: 1499,
    image: '/images/corporate-1.jpg',
    featured: 1,
  },
  {
    id: 2,
    name: 'Branded Desk Organizer Set',
    description: 'Wooden desk organizer with engraved logo, sticky notes and a sleek pen holder.',
    category: 'Corporate',
    price: 999,
    image: '/images/corporate-2.jpg',
    featured: 1,
  },
  {
    id: 3,
    name: 'Luxury Leather Portfolio',
    description: 'A4 zippered leather portfolio with notepad and card slots, embossed with your brand.',
    category: 'Corporate',
    price: 1899,
    image: '/images/corporate-3.jpg',
    featured: 0,
  },
  {
    id: 4,
    name: 'Premium Tea & Coffee Hamper',
    description: 'Assorted teas, gourmet coffee and ceramic mugs presented in an elegant gift crate.',
    category: 'Corporate',
    price: 2199,
    image: '/images/corporate-4.jpg',
    featured: 1,
  },

  // ---------------------------- Employee ----------------------------
  {
    id: 5,
    name: 'Work Anniversary Box',
    description: 'Personalized photo frame, congratulatory card and chocolates to celebrate milestones.',
    category: 'Employee',
    price: 899,
    image: '/images/employee-1.jpg',
    featured: 1,
  },
  {
    id: 6,
    name: 'Wellness Self-Care Kit',
    description: 'Scented candle, herbal tea, eye mask and stress ball to promote employee well-being.',
    category: 'Employee',
    price: 1199,
    image: '/images/employee-2.jpg',
    featured: 0,
  },
  {
    id: 7,
    name: 'Festive Celebration Hamper',
    description: 'Dry fruits, sweets and a decorative diya set for Diwali and festive occasions.',
    category: 'Employee',
    price: 1599,
    image: '/images/employee-3.jpg',
    featured: 1,
  },
  {
    id: 8,
    name: 'New Joiner Goodie Bag',
    description: 'Branded tote, notebook, pen, badge and snacks to welcome new team members.',
    category: 'Employee',
    price: 749,
    image: '/images/employee-4.jpg',
    featured: 0,
  },

  // --------------------------- Promotional ---------------------------
  {
    id: 9,
    name: 'Eco-Friendly Bamboo Bottle',
    description: 'Sustainable bamboo and steel water bottle with laser-engraved logo.',
    category: 'Promotional',
    price: 499,
    image: '/images/promo-1.jpg',
    featured: 1,
  },
  {
    id: 10,
    name: 'Custom Branded T-Shirt',
    description: 'Soft cotton tee printed with your event or company branding for trade shows.',
    category: 'Promotional',
    price: 399,
    image: '/images/promo-2.jpg',
    featured: 0,
  },
  {
    id: 11,
    name: 'Conference Lanyard & Badge Set',
    description: 'Durable printed lanyards with custom badge holders for events and conferences.',
    category: 'Promotional',
    price: 149,
    image: '/images/promo-3.jpg',
    featured: 0,
  },
  {
    id: 12,
    name: 'Recycled Notebook & Pen',
    description: 'Eco-friendly recycled paper notebook paired with a plantable seed pen.',
    category: 'Promotional',
    price: 299,
    image: '/images/promo-4.jpg',
    featured: 1,
  },
];

// ----------------------------- Gallery / Past Designs -----------------------------
// Showcase of work you've delivered. Upload photos as gallery-1.jpg ... gallery-6.jpg
export const GALLERY = [
  { id: 1, title: 'Diwali Corporate Hampers', description: 'Custom festive hampers delivered Pan India.', image: '/images/gallery-1.jpg' },
  { id: 2, title: 'Branded Welcome Kits', description: 'Onboarding kits for a leading IT firm.', image: '/images/gallery-2.jpg' },
  { id: 3, title: 'Eco Promotional Range', description: 'Sustainable merchandise for an event.', image: '/images/gallery-3.jpg' },
  { id: 4, title: 'Employee Appreciation Boxes', description: 'Personalized anniversary gifts.', image: '/images/gallery-4.jpg' },
  { id: 5, title: 'Luxury Leather Sets', description: 'Premium gifts for executives.', image: '/images/gallery-5.jpg' },
  { id: 6, title: 'Festive Sweet Hampers', description: 'Curated sweets and dry fruits.', image: '/images/gallery-6.jpg' },
];

// Fallback shown when an image file is missing / not yet uploaded.
export const FALLBACK_IMAGE = PLACEHOLDER;
