import { useAuthStore } from "../store";
import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
const Dashboard = () => {
  const { user } = useAuthStore();
  if (user === null) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return (
    <div>
      <h1 className="flex flex-col items-center justify-center font-mono pt-4 text-red-500">
        Dashboard Layout
        <Outlet />
        <Link to={"/auth/login"}>Go to login page</Link>
      </h1>
    </div>
  );
};

export default Dashboard;
