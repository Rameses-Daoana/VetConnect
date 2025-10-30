import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink, useLocation,} from "react-router-dom";
import Dashboard from "./userdashboard";
import Pets from "./pets";
import AddAppointment from "./Appointment";
import AddPet from "./AddPet";
import UserDetails from "./UserDetails"; 
import "./App.css";

function Layout() {
  const location = useLocation();

  // Hide sidebar on specific pages
  const hideSidebar =
    location.pathname === "/add-appointment" ||
    location.pathname === "/addPets";

  return (
    <div className="App">
      {/* Global Header */}
      <header className="header">
        <div className="header-left">
          <img
            src="/img/logo_black.png"
            alt="VetConnect Logo"
            className="logo"
          />
          <h2 className="logo-text">VetConnect</h2>
        </div>
      </header>

      {/* Page Layout */}
      <div className="layout">
        {!hideSidebar && (
          <aside className="sidebar">
            <div className="profile">
              <img
                src="/img/profile.jfif"
                alt="Profile"
                className="profile-img"
              />
              <div className="profile-info">
                <h3>Eren Jaeger</h3>
                <p>eren@gmail.com</p>
              </div>
            </div>

            <nav className="menu">
              <NavLink to="/" end className="menu-item">
                <i>🏠</i> <span>Dashboard</span>
              </NavLink>

              <NavLink to="/pets" className="menu-item">
                <i>🐾</i> <span>Pets</span>
              </NavLink>

              <NavLink to="/add-appointment" className="menu-item">
                <i>📅</i> <span>Add Appointment</span>
              </NavLink>

              <NavLink to="/user" className="menu-item">
                <i>🙍</i> <span>User</span>
              </NavLink>
            </nav>

            <div className="logout-section">
              <button className="logout-btn">
                <i>↩️</i> Logout
              </button>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/add-appointment" element={<AddAppointment />} />
            <Route path="/addPets" element={<AddPet />} />
            <Route path="/user" element={<UserDetails />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>Page Not Found</h1>
                  <p>
                    The page you're looking for doesn't exist.{" "}
                    <a href="/">Go Home</a>
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>

      {/* Global Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-item">📞 (02) 9876 5432</div>
          <div className="footer-item">📧 vetconnect@gmail.com</div>
          <div className="footer-item">
            📍 123 Green Paw St., Manila, Philippines
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
