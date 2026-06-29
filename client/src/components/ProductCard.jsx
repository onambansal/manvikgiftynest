import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="pcard">
      <div className="pcard__media">
        <img
          src={product.image || 'https://via.placeholder.com/600x600?text=Gift'}
          alt={product.name}
          loading="lazy"
        />
        <span className="pcard__cat">{product.category}</span>
      </div>
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
  );
}
