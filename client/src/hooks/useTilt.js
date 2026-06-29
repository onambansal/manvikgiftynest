import { useEffect, useRef } from 'react';

/**
 * Adds a subtle 3D tilt that follows the cursor over an element.
 * Returns a ref to attach to the card. Disabled for reduced-motion
 * and on touch / small screens (no hover).
 */
export function useTilt({ max = 8, scale = 1.02 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (reduce || !canHover) return;

    let raf = 0;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(${scale})`;
        // expose pointer position for a glare highlight
        el.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
        el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max, scale]);

  return ref;
}
