import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApexCharts from 'apexcharts';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let lineChart = null;
    let barChart = null;

    // Line Chart Configuration
    const lineChartOptions = {
      series: [{
        name: 'Appointments',
        data: [0, 0.5, 1.5, 2.3, 1.5, 0.7, 0.6, 1.2]
      }],
      chart: {
        type: 'line',
        height: 200,
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800
        }
      },
      stroke: {
        curve: 'straight',
        width: 2,
        colors: ['#4a5f3a']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        labels: {
          style: {
            colors: '#666',
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 2.5,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#666',
            fontSize: '12px'
          }
        }
      },
      grid: {
        borderColor: '#e0e0e0',
        strokeDashArray: 4
      },
      markers: {
        size: 4,
        colors: ['#4a5f3a'],
        strokeColors: '#4a5f3a',
        strokeWidth: 2,
        hover: {
          size: 6
        }
      },
      tooltip: {
        enabled: true,
        theme: 'light'
      }
    };

    // Bar Chart Configuration
    const barChartOptions = {
      series: [{
        name: 'Users',
        data: [12, 18, 22, 25, 30, 35, 40, 47]
      }],
      chart: {
        type: 'bar',
        height: 200,
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '60%',
          distributed: false,
          colors: {
            ranges: [{
              from: 0,
              to: 50,
              color: '#4a5f3a'
            }]
          }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        labels: {
          style: {
            colors: '#666',
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 50,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#666',
            fontSize: '12px'
          }
        }
      },
      grid: {
        borderColor: '#e0e0e0',
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: true,
        theme: 'light',
        y: {
          formatter: function(val) {
            return val + " users";
          }
        }
      },
      colors: ['#4a5f3a']
    };

    // Initialize charts only if refs are available
    if (lineChartRef.current && barChartRef.current) {
      // Clear any existing content
      lineChartRef.current.innerHTML = '';
      barChartRef.current.innerHTML = '';

      // Create new chart instances
      lineChart = new ApexCharts(lineChartRef.current, lineChartOptions);
      barChart = new ApexCharts(barChartRef.current, barChartOptions);

      // Render charts
      lineChart.render();
      barChart.render();
    }

    // Cleanup function
    return () => {
      if (lineChart) {
        lineChart.destroy();
      }
      if (barChart) {
        barChart.destroy();
      }
    };
  }, []); // Empty dependency array - only run once on mount

  const recentAppointments = [
    { client: 'John Clark', pet: 'Brownie', date: '2026-08-20', status: 'Pending' },
    { client: 'Yiv Shannon', pet: 'Whity', date: '2026-08-19', status: 'Completed' },
    { client: 'Julie Pierce', pet: 'Blacky', date: '2026-08-18', status: 'Completed' },
    { client: 'George Flemon', pet: 'Sporty', date: '2026-08-17', status: 'Completed' }
  ];

  return (
    <div className="admin-container">
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
          <h1>Admin Dashboard</h1>
        </header>

        <div className="dashboard-grid">
          <div className="card">
            <h3>Total Appointments</h3>
            <p className="stat-number">104</p>
            <div ref={lineChartRef} className="chart-container"></div>
          </div>

          <div className="card">
            <h3>Total Users</h3>
            <p className="stat-number">56</p>
            <div ref={barChartRef} className="chart-container"></div>
          </div>
        </div>

        <div className="card recent-appointments">
          <h3>Recent Appointments</h3>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Pet</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.client}</td>
                  <td>{appointment.pet}</td>
                  <td>{appointment.date}</td>
                  <td>
                    <span className={`status ${appointment.status.toLowerCase()}`}>
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;