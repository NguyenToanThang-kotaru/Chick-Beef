import { Navigate, Outlet } from "react-router-dom";

export default function RequireAdminAuth() {
  const isAdmin = localStorage.getItem("isAdmin"); // hoặc check token
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />;
}