import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./userdashboard.css";

function startOfCalendar(date) {
  const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const day = firstOfMonth.getDay();
  const start = new Date(firstOfMonth);
  start.setDate(firstOfMonth.getDate() - day);
  start.setHours(0, 0, 0, 0);
  return start;
}

function isSameDate(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(d) {
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function UserDashboard() {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const monthYearText = useMemo(
    () => current.toLocaleString("default", { month: "long", year: "numeric" }),
    [current]
  );

  const cells = useMemo(() => {
    const start = startOfCalendar(current);
    return Array.from({ length: 42 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      d.setHours(0, 0, 0, 0);
      return d;
    });
  }, [current]);

  function handleDayClick(clicked) {
    if (!startDate || (startDate && endDate)) {
      setStartDate(clicked);
      setEndDate(null);
    } else {
      if (clicked < startDate) {
        setEndDate(startDate);
        setStartDate(clicked);
      } else {
        setEndDate(clicked);
      }
    }
  }

  function selectedRangeText() {
    if (startDate && endDate)
      return `${formatDate(startDate)} → ${formatDate(endDate)}`;
    if (startDate) return formatDate(startDate);
    return "Select date";
  }

  useEffect(() => {}, [current, startDate, endDate]);

  return (
    <div className="dashboard">
      <aside className="sidebar" aria-label="Sidebar">
        <div className="profile">
          <img src={`${publicUrl}/img/profile.jfif`} alt="Profile" />
          <div className="profile-meta">
            <h3>Eren Jaeger</h3>
            <p>eren@gmail.com</p>
          </div>
        </div>

        <nav className="menu" role="navigation">
          <Link to="/" className="menu-item active"><i>🏠</i><span>Dashboard</span></Link>
          <Link to="/pets" className="menu-item"><i>🐾</i><span>Pets</span></Link>
          <Link to="/add-appointment" className="menu-item"><i>📅</i><span>Appointments</span></Link>
          <Link to="/user" className="menu-item"><i>🙍</i><span>User</span></Link>
          <a href="#" className="menu-item"><i>❓</i><span>FAQs</span></a>
          <a href="#" className="menu-item"><i>🔔</i><span>Notifications</span></a>
          <a href="#" className="menu-item"><i>💬</i><span>Help</span></a>
          <a href="#" className="menu-item"><i>⚙️</i><span>Settings</span></a>
          
        </nav>

        <div className="sidebar-logout">
          <button className="logout" style={{ width: "100%" }}>
            <i>↩️</i> Logout
          </button>
        </div>
      </aside>

      <main className="main" role="main">
        {/* Dashboard content unchanged */}
        <div className="content-inner">
          <header className="header">
            <div className="pet-title">VETCONNECT</div>
          </header>

          <section className="cards-area">
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <div className="card"><h2>77</h2><p>Visits</p></div>
              <div className="card"><h2>4</h2><p>Years of service</p></div>
              <div className="card"><h2>3</h2><p>Upcoming appointments</p></div>
            </div>
          </section>

          <section className="appointments">
            <div className="appointments-header">
              <h3>Appointments</h3>
              <div id="selected-range">{selectedRangeText()}</div>
            </div>

            <div className="calendar">
              <div className="calendar-header">
                <button onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1))}>❮</button>
                <h2>{monthYearText}</h2>
                <button onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1))}>❯</button>
              </div>

              <div className="calendar-body">
                <div className="day-names">
                  <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div id="calendar-days" className="days-grid">
                  {cells.map((date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const otherMonth = date.getMonth() !== current.getMonth();
                    const selected = (startDate && isSameDate(date, startDate)) || (endDate && isSameDate(date, endDate));
                    const inRange = startDate && endDate && date > startDate && date < endDate;
                    const isToday = isSameDate(date, today);

                    return (
                      <div
                        key={date.toISOString()}
                        onClick={() => handleDayClick(new Date(date))}
                        style={{
                          padding: 8,
                          borderRadius: 6,
                          background: selected ? "#2563eb" : inRange ? "#dbeafe" : otherMonth ? "#f3f4f6" : "#fff",
                          color: selected ? "#fff" : "#111",
                          textAlign: "right",
                        }}
                      >
                        <div className="num">{date.getDate()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-bar">
          <div className="footer-inner">
            <button className="logout">Logout</button>
            <div className="footer-center">
              <strong>Contact Info</strong><br />
              Address: Alibin Street, Dagupan City • Phone: (000)123-4567 • Email: support@vetconnect.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
