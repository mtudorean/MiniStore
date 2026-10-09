import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero hero-bg">
      <h1>Bine ai venit la Mini Magazin</h1>
      <p>O aplicație SPA cu routing și date reale dintr-un API.</p>
      <div className="hero-actions">
        <Link to="/products" className="btn">
          Vezi produsele
        </Link>
        <Link to="/products?category=electronics" className="btn btn-outline">
          Electronice
        </Link>
      </div>
    </section>
  );
}
