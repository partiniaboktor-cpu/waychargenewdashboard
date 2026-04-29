import React from "react";
import "./Websitecontent.css";
import Layout from "../Components/Layout";

const Websitecontent = () => {
  const stats = [
    { label: "Total Pages", value: "24", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>, color: "#4285F4" },
    { label: "Media Files", value: "156", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>, color: "#A855F7" },
    { label: "Blog Posts", value: "42", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3z"></path><path d="M15 3v6h6"></path><line x1="13" y1="13" x2="7" y2="13"></line><line x1="13" y1="17" x2="7" y2="17"></line><line x1="9" y1="9" x2="7" y2="9"></line></svg>, color: "#10B981" },
  ];

  const homepageSections = [
    { title: "Hero Section", status: "Published" },
    { title: "About Us", status: "Published" },
    { title: "Features", status: "Draft" },
    { title: "How It Works", status: "Published" },
    { title: "Pricing", status: "Published" },
    { title: "Testimonials", status: "Draft" },
  ];

  const recentBlogPosts = [
    { title: "The Future of EV Charging", date: "2026-04-20", status: "Published" },
    { title: "Top 10 Charging Tips", date: "2026-04-15", status: "Published" },
    { title: "WayCharge Expansion Plans", date: "2026-04-10", status: "Draft" },
  ];

  return (
    <Layout>
      <section className="content-management">
        <div className="content-header">
          <h2>Website Content Management</h2>
          <button className="add-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add New Section
          </button>
        </div>

        <div className="mini-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="mini-stat-card">
              <div className="mini-stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="mini-stat-info">
                <span className="mini-stat-label">{stat.label}</span>
                <span className="mini-stat-value">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="content-sections-container">
          <h3>Homepage Sections</h3>
          <div className="sections-list">
            {homepageSections.map((section, index) => (
              <div key={index} className="section-row">
                <div className="section-info">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  <span className="section-title">{section.title}</span>
                </div>
                <div className="section-actions">
                  <span className={`status-badge ${section.status.toLowerCase()}`}>{section.status}</span>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-sections-container">
          <div className="section-header-with-link">
            <h3>Recent Blog Posts</h3>
            <a href="#" className="view-all">View All</a>
          </div>
          <div className="sections-list">
            {recentBlogPosts.map((post, index) => (
              <div key={index} className="section-row">
                <div className="section-info">
                  <div className="post-text">
                    <span className="section-title">{post.title}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
                <div className="section-actions">
                  <span className={`status-badge ${post.status.toLowerCase()}`}>{post.status}</span>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Websitecontent;
