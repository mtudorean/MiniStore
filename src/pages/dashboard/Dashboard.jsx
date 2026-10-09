import { NavLink, Outlet } from 'react-router-dom';

const subClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

export default function Dashboard() {
  return (
    <section>
      <h1>Panou de control</h1>
      <nav className="subnav">
        <NavLink to="/dashboard" end className={subClass}>
          Prezentare
        </NavLink>
        <NavLink to="/dashboard/profile" className={subClass}>
          Profil
        </NavLink>
        <NavLink to="/dashboard/settings" className={subClass}>
          Setări
        </NavLink>
      </nav>

      {/* rutele copil */}
      <div className="panel">
        <Outlet />
      </div>
    </section>
  );
}
