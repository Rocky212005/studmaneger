// src/layout/Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
