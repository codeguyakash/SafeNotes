// import Dashboard from "../Dashboard";
import {Outlet, useLocation, Navigate } from "react-router-dom";
const RequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
