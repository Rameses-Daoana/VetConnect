import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";

function Appointment() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => event.preventDefault();

  return (
    <div className="appointment-page">
      {/* Back Button (below global header) */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* Main Section */}
      <main className="main">
        <div className="form-card">
          <h1 className="title">ADD APPOINTMENT</h1>

          {/* OWNER DETAILS */}
          <section className="section">
            <h3>OWNER DETAILS</h3>
            <div className="row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone No." />
              <input type="email" placeholder="Email" />
            </div>
          </section>

          {/* PET DETAILS */}
          <section className="section">
            <h3>PET DETAILS</h3>
            <div className="row">
              <input type="text" placeholder="Pet’s Name" />
              <select>
                <option>Type of Pet</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Fish</option>
              </select>
            </div>

            {/* Drop or Upload Image */}
            <div
              className="upload-box"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {selectedImage ? (
                <img src={selectedImage} alt="Pet preview" className="preview-image" />
              ) : (
                <>
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drop your image here or browse</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                </>
              )}
            </div>
          </section>

          {/* VISIT DETAILS */}
          <section className="section">
            <h3>VISIT DETAILS</h3>
            <div className="row">
              <select>
                <option>Type of Visit</option>
                <option>Check-up</option>
                <option>Vaccination</option>
                <option>Surgery</option>
              </select>
              <input type="date" />
            </div>
            <div className="row">
              <select>
                <option>Time of Visit</option>
                <option>Morning</option>
                <option>Afternoon</option>
              </select>
            </div>
          </section>

          {/* Submit Button */}
          <div className="actions">
            <button className="submit-btn">Submit Appointment</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bar">
          <p>© 2025 VetConnect | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Appointment;
