import { NavLink } from "react-router-dom";

// Este componente es el pequeño menú de navegación de la aplicación
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
