import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Users, Search, Eye, Edit, Trash2 } from 'lucide-react';
import './Customer.css';

const Customer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '09457239087',
      dateJoined: '2025-08-10',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Rameses Daoana',
      email: 'ramdaoana@gmail.com',
      phone: '09235618256',
      dateJoined: '2025-08-12',
      status: 'Blocked'
    },
    {
      id: 3,
      name: 'Christal Aquino',
      email: 'c.aquino@gmail.com',
      phone: '09386749256',
      dateJoined: '2025-08-13',
      status: 'Blocked'
    },
    {
      id: 4,
      name: 'Jneeza Dela Cruz',
      email: 'dc.jneeza@gmail.com',
      phone: '09284753965',
      dateJoined: '2025-08-17',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Joseph Candelaria',
      email: 'candelaria.j@gmail.com',
      phone: '09569215867',
      dateJoined: '2025-08-20',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Paul Bravo',
      email: 'bravo.paul@gmail.com',
      phone: '09475963645',
      dateJoined: '2025-08-22',
      status: 'Blocked'
    },
    {
      id: 7,
      name: 'Maria De Leon',
      email: 'maria.DL@gmail.com',
      phone: '09327596836',
      dateJoined: '2025-08-26',
      status: 'Blocked'
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  const handleView = (userId) => {
    alert(`View details for user ${userId}`);
  };

  const handleEdit = (userId) => {
    alert(`Edit user ${userId}`);
  };

  const handleDelete = (userId) => {
    if (window.confirm(`Are you sure you want to delete user ${userId}?`)) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Handle menu navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="customer-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="https://via.placeholder.com/50" alt="VetConnect Logo" />
          <h2>VetConnect</h2>
        </div>
        <nav className="nav-menu">
          <button 
            onClick={() => handleNavigation('/dashboard')}
            className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => handleNavigation('/booking')}
            className={`nav-item ${location.pathname === '/booking' ? 'active' : ''}`}
          >
            Booking
          </button>
          <button 
            onClick={() => handleNavigation('/schedule')}
            className={`nav-item ${location.pathname === '/schedule' ? 'active' : ''}`}
          >
            Schedule
          </button>
          <button 
            onClick={() => handleNavigation('/users')}
            className={`nav-item ${location.pathname === '/users' || location.pathname === '/customer' ? 'active' : ''}`}
          >
            Users
          </button>
          <button 
            onClick={() => handleNavigation('/settings')}
            className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            Settings
          </button>
          <button 
            onClick={() => handleNavigation('/faq')}
            className={`nav-item ${location.pathname === '/faq' ? 'active' : ''}`}
          >
            FAQ
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Users Page</h1>
        </header>

        <div className="content-area">
          <div className="users-card">
            <div className="users-header">
              <div className="header-title-section">
                <Users size={28} color="#4a5f3a" />
                <h2>User List</h2>
              </div>
              
              <div className="search-bar">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <table className="users-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date Joined</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.dateJoined}</td>
                    <td>
                      <span className={`status-badge ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn view-btn"
                          onClick={() => handleView(user.id)}
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="action-btn edit-btn"
                          onClick={() => handleEdit(user.id)}
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(user.id)}
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="no-results">
                <p>No users found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};


export default Customer;
