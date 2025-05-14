import journeyImage from "../../assets/journey-timeline.png";
const timeline = [
  {
    year: "2020",
    title: "Started learning HTML and CSS",
    description: "Began my coding journey, building small passion projects.",
  },
  {
    year: "2021",
    title: "Started studies in Helsinki Business College",
    description: "Began formal training in software development (Angular & Java).",
  },
  {
    year: "2023",
    title: "Built real-world apps & joined collaborations",
    description: "Gained confidence in React, Git, and responsive UI/UX design.",
  },
  {
    year: "2024",
    title: "Expanded into TypeScript, Tailwind, and backend",
    description: "Developed full-stack awareness and began polishing my portfolio.",
  },
  {
    year: "2025",
    title: "Present — Constantly Growing",
    description: "Focused on creative projects, clean code, and meaningful impact.",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">
      {/* Left: Timeline Text */}
      <div className="flex-1">
        <h3 className="text-3xl font-extrabold text-center lg:text-left text-gray-900 dark:text-white mb-14">
          My Developer Journey
        </h3>

        <div className="relative border-l-2 border-fuchsia-500 dark:border-fuchsia-400 pl-6 sm:pl-12 space-y-16">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Dot */}
              <div className="absolute left-[-16px] top-1.5 w-4 h-4 rounded-full bg-fuchsia-500 dark:bg-fuchsia-400 ring-4 ring-white dark:ring-gray-900 z-10" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                {/* Year */}
                <div className="min-w-[60px] mx-2 text-base font-medium text-gray-700 dark:text-gray-300 sm:text-right">
                  {item.year}
                </div>

                {/* Title + Description */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed font-['DM_Sans']">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0">
        <img
          src={journeyImage}
          alt="A girl developer's journey illustration"
          className="w-full h-auto object-contain"
          data-aos="zoom-in-left"
        />
      </div>
    </div>
  );
};

export default Timeline;
