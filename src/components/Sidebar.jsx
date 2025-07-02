import { Link } from "react-router-dom";

function Sidebar() {
  const activeClass = "flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition text-gray-700 bg-gray-100";
  const baseClass = "flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition text-gray-700 hover:bg-gray-100";

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md flex flex-col justify-between z-10">
      <div>
        <div className="text-2xl font-bold text-center py-6 text-gray-600">
          Todobee
        </div>
        <nav className="px-4">
          <Link
            to="/dashboard"
            className={`${location.pathname === "/dashboard" ? activeClass : baseClass}`}
          >
            <span>
              <i className="fa-regular fa-home"></i> Dashboard
            </span>
          </Link>
          <Link
            to="/todo-list"
            className={`${location.pathname === "/todo-list" ? activeClass : baseClass}`}
          >
            <span>
              <i className="fa-regular fa-notebook"></i> Todo List
            </span>
          </Link>
        </nav>
      </div>

      <div className="px-4 pb-6">
        <button className="w-full gap-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition">
          <span>
            <i className="fa-regular fa-left-from-bracket"></i> Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
