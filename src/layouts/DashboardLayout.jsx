import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageTitle from "../routes/PageTitle";

function DashboardLayout() {
  PageTitle();

  return (
    <>
      <Sidebar />
      <main className="ml-64 flex-1 bg-gray-50 py-6 px-10 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
