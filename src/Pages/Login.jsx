import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../Assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      if (email === "waycharge@gmail.com" && password === "12345678") {
        setSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else if (!email || !password) {
        setError("Please fill in all fields.");
        setIsLoading(false);
      } else {
        setError("Invalid email or password. Please try again.");
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left Side: Login Card */}
        <div className="login-card-section">
          <div className="login-card">
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Sign in to access your admin dashboard</p>
            </div>

            {/* UI Feedback: Error Message */}
            {error && (
              <div className="login-feedback error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                {error}
              </div>
            )}

            {/* UI Feedback: Success Message */}
            {success && (
              <div className="login-feedback success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Login successful! Redirecting...
              </div>
            )}

            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <input 
                    type="email" 
                    placeholder="admin@waycharge.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || success}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading || success}
                  />
                  <button 
                    type="button" 
                    className="password-toggle" 
                    onClick={togglePasswordVisibility}
                    disabled={isLoading || success}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className={`sign-in-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading || success}>
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </>
                )}
              </button>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/></svg>
                  Google
                </button>
                <button type="button" className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702z"/></svg>
                  Apple
                </button>
              </div>

              <div className="login-footer">
                Don't have an account? <a href="#">Contact Administrator</a>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Branding */}
        <div className="branding-section">
          <div className="new-logo-container">
            <img src={logo} alt="WayCharge Logo" className="brand-logo-img" />
          </div>
          <div className="branding-text">
            <span className="brand-subtitle">Admin Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
