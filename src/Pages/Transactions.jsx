import React from "react";
import "./Transactions.css";
import Layout from "../Components/Layout";

const Transactions = () => {
  const transactions = [
    { id: "TXN-8934", user: "John Anderson", type: "Charging", amount: "$12.45", method: "Credit Card", date: "2026-04-28", time: "14:30", status: "Completed" },
    { id: "TXN-8933", user: "Sarah Johnson", type: "Top-up", amount: "$50.00", method: "Debit Card", date: "2026-04-28", time: "13:20", status: "Completed" },
    { id: "TXN-8932", user: "Michael Chen", type: "Charging", amount: "$19.50", method: "Wallet", date: "2026-04-28", time: "12:15", status: "Completed" },
  ];

  const summaryStats = [
    { label: "Total Revenue", value: "$45,890", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, color: "#10B981" },
    { label: "Wallet Balance", value: "$124,560", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M12 12h.01"></path></svg>, color: "#4285F4" },
    { label: "Transactions", value: "8,234", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, color: "#A855F7" },
    { label: "Growth", value: "+15.3%", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>, color: "#F59E0B" },
  ];

  const paymentMethods = [
    { label: "Credit Card", value: 45, color: "#98D83F" },
    { label: "Wallet", value: 30, color: "#4285F4" },
    { label: "Digital Wallets", value: 25, color: "#A855F7" },
  ];

  const quickStats = [
    { label: "Avg Transaction", value: "$15.67" },
    { label: "Pending Refunds", value: "12" },
    { label: "Failed Transactions", value: "23" },
    { label: "Processing", value: "8" },
  ];

  return (
    <Layout>
      <section className="transactions-management">
        <div className="content-header">
          <h2>Transactions & Wallet</h2>
          <div className="header-actions">
            <button className="export-report-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export Report
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

        <div className="middle-grid">
          <div className="payment-methods-card">
            <h3>Payment Methods</h3>
            <div className="methods-list">
              {paymentMethods.map((method, index) => (
                <div key={index} className="method-item">
                  <div className="method-labels">
                    <span>{method.label}</span>
                    <span style={{ color: method.color }}>{method.value}%</span>
                  </div>
                  <div className="method-progress-bg">
                    <div className="method-progress-fill" style={{ width: `${method.value}%`, backgroundColor: method.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-stats-container">
            <h3>Quick Stats</h3>
            <div className="quick-stats-grid">
              {quickStats.map((stat, index) => (
                <div key={index} className="quick-stat-card">
                  <span className="quick-stat-label">{stat.label}</span>
                  <span className="quick-stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="recent-transactions-container">
          <h3>Recent Transactions</h3>
          <div className="table-wrapper">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>User</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index}>
                    <td className="txn-id">{txn.id}</td>
                    <td>{txn.user}</td>
                    <td className="type-cell">
                      <span className={`type-icon ${txn.type.toLowerCase()}`}>
                        {txn.type === "Charging" ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 7 17 7 17 17"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 17 7 17 7 7"></polyline><line x1="17" y1="7" x2="7" y2="17"></line></svg>
                        )}
                      </span>
                      {txn.type}
                    </td>
                    <td className={`amount-cell ${txn.type.toLowerCase()}`}>
                      {txn.amount}
                    </td>
                    <td>{txn.method}</td>
                    <td className="date-time">
                      <span>{txn.date}</span>
                      <span>{txn.time}</span>
                    </td>
                    <td>
                      <span className="status-badge-inline completed">completed</span>
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

export default Transactions;
