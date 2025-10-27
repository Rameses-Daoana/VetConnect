import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Appointments.css';

const Appointments = () => {
  const location = useLocation();
  const [appointments, setAppointments] = useState([
    { 
      id: 1,
      clientName: 'John Clark', 
      service: 'Consultation', 
      date: '2026-08-20', 
      time: '10:00-11:00 AM', 
      status: 'Approved' 
    },
    { 
      id: 2,
      clientName: 'Yiv Shannon', 
      service: 'Vaccination', 
      date: '2026-08-19', 
      time: '12:00-1:00 PM', 
      status: 'Pending' 
    },
    { 
      id: 3,
      clientName: 'Julie Pierce', 
      service: 'Check up', 
      date: '2026-08-18', 
      time: '2:00-3:00 PM', 
      status: 'Pending' 
    },
    { 
      id: 4,
      clientName: 'George Flemon', 
      service: 'Grooming', 
      date: '2026-08-17', 
      time: '4:00-5:00 PM', 
      status: 'Approved' 
    },
    { 
      id: 5,
      clientName: 'Rameses Daoana', 
      service: 'Vaccination', 
      date: '2026-08-16', 
      time: '6:00-7:00 PM', 
      status: 'Approved' 
    },
    { 
      id: 6,
      clientName: 'Jneeza Dela Cruz', 
      service: 'Check up', 
      date: '2026-08-15', 
      time: '8:00-9:00 PM', 
      status: 'Pending' 
    },
    { 
      id: 7,
      clientName: 'Emil Candelaria', 
      service: 'Consultation', 
      date: '2026-08-14', 
      time: '9:00-10:00 PM', 
      status: 'Pending' 
    }
  ]);

  const handleApprove = (id) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: 'Approved' } : apt
    ));
  };

  const handleCancel = (id) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: 'Cancelled' } : apt
    ));
  };

  const handleReschedule = (id) => {
    alert(`Reschedule appointment for ${appointments.find(apt => apt.id === id)?.clientName}`);
  };

  return (
    <div className="booking-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="https://via.placeholder.com/50" alt="VetConnect Logo" />
          <h2>VetConnect</h2>
        </div>
        <nav className="nav-menu">
          <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/booking" className={`nav-item ${location.pathname === '/booking' ? 'active' : ''}`}>
            Booking
          </Link>
          <Link to="/schedule" className={`nav-item ${location.pathname === '/schedule' ? 'active' : ''}`}>
            Schedule
          </Link>
          <Link to="/users" className={`nav-item ${location.pathname === '/users' ? 'active' : ''}`}>
            Users
          </Link>
          <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
            Settings
          </Link>
          <Link to="/faq" className={`nav-item ${location.pathname === '/faq' ? 'active' : ''}`}>
            FAQ
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Recent Appointments</h1>
        </header>

        <div className="content-area">
          <div className="appointments-card">
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.clientName}</td>
                    <td>{appointment.service}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>
                      <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        {appointment.status === 'Approved' ? (
                          <button 
                            className="btn-reschedule"
                            onClick={() => handleReschedule(appointment.id)}
                          >
                            Reschedule
                          </button>
                        ) : (
                          <>
                            <button 
                              className="btn-approve"
                              onClick={() => handleApprove(appointment.id)}
                            >
                              Approve
                            </button>
                            <button 
                              className="btn-cancel"
                              onClick={() => handleCancel(appointment.id)}
                            >
                              Cancel
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;