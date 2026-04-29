import React from "react";
import "./DashboardHome.css";
import logo from "../Assets/logo.png";

const DashboardaHome = () => {
  const sidebarItems = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>, label: "Dashboard", active: true },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>, label: "Website Content" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>, label: "App Content" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, label: "Charging Stations" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>, label: "Orders & Sessions" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, label: "Users Management" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, label: "Transactions" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>, label: "Rewards & Points" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>, label: "Notifications" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>, label: "SEO & Metadata" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>, label: "Content Editor" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, label: "Support & FAQ" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, label: "Careers" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>, label: "Settings" },
  ];

  const stats = [
    { label: "Total Users", value: "12,458", change: "+12.5%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, trendUp: true, color: "#98D83F" },
    { label: "Charging Sessions", value: "8,234", change: "+8.2%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, trendUp: true, color: "#98D83F" },
    { label: "Revenue (Monthly)", value: "$45,890", change: "+15.3%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, trendUp: true, color: "#98D83F" },
    { label: "Active Stations", value: "156", change: "-2.1%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, trendUp: false, color: "#FF4D4D" },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="WayCharge" className="sidebar-logo" />
          <div className="sidebar-brand">
            <span className="brand-name">WayCharge</span>
            <span className="brand-subtitle">Admin Dashboard</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="top-bar-right">
            <div className="notification-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="notification-dot"></span>
            </div>
            <div className="user-profile">
              <div className="user-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div className="user-info">
                <span className="user-name">Admin</span>
                <span className="user-role">User</span>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-grid">
          {/* Summary Cards */}
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className={`stat-trend ${stat.trendUp ? 'up' : 'down'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {stat.trendUp ? <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> : <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>}
                      {stat.trendUp ? <polyline points="17 6 23 6 23 12"></polyline> : <polyline points="17 18 23 18 23 12"></polyline>}
                    </svg>
                    {stat.change}
                  </div>
                </div>
                <div className="stat-body">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            <div className="chart-card">
              <h3>Charging Sessions Trend</h3>
              <div className="chart-placeholder">
                <svg viewBox="0 0 400 200" className="line-chart">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#98D83F" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#98D83F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="380" y2="20" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="60" x2="380" y2="60" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="100" x2="380" y2="100" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="140" x2="380" y2="140" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="180" x2="380" y2="180" stroke="#444" strokeWidth="2" />
                  
                  {/* Area */}
                  <path d="M40 140 Q 100 120, 160 110 T 280 80 T 380 60 L 380 180 L 40 180 Z" fill="url(#chartGradient)" />
                  {/* Line */}
                  <path d="M40 140 Q 100 120, 160 110 T 280 80 T 380 60" fill="none" stroke="#98D83F" strokeWidth="3" />
                  
                  {/* Labels */}
                  <text x="35" y="25" textAnchor="end" fontSize="10" fill="#666">10000</text>
                  <text x="35" y="65" textAnchor="end" fontSize="10" fill="#666">7500</text>
                  <text x="35" y="105" textAnchor="end" fontSize="10" fill="#666">5000</text>
                  <text x="35" y="145" textAnchor="end" fontSize="10" fill="#666">2500</text>
                  <text x="35" y="185" textAnchor="end" fontSize="10" fill="#666">0</text>
                  
                  <text x="40" y="195" textAnchor="middle" fontSize="10" fill="#666">Jan</text>
                  <text x="125" y="195" textAnchor="middle" fontSize="10" fill="#666">Feb</text>
                  <text x="210" y="195" textAnchor="middle" fontSize="10" fill="#666">Mar</text>
                  <text x="295" y="195" textAnchor="middle" fontSize="10" fill="#666">Apr</text>
                  <text x="380" y="195" textAnchor="middle" fontSize="10" fill="#666">May</text>
                </svg>
              </div>
            </div>

            <div className="chart-card">
              <h3>Revenue Overview</h3>
              <div className="chart-placeholder">
                <svg viewBox="0 0 400 200" className="bar-chart">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="380" y2="20" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="60" x2="380" y2="60" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="100" x2="380" y2="100" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="140" x2="380" y2="140" stroke="#222" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="180" x2="380" y2="180" stroke="#444" strokeWidth="2" />
                  
                  {/* Bars */}
                  <rect x="60" y="110" width="30" height="70" rx="4" fill="#98D83F" fillOpacity="0.8" />
                  <rect x="130" y="100" width="30" height="80" rx="4" fill="#98D83F" fillOpacity="0.8" />
                  <rect x="200" y="85" width="30" height="95" rx="4" fill="#98D83F" fillOpacity="0.8" />
                  <rect x="270" y="70" width="30" height="110" rx="4" fill="#98D83F" fillOpacity="0.8" />
                  <rect x="340" y="50" width="30" height="130" rx="4" fill="#98D83F" fillOpacity="1" />
                  
                  {/* Labels */}
                  <text x="35" y="25" textAnchor="end" fontSize="10" fill="#666">60000</text>
                  <text x="35" y="65" textAnchor="end" fontSize="10" fill="#666">45000</text>
                  <text x="35" y="105" textAnchor="end" fontSize="10" fill="#666">30000</text>
                  <text x="35" y="145" textAnchor="end" fontSize="10" fill="#666">15000</text>
                  <text x="35" y="185" textAnchor="end" fontSize="10" fill="#666">0</text>
                  
                  <text x="75" y="195" textAnchor="middle" fontSize="10" fill="#666">Jan</text>
                  <text x="145" y="195" textAnchor="middle" fontSize="10" fill="#666">Feb</text>
                  <text x="215" y="195" textAnchor="middle" fontSize="10" fill="#666">Mar</text>
                  <text x="285" y="195" textAnchor="middle" fontSize="10" fill="#666">Apr</text>
                  <text x="355" y="195" textAnchor="middle" fontSize="10" fill="#666">May</text>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardaHome;
