import { useEffect, useRef, useState } from 'react';

/**
 * Counts a number up from 0 → `end` once the element scrolls into view.
 * Returns { ref, value } — attach ref to the element to observe.
 * `end` may be a number; non-numeric values (e.g. "Pan India") are returned as-is.
 */
export function useCountUp(end, { duration = 1400, suffix = '' } = {}) {
  const ref = useRef(null);
  const numeric = typeof end === 'number';
  const [value, setValue] = useState(numeric ? 0 : end);

  useEffect(() => {
    if (!numeric) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(end);
      return;
    }

    let raf;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(entry.target);
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setValue(Math.round(eased * end));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end, duration, numeric]);

  const display = numeric ? `${value.toLocaleString('en-IN')}${suffix}` : value;
  return { ref, display };
}
