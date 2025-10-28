// ...existing code...
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pets.css";

function Dashboard() {
  const [search, setSearch] = useState("");

  const pets = [
    { name: "Deo", breed: "Guinea Pig", age: 2, image: "/img/pig.jfif" },
    { name: "Marvs", breed: "Tabby", age: 2, image: "/img/kitten.jfif" },
    { name: "Yel", breed: "Lovebird", age: 2, image: "/img/bird.jfif" },
    { name: "Grace", breed: "Clown Fish", age: 1, image: "/img/clown.jfif" },
    { name: "Tiffy", breed: "Green Tree Frog", age: 2, image: "/img/frog.jfif" },
    { name: "Izza", breed: "Hamster", age: 1, image: "/img/hamster.jfif" },
  ];

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <aside className="sidebar" aria-label="Sidebar">
        <div className="profile">
          <img src="/img/profile.jfif" alt="Profile" />
          <div className="profile-meta">
            <h3>Eren Jaeger</h3>
            <p>eren@gmail.com</p>
          </div>
        </div>

        <nav className="menu" role="navigation">
          <Link to="/" className="menu-item"><i>🏠</i><span>Dashboard</span></Link>
          <Link to="/pets" className="menu-item active"><i>🐾</i><span>Pets</span></Link>
          <Link to="/add-appointment" className="menu-item"><i>📅</i><span>Appointments</span></Link>
          <a href="#" className="menu-item"><i>❓</i><span>FAQs</span></a>
          <a href="#" className="menu-item"><i>🔔</i><span>Notifications</span></a>
          <a href="#" className="menu-item"><i>💬</i><span>Help</span></a>
          <a href="#" className="menu-item"><i>⚙️</i><span>Settings</span></a>
        </nav>


        <div className="sidebar-logout">
          <button className="logout" style={{ width: "100%" }}>
            <i>↩️</i> Logout
          </button>
        </div>
      </aside>

      <main className="main" role="main">
        <div className="content-inner">
          <div className="pet-title"><i className="fas fa-paw" aria-hidden="true"></i> PETS</div>

          <div className="cards-area">
            <div className="cards-header">
              <input
                type="text"
                placeholder="Search pets or breeds"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search pets"
              />
              <button className="add-btn" type="button" aria-label="Add pet">
                <i className="fas fa-plus" aria-hidden="true"></i> Add Pet
              </button>
            </div>

            <div className="pet-container">
              {filteredPets.map((pet, index) => (
                <div className="pet-card" key={index}>
                  <img src={pet.image} alt={pet.name} />
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                    <p><strong>Age:</strong> {pet.age}</p>
                    <div className="pet-buttons">
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-bar">
          <div className="footer-inner">
            <button className="logout" aria-label="Logout">
              <i className="fa-solid fa-right-from-bracket" aria-hidden="true"></i> Logout
            </button>

            <div className="footer-center" aria-hidden="false">
              <p><i className="fa-solid fa-phone" aria-hidden="true"></i> +63 912 345 6789</p>
              <p><i className="fa-solid fa-envelope" aria-hidden="true"></i> petcare@gmail.com</p>
              <p><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Quezon City, Philippines</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
// ...existing code...