import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

type Props = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const NavbarLinks = ({ darkMode, setDarkMode }: Props) => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="hidden md:flex space-x-8 items-center">
        {routes.map((route) => (
          <li key={route.name} >
            {/* Use NavLink for active link styling */}
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
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </li>
      </ul>

    </nav>
  );
};

export default NavbarLinks;
