import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuth, handleLogout } = useAuthContext();
  const navigate = useNavigate();

  const navLinks = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Testimonials",
    "Contact",
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const onLogout = () => {
    handleLogout();
    navigate("/");
  };

  const isAdmin =
    isAuth && user?.email === `${import.meta.env.VITE_ADMIN_EMAIL}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <div className="p-2 rounded-full bg-cyan-500">
            <FaCode className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800">
            Aqib<span className="text-cyan-600">Stack</span>
          </h1>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold ">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className="hover:text-cyan-600 transition hover-animation cursor-pointer"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuth && (
            <Link
              to="/auth/login"
              className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-lg hover:bg-cyan-500 hover:text-white transition"
            >
              Login
            </Link>
          )}

          {/* ✅ ONLY ADMIN */}
          {isAdmin && (
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
            >
              Dashboard
            </Link>
          )}

          {isAuth && (
            <button
              onClick={onLogout}
              className="px-4 py-2 cursor-pointer border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t flex flex-col items-center gap-4 transition-all duration-300 ${
          menuOpen ? "py-4 max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleScroll(link)}
            className="font-medium hover:text-cyan-600"
          >
            {link}
          </button>
        ))}

        {!isAuth && (
          <Link
            to="/auth/login"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 border border-cyan-500 text-cyan-600 rounded-lg"
          >
            Login
          </Link>
        )}

        {/* ✅ ONLY ADMIN */}
        {isAdmin && (
          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg"
          >
            Dashboard
          </Link>
        )}

        {isAuth && (
          <button
            onClick={onLogout}
            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
