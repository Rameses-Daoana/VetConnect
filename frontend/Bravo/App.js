import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UnifiedAdminPage from './components/UnifiedAdminPage';
import Customer from './components/Customer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root to unified page */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Unified Admin Page - All routes handled by UnifiedAdminPage */}
          <Route path="/dashboard" element={<UnifiedAdminPage />} />
          <Route path="/Appointments" element={<UnifiedAdminPage />} />
          <Route path="/schedule" element={<UnifiedAdminPage />} />
          <Route path="/settings" element={<UnifiedAdminPage />} />
          <Route path="/customer-settings" element={<UnifiedAdminPage />} />
          <Route path="/faq" element={<UnifiedAdminPage />} />
          <Route path="/unified" element={<UnifiedAdminPage />} />
          
          {/* Customer/Users Page - Separate component */}
          <Route path="/users" element={<Customer />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
