type Props = {
  text: string;
  isExpanded: boolean;
  onToggle: () => void;
};

const ProjectDescription = ({ text, isExpanded, onToggle }: Props) => {
  const shouldClamp = text.length > 100;

  return (
    <div className="mb-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out">
      {shouldClamp ? (
        <>
          {isExpanded ? (
            <>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-['DM_Sans']">{text}</p>
              <button
                aria-label="See less"
                onClick={onToggle}
                className="mt-1 text-xs text-fuchsia-600 hover:underline focus:outline-none"
              >
                See less
              </button>
            </>
          ) : (
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-['DM_Sans']">
              {text.slice(0, 100)}...
              <button
                aria-label="See more"
                onClick={onToggle}
                className="ml-1 text-xs text-fuchsia-600 hover:underline focus:outline-none"
              >
                See more
              </button>
            </p>
          )}
        </>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ProjectDescription;
