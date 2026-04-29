import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import DashboardaHome from "./Pages/DashboardaHome";

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardaHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;