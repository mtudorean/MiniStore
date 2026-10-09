import { NavLink, Link, Outlet } from 'react-router-dom';

const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">
          <img
            src="/images/logo.jpg"
            alt="Logo Mini Magazin"
            className="logo-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span>Mini Magazin</span>
        </Link>
        <nav className="nav">
          <NavLink to="/" end className={linkClass}>
            Acasă
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Produse
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            Despre noi
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Panou de control
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Mini Magazin · date de la fakestoreapi.com
      </footer>
    </div>
  );
}
