import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wraps page content and plays a brief fade/slide in on every route change,
 * for a smooth, premium feel. No-op for reduced-motion users.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [stage, setStage] = useState('in');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    setStage('out');
    const id = requestAnimationFrame(() => setStage('in'));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <div className={`page-transition page-transition--${stage}`}>{children}</div>;
}
