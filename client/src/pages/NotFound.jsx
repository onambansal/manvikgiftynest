import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <section className="section">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />

      <div className="container narrow center" style={{ padding: '4rem 0' }}>
        <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
        <p className="muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn--gold">Back to Home</Link>
      </div>
    </section>
  );
}
