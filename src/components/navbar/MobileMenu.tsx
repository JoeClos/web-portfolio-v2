import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import { useRef, useEffect } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

type Props = {
  menuOpen: boolean;
  setMenuOpen: (val: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const MobileMenu = ({ menuOpen, setMenuOpen, darkMode, setDarkMode }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // If the click was inside the menu OR on the hamburger toggle, do nothing
      const isInsideMenu = menuRef.current?.contains(target);
      const isHamburger = target.closest('.hamburger-react');

      if (!isInsideMenu && !isHamburger) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Mobile navigation menu"
      className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
    >
      <ul className="flex flex-col items-start mx-auto space-y-4 text-base sm:text-lg text-left w-fit">
        {routes.map((route) => (
          <li key={route.name}>
            <NavLink
              to={route.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-1 transition hover:text-fuchsia-600 ${isActive ? "text-fuchsia-600 font-semibold" : ""
                }`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        <li>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
