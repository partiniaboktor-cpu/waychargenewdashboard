import React from "react";
import "./Notifications.css";
import Layout from "../Components/Layout";

const Notifications = () => {
  const summaryStats = [
    { label: "Total Sent", value: "45,234", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>, color: "#4285F4" },
    { label: "Delivered", value: "43,890", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>, color: "#10B981" },
    { label: "Open Rate", value: "74%", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>, color: "#A855F7" },
    { label: "Scheduled", value: "8", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, color: "#F59E0B" },
  ];

  const recentNotifications = [
    { title: "New Charging Station Available", message: "A new fast-charging station is now available near your location!", audience: "All Users", scheduled: "2026-04-28 16:00", status: "Scheduled" },
    { title: "Weekend Discount - 20% Off", message: "Enjoy 20% off all charging sessions this weekend!", audience: "Active Users", scheduled: "2026-04-26 09:00", status: "Sent", stats: { sent: "8,234", opened: "6,124", rate: "74%" } },
    { title: "Charging Session Complete", message: "Your vehicle is fully charged and ready to go!", audience: "Custom Segment", scheduled: "2026-04-28 14:30", status: "Sent", stats: { sent: "1", opened: "1", rate: "100%" } },
    { title: "Maintenance Alert", message: "Station #45 will be under maintenance from 2-4 PM today.", audience: "Nearby Users", scheduled: "2026-04-28 08:00", status: "Sent", stats: { sent: "234", opened: "189", rate: "81%" } },
  ];

  return (
    <Layout>
      <section className="notifications-management">
        <div className="content-header">
          <h2>Push Notifications</h2>
          <div className="header-actions">
            <button className="settings-btn-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Settings
            </button>
            <button className="add-notification-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Create Notification
            </button>
          </div>
        </div>

        <div className="stats-row">
          {summaryStats.map((stat, index) => (
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

        <div className="create-notification-card">
          <h3>Create New Notification</h3>
          <div className="notification-form">
            <div className="form-group">
              <label>Notification Title</label>
              <input type="text" placeholder="Enter title..." />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter notification message..." rows="4"></textarea>
            </div>
            <div className="form-row-three">
              <div className="form-group">
                <label>Target Audience</label>
                <select>
                  <option>All Users</option>
                  <option>Active Users</option>
                  <option>Inactive Users</option>
                  <option>Custom Segment</option>
                </select>
              </div>
              <div className="form-group">
                <label>Schedule</label>
                <input type="datetime-local" />
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button className="send-now-btn">Send Now</button>
              <button className="schedule-btn-dark">Schedule</button>
              <button className="save-draft-btn">Save Draft</button>
            </div>
          </div>
        </div>

        <div className="recent-notifications-section">
          <h3>Recent Notifications</h3>
          <div className="notifications-list">
            {recentNotifications.map((notif, index) => (
              <div key={index} className="notif-card">
                <div className="notif-main-content">
                  <div className="notif-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </div>
                  <div className="notif-details">
                    <div className="notif-title-row">
                      <span className="notif-title">{notif.title}</span>
                      <span className={`status-badge-mini ${notif.status.toLowerCase()}`}>
                        {notif.status === "Scheduled" ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        )}
                        {notif.status.toLowerCase()}
                      </span>
                    </div>
                    <p className="notif-message">{notif.message}</p>
                    <div className="notif-metadata">
                      <span>Audience: {notif.audience}</span>
                      <span>Scheduled: {notif.scheduled}</span>
                    </div>
                    {notif.stats && (
                      <div className="notif-stats-row">
                        <div className="notif-stat">Sent: <strong>{notif.stats.sent}</strong></div>
                        <div className="notif-stat">Opened: <strong className="opened-val">{notif.stats.opened}</strong></div>
                        <div className="notif-stat">Rate: <strong className="rate-val">{notif.stats.rate}</strong></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Notifications;
