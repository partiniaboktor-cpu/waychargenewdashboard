import React from "react";
import "./Seo.css";
import Layout from "../Components/Layout";

const Seo = () => {
  const summaryStats = [
    { label: "SEO Score", value: "87/100", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>, color: "#10B981" },
    { label: "Pages", value: "24", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>, color: "#4285F4" },
    { label: "Keywords", value: "156", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, color: "#A855F7" },
    { label: "Issues", value: "3", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>, color: "#F59E0B" },
  ];

  const pagesOverview = [
    { name: "Homepage", path: "/", status: "Optimized" },
    { name: "About", path: "/about", status: "Needs Attention" },
    { name: "Charging Stations", path: "/stations", status: "Optimized" },
    { name: "Pricing", path: "/pricing", status: "Optimized" },
    { name: "Blog", path: "/blog", status: "Needs Attention" },
  ];

  return (
    <Layout>
      <section className="seo-management">
        <div className="content-header">
          <h2>SEO & Metadata Management</h2>
          <div className="header-actions">
            <button className="generate-sitemap-btn">Generate Sitemap</button>
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

        <div className="page-overview-card">
          <h3>Page SEO Overview</h3>
          <div className="pages-list">
            {pagesOverview.map((page, index) => (
              <div key={index} className="page-item">
                <div className="page-main-info">
                  <div className="page-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div className="page-details">
                    <span className="page-name">{page.name}</span>
                    <span className="page-path">{page.path}</span>
                  </div>
                </div>
                <div className="page-actions">
                  <span className={`status-badge-mini ${page.status.toLowerCase().replace(" ", "-")}`}>{page.status}</span>
                  <button className="edit-seo-btn">Edit SEO</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="edit-metadata-card">
          <h3>Edit Page Metadata</h3>
          <div className="metadata-form">
            <div className="form-group">
              <label>Page Title</label>
              <input type="text" defaultValue="WayCharge - Portable EV Charging Solutions" />
              <span className="helper-text">60 characters (Optimal)</span>
            </div>
            <div className="form-group">
              <label>Meta Description</label>
              <textarea rows="3" placeholder="Enter meta description..."></textarea>
              <span className="helper-text">145 characters (Optimal: 150-160)</span>
            </div>
            <div className="form-group">
              <label>Keywords</label>
              <input type="text" defaultValue="ev charging, electric vehicle, portable charger, charging stations" />
            </div>
            <div className="form-row-grid">
              <div className="form-group">
                <label>OG Image URL</label>
                <input type="text" defaultValue="https://waycharge.com/og-image.jpg" />
              </div>
              <div className="form-group">
                <label>Twitter Card Type</label>
                <select>
                  <option>summary_large_image</option>
                  <option>summary</option>
                </select>
              </div>
              <div className="form-group">
                <label>Slug Name</label>
                <input type="text" placeholder="e.g. portable-charging" />
              </div>
            </div>
            <div className="form-actions">
              <button className="save-changes-btn">Save Changes</button>
              <button className="preview-btn">Preview</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Seo;
