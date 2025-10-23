mport React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <div className="logo">
          <img src="/assets/images/logo.jpg" alt="VetConnect Logo" />
          <h2>VetConnect</h2>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Book Appointment
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className="btn">Login</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              <button className="btn btn-register">Register</button>
            </NavLink>
          </li>
        </ul>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </header>
  );
}

export default Nav;
