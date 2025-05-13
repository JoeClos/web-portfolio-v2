import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const name = import.meta.env.VITE_NAME;
const github = import.meta.env.VITE_GITHUB_URL;
const linkedin = import.meta.env.VITE_LINKEDIN_URL;
const email = import.meta.env.VITE_EMAIL_URL;

const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-10 px-6 mt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:justify-items-center text-left items-start">
                {/* Branding */}
                <div>
                    <h2 className="text-xl font-bold text-fuchsia-600">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed">
                        Bridging design, empathy, and technology to build meaningful digital
                        experiences.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Explore
                    </h3>
                    <div className="flex flex-col space-y-2">
                        <ul>
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
                        </ul>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                        Connect
                    </h3>
                    <div className="flex space-x-4 text-lg">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub className="hover:text-fuchsia-600" />
                        </a>
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="hover:text-fuchsia-600" />
                        </a>
                        <a href={email} aria-label="Email">
                            <FaEnvelope className="hover:text-fuchsia-600" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t pt-6  sm:text-center text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} {" "}
                <span className="text-fuchsia-600 font-semibold">{name}</span> C. Made
                with <FaHeart className="inline text-fuchsia-600" /> and creativity.
            </div>
        </footer>
    );
};

export default Footer;
