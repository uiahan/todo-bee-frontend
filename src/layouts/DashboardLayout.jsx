import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageTitle from "../routes/PageTitle";
import { useEffect } from "react";
import Aos from "aos";

function DashboardLayout() {
  PageTitle();

  useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <>
      <Sidebar />
      <main className="ml-64 flex-1 bg-gray-100 py-6 px-10 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
