import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import profileImg from "../../assets/cover.png";


const HeroAboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:items-start justify-center gap-10 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left: Image */}
      <div className="relative z-10 w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] rounded-[2rem] overflow-hidden shadow-lg dark:shadow-[0_0_25px_#d946ef]">
        <img
          src={profileImg}
          alt="Josephine painting style"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <motion.div
        className="relative z-10 text-left max-w-2xl space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 text-xl">
          <FaFeatherAlt />
          <span className="uppercase font-bold tracking-wide">Creative & Empathetic</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug text-gray-900 dark:text-white">
          More than pixels. More than code.
        </h1>

        <div className="text-lg text-gray-700 dark:text-gray-300 font-['DM_Sans'] space-y-4">
          <p>
            Every great interface tells a story — of empathy, of attention to detail, of the quiet joy in bringing form to function. That's where I thrive.
          </p>
          <p>
            My journey weaves together creativity and curiosity. I've explored diverse tools and technologies not just to build things, but to understand people — what they need, what delights them, what frustrates them.
          </p>
          <p>
            Outside the browser, you'll find me chasing color palettes in nature, stirring stories into recipes, and sketching ideas in the margins of everyday life. I see frontend development as a canvas for connection — and I'm here to paint with both logic and feeling.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAboutSection;

