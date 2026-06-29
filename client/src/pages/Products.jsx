import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Seo from '../components/Seo.jsx';
import SkeletonCard from '../components/SkeletonCard.jsx';
import { api } from '../api';
import { CATEGORIES } from '../config.js';



export default function Products() {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .getProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Seo
        title="Products"
        description="Browse our curated corporate, employee and promotional gifting range — fully customizable to your brand. Bulk orders welcome, Pan India delivery."
        path="/products"
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Our Catalogue</span>

          <h1 className="page-hero__title">Explore our gifting range</h1>
          <p className="page-hero__sub">
            Browse curated gifts across Corporate, Employee and Promotional categories. Everything
            is fully customizable to your brand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            {['All', ...CATEGORIES].map((c) => (
              <button
                key={c}
                className={`chip ${active === c ? 'chip--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid-products">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filtered.length ? (
            <div className="grid-products">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="muted center">No products in this category yet.</p>
          )}

        </div>
      </section>
    </>
  );
}
