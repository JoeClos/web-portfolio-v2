import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const name = import.meta.env.VITE_NAME;

const NavbarLogo = () => {
  return (
  
      <Link to="/" className="flex items-center gap-3">
        {/* Logo Icon */}
        <img
          src={logoImg}
          alt={`${name} Logo`}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-fuchsia-600 border-b-1 border-fuchsia-600">
            {name}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 uppercase tracking-widest">
            Creative Circle
          </p>
        </div>
      </Link>

  );
};

export default NavbarLogo;
