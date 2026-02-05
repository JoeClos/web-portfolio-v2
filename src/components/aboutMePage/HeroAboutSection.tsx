import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import profileImg from "../../assets/cover.png";
import coverWebp from "../../assets/cover.webp";
import coverAvif from "../../assets/cover.avif";


const HeroAboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-16 lg:gap-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            {/* Left: Organic Blob Image with Modern Effects */}
            <motion.div
                className="relative z-10 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Animated Background Glow - Organic */}
                <div className="absolute inset-0 w-[320px] h-[380px] sm:w-[360px] sm:h-[420px] bg-gradient-to-br from-fuchsia-600 via-purple-500 to-cyan-400 opacity-20 blur-3xl dark:opacity-30 animate-pulse"
                    style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}
                />
                
                {/* Organic Blob Container */}
                <div className="relative z-20 w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] overflow-hidden group shadow-2xl dark:shadow-[0_0_50px_rgba(217,70,239,0.4)]"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
                    }}
                >
                    <picture>
                        <source srcSet={coverAvif} type="image/avif" />
                        <source srcSet={coverWebp} type="image/webp" />
                        <img
                            src={profileImg}
                            alt="Josephine painting style"
                            width={320}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                        />
                    </picture>
                </div>

                {/* Animated Blob Border Effect */}
                <motion.div 
                    className="absolute inset-0 w-[280px] h-[360px] sm:w-[320px] sm:h-[400px]"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
                    }}
                    animate={{
                        clipPath: [
                            'polygon(50% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                            'polygon(50% 2%, 98% 28%, 98% 72%, 72% 98%, 28% 98%, 2% 72%, 2% 28%)',
                            'polygon(50% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full border-2 border-fuchsia-300/30 dark:border-fuchsia-500/30" />
                </motion.div>
            </motion.div>

            {/* Right: Text Content with Enhanced Typography */}
            <motion.div
                className="relative z-10 text-left max-w-2xl space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Badge */}
                <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/40 dark:to-pink-950/40 border border-fuchsia-200 dark:border-fuchsia-500/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <FaFeatherAlt className="text-fuchsia-600 dark:text-fuchsia-400 text-lg" />
                    <span className="uppercase font-bold tracking-widest text-sm bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:from-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Creative & Empathetic</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    More than <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:from-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">pixels</span>. More than <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">code</span>.
                </motion.h1>

                {/* Description Text */}
                <motion.div 
                    className="space-y-6 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {[
                        "Every great interface has a story to tell - about empathy, about attention to detail, about understanding needs and how to give them shape. That's where I shine.",
                        "My journey is one of creativity and curiosity. I've explored diverse tools and technologies not only to create, but also to understand people: what they want, what makes them happy, and what makes them sad.",
                        "Beyond the browser, you'll find me searching for color palettes in nature, mixing stories with cooking recipes, and sketching out ideas in the margins of life.",
                        "Front-end development is my way of creating, with logic and with emotions."
                    ].map((text, index) => (
                        <motion.p
                            key={index}
                            className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-['DM_Sans'] hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroAboutSection;

