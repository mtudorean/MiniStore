export default function About() {
  return (
    <section>
      <h1>Despre noi</h1>
      <p>
        Mini Magazin: o aplicație SPA construită cu React, React Router și
        date preluate din <strong>fakestoreapi.com</strong>.
      </p>
      <ul>
        <li>Routing cu react-router-dom</li>
        <li>Parametru de rută (/products/:id)</li>
        <li>Parametri de interogare (category, sort, search)</li>
        <li>Stări de încărcare și de eroare</li>
        <li>Pagină 404 și rute imbricate</li>
      </ul>
    </section>
  );
}
