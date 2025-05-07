import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../../types/Project";
import ProjectDescription from "./ProjectDescription";

type Props = {
    project: Project;
    index: number;
    isExpanded: boolean;
    toggleExpand: (index: number) => void;
};

const ProjectCard = ({ project, index, isExpanded, toggleExpand }: Props) => {
    return (
        <div
            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
            data-aos="fade-up"
        >
            {/* Header */}
            <div className="px-5 pt-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-fuchsia-600 transition">
                    {project.title}
                </h3>
            </div>

            {/* Image */}
            {project.imageUrl && (
                <div className="px-5 pt-4">
                    <div className="rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full max-h-64 object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            )}


            {/* Content */}
            <div className="px-5 pb-5 pt-4 flex flex-col flex-grow gap-4">
                <ProjectDescription
                    text={project.description}
                    isExpanded={isExpanded}
                    onToggle={() => toggleExpand(index)}
                />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-800 dark:text-fuchsia-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 flex-wrap text-sm">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition"
                        >
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                    {project.codeLink && (
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <FaGithub /> Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
