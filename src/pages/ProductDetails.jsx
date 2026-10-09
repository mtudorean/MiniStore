import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../api.js';
import { categoryLabel, formatPrice } from '../utils.js';

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setProduct(null);

    getProduct(id)
      .then((data) => {
        if (cancelled) return;
        if (!data) setError('Nu s-a putut încărca produsul.');
        else setProduct(data);
      })
      .catch(() => {
        if (!cancelled) setError('Nu s-a putut încărca produsul.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <section>
      <Link to="/products" className="back">
        ← Înapoi la produse
      </Link>

      {loading && <p className="status">Se încarcă...</p>}
      {error && <p className="status error">{error}</p>}

      {product && (
        <div className="details">
          <div className="details-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="details-info">
            <span className="badge">{categoryLabel(product.category)}</span>
            <h1>{product.title}</h1>
            <p className="card-price">{formatPrice(product.price)}</p>
            <p>{product.description}</p>
            {product.rating && (
              <p className="muted">
                ⭐ {product.rating.rate} ({product.rating.count} recenzii)
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
