import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>; // Display a loading indicator

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
