import { useLocation, Navigate, Outlet } from "react-router-dom";
const PublicAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default PublicAuth;
