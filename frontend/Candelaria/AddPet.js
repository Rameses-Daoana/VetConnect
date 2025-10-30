import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPet.css";

function AddPet() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pet added:", formData);
    alert("Pet successfully added!");
    setFormData({ name: "", age: "", sex: "" });
    setSelectedImage(null);
  };

  return (
    <div className="add-pet-page">  {/* Renamed for consistency with Appointment */}
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* Main Section */}
      <main className="main">
        <div className="form-card">
          <h1 className="title">ADD PET</h1>  {/* Updated title for consistency */}

          <form onSubmit={handleSubmit} className="add-pet-form">
            {/* Form Fields */}
            <div className="form-group">
              <label htmlFor="name">Pet’s Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter pet name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter pet age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sex">Sex</label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required  // Added required for validation
              >
                <option value="">Select sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Image Upload Section */}
            <div className="section">
              <h3>Upload Pet Image</h3>
              <div
                className="upload-box"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Pet Preview"
                    className="preview-image"
                  />
                ) : (
                  <>
                    <div className="upload-placeholder">
                      <i className="fas fa-image"></i>
                      <p>Drop your image here or browse</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="file-input"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="actions">
              <button type="submit" className="submit-btn">
                Confirm
              </button>
            </div>
          </form>
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

export default AddPet;