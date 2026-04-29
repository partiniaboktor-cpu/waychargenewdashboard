import React, { useState } from "react";
import "./Users.css";
import Layout from "../Components/Layout";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const allUsers = [
    { initials: "JA", name: "John Anderson", joined: "2025-01-15", email: "john.anderson@email.com", phone: "+1 234 567 8901", vehicle: "Tesla Model 3", type: "Type 2", sessions: 45, spent: "$1,245", status: "active" },
    { initials: "SJ", name: "Sarah Johnson", joined: "2025-02-20", email: "sarah.j@email.com", phone: "+1 234 567 8902", vehicle: "Nissan Leaf", type: "CHAdeMO", sessions: 28, spent: "$780", status: "active" },
    { initials: "MC", name: "Michael Chen", joined: "2024-11-10", email: "mchen@email.com", phone: "+1 234 567 8903", vehicle: "Chevrolet Bolt", type: "CCS", sessions: 67, spent: "$2,100", status: "active" },
    { initials: "ED", name: "Emily Davis", joined: "2026-03-05", email: "emily.davis@email.com", phone: "+1 234 567 8904", vehicle: "BMW i4", type: "Type 2", sessions: 12, spent: "$345", status: "inactive" },
    { initials: "DM", name: "David Martinez", joined: "2024-09-12", email: "d.martinez@email.com", phone: "+1 234 567 8905", vehicle: "Audi e-tron", type: "CCS", sessions: 89, spent: "$3,450", status: "active" },
  ];

  // Filtering Logic
  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  const summaryStats = [
    { label: "Total Users", value: "12,458", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg>, color: "#4285F4" },
    { label: "Active Users", value: "10,234", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, color: "#10B981" },
    { label: "Vehicles", value: "14,567", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>, color: "#A855F7" },
    { label: "New This Month", value: "+456", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="16" y1="11" x2="22" y2="11"></line></svg>, color: "#F59E0B" },
  ];

  return (
    <Layout>
      <section className="users-management-page">
        <div className="users-header-row">
          <div className="header-left">
            <h2>Users Management</h2>
          </div>
          <div className="header-right">
            <button className="secondary-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filter
            </button>
            <button className="secondary-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export
            </button>
            <button className="primary-btn-green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="16" y1="11" x2="22" y2="11"></line></svg>
              Add User
            </button>
          </div>
        </div>

        <div className="users-stats-grid">
          {summaryStats.map((stat, index) => (
            <div key={index} className="user-stat-card">
              <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}10`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-text">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="users-table-card">
          <div className="table-controls">
            <div className="search-box-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                placeholder="Search users by name, email, or phone..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="table-responsive-wrapper">
            {isLoading ? (
              <div className="table-loading-state">
                <span className="spinner-large"></span>
                <p>Loading user data...</p>
              </div>
            ) : filteredUsers.length > 0 ? (
              <table className="users-data-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Contact</th>
                    <th>Vehicle</th>
                    <th>Sessions</th>
                    <th>Total Spent</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={index}>
                      <td className="user-info-cell">
                        <div className="user-avatar-initials">
                          {user.initials}
                        </div>
                        <div className="name-stack">
                          <span className="full-name">{user.name}</span>
                          <span className="sub-text">Joined {user.joined}</span>
                        </div>
                      </td>
                      <td className="contact-info-cell">
                        <span className="main-text">{user.email}</span>
                        <span className="sub-text">{user.phone}</span>
                      </td>
                      <td className="vehicle-info-cell">
                        <span className="main-text">{user.vehicle}</span>
                        <span className="sub-text">{user.type}</span>
                      </td>
                      <td className="count-cell">{user.sessions}</td>
                      <td className="amount-cell">{user.spent}</td>
                      <td>
                        <span className={`status-pill ${user.status}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="table-empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                <h3>No users found</h3>
                <p>We couldn't find any users matching "{searchTerm}"</p>
                <button className="secondary-btn" onClick={() => setSearchTerm("")}>Clear Search</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Users;
