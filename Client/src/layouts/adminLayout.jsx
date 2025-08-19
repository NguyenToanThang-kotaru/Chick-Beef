// src/layouts/AdminLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
// import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/admin">Dashboard</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Navbar */}
        <header className="navbar">
          <p>Welcome, Admin</p>
        </header>

        {/* Nội dung của route con */}
        <main className="content">
          <Outlet />   {/* Chỗ này render Dashboard, Users, Products */}
        </main>
      </div>
    </div>
  );
}
