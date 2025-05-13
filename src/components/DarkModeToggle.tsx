import type { DarkModeToggleProps } from "../types/DarkModeToggleProps";
import { FaSun, FaMoon } from "react-icons/fa";
import { COLORS } from "../constants/colors";

const DarkModeToggle = ({ darkMode, setDarkMode }: DarkModeToggleProps) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer ml-4">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className="sr-only peer"
        aria-label="Toggle dark mode"
      />
      <div
        className="w-14 h-7 sm:w-12 sm:h-6 rounded-full flex items-center justify-between px-2 relative peer-focus:ring-2 peer-focus:ring-fuchsia-600 transition duration-300"
        style={{
          backgroundColor: COLORS.background.light,
        }}
      >
        <FaMoon
          className={`text-xs transition duration-300 ${
            darkMode
              ? "opacity-100 scale-110"
              : "opacity-40 scale-95"
          }`}
          style={{ color: COLORS.icon.moon }}
        />
        <FaSun
          className={`text-xs transition duration-300 ${
            !darkMode
              ? "opacity-100 scale-110"
              : "opacity-40 scale-95"
          }`}
          style={{ color: COLORS.icon.sun }}
        />
        <div
          className={`absolute top-1 left-1 w-5 h-5 sm:w-4 sm:h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? "translate-x-7 sm:translate-x-6" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
