import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoutes = () => {
  const { user } = useAuth(); // Replace with actual user state

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
