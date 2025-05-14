import curiosity from "../../assets/svg/curiosity.svg";
import creativity from "../../assets/svg/creativity.svg";
import empathy from "../../assets/svg/empathy.svg";

const keywords = [
  {
    icon: creativity,
    label: "Creativity",
    caption: "Designing with emotion and bold originality.",
  },
  {
    icon: curiosity,
    label: "Innovation",
    caption: "Turning ideas into intuitive experiences.",
  },
  {
    icon: empathy,
    label: "Empathy",
    caption: "Building for people, not just users.",
  },
];

const KeywordsSection = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        What I Offer
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-16 max-w-3xl mx-auto font-['DM_Sans']">
        Thoughtful design. Collaborative spirit. Human-first development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {keywords.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-5 group"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-white/60 dark:bg-[#ffffff12] shadow-[0_0_18px_#f0abfc] dark:shadow-[0_0_25px_#d946ef] transition-transform duration-300 group-hover:scale-105">
              <img
                src={item.icon}
                alt={item.label}
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white tracking-wide">
              {item.label}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-xs leading-relaxed font-['DM_Sans']">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeywordsSection;
