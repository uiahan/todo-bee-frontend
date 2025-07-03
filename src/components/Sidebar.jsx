import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthController from "../controllers/AuthController";
import Swal from "sweetalert2";

function Sidebar() {
  const location = useLocation();

  const activeClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition text-blue-700 bg-blue-100";
  const baseClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition text-gray-700 hover:bg-blue-100";

  const logout = AuthController((state) => state.logout);
  const navigate = useNavigate();

  const user = AuthController((state) => state.user);

  const handleLogout = async () => {
    try {
      await logout();
      await navigate("/");
      Swal.fire({
        icon: "success",
        title: "Berhasil Logout",
        text: "Anda berhasil logout",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: "Gagal logout silahkan coba lagi",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white flex flex-col justify-between z-10">
      <div>
        <div className="flex pt-6 flex-col items-center px-4 mb-6">
          <img
            src={
              user && user.avatar
                ? `${import.meta.env.VITE_API_URL_IMAGE}/storage/${user.avatar}`
                : "/src/assets/profile-default.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-600 mb-2"
          />
          <p className="text-gray-600 font-medium text-sm">
            Hallo, {user?.name || ""}
          </p>
        </div>
        <nav className="px-4">
          <Link
            to="/dashboard"
            className={`${
              location.pathname === "/dashboard" ? activeClass : baseClass
            }`}
          >
            <span>
              <i className="fa-regular fa-home"></i> Dashboard
            </span>
          </Link>
          <Link
            to="/todo-list"
            className={`${
              location.pathname === "/todo-list" ||
              location.pathname.startsWith("/todo-list-detail")
                ? activeClass
                : baseClass
            }`}
          >
            <span>
              <i className="fa-regular fa-notebook"></i> Todo List
            </span>
          </Link>
          <Link
            to="/profile"
            className={`${
              location.pathname === "/profile" ? activeClass : baseClass
            }`}
          >
            <span>
              <i className="fa-regular fa-user mr-1"></i> Profile
            </span>
          </Link>
          <Link
            to="/setting"
            className={`${
              location.pathname === "/setting" ? activeClass : baseClass
            }`}
          >
            <span>
              <i className="fa-regular fa-gear mr-1"></i> Setting
            </span>
          </Link>
        </nav>
      </div>

      <div className="px-4 pb-6">
        <button
          className="w-full gap-3 px-4 py-3 rounded-lg bg-red-100 text-red-600 hover:text-red-700 hover:bg-red-200 transition"
          onClick={handleLogout}
        >
          <span>
            <i className="fa-regular fa-left-from-bracket"></i> Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
