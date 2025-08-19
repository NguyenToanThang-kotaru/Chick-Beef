// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/adminRoutes";
import './App.css'
// import UserRoutes from "./routes/UserRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AdminRoutes />
      {/* <UserRoutes /> */}
    </BrowserRouter>
  );
}
