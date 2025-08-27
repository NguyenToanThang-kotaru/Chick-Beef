import { Navigate, Outlet } from "react-router-dom";

export default function RequireAdminAuth() {
  const isAdmin = sessionStorage.getItem("isAdmin"); // dùng sessionStorage
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />;
}