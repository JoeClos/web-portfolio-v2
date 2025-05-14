import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo"
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setNavbarShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const body = document.body;
  if (menuOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }

  // Cleanup on unmount
  return () => {
    body.style.overflow = "";
  };
}, [menuOpen]);


  return (
<nav
  className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
    ${
      navbarShadow
        ? "bg-white/90 dark:bg-gray-900/80 shadow-md dark:shadow-[0_0_25px_#d946ef44] backdrop-blur-sm"
        : "bg-white dark:bg-gray-900 shadow-none"
    }
    text-gray-900 dark:text-white py-1 sm:py-2 md:py-3`}
>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <NavbarLogo />
        <NavbarLinks darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="md:hidden relative w-10 h-10 flex items-center justify-center z-50">
          <Hamburger toggled={menuOpen} toggle={() => setMenuOpen(!menuOpen)} size={20} />
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
