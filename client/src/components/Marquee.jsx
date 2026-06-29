const defaultItems = [
  'Corporate Gifting',
  'Personalized Hampers',
  'Employee Appreciation',
  'Promotional Merchandise',
  'Eco-Friendly Gifts',
  'Pan India Delivery',
  'Custom Branding',
  'Festive Hampers',
];

export default function Marquee({ items = defaultItems }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t} <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
