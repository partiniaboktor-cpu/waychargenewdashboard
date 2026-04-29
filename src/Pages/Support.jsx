import React from "react";
import "./Support.css";
import Layout from "../Components/Layout";

const Support = () => {
  const summaryStats = [
    { label: "Open Tickets", value: "23", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, color: "#4285F4" },
    { label: "Avg Response Time", value: "2.5h", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, color: "#F59E0B" },
    { label: "Resolution Rate", value: "94%", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, color: "#10B981" },
    { label: "FAQ Articles", value: "48", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>, color: "#A855F7" },
  ];

  const recentTickets = [
    { id: "SUP-1234", priority: "high", status: "open", title: "Payment failed during charging", user: "John Anderson", category: "Billing", date: "2026-04-28 14:30" },
    { id: "SUP-1233", priority: "urgent", status: "in progress", title: "Station not responding", user: "Sarah Johnson", category: "Technical", date: "2026-04-28 13:15" },
    { id: "SUP-1232", priority: "low", status: "resolved", title: "How to cancel booking?", user: "Michael Chen", category: "General", date: "2026-04-28 11:20" },
    { id: "SUP-1231", priority: "medium", status: "open", title: "Refund request for session CHG-2842", user: "Emily Davis", category: "Billing", date: "2026-04-28 10:45" },
  ];

  const popularFaqs = [
    { question: "How do I start a charging session?", category: "Getting Started", views: "1245 views" },
    { question: "What payment methods are accepted?", category: "Billing", views: "987 views" },
    { question: "How do I add a new vehicle?", category: "Account", views: "756 views" },
    { question: "What connector types are supported?", category: "Technical", views: "654 views" },
    { question: "How does the rewards program work?", category: "Rewards", views: "543 views" },
  ];

  const categoryDistribution = [
    { name: "Technical", count: 45, color: "#4285F4" },
    { name: "Billing", count: 32, color: "#10B981" },
    { name: "General", count: 28, color: "#A855F7" },
    { name: "Account", count: 18, color: "#F59E0B" },
    { name: "Other", count: 12, color: "#64748B" },
  ];

  return (
    <Layout>
      <section className="support-faq-management">
        <div className="content-header">
          <h2>Support & FAQ Management</h2>
          <div className="header-actions">
            <button className="new-faq-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              New FAQ
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

        <div className="support-grid">
          <div className="recent-tickets-section">
            <h3>Recent Support Tickets</h3>
            <div className="tickets-list">
              {recentTickets.map((ticket, index) => (
                <div key={index} className="ticket-card">
                  <div className="ticket-header">
                    <div className="ticket-id-prio">
                      <span className="ticket-id">{ticket.id}</span>
                      <span className={`prio-badge ${ticket.priority}`}>{ticket.priority}</span>
                    </div>
                    <span className={`status-badge-mini ${ticket.status.replace(" ", "-")}`}>
                      {ticket.status === "open" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                      {ticket.status === "in progress" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                      {ticket.status === "resolved" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                      {ticket.status}
                    </span>
                  </div>
                  <div className="ticket-body">
                    <span className="ticket-title">{ticket.title}</span>
                    <span className="ticket-user">User: {ticket.user}</span>
                  </div>
                  <div className="ticket-footer">
                    <div className="ticket-meta">
                      <span className="ticket-cat">{ticket.category}</span>
                      <span className="ticket-date">{ticket.date}</span>
                    </div>
                    <button className="view-ticket-btn">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="popular-faq-section">
            <h3>Popular FAQ Articles</h3>
            <div className="faqs-list">
              {popularFaqs.map((faq, index) => (
                <div key={index} className="faq-card">
                  <div className="faq-main">
                    <div className="faq-icon-box">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <div className="faq-info">
                      <span className="faq-title">{faq.question}</span>
                      <div className="faq-meta">
                        <span className="faq-cat">{faq.category}</span>
                        <span className="faq-views">{faq.views}</span>
                      </div>
                    </div>
                  </div>
                  <button className="edit-faq-btn">Edit</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="category-distribution-section">
          <h3>Ticket Categories Distribution</h3>
          <div className="dist-cards">
            {categoryDistribution.map((dist, index) => (
              <div key={index} className="dist-card">
                <span className="dist-name">{dist.name}</span>
                <span className="dist-count">{dist.count}</span>
                <div className="dist-progress-bg">
                  <div className="dist-progress-bar" style={{ width: `${(dist.count/150)*100}%`, backgroundColor: dist.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
