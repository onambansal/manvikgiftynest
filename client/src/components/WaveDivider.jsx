/**
 * Decorative animated SVG wave divider placed between sections.
 * `flip` turns it upside-down; `color` sets the fill (match the next section).
 */
export default function WaveDivider({ flip = false, color = 'var(--cream-2)' }) {
  return (
    <div className={`wave-divider ${flip ? 'wave-divider--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,64 C240,128 480,0 720,48 C960,96 1200,32 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
