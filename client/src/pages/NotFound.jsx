import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center" style={{ padding: '4rem 0' }}>
        <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
        <p className="muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn--gold">Back to Home</Link>
      </div>
    </section>
  );
}
