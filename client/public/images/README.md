# Product & Gallery Images

Drop your catalogue photos in **this folder** (`client/public/images/`).

## How it works
Each image you place here is reachable on the site at `/images/<filename>`.
In `client/src/data.js`, a product points to its photo like this:

```js
image: '/images/corporate-1.jpg',
```

## Expected filenames (placeholders already wired up)
Upload your photos using these exact names (or rename freely and update the
matching `image:` line in `client/src/data.js`):

**Products**
```
corporate-1.jpg   corporate-2.jpg   corporate-3.jpg   corporate-4.jpg
employee-1.jpg    employee-2.jpg    employee-3.jpg    employee-4.jpg
promo-1.jpg       promo-2.jpg       promo-3.jpg       promo-4.jpg
```

**Gallery / Past Designs**
```
gallery-1.jpg   gallery-2.jpg   gallery-3.jpg
gallery-4.jpg   gallery-5.jpg   gallery-6.jpg
```

## Tips
- Use **lowercase**, **no spaces** (use `-`), formats: `.jpg`, `.png`, or `.webp`.
- Keep each image around **800–1200px wide** so pages load fast.
- If a photo is missing, the site shows a neat placeholder instead of a broken image.
- After adding/replacing images, run `npm run build` (or just redeploy).
