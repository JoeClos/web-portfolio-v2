import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const sections = [
  { id: "hero", label: "About" },
  { id: "core-values", label: "Values" },
  { id: "timeline", label: "Journey" },
  { id: "stack", label: "Skills" },
];

const DotNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            setActive(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav role="navigation"
      aria-label="Section dot navigation" className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((section) => (
        <ScrollLink
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          offset={-80}
          className="group relative cursor-pointer"
          aria-label={section.label}
        >
          <div
            className={`w-4 h-4 rounded-full border-2 ${active === section.id
                ? "bg-fuchsia-600 border-fuchsia-600"
                : "border-fuchsia-400"
              } transition-all duration-300`}
          />
          {/* Tooltip */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm whitespace-nowrap bg-fuchsia-700 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            {section.label}
          </span>
        </ScrollLink>
      ))}
    </nav>
  );
};

export default DotNav;
