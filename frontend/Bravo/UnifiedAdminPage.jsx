import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ApexCharts from 'apexcharts';
import 'apexcharts/dist/apexcharts.css';
import { Settings, Upload, X, ChevronDown, ChevronUp, Search, Plus } from 'lucide-react';
import './UnifiedAdminPage.css';

const UnifiedAdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set active tab based on URL
  const getTabFromPath = (path) => {
    const pathMap = {
      '/dashboard': 'Dashboard',
      '/booking': 'Booking',
      '/schedule': 'Schedule',
      '/users': 'Users',
      '/settings': 'Settings',
      '/faq': 'FAQ',
      '/': 'Dashboard',
      '/unified': 'Dashboard'
    };
    return pathMap[path] || 'Dashboard';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath(location.pathname));
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const [chartsInitialized, setChartsInitialized] = useState(false);

  // FAQ states
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'How do I book an appointment?',
      answer: 'To book an appointment, navigate to the Booking page from the sidebar menu. Select your preferred date and time, choose a service, and confirm your booking. You will receive a confirmation notification once your appointment is scheduled.'
    },
    {
      id: 2,
      question: 'Do I need an account to book?',
      answer: 'Yes, you need to create an account to book appointments. This allows us to keep track of your booking history, send you reminders, and provide personalized service. You can sign up using your email address or social media accounts.'
    },
    {
      id: 3,
      question: 'Can I reschedule or cancel an appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment by going to the Schedule page. Find your upcoming appointment and click on the reschedule or cancel button. Please note that cancellations should be made at least 24 hours in advance to avoid any fees.'
    },
    {
      id: 4,
      question: 'What services does VetConnect offer?',
      answer: 'VetConnect offers a comprehensive range of veterinary services including routine check-ups, vaccinations, dental care, surgery, emergency care, and specialized treatments. We also provide grooming services and pet wellness programs.'
    }
  ]);

  // Settings form states
  const [clinicName, setClinicName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  // Appointments state
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

  // Update active tab when location changes
  useEffect(() => {
    const newTab = getTabFromPath(location.pathname);
    setActiveTab(newTab);
  }, [location.pathname]);

  // Handle navigation
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const pathMap = {
      'Dashboard': '/dashboard',
      'Booking': '/booking',
      'Schedule': '/schedule',
      'Users': '/users',
      'Settings': '/settings',
      'FAQ': '/faq'
    };
    navigate(pathMap[tab]);
  };

  // FAQ handlers
  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Initialize charts when Dashboard tab is active
  useEffect(() => {
    if (activeTab === 'Dashboard' && !chartsInitialized) {
      setTimeout(() => {
        if (lineChartRef.current && barChartRef.current) {
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
              }
            },
            stroke: {
              curve: 'straight',
              width: 2,
              colors: ['#4a5f3a']
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
            },
            yaxis: {
              min: 0,
              max: 2.5,
              tickAmount: 5
            },
            grid: {
              borderColor: '#e0e0e0'
            },
            markers: {
              size: 4,
              colors: ['#4a5f3a'],
              strokeColors: '#4a5f3a',
              strokeWidth: 2
            }
          };

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
              }
            },
            plotOptions: {
              bar: {
                borderRadius: 2,
                columnWidth: '60%',
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
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
            },
            yaxis: {
              min: 0,
              max: 50,
              tickAmount: 5
            },
            grid: {
              borderColor: '#e0e0e0'
            },
            dataLabels: {
              enabled: false
            }
          };

          const lineChart = new ApexCharts(lineChartRef.current, lineChartOptions);
          const barChart = new ApexCharts(barChartRef.current, barChartOptions);

          lineChart.render();
          barChart.render();
          setChartsInitialized(true);

          lineChartRef.current.chartInstance = lineChart;
          barChartRef.current.chartInstance = barChart;
        }
      }, 100);
    }

    return () => {
      if (lineChartRef.current?.chartInstance) {
        lineChartRef.current.chartInstance.destroy();
      }
      if (barChartRef.current?.chartInstance) {
        barChartRef.current.chartInstance.destroy();
      }
    };
  }, [activeTab, chartsInitialized]);

  // Settings handlers
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

  const recentAppointments = [
    { client: 'John Clark', pet: 'Brownie', date: '2026-08-20', status: 'Pending' },
    { client: 'Yiv Shannon', pet: 'Whity', date: '2026-08-19', status: 'Completed' },
    { client: 'Julie Pierce', pet: 'Blacky', date: '2026-08-18', status: 'Completed' },
    { client: 'George Flemon', pet: 'Sporty', date: '2026-08-17', status: 'Completed' }
  ];

  const menuItems = ['Dashboard', 'Booking', 'Schedule', 'Users', 'Settings', 'FAQ'];

  return (
    <div className="unified-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="https://via.placeholder.com/50" alt="VetConnect Logo" />
          <h2>VetConnect</h2>
        </div>
        <nav className="nav-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleTabChange(item)}
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>
            {activeTab === 'Settings' ? 'Admin Settings' : 
             activeTab === 'Booking' ? 'Recent Appointments' :
             activeTab === 'FAQ' ? 'FAQ Management' : 
             activeTab}
          </h1>
        </header>

        <div className="content-wrapper">
          {/* Dashboard Content */}
          {activeTab === 'Dashboard' && (
            <>
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
            </>
          )}

          {/* FAQ Content */}
          {activeTab === 'FAQ' && (
            <div className="faq-container">
              {/* Search and Add Button */}
              <div className="faq-search-section">
                <div className="search-wrapper">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Search FAQs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                <button className="add-faq-btn">
                  <Plus size={20} />
                  Add New FAQ
                </button>
              </div>

              {/* FAQ List */}
              <div className="faq-list">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="faq-item">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="faq-question"
                    >
                      <span>{faq.question}</span>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="no-results">
                  No FAQs found matching your search.
                </div>
              )}
            </div>
          )}

          {/* Settings Content */}
          {activeTab === 'Settings' && (
            <div className="settings-card">
              <div className="settings-header">
                <Settings size={32} color="#4b5563" />
                <h3 className="settings-title">General Settings</h3>
              </div>

              <div>
                <div className="form-group">
                  <h4 className="section-label">Clinic Profile</h4>
                </div>

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

                <button
                  onClick={handleSubmit}
                  className="submit-button"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Booking/Appointments Content */}
          {activeTab === 'Booking' && (
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
          )}

          {/* Placeholder for Schedule */}
          {activeTab === 'Schedule' && (
            <div className="card placeholder-content">
              <h3 className="placeholder-title">{activeTab}</h3>
              <p className="placeholder-text">Content for {activeTab} page will be displayed here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UnifiedAdminPage;