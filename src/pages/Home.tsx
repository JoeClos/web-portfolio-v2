import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import typingAnimation from "../assets/lottie/typing.json";

const name = import.meta.env.VITE_NAME;

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-fuchsia-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 max-w-7xl w-full py-24">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Hi, I'm <span className="text-fuchsia-600">{name}</span>
            <br />A developer who blends art, empathy & innovation.
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
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
  );
};

export default Home;

// import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import typingAnimation from '../assets/lottie/typing.json'; // Replace with your Lottie JSON

// const Home = () => {
//     return (
//         <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-fuchsia-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">

//             {/* Personal Brand Tagline */}
//             <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-900/80 px-6 py-2 rounded-full shadow-md text-center text-sm font-medium tracking-wide text-gray-800 dark:text-white backdrop-blur-sm border border-fuchsia-600">
//                 ✨ Bridging design, emotion & technology — with empathy and code ✨
//             </div>

//             <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 max-w-7xl w-full py-24">
//                 {/* Text Content */}
//                 <div className="flex-1 text-center md:text-left" data-aos="fade-right">
//                     <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
//                         Hi, I'm <span className="text-fuchsia-600">Josephine</span><br />
//                         A developer who blends art, empathy & innovation.
//                     </h1>
//                     <p className="typing-effect text-lg text-fuchsia-600 font-[Pacifico] mt-2 animate-typing whitespace-nowrap overflow-hidden border-r-2 border-fuchsia-600 max-w-xs mx-auto md:mx-0">
//                         Developer. Empath. Creator.
//                     </p>
//                     <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mt-6 mb-8 leading-relaxed">
//                         I'm here to build web experiences that feel human. Intuitive, accessible, and crafted with care — each line of code is a little piece of my story.
//                     </p>
//                     <div className="flex gap-4 justify-center md:justify-start">
//                         <Link
//                             to="/projects"
//                             className="px-6 py-2 rounded bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition"
//                         >
//                             Explore Projects
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="px-6 py-2 rounded border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition"
//                         >
//                             Let’s Connect
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Lottie Animation */}
//                 <div className="flex-1 max-w-md" data-aos="fade-left">
//                     <Lottie animationData={typingAnimation} loop={true} />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Home;

// import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import typingAnimation from '../assets/lottie/typing.json';

// const Home = () => {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-fuchsia-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">

//       {/* Decorative Soft Wave SVG Shape */}
//       <svg viewBox="0 0 1440 320" className="w-full h-32 absolute top-0 left-0 z-10" preserveAspectRatio="none">
//         <path
//           fill="#D946EF"
//           fillOpacity="1"
//           d="M0,160L60,154.7C120,149,240,139,360,133.3C480,128,600,128,720,128C840,128,960,128,1080,122.7C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
//         />
//       </svg>

//       <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 max-w-7xl w-full py-24">
//         {/* Text Content */}
//         <div className="flex-1 text-center md:text-left" data-aos="fade-right">
//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
//             Hi, I'm <span className="text-fuchsia-600">Josephine</span><br />
//             A developer who blends art, empathy & innovation.
//           </h1>
//           <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mt-6 mb-8 leading-relaxed">
//             I’m here to build web experiences that feel human. Intuitive, accessible, and crafted with care — each line of code is a little piece of my story.
//           </p>
//           <div className="flex gap-4 justify-center md:justify-start">
//             <Link
//               to="/projects"
//               className="px-6 py-2 rounded bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition"
//             >
//               Explore Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="px-6 py-2 rounded border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition"
//             >
//               Let’s Connect
//             </Link>
//           </div>
//         </div>

//         {/* Lottie Animation */}
//         <div className="flex-1 max-w-md" data-aos="fade-left">
//           <Lottie animationData={typingAnimation} loop={true} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
