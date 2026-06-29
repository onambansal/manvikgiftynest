import { useCountUp } from '../hooks/useCountUp.js';

/**
 * A single hero stat with count-up animation for numeric values.
 * `value` may be a number (animated) or a string like "Pan India" (static).
 */
export default function Stat({ value, suffix = '', label }) {
  const { ref, display } = useCountUp(value, { suffix });
  return (
    <div ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}
