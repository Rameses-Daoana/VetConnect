import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Upload, X } from 'lucide-react';
import './AdminSettings.css';

const AdminSettings = () => {
  const location = useLocation();
  const [clinicName, setClinicName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      clinicName,
      logo,
      address,
      contactNo,
      email
    };
    console.log('Form submitted:', formData);
    alert('Settings saved successfully!');
  };

  const clearField = (field) => {
    switch(field) {
      case 'clinicName':
        setClinicName('');
        break;
      case 'address':
        setAddress('');
        break;
      case 'contactNo':
        setContactNo('');
        break;
      case 'email':
        setEmail('');
        break;
      default:
        break;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo Header */}
        <div className="logo-header">
          <div className="logo-circle">
            <div className="logo-inner"></div>
          </div>
          <h1 className="logo-text">VetConnect</h1>
        </div>

        {/* Menu Items */}
        <nav className="nav">
          <Link to="/dashboard" className={`menu-button ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/appointment" className={`menu-button ${location.pathname === '/appointment' ? 'active' : ''}`}>
            Appointment
          </Link>
          <Link to="/schedule" className={`menu-button ${location.pathname === '/schedule' ? 'active' : ''}`}>
            Schedule
          </Link>
          <Link to="/users" className={`menu-button ${location.pathname === '/users' ? 'active' : ''}`}>
            Users
          </Link>
          <Link to="/settings" className={`menu-button ${location.pathname === '/settings' ? 'active' : ''}`}>
            Settings
          </Link>
          <Link to="/faq" className={`menu-button ${location.pathname === '/faq' ? 'active' : ''}`}>
            FAQ
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h2 className="header-title">Admin Settings</h2>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div className="settings-card">
            {/* General Settings Header */}
            <div className="settings-header">
              <Settings size={32} color="#4b5563" />
              <h3 className="settings-title">General Settings</h3>
            </div>

            <div>
              {/* Clinic Profile Label */}
              <div className="form-group">
                <h4 className="section-label">Clinic Profile</h4>
              </div>

              {/* Clinic Name */}
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Clinic Name"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    className="input-field"
                  />
                  {clinicName && (
                    <button
                      type="button"
                      onClick={() => clearField('clinicName')}
                      className="clear-button"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Logo Upload */}
              <div className="form-group">
                <label className="label">Logo Upload</label>
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="upload-area"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden-input"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="upload-label">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo preview" className="logo-preview" />
                    ) : (
                      <div className="upload-content">
                        <div className="upload-icon">
                          <Upload size={32} color="#9ca3af" />
                        </div>
                        <p className="upload-text">Drop your image here or browse</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Address */}
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-field"
                  />
                  {address && (
                    <button
                      type="button"
                      onClick={() => clearField('address')}
                      className="clear-button"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Contact No */}
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="tel"
                    placeholder="Contact No."
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    className="input-field"
                  />
                  {contactNo && (
                    <button
                      type="button"
                      onClick={() => clearField('contactNo')}
                      className="clear-button"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                  />
                  {email && (
                    <button
                      type="button"
                      onClick={() => clearField('email')}
                      className="clear-button"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="submit-button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;