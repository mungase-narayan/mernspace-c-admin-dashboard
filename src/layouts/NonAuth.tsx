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
      <h1 className="flex items-center justify-center font-mono text-red-500">
        Non Auth Layout
        <Outlet />
      </h1>
    </div>
  );
};

export default NonAuth;
