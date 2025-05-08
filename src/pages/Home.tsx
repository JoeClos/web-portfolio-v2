import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import typingAnimation from "../assets/lottie/typing.json";
import CoreValuesSection from "../components/CoreValuesSection";

const name = import.meta.env.VITE_NAME;

const Home = () => {
  return (
    <>
      <section className="relative w-full overflow-x-hidden min-h-screen pt-14 flex items-center justify-center pb-32 sm:pb-15 bg-gradient-to-b from-white via-fuchsia-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 max-w-7xl w-full ">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Hi, I'm <span className="text-fuchsia-600">{name}</span>
              <br />A developer who blends art, empathy & innovation.
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-8 leading-relaxed font-medium font-['DM_Sans']">

              I'm here to build web experiences that feel human, intuitive,
              accessible, and crafted with care — each line of code is a little
              piece of my story.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-6 py-2 rounded bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 rounded border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="flex-1 max-w-md" data-aos="fade-left">
            <Lottie animationData={typingAnimation} loop={true} />
          </div>
        </div>
      </section>

      {/* Core values section */}
      <CoreValuesSection /></>
  );
};

export default Home;

