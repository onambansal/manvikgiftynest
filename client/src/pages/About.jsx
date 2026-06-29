import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { BUSINESS } from '../config.js';


export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">About {BUSINESS.name}</span>

          <h1 className="page-hero__title">Strengthening relationships, one gift at a time</h1>
          <p className="page-hero__sub">
            A premier corporate gifting company dedicated to exceptional, personalized gifting
            solutions for businesses of all sizes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-grid__media">
            <img
              src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
              alt="Curated corporate gifts"
            />
          </div>
          <div className="about-grid__body">
            <SectionHeading eyebrow="Our Story" title="Thoughtful gifting, beautifully done" />
            <p>
              At {BUSINESS.name}, we believe that a well-chosen gift can make all the difference.

              With a focus on quality, innovation and customer satisfaction, we offer a wide range of
              products that cater to various corporate needs — from client appreciation to employee
              milestones and branded promotions.
            </p>
            <p>
              We are based in <strong>{BUSINESS.city}</strong> and serve clients on a <strong>{BUSINESS.serviceArea}</strong>{' '}

              basis. We are also institutional partners for electrical items, home decor, textiles,
              garments and other products with big brands.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container vm-grid">
          <div className="vm-card">
            <span className="vm-card__icon">◆</span>
            <h3>Our Vision</h3>
            <p>
              To be the leading corporate gifting solution provider, known for our innovation,
              quality and commitment to customer satisfaction.
            </p>
          </div>
          <div className="vm-card">
            <span className="vm-card__icon">✦</span>
            <h3>Our Mission</h3>
            <p>
              To strengthen corporate relationships and enhance employee satisfaction through
              thoughtful, personalized and high-quality gifting solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything you need to gift well"
            center
          />
          <div className="svc-list">
            <ServiceBlock
              title="Corporate Gifting"
              points={[
                'Tailored gift solutions for clients, partners and employees.',
                "Customized gifts that reflect your brand's identity and values.",
                'High-quality products sourced from reputable suppliers.',
              ]}
            />
            <ServiceBlock
              title="Employee Gifting"
              points={[
                'Appreciation gifts to boost morale and engagement.',
                'Personalized gifts for anniversaries and holidays.',
                'Wellness and lifestyle gifts to promote well-being.',
              ]}
            />
            <ServiceBlock
              title="Promotional Products"
              points={[
                "Branded merchandise to enhance your company's visibility.",
                'Custom items for trade shows, conferences and events.',
                'Eco-friendly options to support sustainable practices.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Let's make a lasting impression together</h2>
            <p>Reach out for a tailored gifting proposal.</p>
          </div>
          <Link to="/contact" className="btn btn--gold">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({ title, points }) {
  return (
    <div className="svc-block">
      <h3>{title}</h3>
      <ul>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
