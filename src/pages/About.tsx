import SectionLayout from "../components/SectionLayout";
import { FaFeatherAlt } from "react-icons/fa";
import profileImg from "../assets/Joe.jpg";
import SkillsSection from "../components/SkillsSection";

const name = import.meta.env.VITE_NAME;

const About = () => {
  return (
    <SectionLayout title={`About ${name}`}>
      <div className="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up">
        {/* Profile image */}
        <img
          src={profileImg}
          alt={`${name}'s profile`}
          className="w-40 h-40 rounded-full object-cover border-4 border-fuchsia-600 shadow-md"
        />

        {/* Text content */}
        <div className="text-lg space-y-4 max-w-prose">
          <div className="flex items-center gap-2 text-fuchsia-600">
            <FaFeatherAlt className="text-xl" />
            <span className="uppercase tracking-wide font-semibold">Creative & Empathetic</span>
          </div>

          <p className="font-['DM_Sans']">
            I'm a frontend developer with a heart for design, detail, and human connection.
            I love crafting intuitive, visually engaging web experiences that feel as good as they look.
          </p>
          <p className="font-['DM_Sans']">
            My journey has brought me through a mix of technologies, tools, and real-world collaboration —
            and I thrive in environments where learning never stops. I'm always curious, always adapting, and
            always pushing for clarity and creativity.
          </p>
          <p className="font-['DM_Sans']">
            Beyond the screen, you'll find me exploring nature trails, experimenting in the kitchen, or diving
            into the latest tech and design trends. My artistic and empathetic spirit keeps me grounded,
            inspired, and committed to helping others grow too — whether through code, creativity, or simply being a thoughtful teammate.
          </p>
        </div>
      </div>
      <SkillsSection />
    </SectionLayout>
  );
};

export default About;
