import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import DashboardaHome from "./Pages/DashboardaHome";
import Websitecontent from "./Pages/Websitecontent";
import Appcontent from "./Pages/Appcontent";
import Chargingstations from "./Pages/Chargingstations";
import Orders from "./Pages/Orders";
import Users from "./Pages/Users";
import Transactions from "./Pages/Transactions";

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardaHome />} />
        <Route path="/website-content" element={<Websitecontent />} />
        <Route path="/app-content" element={<Appcontent />} />
        <Route path="/charging-stations" element={<Chargingstations />} />
        <Route path="/orders-sessions" element={<Orders />} />
        <Route path="/users-management" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;