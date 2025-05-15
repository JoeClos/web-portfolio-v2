type Props = {
  categories: string[];
  active: string;
  setActive: (category: string) => void;
};

const ProjectFilter = ({ categories, active, setActive }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
      {categories.map((cat) => (
        <button
          aria-label={`Filter projects by ${cat}`}
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full border text-sm transition font-medium ${active === cat
              ? "bg-fuchsia-600 text-white border-fuchsia-600"
              : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
