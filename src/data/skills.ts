import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiSalesforce,
  SiDocker,
  SiPostman, 
  SiJira,
  SiCanva
} from "react-icons/si";
import { BiLogoVisualStudio, BiLogoSpringBoot  } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

export const skills = {
  languages: [
    { name: "HTML", icon: SiHtml5, color: "#e34c26" },
    { name: "CSS", icon: SiCss3, color: "#264de4" },
    { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Java", icon: FaJava, color: "#007396" },
  ],
  frameworks: [
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Angular", icon: SiAngular, color: "#dd0031" },
    { name: "Spring Boot", icon: BiLogoSpringBoot, color: "#6db33f" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "Vite", icon: SiVite, color: "#646cff" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Figma", icon: SiFigma, color: "#a259ff" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "#007acc" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "MySQL", icon: SiMysql, color: "#00758f" },
    { name: "Salesforce", icon: SiSalesforce, color: "#00a1e0" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" },
    { name: "Jira", icon: SiJira, color: "#0052cc" },
    { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  ],
};
