import { useEffect, useRef } from 'react';

/**
 * Decorative hero effects:
 *  - parallax drift of hero art images on scroll + mouse
 *  - floating sparkle particles
 * Purely visual; skipped entirely for reduced-motion users.
 */
export default function HeroFx() {
  const layerRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const imgs = document.querySelectorAll('.hero__img');
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        imgs.forEach((img, i) => {
          const speed = i === 0 ? 0.06 : -0.05;
          img.style.transform = `translateY(${y * speed}px)`;
        });
      });
    };

    const onMouse = (e) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      imgs.forEach((img, i) => {
        const f = i === 0 ? 14 : -10;
        img.style.setProperty('--px', `${cx * f}px`);
        img.style.setProperty('--py', `${cy * f}px`);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Pre-generate sparkle particles with random positions/timings.
  const sparkles = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 53) % 100}%`,
    delay: `${(i * 0.7) % 6}s`,
    duration: `${6 + (i % 5)}s`,
    size: `${3 + (i % 4)}px`,
  }));

  return (
    <div className="hero-fx" ref={layerRef} aria-hidden="true">
      <span className="hero-fx__blob hero-fx__blob--1" />
      <span className="hero-fx__blob hero-fx__blob--2" />
      <div className="hero-fx__sparkles">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="hero-fx__sparkle"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
