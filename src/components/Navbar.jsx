import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between py-5 px-6 md:px-60">
        <div className="flex space-x-10 items-center">
          <div className="font-semibold text-3xl text-gray-800">TodoBee</div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:flex space-x-2">
          <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded-sm hover:bg-blue-700 transition-colors">
            Login
          </Link>
          <Link to="/register" className="bg-gray-600 text-white px-4 py-1 rounded-sm hover:bg-gray-700 transition-colors">
            Daftar
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a href="#" className="block text-gray-700">
            Home
          </a>
          <a href="#" className="block text-gray-700">
            About
          </a>
          <a href="#" className="block text-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
