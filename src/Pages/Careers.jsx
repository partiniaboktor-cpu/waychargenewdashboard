import React from "react";
import "./Careers.css";
import Layout from "../Components/Layout";

const Careers = () => {
  const summaryStats = [
    { label: "Active Listings", value: "12", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, color: "#4285F4" },
    { label: "Total Applicants", value: "234", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, color: "#A855F7" },
    { label: "Pending Review", value: "45", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, color: "#F59E0B" },
    { label: "Hired This Month", value: "8", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, color: "#10B981" },
  ];

  const jobListings = [
    { title: "Senior Software Engineer", status: "active", dept: "Engineering", loc: "San Francisco, CA", salary: "$120k - $180k", type: "Full-time", applicants: 45, date: "2026-04-15" },
    { title: "Product Manager", status: "active", dept: "Product", loc: "Remote", salary: "$100k - $150k", type: "Full-time", applicants: 32, date: "2026-04-10" },
    { title: "UX/UI Designer", status: "active", dept: "Design", loc: "New York, NY", salary: "$90k - $130k", type: "Full-time", applicants: 28, date: "2026-04-05" },
    { title: "Field Service Technician", status: "closed", dept: "Operations", loc: "Los Angeles, CA", salary: "$60k - $80k", type: "Full-time", applicants: 67, date: "2026-03-20" },
  ];

  const recentApplications = [
    { name: "Alex Thompson", email: "alex.t@email.com", pos: "Senior Software Engineer", exp: "8 years", date: "2026-04-27", status: "under review" },
    { name: "Jessica Martinez", email: "jessica.m@email.com", pos: "Product Manager", exp: "6 years", date: "2026-04-27", status: "interview" },
    { name: "Robert Kim", email: "robert.k@email.com", pos: "UX/UI Designer", exp: "5 years", date: "2026-04-26", status: "accepted" },
  ];

  return (
    <Layout>
      <section className="careers-management">
        <div className="content-header">
          <h2>Careers & Job Applications</h2>
          <div className="header-actions">
            <button className="post-job-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Post New Job
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

        <div className="active-listings-section">
          <h3>Active Job Listings</h3>
          <div className="listings-list">
            {jobListings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-card-main">
                  <div className="job-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  </div>
                  <div className="job-details">
                    <div className="job-title-row">
                      <span className="job-title">{job.title}</span>
                      <span className={`status-badge-mini ${job.status}`}>{job.status}</span>
                    </div>
                    <div className="job-metadata">
                      <span className="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        {job.dept}
                      </span>
                      <span className="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {job.loc}
                      </span>
                      <span className="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        {job.salary}
                      </span>
                      <span className="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="job-card-actions">
                  <div className="applicant-count">
                    <span className="count-val">{job.applicants}</span>
                    <span className="count-label">Applicants</span>
                  </div>
                  <div className="action-btns">
                    <button className="manage-btn-text">Manage</button>
                    <button className="view-apps-btn">View Applications</button>
                    <button className="edit-job-btn">Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-applications-section">
          <h3>Recent Applications</h3>
          <div className="applications-table-container">
            <table className="apps-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Position</th>
                  <th>Experience</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app, index) => (
                  <tr key={index}>
                    <td>
                      <div className="applicant-stack">
                        <span className="app-name">{app.name}</span>
                        <span className="app-email">{app.email}</span>
                      </div>
                    </td>
                    <td>{app.pos}</td>
                    <td>{app.exp}</td>
                    <td>{app.date}</td>
                    <td>
                      <span className={`status-badge-mini ${app.status.replace(" ", "-")}`}>
                        {app.status === "under review" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                        {app.status === "interview" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg>}
                        {app.status === "accepted" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                        {app.status}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button className="review-btn">Review</button>
                        <button className="download-btn">Download CV</button>
                      </div>
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

export default Careers;
