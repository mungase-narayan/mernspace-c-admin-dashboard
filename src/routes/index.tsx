import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import React from "react";
import LoginPage from "../pages/auth/LoginPage";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="dashboard" element={<DashboardPage />} />
    </Route>
  )
);
export default Routers;
