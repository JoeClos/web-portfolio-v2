// import { useState } from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { projects } from "../data/projects";

// const categories = ["All", "Frontend", "Full Stack", "CMS", "UI/UX"];

// const Projects = () => {
//   const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());
//   const [activeCategory, setActiveCategory] = useState("All");

//   const toggleExpand = (index: number) => {
//     setExpandedIndices((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(index)) {
//         newSet.delete(index);
//       } else {
//         newSet.add(index);
//       }
//       return newSet;
//     });
//   };

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   return (
//     <div className="pt-24 sm:pt-28">
//       {/* Dynamic Intro Section */}
//       <div className="mb-12 text-center max-w-3xl mx-auto" data-aos="fade-up">
//         <h2 className="text-3xl font-extrabold tracking-tight mb-4">
//           Problem solver by nature. <span className="text-fuchsia-600">Designer by heart.</span>
//         </h2>
//         <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//           Dive into my work and see what I've been up to! From real-world apps to playful side projects, each one reflects my curiosity, creativity, and love for elegant code.
//         </p>
//       </div>

//       {/* Category Filter */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-4 py-2 rounded-full border text-sm transition font-medium ${activeCategory === cat
//               ? "bg-fuchsia-600 text-white border-fuchsia-600"
//               : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4">
//         {filteredProjects.map((project, index) => (
//           <div
//             key={project.title}
//             className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
//             data-aos="fade-up"
//           >
//             <div className="p-5 pb-0">
//               <h3 className="text-xl font-semibold text-fuchsia-600 mb-2">
//                 {project.title}
//               </h3>
//             </div>

//             {project.imageUrl && (
//               <img
//                 src={project.imageUrl}
//                 alt={project.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             )}

//             <div className="p-5 flex flex-col justify-between h-full">
//               {/* Description */}
//               <div className="mb-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out">
//                 {project.description.length > 100 ? (
//                   <>
//                     {expandedIndices.has(index) ? (
//                       <>
//                         <p>{project.description}</p>
//                         <button
//                           onClick={() => toggleExpand(index)}
//                           className="mt-1 text-xs text-fuchsia-600 hover:underline focus:outline-none"
//                         >
//                           See less
//                         </button>
//                       </>
//                     ) : (
//                       <p>
//                         {project.description.slice(0, 100)}...
//                         <button
//                           onClick={() => toggleExpand(index)}
//                           className="ml-1 text-xs text-fuchsia-600 hover:underline focus:outline-none"
//                         >
//                           See more
//                         </button>
//                       </p>
//                     )}
//                   </>
//                 ) : (
//                   <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
//                     {project.description}
//                   </p>
//                 )}

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 text-xs mb-4">
//                   {project.techStack.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-800 dark:text-fuchsia-200 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Links */}
//               <div className="flex gap-4 mt-auto">
//                 {project.liveLink && (
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-sm text-fuchsia-600 hover:underline"
//                   >
//                     <FaExternalLinkAlt /> Live
//                   </a>
//                 )}
//                 {project.codeLink && (
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-sm text-fuchsia-600 hover:underline"
//                   >
//                     <FaGithub /> Code
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilter from "../components/projects/ProjectFilter";

const categories = ["All", "Frontend", "Full Stack", "CMS", "UI/UX"];

const Projects = () => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 sm:pt-28">
      <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold mb-4">
          Problem solver by nature. <span className="text-fuchsia-600">Designer by heart.</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Dive into my work and see what I've been up to!
        </p>
      </div>

      <ProjectFilter
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.title}
            index={i}
            project={project}
            isExpanded={expanded.has(i)}
            toggleExpand={toggleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
