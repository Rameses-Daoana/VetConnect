import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserSettings.css";

function UserSettings() {
  const [profileImg, setProfileImg] = useState(null);

  // Handle drag-and-drop or file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="settings-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img
            src={profileImg || "/img/profile.jfif"}
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-meta">
            <h3>Eren Jaeger</h3>
            <p>eren@gmail.com</p>
          </div>
        </div>

        <nav className="menu">
          <Link to="/" className="menu-item">🏠 Dashboard</Link>
          <Link to="/pets" className="menu-item">🐾 Pets</Link>
          <Link to="/add-appointment" className="menu-item">📅 Appointments</Link>
          <Link to="/user" className="menu-item">🙍 User</Link>
          <a href="#" className="menu-item"><i>❓</i><span>FAQs</span></a>
          <a href="#" className="menu-item"><i>🔔</i><span>Notifications</span></a>
          <a href="#" className="menu-item"><i>💬</i><span>Help</span></a>
          <Link to="/settings" className="menu-item active">⚙️ Settings</Link>
        </nav>

        <div className="sidebar-logout">
          <button className="logout">↩️ Logout</button>
        </div>
      </aside>

      {/* Main Section */}
      <main className="settings-main">
        <div className="settings-header">
          <h1>User Settings</h1>
          <p>Manage your profile and account information</p>
        </div>

        <div className="settings-form">
          {/* Profile Upload */}
          <div className="form-group">
            <label className="profile-label">Profile Picture</label>
            <div
              className="image-upload"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                id="fileUpload"
                onChange={handleImageUpload}
                hidden
              />
              <label htmlFor="fileUpload" className="upload-box">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Uploaded"
                    className="uploaded-img"
                  />
                ) : (
                  <div className="upload-placeholder">
                    📷 Drag & drop or click to upload
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Eren Jaeger" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Tapuac District, Dagupan City" />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="0912 345 6789" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="eren@gmail.com" />
          </div>

          <button className="save-btn">💾 Save Changes</button>
        </div>
      </main>
    </div>
  );
}

export default UserSettings;
