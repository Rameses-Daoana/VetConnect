import React from "react";
import { Link } from "react-router-dom";
import "./UserDetails.css";

function UserDetails() {
  const pets = [
    { name: "Ming ming", breed: "Tabby", age: 1, image: "/img/mingming.png" },
    { name: "Bantay", breed: "Askal", age: 4, image: "/img/bantay.png" },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar" aria-label="Sidebar">
        <div className="profile">
          <img src="/img/profile.jfif" alt="Profile" />
          <div className="profile-meta">
            <h3>Eren Jaeger</h3>
            <p>eren@gmail.com</p>
          </div>
        </div>

        <nav className="menu" role="navigation">
          <Link to="/" className="menu-item">
            <i>🏠</i><span>Dashboard</span>
          </Link>
          <Link to="/pets" className="menu-item">
            <i>🐾</i><span>Pets</span>
          </Link>
          <Link to="/add-appointment" className="menu-item">
            <i>📅</i><span>Appointments</span>
          </Link>
          <Link to="/user" className="menu-item active">
            <i>🙍</i><span>User</span>
          </Link>
          <a href="#" className="menu-item"><i>❓</i><span>FAQs</span></a>
          <a href="#" className="menu-item"><i>🔔</i><span>Notifications</span></a>
          <a href="#" className="menu-item"><i>💬</i><span>Help</span></a>
          <Link to="/settings" className="menu-item"><i>⚙️</i><span>Settings</span></Link>
        </nav>

        <div className="sidebar-logout">
          <button className="logout" style={{ width: "100%" }}>
            <i>↩️</i> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main" role="main">
        <div className="content-inner">
          <div className="pet-title">
            <h2>USER DETAILS</h2>
          </div>

          {/* User Info Section */}
          <section className="user-info">
            <div className="user-avatar">
              <img src="/img/profile.jfif" alt="User Avatar" />
            </div>
            <div className="user-text">
              <h2>John Doe</h2>
              <p><strong>Address:</strong> Tapuac District, Dagupan City</p>
              <p><strong>Email:</strong> johndoe@gmail.com</p>
              <p><strong>Phone:</strong> 0945 723 9087</p>
            </div>
          </section>

          {/* Registered Pets */}
          <section className="pet-section">
            <h3>Registered Pets</h3>
            <div className="pet-container">
              {pets.map((pet, index) => (
                <div className="pet-card" key={index}>
                  <img src={pet.image} alt={pet.name} />
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                    <p><strong>Age:</strong> {pet.age}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats and Actions */}
          <section className="user-stats">
            <div className="stats-container">
              <div className="card"><h2>10</h2><p>Visits</p></div>
              <div className="card"><h2>1</h2><p>Upcoming Appointment</p></div>
            </div>

            <div className="actions">
              <button className="reset-btn">🔒 Reset Password</button>
              <button className="delete-btn">🗑 Delete User</button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="footer-bar">
          <div className="footer-inner">
            <button className="logout" aria-label="Logout">
              <i className="fa-solid fa-right-from-bracket" aria-hidden="true"></i> Logout
            </button>

            <div className="footer-center">
              <p>📞 +63 912 345 6789</p>
              <p>📧 petcare@gmail.com</p>
              <p>📍 Quezon City, Philippines</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UserDetails;
