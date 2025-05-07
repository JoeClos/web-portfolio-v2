import { skills } from "../data/skills";
import type { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

const SkillGroup = ({ title, items }: { title: string; items: SkillItem[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-fuchsia-600">{title}</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map(({ name, icon: Icon, color }) => (
        <li
          key={name}
          className="group flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
          data-aos="zoom-in"
        >
          <Icon
            className="text-xl md:text-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6"
            style={{ color }}
          />
          <span className="font-medium">{name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="mt-12 space-y-10" data-aos="fade-up">
      <h2 className="text-2xl font-bold">My Technical Toolbox</h2>
      <div className="space-y-8">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks & Libraries" items={skills.frameworks} />
        <SkillGroup title="Tools" items={skills.tools} />
      </div>
    </div>
  );
};

export default SkillsSection;

// import { useState } from "react";
// import { skills } from "../data/skills";
// import type { IconType } from "react-icons";

// const tabs = ["Frontend", "Backend", "Tools"];

// type SkillItem = {
//   name: string;
//   icon: IconType;
//   color: string;
// };

// const SkillGroup = ({ items }: { items: SkillItem[] }) => (
//   <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//     {items.map(({ name, icon: Icon, color }) => (
//       <li
//         key={name}
//         className="group flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
//         data-aos="zoom-in"
//       >
//         <Icon
//           className="text-xl md:text-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6"
//           style={{ color }}
//         />
//         <span className="font-medium">{name}</span>
//       </li>
//     ))}
//   </ul>
// );

// const SkillsSection = () => {
//   const [activeTab, setActiveTab] = useState("Frontend");

//   const getSkillsByTab = (): SkillItem[] => {
//     switch (activeTab) {
//       case "Frontend":
//         return [
//           ...skills.languages,
//           ...skills.frameworks.filter(skill =>
//             ["React", "Angular", "Tailwind CSS", "Bootstrap", "Material UI", "Vite"].includes(skill.name)
//           )
//         ];
//       case "Backend":
//         return [
//           ...skills.languages.filter(skill => skill.name === "Java"),
//           ...skills.frameworks.filter(skill => skill.name === "Spring Boot"),
//           ...skills.tools.filter(skill => ["MongoDB", "MySQL", "Docker", "Postman"].includes(skill.name))
//         ];
//       case "Tools":
//         return skills.tools.filter(skill => !["MongoDB", "MySQL", "Docker", "Postman"].includes(skill.name));
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="mt-12 space-y-10" data-aos="fade-up">
//       <h2 className="text-2xl font-bold">Skills</h2>

//       {/* Tabs */}
//       <div className="flex space-x-4">
//         {tabs.map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-full border ${
//               activeTab === tab
//                 ? "bg-fuchsia-600 text-white border-fuchsia-600"
//                 : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//             } transition`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Skill Items */}
//       <SkillGroup items={getSkillsByTab()} />
//     </div>
//   );
// };

// export default SkillsSection;

