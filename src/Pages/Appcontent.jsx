import React from "react";
import "./Appcontent.css";
import Layout from "../Components/Layout";

const Appcontent = () => {
  const featureCards = [
    { title: "Home Screen Content", items: "5 items", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>, color: "#98D83F" },
    { title: "Charging Stations", items: "156 items", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, color: "#98D83F" },
    { title: "Bookings & Requests", items: "234 items", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>, color: "#98D83F" },
    { title: "Wallet & Payments", items: "12 items", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, color: "#98D83F" },
    { title: "Rewards System", items: "8 items", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>, color: "#98D83F" },
    { title: "Push Notifications", items: "45 items", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>, color: "#98D83F" },
  ];

  const onboardingScreens = [
    { title: "Welcome", screen: "Screen 1" },
    { title: "Find Stations", screen: "Screen 2" },
    { title: "Book & Charge", screen: "Screen 3" },
    { title: "Earn Rewards", screen: "Screen 4" },
  ];

  return (
    <Layout>
      <section className="app-content-management">
        <div className="content-header">
          <h2>Mobile App Content Management</h2>
          <div className="header-actions">
            <button className="preview-btn">Preview App</button>
            <button className="publish-btn">Publish Changes</button>
          </div>
        </div>

        <div className="feature-grid">
          {featureCards.map((card, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-box" style={{ backgroundColor: `${card.color}15`, color: card.color }}>
                {card.icon}
              </div>
              <div className="feature-info">
                <span className="feature-title">{card.title}</span>
                <span className="feature-count">{card.items}</span>
              </div>
              <button className="manage-btn">Manage</button>
            </div>
          ))}
        </div>

        <div className="middle-section">
          <div className="banners-container">
            <h3>Home Screen Banners</h3>
            <div className="banners-list">
              <div className="banner-item">
                <div className="banner-info">
                  <span className="status-dot online"></span>
                  <span className="banner-name">Welcome Offer - 20% Off First Charge</span>
                </div>
                <button className="banner-edit">Edit</button>
              </div>
              <div className="banner-item">
                <div className="banner-info">
                  <span className="status-dot online"></span>
                  <span className="banner-name">Coffee Promo at Partner Cafés</span>
                </div>
                <button className="banner-edit">Edit</button>
              </div>
              <div className="banner-item">
                <div className="banner-info">
                  <span className="status-dot offline"></span>
                  <span className="banner-name">Refer & Earn 500 Points</span>
                </div>
                <button className="banner-edit">Edit</button>
              </div>
            </div>
          </div>

          <div className="distribution-container">
            <h3>Connector Distribution</h3>
            <div className="dist-list">
              <div className="dist-item">
                <div className="dist-labels">
                  <span>Type A</span>
                  <span>45 stations</span>
                </div>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '45%', backgroundColor: '#4285F4' }}></div></div>
              </div>
              <div className="dist-item">
                <div className="dist-labels">
                  <span>CCS</span>
                  <span>78 stations</span>
                </div>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '78%', backgroundColor: '#10B981' }}></div></div>
              </div>
              <div className="dist-item">
                <div className="dist-labels">
                  <span>CHAdeMO</span>
                  <span>33 stations</span>
                </div>
                <div className="progress-bg"><div className="progress-fill" style={{ width: '33%', backgroundColor: '#A855F7' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="onboarding-section">
          <h3>Onboarding Screens</h3>
          <div className="onboarding-grid">
            {onboardingScreens.map((screen, index) => (
              <div key={index} className="onboarding-card">
                <div className="onboarding-phone">
                  <div className="phone-screen">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="phone-icon"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                </div>
                <div className="onboarding-info">
                  <span className="onboarding-title">{screen.title}</span>
                  <span className="onboarding-step">{screen.screen}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Appcontent;
