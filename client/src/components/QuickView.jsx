import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { FALLBACK_IMAGE, waLink, MESSAGES } from '../config.js';

/**
 * Product quick-view modal. Shows a larger image + full description and
 * lets the customer add to cart or enquire directly on WhatsApp.
 */
export default function QuickView({ product, onClose }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const waText = `${MESSAGES.enquiry} I'm interested in "${product.name}".`;

  return (
    <div className="qv" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="qv__panel" onClick={(e) => e.stopPropagation()}>
        <button className="qv__close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="qv__media">
          <img src={product.image || FALLBACK_IMAGE} alt={product.name} />
          <span className="qv__cat">{product.category}</span>
        </div>
        <div className="qv__body">
          <h2 className="qv__title">{product.name}</h2>
          {product.price ? (
            <span className="qv__price">₹{Number(product.price).toLocaleString('en-IN')}</span>
          ) : (
            <span className="qv__price qv__price--quote">On Request</span>
          )}
          <p className="qv__desc">{product.description}</p>
          <div className="qv__actions">
            <button className={`btn btn--gold ${added ? 'btn--ok' : ''}`} onClick={handleAdd}>
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
            <a className="btn btn--wa" href={waLink(waText)} target="_blank" rel="noreferrer">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
