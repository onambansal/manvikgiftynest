/** Shimmer placeholder shown while products load. */
export default function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton__media" />
      <div className="skeleton-card__body">
        <div className="skeleton skeleton__line skeleton__line--title" />
        <div className="skeleton skeleton__line" />
        <div className="skeleton skeleton__line skeleton__line--short" />
        <div className="skeleton skeleton__foot">
          <div className="skeleton skeleton__line skeleton__line--price" />
          <div className="skeleton skeleton__btn" />
        </div>
      </div>
    </div>
  );
}
