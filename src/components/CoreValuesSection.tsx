import { values } from "../data/values";

const CoreValuesSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-fuchsia-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
          <span>What Drives Me</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, iconColor, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/40 shadow-md hover:shadow-fuchsia-200 dark:hover:shadow-fuchsia-800 transition hover:-translate-y-1 text-left"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`text-3xl ${iconColor}`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
