import { NavLink } from "react-router-dom";

function Navbar() {
  const className = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="primary-nav">
      <NavLink className={className} to="/home">
        Home
      </NavLink>
      <NavLink className={className} to="/">
        Login
      </NavLink>
      <NavLink className={className} to="/register">
        Register
      </NavLink>
    </nav>
  );
}

export default Navbar;
