import { Link } from 'react-router-dom';
import { categoryLabel, formatPrice } from '../utils.js';

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <span className="card-badge">{categoryLabel(product.category)}</span>

      <div className="card-img">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="card-body">
        <h3 className="card-title" title={product.title}>
          {product.title}
        </h3>
        <p className="card-price">{formatPrice(product.price)}</p>
        <Link to={`/products/${product.id}`} className="btn">
          Vezi detalii
        </Link>
      </div>
    </article>
  );
}
