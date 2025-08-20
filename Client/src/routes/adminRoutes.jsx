// src/routes/AdminRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import AdminLogin from "../pages/admin/Login/Login";
import Order from "../pages/admin/Orders/Order"
import RequireAdminAuth from "./RequireAdminAuth";
// import UserList from "../pages/admin/Users/UserList";
// import ProductList from "../pages/admin/Products/ProductList";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<RequireAdminAuth />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/Dashboard" element={<Dashboard />} />
          <Route path="/admin/Orders" element={<Order />} />
          {/* <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/products" element={<ProductList />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
