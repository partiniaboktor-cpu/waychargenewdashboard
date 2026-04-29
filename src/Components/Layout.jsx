import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-container">
        <TopBar />
        <main className="main-content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
