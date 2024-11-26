import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import DashboardHomePage from "../pages/dashboard/HomePage";
import React from "react";
import LoginPage from "../pages/auth/LoginPage";
import NonAuth from "../layouts/NonAuth";
import Dashboard from "../layouts/Dashboard";
import MainHomePage from "../pages/MainHomePage";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" index element={<MainHomePage />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="home" element={<DashboardHomePage />} />
      </Route>

      <Route path="auth" element={<NonAuth />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);
export default Routers;
