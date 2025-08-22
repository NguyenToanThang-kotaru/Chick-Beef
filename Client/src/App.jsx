// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/adminRoutes";
import './App.css'
import BreakpointIndicator from "./components/BreakpointIndicator";
// import UserRoutes from "./routes/UserRoutes";

export default function App() {
  return (
    // <div>
    //   {/* Nội dung app */}
    //   <BreakpointIndicator />
    // </div>
    <BrowserRouter>
      <AdminRoutes />
      {/* <UserRoutes /> */}
    </BrowserRouter>
  );
}
