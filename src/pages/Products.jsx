import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../api.js';
import { categoryLabel } from '../utils.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const search = searchParams.get('search') || '';

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => {
        if (!cancelled) setProducts(data || []);
      })
      .catch(() => {
        if (!cancelled) setError('Nu s-au putut încărca produsele.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  }

  const categories = [...new Set(products.map((p) => p.category))];

  let visible = products.filter((p) => {
    const matchCategory = !category || p.category === category;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (sort === 'price') {
    visible = [...visible].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    visible = [...visible].sort((a, b) => b.price - a.price);
  }

  return (
    <section>
      <h1>Produse</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Caută (ex: phone)"
          value={search}
          onChange={(e) => updateParam('search', e.target.value)}
        />

        <select value={category} onChange={(e) => updateParam('category', e.target.value)}>
          <option value="">Toate categoriile</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {categoryLabel(c)}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => updateParam('sort', e.target.value)}>
          <option value="">Ordine implicită</option>
          <option value="price">Preț: crescător</option>
          <option value="price-desc">Preț: descrescător</option>
        </select>

        <button className="btn btn-outline" onClick={() => setSearchParams({})}>
          Resetează
        </button>
      </div>

      {loading && <p className="status">Se încarcă...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && visible.length === 0 && (
        <p className="status">Nu au fost găsite produse.</p>
      )}

      {!loading && !error && (
        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
