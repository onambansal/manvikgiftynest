import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { FALLBACK_IMAGE } from '../config.js';
import { useTilt } from '../hooks/useTilt.js';
import QuickView from './QuickView.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [quick, setQuick] = useState(false);
  const tiltRef = useTilt({ max: 7 });


  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <>
      <article className="pcard pcard--tilt pcard--lux" ref={tiltRef}>
        <span className="pcard__ring" aria-hidden="true" />
        <span className="pcard__glare" aria-hidden="true" />

        <button
          className="pcard__media"
          onClick={() => setQuick(true)}
          aria-label={`Quick view ${product.name}`}
        >

          <img
            src={product.image || FALLBACK_IMAGE}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
          <span className="pcard__cat">{product.category}</span>
          <span className="pcard__quick">Quick View</span>
        </button>
        <div className="pcard__body">
          <h3 className="pcard__title">{product.name}</h3>
          <p className="pcard__desc">{product.description}</p>
          <div className="pcard__foot">
            {product.price ? (
              <span className="pcard__price">₹{Number(product.price).toLocaleString('en-IN')}</span>
            ) : (
              <span className="pcard__price pcard__price--quote">On Request</span>
            )}
            <button className={`btn btn--sm ${added ? 'btn--ok' : ''}`} onClick={handleAdd}>
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </article>

      {quick && <QuickView product={product} onClose={() => setQuick(false)} />}
    </>
  );
}
