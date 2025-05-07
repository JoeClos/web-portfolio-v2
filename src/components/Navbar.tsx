import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark") {
                setDarkMode(true);
                document.documentElement.classList.add("dark");
            } else {
                setDarkMode(false);
                document.documentElement.classList.remove("dark");
            }
        }, []);
    
    
        useEffect(() => {
            const root = document.documentElement;
            if (darkMode) {
                root.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                root.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }, [darkMode]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wider">
          Josephine<span className="text-fuchsia-600">C</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {routes.map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `hover:text-fuchsia-600 transition ${isActive ? "text-fuchsia-600 font-semibold" : ""}`
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-4 py-1 rounded border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition"
            >
              Resume
            </a>
          </li>
          <li>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center space-y-4 transition-opacity duration-300">
          {routes.map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg hover:text-fuchsia-600 ${isActive ? "text-fuchsia-600 font-semibold" : ""}`
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-1 rounded border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition"
            >
              Resume
            </a>
          </li>
          <li>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;