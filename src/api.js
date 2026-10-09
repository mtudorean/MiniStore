const BASE_URL = 'https://fakestoreapi.com';

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  const text = await res.text();
  // fakestoreapi returnează body gol pentru un id inexistent
  if (!text) return null;
  return JSON.parse(text);
}

// GET /products
export function getProducts() {
  return request('/products');
}

// GET /products/{id}
export function getProduct(id) {
  return request(`/products/${id}`);
}

// GET /products/categories
export function getCategories() {
  return request('/products/categories');
}
