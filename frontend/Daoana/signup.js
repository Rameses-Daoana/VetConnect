import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate(); // <--- hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !username || !fullname || !password || !confirmPassword) {
      alert("❌ Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }
    alert("✅ Account created successfully for " + fullname + "!");
    navigate("/login"); // navigate to login page
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2 className="brand">VetConnect</h2>
        <div className="logo-circle">
          <img src="assets/images/logo.jpg" alt="VetConnect Logo" />
        </div>
      </div>

      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <p>Welcome! Please fill in your details to create an account.</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          {/* Password Field */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="password-container">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <p className="login-text">
            Already have an account?{" "}
            <button
              type="button"
              className="login-link"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
