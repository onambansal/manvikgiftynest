import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import Stat from '../components/Stat.jsx';
import SkeletonCard from '../components/SkeletonCard.jsx';
import HeroFx from '../components/HeroFx.jsx';
import WaveDivider from '../components/WaveDivider.jsx';

import { api } from '../api';
import { BUSINESS } from '../config.js';




const services = [
  {
    title: 'Corporate Gifting',
    desc: 'Tailored gift solutions for clients, partners and employees — customized to reflect your brand identity.',
    img: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Employee Gifting',
    desc: 'Appreciation, anniversary and festive gifts that boost morale, engagement and well-being.',
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Promotional Products',
    desc: 'Branded, eco-friendly merchandise for trade shows, conferences and events that boost visibility.',
    img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
  },
];

const whyUs = [
  { t: 'Competitive Pricing', d: 'Attractive prices without compromising on quality.' },
  { t: 'Full Customization', d: 'Unique, memorable gifts aligned with your brand.' },
  { t: 'Quality Assurance', d: 'Only the finest products that leave a lasting impression.' },
  { t: 'Timely Delivery', d: 'Prompt delivery to meet your deadlines, Pan India.' },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    api
      .getProducts({ featured: '1' })
      .then((data) => setFeatured(data.slice(0, 6)))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <>
      <Seo path="/" includeJsonLd />
      {/* Hero */}
      <section className="hero hero--animate">

        <div className="hero__bg" />
        <HeroFx />
        <div className="container hero__inner">

          <div className="hero__content">
            <span className="eyebrow eyebrow--light hero__el" style={{ '--d': '0ms' }}>Premier {BUSINESS.navSubtitle} · {BUSINESS.city} → {BUSINESS.serviceArea}</span>

            <h1 className="hero__title hero__el" style={{ '--d': '90ms' }}>
              Gifts that make a <em className="shimmer-text">lasting impression</em>
            </h1>

            <p className="hero__lead hero__el" style={{ '--d': '180ms' }}>
              {BUSINESS.name} crafts thoughtful, personalized and high-quality gifting solutions

              that strengthen corporate relationships and delight your teams.
            </p>
            <div className="hero__cta hero__el" style={{ '--d': '270ms' }}>
              <Link to="/products" className="btn btn--gold">Explore Products</Link>
              <Link to="/contact" className="btn btn--ghost">Request a Quote</Link>
            </div>
            <div className="hero__stats hero__el" style={{ '--d': '360ms' }}>
              <Stat value={500} suffix="+" label="Gifts Curated" />
              <Stat value={100} suffix="%" label="Customizable" />
              <Stat value="Pan India" label="Delivery" />
            </div>
          </div>
          <div className="hero__art">
            <img
              className="hero__img hero__img--1"

              src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=700&q=80"
              alt="Festive gift hamper"
            />
            <img
              className="hero__img hero__img--2"
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
              alt="Luxury leather gift"
            />
          </div>
        </div>
      </section>

      <Marquee />

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Gifting solutions for every occasion"
            sub="From client appreciation to employee milestones and branded promotions — we do it all."
          />
          <div className="services">
            {services.map((s, i) => (
              <Reveal as="article" className={`service service--${i}`} delay={i * 120} key={s.title}>
                <div className="service__media">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="service__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to="/products" className="link-arrow">Discover →</Link>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Why us */}
      <WaveDivider color="var(--cream-2)" />
      <section className="section section--alt">

        <div className="container why">
          <div className="why__intro">
            <SectionHeading eyebrow="Why Choose Us" title="Crafted with care, delivered with pride" />
            <p className="why__text">
              We believe a well-chosen gift can make all the difference. Our dedicated team works
              closely with you to create unique, memorable gifts — backed by excellent customer
              service every step of the way.
            </p>
            <Link to="/about" className="btn btn--dark">More About Us</Link>
          </div>
          <div className="why__grid">
            {whyUs.map((w, i) => (
              <Reveal className="why__card" delay={i * 100} key={w.t}>
                <span className="why__num">0{i + 1}</span>
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Featured products */}
      <WaveDivider flip color="var(--cream-2)" />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured"

            title="Handpicked gifting favourites"
            sub="A glimpse of our most-loved curated gifts."
            center
          />
          <div className="grid-products">
            {featured.length
              ? featured.map((p) => <ProductCard key={p.id} product={p} />)
              : Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>

          <div className="center" style={{ marginTop: '2rem' }}>
            <Link to="/products" className="btn btn--gold">View All Products</Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Have a bulk or custom gifting requirement?</h2>
            <p>Let's create something memorable for your team or clients.</p>
          </div>
          <Link to="/contact" className="btn btn--gold">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
