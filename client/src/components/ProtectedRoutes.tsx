import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../UserProvider";

const ProtectedRoutes = () => {
  const { user } = useUser();
  const isAuthenticated = !!user; // Check if user exists (authenticated) or not

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
