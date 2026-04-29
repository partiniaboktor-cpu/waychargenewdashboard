import React from "react";
import "./Contenteditor.css";
import Layout from "../Components/Layout";

const Contenteditor = () => {
  const toolbarButtons = [
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v16"></path><path d="M6 4h4a4 4 0 0 1 0 8H6"></path><path d="M6 12h5a4 4 0 0 1 0 8H6"></path></svg>, label: "Bold" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg>, label: "Italic" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0 0 12 0V3"></path><line x1="4" y1="21" x2="20" y2="21"></line></svg>, label: "Underline" },
    { separator: true },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>, label: "Align Left" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>, label: "Align Center" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>, label: "Align Right" },
    { separator: true },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>, label: "List" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><path d="M4 6h1v4"></path><path d="M4 10h2"></path><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path></svg>, label: "Ordered List" },
    { separator: true },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>, label: "Link" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>, label: "Image" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, label: "Code" },
  ];

  const recentDrafts = [
    { title: "Blog Post: Future of EV", time: "2 hrs ago" },
    { title: "Homepage Update", time: "2 hrs ago" },
    { title: "New Feature Announcement", time: "2 hrs ago" },
  ];

  return (
    <Layout>
      <section className="content-editor-page">
        <div className="content-header">
          <h2>Rich Text Content Editor</h2>
          <div className="header-actions">
            <button className="preview-btn-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Preview
            </button>
            <button className="save-btn-brand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              Save
            </button>
          </div>
        </div>

        <div className="editor-container">
          <div className="editor-toolbar">
            {toolbarButtons.map((btn, index) => (
              btn.separator ? (
                <div key={index} className="toolbar-separator"></div>
              ) : (
                <button key={index} className="toolbar-btn" title={btn.label}>
                  {btn.icon}
                </button>
              )
            ))}
          </div>
          <div className="editor-canvas">
            <div className="canvas-content" contentEditable="true">
              <h3>Welcome to WayCharge</h3>
              <p>Experience the future of electric vehicle charging with our innovative portable charging solutions...</p>
            </div>
          </div>
        </div>

        <div className="editor-bottom-grid">
          <div className="recent-drafts-section">
            <h3>Recent Drafts</h3>
            <div className="drafts-list">
              {recentDrafts.map((draft, index) => (
                <div key={index} className="draft-card">
                  <span className="draft-title">{draft.title}</span>
                  <span className="draft-time">{draft.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="publishing-options-section">
            <h3>Publishing Options</h3>
            <div className="publishing-form">
              <div className="form-group">
                <label>Status</label>
                <select>
                  <option>Draft</option>
                  <option>Scheduled</option>
                  <option>Published</option>
                </select>
              </div>
              <div className="form-group">
                <label>Category</label>
                <select>
                  <option>Blog Post</option>
                  <option>Homepage Update</option>
                  <option>Announcement</option>
                </select>
              </div>
              <div className="form-group">
                <label>Publish Date</label>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contenteditor;
