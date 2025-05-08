import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo"
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
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
        <NavbarLogo />
        <NavbarLinks darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="md:hidden relative w-10 h-10 flex items-center justify-center z-50">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} />
        </div>

      </div>
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </nav>
  );
};

export default Navbar;
