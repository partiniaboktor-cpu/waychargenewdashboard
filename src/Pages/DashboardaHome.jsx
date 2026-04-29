import React from "react";
import "./DashboardHome.css";
import Layout from "../Components/Layout";

const DashboardaHome = () => {
  const stats = [
    { label: "Total Users", value: "12,458", change: "+12.5%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, trendUp: true, color: "#98D83F" },
    { label: "App Installations", value: "9,850", change: "+18.2%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>, trendUp: true, color: "#4285F4" },
    { label: "Chargers in Use", value: "84", change: "+5.4%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><path d="M18.5 2h-13a2.5 2.5 0 0 0-2.5 2.5V22h18V4.5A2.5 2.5 0 0 0 18.5 2z"></path><path d="M8 8h8"></path><path d="M8 12h8"></path></svg>, trendUp: true, color: "#A855F7" },
    { label: "Active Stations", value: "156", change: "-2.1%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, trendUp: false, color: "#FF4D4D" },
    { label: "Revenue (Monthly)", value: "$45,890", change: "+15.3%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, trendUp: true, color: "#10B981" },
    { label: "Charging Sessions", value: "8,234", change: "+8.2%", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, trendUp: true, color: "#F59E0B" },
  ];

  return (
    <Layout>
      <section className="dashboard-grid">
        {/* Summary Cards */}
        <div className="stats-row-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <div className="stat-icon-wrapper" style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
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
        <div className="charts-main-row">
          <div className="chart-card-large">
            <div className="card-header-flex">
              <h3>Usage Analytics</h3>
              <div className="chart-tabs">
                <button className="tab active">Sessions</button>
                <button className="tab">Revenue</button>
                <button className="tab">Users</button>
              </div>
            </div>
            <div className="chart-placeholder-large">
              <svg viewBox="0 0 800 300" className="line-chart-svg">
                <defs>
                  <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#98D83F" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#98D83F" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g className="grid-lines">
                  {[0, 50, 100, 150, 200, 250].map((y) => (
                    <line key={y} x1="50" y1={y + 20} x2="750" y2={y + 20} stroke="#222" strokeWidth="1" strokeDasharray="5,5" />
                  ))}
                </g>
                <path d="M50 220 Q 150 180, 250 200 T 450 120 T 650 150 T 750 80 L 750 270 L 50 270 Z" fill="url(#mainGradient)" />
                <path d="M50 220 Q 150 180, 250 200 T 450 120 T 650 150 T 750 80" fill="none" stroke="#98D83F" strokeWidth="4" />
                <g className="chart-labels">
                  <text x="40" y="25" textAnchor="end" fontSize="12" fill="#666">10k</text>
                  <text x="40" y="145" textAnchor="end" fontSize="12" fill="#666">5k</text>
                  <text x="40" y="275" textAnchor="end" fontSize="12" fill="#666">0</text>
                </g>
                <g className="x-axis-labels">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <text key={day} x={50 + (i * 116)} y="295" textAnchor="middle" fontSize="12" fill="#666">{day}</text>
                  ))}
                </g>
              </svg>
            </div>
          </div>

          <div className="secondary-charts">
            <div className="chart-card-small">
              <h3>Station Status</h3>
              <div className="status-donut">
                <svg viewBox="0 0 100 100" width="150" height="150">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#222" strokeWidth="10" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#98D83F" strokeWidth="10" strokeDasharray="180 251" strokeDashoffset="0" strokeLinecap="round" />
                  <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">72%</text>
                </svg>
                <div className="status-legend">
                  <div className="legend-item"><span className="dot online"></span> Available</div>
                  <div className="legend-item"><span className="dot busy"></span> In Use</div>
                  <div className="legend-item"><span className="dot offline"></span> Offline</div>
                </div>
              </div>
            </div>

            <div className="chart-card-small">
              <h3>User Growth</h3>
              <div className="mini-bars">
                {[40, 65, 30, 85, 55, 90, 75].map((h, i) => (
                  <div key={i} className="mini-bar-wrapper">
                    <div className="mini-bar" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DashboardaHome;
