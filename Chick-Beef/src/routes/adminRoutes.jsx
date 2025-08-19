// src/routes/AdminRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
// import UserList from "../pages/admin/Users/UserList";
// import ProductList from "../pages/admin/Products/ProductList";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        {/* <Route path="/admin/users" element={<UserList />} /> */}
        {/* <Route path="/admin/products" element={<ProductList />} /> */}
      </Route>
    </Routes>
  );
}
