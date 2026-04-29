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
import Rewards from "./Pages/Rewards";
import Notifications from "./Pages/Notifications";
import Seo from "./Pages/Seo";
import Contenteditor from "./Pages/Contenteditor";
import Support from "./Pages/Support";
import Careers from "./Pages/Careers";
import Settings from "./Pages/Settings";

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
        <Route path="/rewards-points" element={<Rewards />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/seo-metadata" element={<Seo />} />
        <Route path="/content-editor" element={<Contenteditor />} />
        <Route path="/support-faq" element={<Support />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;