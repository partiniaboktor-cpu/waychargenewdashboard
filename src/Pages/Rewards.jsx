import React from "react";
import "./Rewards.css";
import Layout from "../Components/Layout";

const Rewards = () => {
  const summaryStats = [
    { label: "Total Points Issued", value: "2.4M", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>, color: "#F59E0B" },
    { label: "Rewards Claimed", value: "3,245", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>, color: "#A855F7" },
    { label: "Active Programs", value: "12", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>, color: "#4285F4" },
    { label: "Engagement Rate", value: "78%", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>, color: "#10B981" },
  ];

  const activePrograms = [
    { title: "Welcome Bonus", desc: "New user sign-up reward", points: "500 points", claimed: "1245 claimed", status: "Active" },
    { title: "First Charge Bonus", desc: "Complete your first charging session", points: "200 points", claimed: "987 claimed", status: "Active" },
    { title: "Referral Reward", desc: "Refer a friend who completes a charge", points: "1000 points", claimed: "456 claimed", status: "Active" },
    { title: "Monthly Milestone", desc: "10+ charges in a month", points: "300 points", claimed: "234 claimed", status: "Active" },
    { title: "Loyalty Tier Gold", desc: "Reach Gold membership tier", points: "2500 points", claimed: "69 claimed", status: "Inactive" },
  ];

  const redemptionOptions = [
    { title: "Free Charging Session", cost: "1000 points", status: "Available" },
    { title: "$10 Credit", cost: "800 points", status: "Available" },
    { title: "Coffee Voucher", cost: "500 points", status: "Available" },
    { title: "Premium Membership (1 Month)", cost: "2000 points", status: "Available" },
    { title: "Car Wash Voucher", cost: "600 points", status: "Available" },
    { title: "Exclusive Merchandise", cost: "1500 points", status: "Out of Stock" },
  ];

  const topEarners = [
    { rank: "#1", name: "David Martinez", tier: "Platinum Tier", points: "8,934 pts" },
    { rank: "#2", name: "Michael Chen", tier: "Gold Tier", points: "7,245 pts" },
    { rank: "#3", name: "John Anderson", tier: "Gold Tier", points: "5,678 pts" },
    { rank: "#4", name: "Sarah Johnson", tier: "Silver Tier", points: "4,321 pts" },
    { rank: "#5", name: "Emily Davis", tier: "Bronze Tier", points: "2,156 pts" },
  ];

  return (
    <Layout>
      <section className="rewards-management">
        <div className="content-header">
          <h2>Rewards & Points System</h2>
          <div className="header-actions">
            <button className="configure-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Configure
            </button>
            <button className="add-reward-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              New Reward
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

        <div className="rewards-grid">
          <div className="active-programs">
            <h3>Active Rewards Programs</h3>
            <div className="programs-list">
              {activePrograms.map((program, index) => (
                <div key={index} className="program-card">
                  <div className="program-header">
                    <div className="program-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </div>
                    <div className="program-title-box">
                      <div className="title-status">
                        <span className="program-title">{program.title}</span>
                        <span className={`status-badge-mini ${program.status.toLowerCase()}`}>{program.status}</span>
                      </div>
                      <span className="program-desc">{program.desc}</span>
                    </div>
                  </div>
                  <div className="program-footer">
                    <div className="point-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <span>{program.points}</span>
                    </div>
                    <span className="claimed-count">{program.claimed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="redemption-options">
            <h3>Redemption Options</h3>
            <div className="options-list">
              {redemptionOptions.map((option, index) => (
                <div key={index} className="option-card">
                  <div className="option-info">
                    <span className="option-title">{option.title}</span>
                    <div className="option-footer">
                      <div className="point-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <span>{option.cost}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`status-badge-mini ${option.status.toLowerCase().replace(/ /g, '-')}`}>{option.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="top-earners-section">
          <h3>Top Point Earners</h3>
          <div className="earners-list">
            {topEarners.map((earner, index) => (
              <div key={index} className="earner-card">
                <div className="earner-main">
                  <div className="rank-badge">{earner.rank}</div>
                  <div className="earner-info">
                    <span className="earner-name">{earner.name}</span>
                    <span className="earner-tier">{earner.tier}</span>
                  </div>
                </div>
                <div className="earner-points">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span>{earner.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rewards;
