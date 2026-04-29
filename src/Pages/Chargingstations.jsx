import React from "react";
import "./Chargingstations.css";
import Layout from "../Components/Layout";

const Chargingstations = () => {
  const stations = [
    { name: "Downtown Station A", location: "New York, NY", status: "Available", connectors: 4, sessions: 145 },
    { name: "Highway Rest Stop B", location: "Los Angeles, CA", status: "Busy", connectors: 6, sessions: 298 },
    { name: "Shopping Mall C", location: "Chicago, IL", status: "Available", connectors: 3, sessions: 87 },
    { name: "Airport Terminal D", location: "Houston, TX", status: "Offline", connectors: 8, sessions: 412 },
  ];

  return (
    <Layout>
      <section className="station-management">
        <div className="content-header">
          <h2>Charging Stations Management</h2>
          <div className="header-actions">
            <button className="filter-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filter
            </button>
            <button className="add-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add Station
            </button>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-label">Total Stations</span>
            <span className="stat-value">156</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Available</span>
            <span className="stat-value available">124</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">In Use</span>
            <span className="stat-value in-use">28</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Offline</span>
            <span className="stat-value offline">4</span>
          </div>
        </div>

        <div className="split-view">
          <div className="station-list-container">
            <h3>Station List</h3>
            <div className="station-list">
              {stations.map((station, index) => (
                <div key={index} className="station-row-card">
                  <div className="station-main-info">
                    <div className="station-icon-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="station-details">
                      <div className="name-status">
                        <span className="station-name">{station.name}</span>
                        <span className={`status-badge-inline ${station.status.toLowerCase()}`}>
                          <span className="status-dot-mini"></span>
                          {station.status}
                        </span>
                      </div>
                      <span className="station-location">{station.location}</span>
                    </div>
                  </div>
                  <div className="station-meta">
                    <div className="meta-info">
                      <span>{station.connectors} Connectors</span>
                      <span className="dot-divider"></span>
                      <span>{station.sessions} Sessions</span>
                    </div>
                    <a href="#" className="manage-link">Manage</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="map-view-container">
            <h3>Map View</h3>
            <div className="map-placeholder">
              <div className="map-icon-glow">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#98D83F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="map-text">
                <span className="map-title">Interactive map view</span>
                <span className="map-subtitle">Showing 5 stations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chargingstations;
