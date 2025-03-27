import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../shared/context/AuthContext";

const PrivateRoute = () => {
  const { user } = useAuth();
  console.log("Private Route");

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
