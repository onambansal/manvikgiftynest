import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, sub, center }) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-head__title">
        {title}
        <span className="section-head__underline" aria-hidden="true" />
      </h2>
      {sub && <p className="section-head__sub">{sub}</p>}
    </Reveal>
  );
}
