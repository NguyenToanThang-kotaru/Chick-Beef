// src/pages/admin/Dashboard/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the admin dashboard 🚀</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Users</h3>
          <p>1,200</p>
        </div>

        <div style={{ flex: 1, background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Orders</h3>
          <p>340</p>
        </div>

        <div style={{ flex: 1, background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
          <h3>Revenue</h3>
          <p>$12,000</p>
        </div>
      </div>
    </div>
  );
}
