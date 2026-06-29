import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('mgn_cart') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('mgn_cart', JSON.stringify(items));
  }, [items]);

  // Toast shown when an item is added.
  const [toast, setToast] = useState(null);
  // Bumps each time an item is added (drives the navbar badge bounce).
  const [bump, setBump] = useState(0);

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { ...product, qty }];
    });
    setBump((b) => b + 1);
    setToast({ name: product.name, image: product.image, ts: Date.now() });
  };

  const dismissToast = () => setToast(null);

  // Auto-dismiss the toast after a few seconds.
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);


  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const setQty = (id, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    );

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((s, i) => s + (i.price || 0) * i.qty, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    removeItem,
    setQty,
    clear,
    count,
    total,
    toast,
    dismissToast,
    bump,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
