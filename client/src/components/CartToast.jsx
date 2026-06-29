import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { FALLBACK_IMAGE } from '../config.js';

/**
 * Slide-in toast shown in the bottom-right when a product is added to the cart.
 * Driven by CartContext `toast` state (auto-dismisses).
 */
export default function CartToast() {
  const { toast, dismissToast } = useCart();
  if (!toast) return null;

  return (
    <div className="cart-toast" role="status" aria-live="polite" key={toast.ts}>
      <img className="cart-toast__img" src={toast.image || FALLBACK_IMAGE} alt="" />
      <div className="cart-toast__body">
        <span className="cart-toast__label">Added to cart ✓</span>
        <span className="cart-toast__name">{toast.name}</span>
      </div>
      <Link to="/cart" className="cart-toast__btn" onClick={dismissToast}>
        View Cart
      </Link>
      <button className="cart-toast__close" aria-label="Dismiss" onClick={dismissToast}>
        ×
      </button>
    </div>
  );
}
