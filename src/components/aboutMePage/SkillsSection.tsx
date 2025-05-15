import { skills } from "../../data/skills";
import type { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

const SkillGroup = ({ title, items }: { title: string; items: SkillItem[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl sm:text-2xl font-semibold px-2 sm:px-4">{title}</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4 px-2 sm:px-4">
      {items.map(({ name, icon: Icon, color }) => (
        <li
          key={name}
          className="group flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
          data-aos="zoom-in"
        >
          <Icon
            className="text-lg sm:text-xl md:text-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6"
            style={{ color }}
          />
          <span className="text-sm sm:text-base font-medium">
            {name}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14">
        Technologies I Use
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks & Libraries" items={skills.frameworks} />
        <SkillGroup title="Tools" items={skills.tools} />
      </div>
    </div>
  );
};


export default SkillsSection;
