import React from "react";
import "./Settings.css";
import Layout from "../Components/Layout";

const Settings = () => {
  const SettingToggle = ({ label, desc, active }) => (
    <div className="toggle-item">
      <div className="toggle-info">
        <span className="toggle-label">{label}</span>
        <span className="toggle-desc">{desc}</span>
      </div>
      <label className="switch">
        <input type="checkbox" defaultChecked={active} />
        <span className="slider round"></span>
      </label>
    </div>
  );

  return (
    <Layout>
      <section className="system-settings">
        <div className="content-header">
          <h2>System Settings</h2>
          <div className="header-actions">
            <button className="save-settings-btn">Save All Changes</button>
          </div>
        </div>

        <div className="settings-grid">
          {/* Branding */}
          <div className="settings-card">
            <div className="card-header">
              <div className="card-icon branding-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.5 12"></path><path d="M12 12l9.5 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h3>Branding</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" defaultValue="WayCharge" />
              </div>
              <div className="form-group">
                <label>Brand Color</label>
                <div className="color-input-row">
                  <div className="color-swatch" style={{ backgroundColor: "#8DC63F" }}></div>
                  <input type="text" defaultValue="#8DC63F" />
                </div>
              </div>
              <div className="form-group">
                <label>Logo URL</label>
                <input type="text" defaultValue="https://example.com/logo.png" />
              </div>
            </div>
          </div>

          {/* Payment Integration */}
          <div className="settings-card">
            <div className="card-header">
              <div className="card-icon payment-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
              <h3>Payment Integration</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Stripe API Key</label>
                <input type="password" defaultValue="sk_live_..." />
              </div>
              <div className="form-group">
                <label>PayPal Client ID</label>
                <input type="text" defaultValue="AX..." />
              </div>
              <div className="toggle-row-simple">
                <div className="toggle-info-simple">
                  <span className="toggle-label">Apple Pay</span>
                  <span className="toggle-desc">Enable Apple Pay payments</span>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-card">
            <div className="card-header">
              <div className="card-icon notif-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </div>
              <h3>Notification Settings</h3>
            </div>
            <div className="card-body toggles-list">
              <SettingToggle label="Email Notifications" desc="Send email alerts to users" active={true} />
              <SettingToggle label="Push Notifications" desc="Send mobile push notifications" active={true} />
              <SettingToggle label="SMS Alerts" desc="Send SMS for critical updates" active={false} />
              <SettingToggle label="Slack Integration" desc="Send alerts to Slack channel" active={false} />
            </div>
          </div>

          {/* API Integration */}
          <div className="settings-card">
            <div className="card-header">
              <div className="card-icon api-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><rect x="3" y="11" width="18" height="11" rx="2"></rect><circle cx="12" cy="16" r="2"></circle></svg>
              </div>
              <h3>API Integration</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Google Maps API Key</label>
                <input type="password" defaultValue="Alza..." />
              </div>
              <div className="form-group">
                <label>Firebase Project ID</label>
                <input type="text" defaultValue="waycharge-app" />
              </div>
              <div className="form-group">
                <label>Twilio Account SID</label>
                <input type="password" defaultValue="AC..." />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="settings-card">
            <div className="card-header">
              <div className="card-icon security-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Security</h3>
            </div>
            <div className="card-body toggles-list">
              <SettingToggle label="Two-Factor Authentication" desc="Require 2FA for admin login" active={true} />
              <SettingToggle label="Session Timeout" desc="Auto-logout after inactivity" active={false} />
              <SettingToggle label="IP Whitelist" desc="Restrict access by IP address" active={false} />
              <SettingToggle label="Activity Logging" desc="Log all admin actions" active={true} />
            </div>
          </div>

          {/* Regional Settings */}
          <div className="settings-card">
            <div className="card-header">
              <div className="card-icon regional-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3>Regional Settings</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Default Language</label>
                <select>
                  <option>English (US)</option>
                  <option>Arabic (UAE)</option>
                  <option>French (FR)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Timezone</label>
                <select>
                  <option>(GMT+04:00) Dubai</option>
                  <option>(GMT+00:00) London</option>
                  <option>(GMT-05:00) New York</option>
                </select>
              </div>
              <div className="form-group">
                <label>Currency</label>
                <select>
                  <option>AED - UAE Dirham</option>
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
