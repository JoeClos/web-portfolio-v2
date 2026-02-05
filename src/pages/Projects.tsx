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
    <div className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="text-center max-w-4xl mx-auto mb-12" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Problem solver</span> by nature. <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:from-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Designer </span> by heart.</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 font-['DM_Sans']">
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
