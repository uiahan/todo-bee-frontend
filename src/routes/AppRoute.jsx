import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import TodoList from "../pages/dashboard/TodoList";

function AppRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
