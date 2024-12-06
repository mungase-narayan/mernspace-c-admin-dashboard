import { useAuthStore } from "../store";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NonAuth = () => {
  const { user } = useAuthStore();
  if (user !== null) {
    return <Navigate to="/dashboard/home" replace={true} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NonAuth;
