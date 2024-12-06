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
import MenuPage from "../pages/dashboard/MenuPage";
import OrdersPage from "../pages/dashboard/OrdersPage";
import SalesPage from "../pages/dashboard/SalesPage";
import PromosPage from "../pages/dashboard/PromosPage";
import UsersPage from "../pages/dashboard/users/UsersPage";
import RestaurantsPage from "../pages/dashboard/RestaurantsPage";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" index element={<MainHomePage />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="home" element={<DashboardHomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="promos" element={<PromosPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="restaurants" element={<RestaurantsPage />} />
      </Route>

      <Route path="auth" element={<NonAuth />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);
export default Routers;
