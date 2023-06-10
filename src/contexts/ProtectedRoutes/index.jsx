import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const ProtectedRoutes = () => {
  const { validated, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return validated ? <Outlet /> : <Navigate to={"/"} />;
};
