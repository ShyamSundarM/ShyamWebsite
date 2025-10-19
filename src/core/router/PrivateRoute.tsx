import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  const loc = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" replace state={{ from: loc }} />
  );
}
