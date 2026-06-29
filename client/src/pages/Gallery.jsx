import { useEffect, useState } from 'react';
import { api } from '../api';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    api
      .getGallery()
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Past Designs</span>
          <h1 className="page-hero__title">A glimpse of our craftsmanship</h1>
          <p className="page-hero__sub">
            Real gifts and hampers we've designed and delivered for our clients across India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <p className="muted center">Loading gallery…</p>
          ) : items.length ? (
            <div className="masonry">
              {items.map((g) => (
                <figure className="masonry__item" key={g.id} onClick={() => setActive(g)}>
                  <img src={g.image} alt={g.title || 'Past design'} loading="lazy" />
                  {(g.title || g.description) && (
                    <figcaption>
                      {g.title && <strong>{g.title}</strong>}
                      {g.description && <span>{g.description}</span>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <p className="muted center">Gallery coming soon.</p>
          )}
        </div>
      </section>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close">×</button>
          <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={active.title || 'Past design'} />
            {(active.title || active.description) && (
              <figcaption>
                {active.title && <strong>{active.title}</strong>}
                {active.description && <span>{active.description}</span>}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
