import React from "react";
import "./Orders.css";
import Layout from "../Components/Layout";

const Orders = () => {
  const sessions = [
    { id: "CHG-2845", user: "John Anderson", station: "Downtown Station A", date: "2026-04-28", time: "14:30", duration: "45 min", energy: "28.5 kWh", cost: "$12.45", status: "Completed" },
    { id: "CHG-2844", user: "Sarah Johnson", station: "Shopping Mall C", date: "2026-04-28", time: "13:15", duration: "32 min", energy: "22.3 kWh", cost: "$9.80", status: "Active" },
    { id: "CHG-2843", user: "Michael Chen", station: "Highway Rest Stop B", date: "2026-04-28", time: "12:00", duration: "1h 15min", energy: "45.8 kWh", cost: "$19.50", status: "Completed" },
    { id: "CHG-2842", user: "Emily Davis", station: "City Center E", date: "2026-04-28", time: "11:45", duration: "20 min", energy: "15.2 kWh", cost: "$6.75", status: "Cancelled" },
    { id: "CHG-2841", user: "David Martinez", station: "Airport Terminal D", date: "2026-04-28", time: "10:30", duration: "55 min", energy: "38.9 kWh", cost: "$16.20", status: "Completed" },
  ];

  const stats = [
    { label: "Total Sessions", value: "8,234", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>, color: "#4285F4" },
    { label: "Active Now", value: "24", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, color: "#F59E0B" },
    { label: "Energy Delivered", value: "245 MWh", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, color: "#10B981" },
    { label: "Completed Today", value: "156", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, color: "#A855F7" },
  ];

  return (
    <Layout>
      <section className="orders-management">
        <div className="content-header">
          <h2>Orders & Charging Sessions</h2>
          <div className="header-actions">
            <button className="filter-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filter
            </button>
            <button className="export-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export
            </button>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-box" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sessions-table-container">
          <h3>Recent Sessions</h3>
          <div className="table-wrapper">
            <table className="sessions-table">
              <thead>
                <tr>
                  <th>Session ID</th>
                  <th>User</th>
                  <th>Station</th>
                  <th>Date & Time</th>
                  <th>Duration</th>
                  <th>Energy</th>
                  <th>Cost</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, index) => (
                  <tr key={index}>
                    <td className="session-id">{session.id}</td>
                    <td>{session.user}</td>
                    <td>{session.station}</td>
                    <td className="date-time">
                      <span>{session.date}</span>
                      <span>{session.time}</span>
                    </td>
                    <td>{session.duration}</td>
                    <td>{session.energy}</td>
                    <td className="cost-value">{session.cost}</td>
                    <td>
                      <span className={`status-badge-inline ${session.status.toLowerCase()}`}>
                        {session.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
