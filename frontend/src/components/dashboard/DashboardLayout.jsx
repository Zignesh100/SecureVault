import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202124]">
      <Header />
      <Sidebar />

      <main className="min-w-0 pt-16 lg:pl-[250px]">
        <Outlet />
      </main>
    </div>
  );
}
