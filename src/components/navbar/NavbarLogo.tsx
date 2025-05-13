import logoImg from "../../assets/logo.png";

const NavbarLogo = () => {
  return (
    <div>
      {/* Logo Icon */}
      <img
        src={logoImg}
        alt="Josephine logo"
        className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
      />

      {/* Brand Text */}
      {/* <div className="leading-tight">
        <p className="text-sm sm:text-base uppercase text-gray-900 dark:text-white border-b-2 border-fuchsia-600 inline-block pb-1 tracking-normal sm:tracking-wide">
          Josephine
        </p>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 tracking-wide uppercase mt-1">
          Dev
        </p>
      </div> */}
    </div>
  );
};

export default NavbarLogo;
