# Manvik Gifty Nest — Website

A premium **static** marketing website for **Manvik Gifty Nest**, a corporate gifting business based in Delhi (serving Pan India).

- **Framework:** React + Vite (single-page app)
- **Hosting:** Vercel (static — no server, no database)
- **Enquiries:** sent via **WhatsApp** or **Email** (no backend / online payment)

## Pages
- Home, About, Products (Corporate / Employee / Promotional), Gallery (Past Designs), Cart, Contact
- Cart + Contact use an **enquiry flow** → opens WhatsApp / email with the details prefilled
- Floating WhatsApp / Call / Instagram buttons

---

## Quick Start (local development)

```bash
npm run install:all   # installs client dependencies
npm run dev           # starts Vite dev server
```
- App: http://localhost:5173

> All commands proxy to the `client/` folder, which contains the actual Vite app.

---

## Editing content

**Products & Gallery** — edit the arrays in **`client/src/data.js`**, then redeploy.
Each product looks like:
```js
{
  id: 13,
  name: 'New Gift Box',
  description: 'Short description shown on the card.',
  category: 'Corporate', // Corporate | Employee | Promotional
  price: 999,            // or null/0 to show "On Request"
  image: 'https://your-image-url.jpg',
  featured: 1,           // 1 = show on Home "Featured" section, else 0
}
```

**Business contact details** (phone, WhatsApp, email, Instagram, location) live in
**`client/src/config.js`** — edit once to update across the whole site.

---

## Production build

```bash
npm run build     # outputs static files to client/dist
npm run preview   # preview the production build locally
```

---

## Deploy to Vercel

1. Push this repo to **GitHub**.
2. In **Vercel** → *New Project* → import the repo.
3. Set **Root Directory = `client`**.
   - Framework Preset: **Vite** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

`client/vercel.json` includes a SPA rewrite so client-side routes (e.g. `/products`)
work on refresh and direct links.

---

## Project structure
```
website/
├── package.json          # convenience scripts (dev/build/preview) → proxy to client
└── client/               # React + Vite app (the deployable site)
    ├── vercel.json       # SPA rewrite for Vercel
    └── src/
        ├── data.js       # products + gallery content (edit here)
        ├── config.js     # business contact details
        ├── api.js        # serves static data (no network calls)
        ├── pages/        # Home, About, Products, Gallery, Cart, Contact, NotFound
        ├── components/   # Navbar, Footer, FloatingContacts, Marquee, ProductCard…
        ├── context/      # CartContext (localStorage cart)
        └── styles/       # global.css (theme)
```
