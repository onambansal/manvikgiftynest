import { Helmet } from 'react-helmet-async';
import {
  BUSINESS,
  BUSINESS_DERIVED,
  absoluteUrl,
  localBusinessJsonLd,
} from '../config.js';

/**
 * Per-page SEO: <title>, meta description, canonical URL,
 * Open Graph + Twitter cards, and (on the home page) JSON-LD.
 *
 * Usage:
 *   <Seo title="About Us" description="…" path="/about" />
 */
export default function Seo({
  title,
  description = BUSINESS_DERIVED.metaDescription,
  path = '/',
  image = BUSINESS.ogImage,
  includeJsonLd = false,
}) {
  // Full <title>: "Page — Business Name" (or just business meta title on home).
  const fullTitle = title
    ? `${title} — ${BUSINESS.name}`
    : BUSINESS_DERIVED.metaTitle;
  const canonical = absoluteUrl(path);
  const ogImageUrl = absoluteUrl(image);

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {includeJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd())}
        </script>
      )}
    </Helmet>
  );
}
