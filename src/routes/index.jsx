import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { HomePage } from "../pages/Home";
import { ProtectedRoutes } from "../contexts/ProtectedRoutes";

export const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home/:name" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
